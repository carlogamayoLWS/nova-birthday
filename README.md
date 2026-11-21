# nova-birthday ✨

A mobile-first, animated birthday website for **Nova Grace Palmes**, made with love by **John Carlo Gamayo**.
It is a static site (plain HTML, CSS, and JavaScript, no build step), so it works on GitHub Pages as-is.

```
index.html              ← the whole single-page site
css/style.css           ← design system + all styles (mobile first)
js/main.js              ← CONFIG (top of file), site text, and all interactions
book/maybe-you-never-asked.pdf   ← the book shown as the realistic flipbook
images/                 ← drop photos & screenshots here
audio/                  ← drop the song here
```

## 1. Edit the settings (CONFIG)

Open `js/main.js`. The very first thing in the file is the `CONFIG` object:

```js
const CONFIG = {
  PASSCODE: "01242025",                 // lock-screen code (MMDDYYYY) = January 24, 2025
  MY_EMAIL: "your-email@example.com",   // ⚠️ your email, used by "Send to John Carlo"
  ...
  GALLERY_CAPTIONS: ["", "", ...],      // optional captions for photo-01 … photo-12
};
```

- The opening always plays a confetti burst when she enters (there is no countdown).
- **PASSCODE**: the 8-digit code for the lock screen.
- **MY_EMAIL**: the address her question is sent to (it opens her mail app with the subject "A question for you ✨").
- **GALLERY_CAPTIONS**: captions for the 12 polaroids. Empty ones show "Add a caption", and she can also tap a caption to write her own (saved on her device).

- **PAGE_TURN_SOUND**: `true`/`false` for the soft paper sound when a book page turns.

The longer text on the site (timeline, the 19 question cards, the 8 reasons, the Open when letters, the verses, the song lyrics, and the promises) is in the `CONTENT` object right below `CONFIG`. The rest of the text is in `index.html`.

## 2. Where to put your files

Use these exact file names. Anything missing shows a soft purple placeholder frame with a star, never a broken image.

| File | Used in |
|---|---|
| `book/maybe-you-never-asked.pdf` | Section 5, the flipbook (already included) |
| `images/photo-01.jpg` … `images/photo-12.jpg` | Our little moments (gallery). photo-01 to photo-05 also fill the photo slots in the Our Story timeline |
| `images/nova-portrait.jpg` | Optional portrait in the hero (arch frame behind "MY PALAGI"; portrait photo works best) |
| `images/screenshot-streak.png` | Our Story timeline: "Day 10 of our streak · February 3, 2025" |
| `images/screenshot-message.png` | Our Story timeline: "One of your messages · January 30, 2025" |
| `audio/good-evening-love.mp3` | The song (music button and the Our Song player) |

Photos can be any size; they are cropped to fit. Square-ish photos look best in the polaroids. To use a different book, replace the PDF with one of the same name (any page count works).

## 3. Run it locally

The book is rendered with PDF.js, which **does not work when you double-click `index.html`** (browsers block `file://` loading). Start a tiny local server in this folder instead:

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
- PDF.js 3.11.174 (renders each book page)
- StPageFlip (`page-flip` 2.0.7) for the realistic page turns, with a custom 3D CSS page-turn fallback if it fails to load
- Google Fonts: Anton (display), Cormorant Garamond (serif), Great Vibes (script accent), Inter, Caveat

The hero title ("Happy Birthday, My Palagi") lives in `index.html` inside `#hero`.

Note for editing CSS: never give `.flip-holder .page` / `.stf__item` a `position` other than absolute — StPageFlip positions pages itself while turning, and overriding it makes pages fall out of the spread mid-flip.

All libraries load from CDNs with pinned versions. The site respects `prefers-reduced-motion`, uses `100dvh` and safe-area insets, and has a floating bottom nav on phones and a top bar on desktop.
