# -*- coding: utf-8 -*-
"""
把 output/pdf/ 下的 A4 样张 PDF 渲染成小红书可直接使用的封面/配图 PNG。
用法: .venv/Scripts/python.exe scripts/pdf-to-cover.py
输出: output/redbook/  （150dpi ≈ 1240x1754，竖版直接可发）
"""
import os
import sys

import pymupdf

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "output", "pdf")
DST = os.path.join(ROOT, "output", "redbook")

DPI = 150
MAX_PAGES = 2  # 首页（卷面）+ 第二页（续页/答案页）


def main() -> int:
    os.makedirs(DST, exist_ok=True)
    pdfs = sorted(f for f in os.listdir(SRC) if f.lower().endswith(".pdf"))
    if not pdfs:
        print("未找到 PDF 样张")
        return 1

    for name in pdfs:
        doc = pymupdf.open(os.path.join(SRC, name))
        stem = os.path.splitext(name)[0]
        pages = min(len(doc), MAX_PAGES)
        for i in range(pages):
            page = doc.load_page(i)
            pix = page.get_pixmap(dpi=DPI)
            suffix = "" if pages == 1 else f"-p{i + 1}"
            out = os.path.join(DST, f"{stem}{suffix}.png")
            pix.save(out)
            print(f"{name} p{i + 1}/{len(doc)} -> {os.path.basename(out)}  {pix.width}x{pix.height}")
        doc.close()

    print(f"\n完成，输出目录: {DST}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
