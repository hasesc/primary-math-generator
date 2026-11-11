from pathlib import Path
import re
import pdfplumber
from pypdf import PdfWriter

cases = [('oral',40),('vertical-decimal',20),('vertical-multiply',20),('vertical-divide',20),('unit-number',40),('unit-chart',20),('unit-grid',6),('unit-solid',6),('unit-circle',6),('unit-area',6),('unit-measure',20)]
writer = PdfWriter()
for name, count in cases:
    path = Path('output/pdf') / f'{name}.pdf'
    with pdfplumber.open(path) as pdf:
        before, after = [], []
        answer = False
        for page in pdf.pages:
            assert abs(page.width - 595.28) < 1 and abs(page.height - 841.89) < 1
            text = page.extract_text() or ''
            assert text.strip(), f'{name}: blank page'
            assert '实时生成整卷' not in text and '重新配置' not in text
            if '参考答案' in text:
                assert not answer
                answer = True
                assert re.match(r'^(?:REFERENCE ANSWERS\s*)?参考答案', text.lstrip()), f'{name}: answer page not separate'
            target = after if answer else before
            target.extend(map(int,re.findall(r'(?<![\d.])(\d+)\.\s',text)))
            for word in page.extract_words():
                assert word['x0'] >= 35 and word['x1'] <= page.width - 35, f'{name}: horizontal overflow'
                assert word['top'] >= 34 and word['bottom'] <= page.height - 12, f'{name}: vertical overflow'
        assert sorted(before) == list(range(1,count+1)), (name,'question numbers',before)
        assert sorted(after) == list(range(1,count+1)), (name,'answer numbers',after)
        print(f'{name}: {len(pdf.pages)} A4 pages, {count} questions and answers, no overflow')
    writer.append(str(path), outline_item=name)
writer.write('output/pdf/print-review-samples.pdf')
print('Combined sample PDF:',len(writer.pages),'pages')
