#!/usr/bin/env python3
"""Pre-render the book PDF into WebP page images for the site's flipbook.

Usage (from the repo root):  python3 tools/render_book.py
Needs: pdftoppm (poppler-utils) and Pillow (pip install pillow).

Writes book/pages/pNN-900.webp (mobile / 1x) and book/pages/pNN-1400.webp
(desktop / retina). If the page count changes, update CONFIG.BOOK_PAGES in js/main.js.
"""
import glob, os, subprocess, sys, tempfile
from PIL import Image

PDF = "book/maybe-you-never-asked.pdf"
OUT = "book/pages"
SIZES = (900, 1400)   # page height in px
QUALITY = 80

os.makedirs(OUT, exist_ok=True)
with tempfile.TemporaryDirectory() as tmp:
    for h in SIZES:
        subprocess.run(["pdftoppm", "-png", "-scale-to-y", str(h), "-scale-to-x", "-1", PDF, f"{tmp}/s{h}"], check=True)
        files = sorted(glob.glob(f"{tmp}/s{h}-*.png"))
        for f in files:
            n = int(f.rsplit("-", 1)[1].split(".")[0])
            Image.open(f).convert("RGB").save(f"{OUT}/p{n:02d}-{h}.webp", "WEBP", quality=QUALITY, method=6)
        print(f"{h}px: {len(files)} pages")
