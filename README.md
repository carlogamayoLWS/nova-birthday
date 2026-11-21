# nova-birthday ✨

A mobile-first, animated birthday website for **Nova Grace Palmes**, made with love by **John Carlo Gamayo**.
It is a static site (plain HTML, CSS, and JavaScript, no build step), so it works on GitHub Pages as-is.

```
index.html              ← the whole single-page site
css/style.css           ← design system + all styles (mobile first)
js/main.js              ← CONFIG (top of file), site text, and all interactions
book/maybe-you-never-asked.pdf   ← the original book (source of the page images)
book/pages/             ← the book pages as images (pNN-900.webp / pNN-1400.webp), made by tools/render_book.py
videos/                 ← gallery videos + their poster images
images/                 ← drop photos & screenshots here
audio/                  ← drop the song here
```

## 1. Edit the settings (CONFIG)

Open `js/main.js`. The very first thing in the file is the `CONFIG` object:

```js
const CONFIG = {
  PASSCODE: "01242025",                 // lock-screen code (MMDDYYYY) = January 24, 2025
  ...
  GALLERY: [ { type: "photo", src: "images/photo-01.webp", thumb: "images/photo-01-thumb.webp" }, { type: "video", src: "videos/video-01.mp4", ... }, ... ],
};
```

- The opening always plays a confetti burst when she enters (there is no countdown).
- **PASSCODE**: the 8-digit code for the lock screen.
- **GALLERY**: the items in "Our little moments", in order (no captions). Photos open in a lightbox when tapped. Videos autoplay **muted**, looping and inline (also on iPhone); there is no sound until she taps a video. Tapping a video marked `audio: true` turns its sound on (any other video is muted and the background song pauses while it plays), and tapping again mutes it. Videos without an audio track have `audio: false` and show no speaker icon. Off-screen videos pause to save battery and resume muted when scrolled back into view. To add one, drop `video-09.mp4` (+ a `video-09.jpg` poster) in `videos/` and add a line here.

- **PAGE_TURN_SOUND**: `true`/`false` for the soft paper sound when a book page turns.

The longer text on the site (the 19 question cards, the 8 reasons, the Open when letters, the verses, and the promises) is in the `CONTENT` object right below `CONFIG`. The rest of the text is in `index.html`.

## 2. Where to put your files

Use these exact file names. Anything missing shows a soft purple placeholder frame with a star, never a broken image.

| File | Used in |
|---|---|
| `book/maybe-you-never-asked.pdf` | The original book. The flipbook shows the pre-rendered images in `book/pages/` (see "Changing the book" below) |
| `images/photo-01.webp` + `images/photo-01-thumb.webp` | Our little moments: the photo (small version in the grid, full one in the lightbox) |
| `videos/video-01.mp4` … `videos/video-08.mp4` | Our little moments: the videos (H.264 MP4, portrait). Each has a small poster image `videos/video-NN.webp` shown before it starts. Videos only download when scrolled near |
| `images/nova-portrait.webp` (+ `.png`) | Hero photo of Nova (the WebP is used and preloaded; the PNG is the fallback). Use a **transparent-background PNG cutout** (current one is 433×577) — she stands in front of the big "PALAGI" with a soft glow and shadow, no frame. If the PNG is missing it tries `images/nova-portrait.jpg` (shown the same way); if neither exists, an arch placeholder is shown. Shown at about its natural size (max ~1.3×), so a bigger/taller cutout will look sharper. |
| `audio/maybe-you-never-asked.mp3` | The song "Maybe You Never Asked" (music button and the Our Song player). It is only downloaded when it starts playing |

Gallery items are shown in portrait (9:16) polaroids; other shapes are cropped to fit.

### Changing the book

The site does not read the PDF at runtime (that was slow on phones). Instead each page is a pre-rendered image. After replacing `book/maybe-you-never-asked.pdf`, run this once from the repo folder (needs `pdftoppm` from poppler-utils and Python Pillow):

```bash
python3 tools/render_book.py
```

It writes `book/pages/pNN-900.webp` (phones / normal screens) and `pNN-1400.webp` (retina / big screens). If the page count changed, set `BOOK_PAGES` in `CONFIG`. The site loads the cover first, then the next few pages, then the rest quietly in the background.

## 3. Run it locally

Some features (the book and the gallery) work best from a local server rather than double-clicking `index.html`. Start a tiny local server in this folder:

```bash
# option A (Python, usually already installed)
python3 -m http.server 8000
# then open http://localhost:8000

# option B (Node.js)
npx serve .
```

To test on your phone, connect it to the same Wi-Fi and open `http://<your-computer-ip>:8000`.

## 4. Put it online with GitHub Pages

1. Push this repository to GitHub (it's already here).
2. On GitHub, open the repo → **Settings** → **Pages**.
3. Under **Build and deployment**, choose **Source: Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. After a minute the site is live at `https://<your-username>.github.io/nova-birthday/`.

GitHub Pages for a private repository needs a paid GitHub plan; on the free plan, keep the repo public.
Note: on a public site anyone with the link can see the files. The passcode is a sweet gate, not real security.

## Tech

- GSAP 3.12.5 + ScrollTrigger (scroll animations)
- canvas-confetti 1.9.3
- StPageFlip (`page-flip` 2.0.7) for the realistic page turns (loaded only when the book is near), with a custom 3D CSS page-turn fallback if it fails to load
- Google Fonts: Anton (display), Cormorant Garamond (serif), Great Vibes (script accent), Inter

The hero title ("Happy Birthday, My Palagi") lives in `index.html` inside `#hero`.

Note for editing CSS: never give `.flip-holder .page` / `.stf__item` a `position` other than absolute — StPageFlip positions pages itself while turning, and overriding it makes pages fall out of the spread mid-flip.

All libraries load from CDNs with pinned versions and are deferred so the lock screen is ready quickly. The site respects `prefers-reduced-motion`, uses `100dvh` and safe-area insets, and has a floating bottom nav on phones and a top bar on desktop.
