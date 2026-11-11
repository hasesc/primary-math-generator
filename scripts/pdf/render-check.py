from pathlib import Path
import json, re
import pdfplumber
import pypdfium2 as pdfium
from PIL import Image, ImageDraw

dest = Path('tmp/pdfs/rendered')
dest.mkdir(parents=True, exist_ok=True)
for file in Path('output/pdf').glob('*.pdf'):
    pdf = pdfium.PdfDocument(str(file))
    thumbs = []
    summaries = []
    with pdfplumber.open(file) as document:
        for i, page in enumerate(document.pages):
            text = page.extract_text() or ''
            words = page.extract_words()
            summaries.append({'page':i+1,'text':text[:90], 'bottom':round(max((w['bottom'] for w in words),default=0),1), 'numbers':re.findall(r'(?m)^([0-9]+)\.',text)})
            image = pdf[i].render(scale=1.2).to_pil().convert('RGB')
            image.save(dest / f'{file.stem}-{i+1}.png')
            image.thumbnail((300,425))
            thumb=Image.new('RGB',(310,452),'#eee')
            thumb.paste(image,(5,22))
            ImageDraw.Draw(thumb).text((8,5),f'{file.stem} p{i+1}',fill='black')
            thumbs.append(thumb)
    columns=min(4,len(thumbs))
    sheet=Image.new('RGB',(columns*310,((len(thumbs)+columns-1)//columns)*452),'white')
    for i,thumb in enumerate(thumbs): sheet.paste(thumb,((i%columns)*310,(i//columns)*452))
    sheet.save(dest / f'{file.stem}-contact.png')
    print(file.stem, len(pdf), json.dumps(summaries,ensure_ascii=False))
