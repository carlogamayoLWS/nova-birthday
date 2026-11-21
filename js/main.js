/* =========================================================================
   NOVA GRACE — BIRTHDAY SITE
   =========================================================================
   ✏️  EDIT YOUR SETTINGS HERE  ✏️
   Everything you normally need to change lives in this CONFIG object.
   ========================================================================= */
const CONFIG = {
  // The 8-digit passcode for the lock screen (MMDDYYYY). 01242025 = January 24, 2025.
  PASSCODE: "01242025",

  // Paths (relative, so they work on GitHub Pages)
  // The book is shown from pre-rendered page images (made from book/maybe-you-never-asked.pdf
  // with tools/render_book.py): book/pages/p01-900.webp … p23-1400.webp.
  BOOK_PAGES: 23,
  BOOK_PAGES_DIR: "book/pages",
  SONG: "audio/maybe-you-never-asked.mp3", // the audio tag in index.html uses this file

  // "Our little moments": shown in this order. Videos autoplay muted & looping
  // (they only start downloading when scrolled near);
  // tapping a video with sound (audio: true) unmutes it. The photo opens in a lightbox.
  GALLERY: [
    { type: "photo", src: "images/photo-01.webp", thumb: "images/photo-01-thumb.webp" },
    { type: "video", src: "videos/video-01.mp4", poster: "videos/video-01.webp", audio: false },
    { type: "video", src: "videos/video-02.mp4", poster: "videos/video-02.webp", audio: false },
    { type: "video", src: "videos/video-03.mp4", poster: "videos/video-03.webp", audio: false },
    { type: "video", src: "videos/video-04.mp4", poster: "videos/video-04.webp", audio: true },
    { type: "video", src: "videos/video-05.mp4", poster: "videos/video-05.webp", audio: false },
    { type: "video", src: "videos/video-06.mp4", poster: "videos/video-06.webp", audio: false },
    { type: "video", src: "videos/video-07.mp4", poster: "videos/video-07.webp", audio: false },
    { type: "video", src: "videos/video-08.mp4", poster: "videos/video-08.webp", audio: true },
  ],

  // Soft paper sound when a book page turns (true / false).
  PAGE_TURN_SOUND: true,

  // Remember the unlock for this browser tab session (so a refresh doesn't re-lock).
  REMEMBER_UNLOCK: true,
};

/* ---------------------------- SITE CONTENT ----------------------------- */
const CONTENT = {
  // Section 6 — tap-to-reveal cards
  questions: [
    ["When and where did we meet?", "January 24, 2025, around 2 PM, on TikTok. Out of everyone who saved or hearted my content, you were the one I looked for."],
    ["How did you value me during our frenny season?", "Through our daily updates, I saw how genuine you are. We were so consistent, and so supportive of each other."],
    ["Can I eat that love?", "No, but true love still nourishes you. It helps you grow, understand more, and become a better version of yourself."],
    ["Did you ever fall in love with me before?", "I liked you first. After a month of really knowing you, I knew I had fallen in love. And I would choose you all over again."],
    ["Do you only see me as a friend?", "At first, yes. But I could not hide it anymore. I prayed for the courage to tell you, and after I did, we only grew closer."],
    ["What brought us closer?", "God. Our mornings with His Word became our foundation."],
    ["You know what's beautiful?", "Read the first word. You."],
    ["What if the day comes that you get tired of me?", "Nobody is getting tired. I will buy us energy drinks. And seriously, I will never be tired of you."],
    ["Until when will you choose me?", "For life. Today, tomorrow, and for all the days after that."],
    ["What's your plan for us?", "I will love you until my last breath, build a family with you, and keep growing closer to God together."],
    ["Are you afraid of losing me?", "A little. That is how much you matter to me. And I will keep doing the work."],
    ["What do you pray for when it comes to me?", "That God keeps you safe, gives you strength on tired days, and peace when your mind is heavy, and that He keeps us close to Him and to each other."],
    ["What if I'm not perfect?", "Good, because neither am I. I am not looking for a perfect love. I am looking for a true one."],
    ["What do I mean to you?", "A stranger on TikTok, then my frenny, then the person I love."],
    ["What made you stay?", "Not one big moment, but a lot of small ones."],
    ["What are you most grateful for about us?", "That a simple message found its way to you, that we began with God, and that you did not pull away."],
    ["What do you promise me?", "To choose you on easy days and hard days, to tell the truth, to pray for us, and to keep making you laugh."],
    ["How do you picture us when we're old?", "Still sending updates, still opening His Word together, and still choosing each other every day."],
    ["What do you want me to never forget?", "That you are loved, chosen, not alone, and enough."],
  ],
  // Section 7 — catch the stars
  reasons: [
    "You are genuine. What I see is what I get, and it is beautiful.",
    "You are consistent. You show up, day after day.",
    "You are supportive. You cheer for the people you care about.",
    "You pray for me. Even during my capstone journey, you prayed for me and my group.",
    "You stayed after I told you how I felt. That meant everything.",
    "You made our mornings about God.",
    "You make even small updates feel special.",
    "You are one of the reasons I keep going.",
  ],
  // Section 8 — open when...
  letters: [
    { when: "Open when you're tired", body: "Rest. You do not have to carry everything today. I'm here, and I'm proud of you. We can slow down, breathe, and take it one day at a time, together." },
    { when: "Open when you doubt yourself", body: "You are loved, you are chosen, and you are enough, exactly as you are. Don't let one hard day tell you otherwise." },
    { when: "Open when you miss me", body: "Good evening, love. I'm right here. Send me an update, I would love to hear about your day." },
    { when: "Open when you can't sleep", body: "Let it go for tonight. Pray, breathe, and leave the rest to Him. Tomorrow will be kind to you." },
    { when: "Open when you're happy", body: "Then I'm happy too! Tell me everything. I want to celebrate with you." },
    { when: "Open when you need a verse", body: "The LORD bless thee, and keep thee: The LORD make his face shine upon thee, and be gracious unto thee: The LORD lift up his countenance upon thee, and give thee peace. (Numbers 6:24-26, KJV)" },
  ],
  // Section 9 — verses (KJV)
  verses: [
    { text: "And if one prevail against him, two shall withstand him; and a threefold cord is not quickly broken.", ref: "Ecclesiastes 4:12 KJV", note: "Two of us, with Him in the middle." },
    { text: "Commit thy works unto the LORD, and thy thoughts shall be established.", ref: "Proverbs 16:3 KJV", note: "Every plan starts with Him." },
    { text: "In every thing give thanks: for this is the will of God in Christ Jesus concerning you.", ref: "1 Thessalonians 5:18 KJV", note: "And so, in every thing, I thank Him for you." },
    { text: "The LORD bless thee, and keep thee: The LORD make his face shine upon thee, and be gracious unto thee: The LORD lift up his countenance upon thee, and give thee peace.", ref: "Numbers 6:24-26 KJV", note: "My birthday prayer for you." },
  ],
  promises: [
    "I promise to choose you on the easy days and on the hard ones.",
    "I promise to tell you the truth, even when it is uncomfortable.",
    "I promise to be patient with you when you feel tired or confused.",
    "I promise to pray for you, and for us.",
    "I promise to keep God at the center of everything we build.",
    "I promise to keep showing up, keep listening, and keep making you laugh.",
    "And I promise to love you until my last breath.",
  ],
};

/* =========================================================================
   APP
   ========================================================================= */
(() => {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGSAP = typeof window.gsap !== "undefined";
  const hasST = hasGSAP && typeof window.ScrollTrigger !== "undefined";
  if (hasST) gsap.registerPlugin(ScrollTrigger);
  const STAR = '<svg viewBox="0 0 100 100" aria-hidden="true"><use href="#i-star4"/></svg>';
  const PALETTE = ["#6D4AFF", "#8B6BE8", "#C9B8F5", "#141218", "#E8B65C", "#EFE8FF"];
  const isDesktop = () => window.matchMedia("(min-width: 900px)").matches;
  if (!reduceMotion && hasGSAP) document.documentElement.classList.add("js-motion");

  /* --------------------------- confetti helper -------------------------- */
  function fireConfetti(kind = "burst") {
    if (typeof window.confetti !== "function") return;
    const base = { colors: PALETTE, disableForReducedMotion: true, zIndex: 90 };
    if (kind === "burst") {
      confetti({ ...base, particleCount: 140, spread: 100, startVelocity: 48, origin: { y: 0.55 }, scalar: 1 });
      setTimeout(() => confetti({ ...base, particleCount: 60, angle: 60, spread: 70, origin: { x: 0, y: 0.7 } }), 250);
      setTimeout(() => confetti({ ...base, particleCount: 60, angle: 120, spread: 70, origin: { x: 1, y: 0.7 } }), 400);
    } else if (kind === "wish") {
      const end = Date.now() + 1600;
      (function frame() {
        confetti({ ...base, particleCount: 6, angle: 60, spread: 65, origin: { x: 0, y: 0.75 } });
        confetti({ ...base, particleCount: 6, angle: 120, spread: 65, origin: { x: 1, y: 0.75 } });
        if (Date.now() < end) requestAnimationFrame(frame);
      })();
      confetti({ ...base, particleCount: 200, spread: 160, startVelocity: 55, origin: { y: 0.5 } });
      confetti({ ...base, particleCount: 70, spread: 360, startVelocity: 30, shapes: ["star"], colors: ["#6D4AFF", "#E8B65C", "#C9B8F5"], scalar: 1.4, origin: { y: 0.45 } });
    }
  }

  /* ===================== LIGHT SPARKLE BACKGROUND ====================== */
  // Delicate 4-point sparkles + dots on the off-white page, with slow drift,
  // scroll parallax and an occasional soft violet shooting streak.
  const Starfield = (() => {
    const cv = $("#starfield");
    const ctx = cv.getContext("2d");
    let W = 0, H = 0, dpr = 1, stars = [], shooters = [], t0 = performance.now(), revealAt = -1, running = true, nextShoot = 5000;
    const COLORS = ["109,74,255", "139,107,232", "20,18,24", "232,182,92"];
    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth; H = window.innerHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(Math.round((W * H) / (W < 700 ? 9000 : 12000)), 140);
      stars = Array.from({ length: n }, () => {
        const sparkle = Math.random() < 0.22;
        return {
          x: Math.random() * W, y: Math.random() * H * 1.5,
          r: sparkle ? 2.5 + Math.random() * 3.5 : 0.5 + Math.random() * 0.9,
          sparkle, a: sparkle ? 0.25 + Math.random() * 0.35 : 0.12 + Math.random() * 0.25,
          tw: 0.5 + Math.random() * 1.8, ph: Math.random() * 6.28, d: 0.15 + Math.random() * 0.85,
          c: COLORS[Math.random() < 0.55 ? 0 : Math.random() < 0.6 ? 1 : Math.random() < 0.7 ? 2 : 3],
          delay: Math.random() * 2400,
        };
      });
      if (reduceMotion) draw(performance.now());
    }
    function star4(x, y, r, alpha, c) {
      ctx.fillStyle = `rgba(${c},${alpha})`;
      ctx.beginPath();
      ctx.moveTo(x, y - r);
      ctx.quadraticCurveTo(x, y, x + r, y); ctx.quadraticCurveTo(x, y, x, y + r);
      ctx.quadraticCurveTo(x, y, x - r, y); ctx.quadraticCurveTo(x, y, x, y - r);
      ctx.fill();
    }
    function shoot() {
      const fromLeft = Math.random() < 0.5;
      shooters.push({ x: fromLeft ? Math.random() * W * 0.4 : W * 0.6 + Math.random() * W * 0.4, y: Math.random() * H * 0.35, vx: (fromLeft ? 1 : -1) * (6 + Math.random() * 3), vy: 2.4 + Math.random() * 1.6, life: 0, max: 70 + Math.random() * 30 });
    }
    function draw(now) {
      const t = now - t0;
      ctx.clearRect(0, 0, W, H);
      const sy = window.scrollY || 0, Hx = H * 1.5;
      for (const s of stars) {
        let vis = 1;
        if (revealAt >= 0) { const k = (now - revealAt - s.delay) / 700; vis = k <= 0 ? 0 : Math.min(1, k); if (vis === 0) continue; }
        let y = (s.y - sy * s.d * 0.1 - (reduceMotion ? 0 : t * 0.003 * s.d)) % Hx; if (y < 0) y += Hx;
        if (y > H + 8) continue;
        const tw = reduceMotion ? 1 : 0.5 + 0.5 * Math.sin(t * 0.001 * s.tw + s.ph);
        const alpha = s.a * tw * vis;
        if (s.sparkle) star4(s.x, y, s.r * (0.75 + 0.25 * tw), alpha, s.c);
        else { ctx.beginPath(); ctx.fillStyle = `rgba(${s.c},${alpha})`; ctx.arc(s.x, y, s.r, 0, 6.283); ctx.fill(); }
      }
      if (!reduceMotion) {
        if (t > nextShoot) { shoot(); nextShoot = t + 9000 + Math.random() * 12000; }
        shooters = shooters.filter((m) => m.life < m.max);
        for (const m of shooters) {
          m.life++; m.x += m.vx; m.y += m.vy;
          const fade = Math.sin((m.life / m.max) * Math.PI) * 0.55;
          const g = ctx.createLinearGradient(m.x, m.y, m.x - m.vx * 14, m.y - m.vy * 14);
          g.addColorStop(0, `rgba(109,74,255,${fade})`); g.addColorStop(1, "rgba(109,74,255,0)");
          ctx.strokeStyle = g; ctx.lineWidth = 1.4; ctx.lineCap = "round";
          ctx.beginPath(); ctx.moveTo(m.x, m.y); ctx.lineTo(m.x - m.vx * 14, m.y - m.vy * 14); ctx.stroke();
        }
      }
    }
    function loop(now) { if (running) draw(now); requestAnimationFrame(loop); }
    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", () => { running = !document.hidden; });
    resize();
    if (!reduceMotion) requestAnimationFrame(loop);
    else window.addEventListener("scroll", () => draw(performance.now()), { passive: true });
    return {
      revealOneByOne() { if (reduceMotion) return; revealAt = performance.now(); setTimeout(() => (revealAt = -1), 4000); },
      shoot() { if (!reduceMotion) shoot(); },
    };
  })();

  /* ============================ ASSET LOADER ============================ */
  function initAsset(el) {
    const src = el.dataset.src;
    if (!el.querySelector(".ph")) {
      el.insertAdjacentHTML("beforeend", `<div class="ph">${STAR}</div>`);
    }
    // data-src is tried first, then any comma-separated data-fallback URLs
    // (e.g. the hero tries nova-portrait.png, then nova-portrait.jpg).
    const queue = [src, ...(el.dataset.fallback || "").split(",").map((u) => u.trim()).filter(Boolean)];
    const hero = el.closest("#hero");
    const img = new Image();
    img.alt = el.dataset.alt || "";
    img.decoding = "async";
    img.loading = hero ? "eager" : "lazy";
    img.onload = () => {
      el.classList.add("has-img"); el.prepend(img);
      if (hero) hero.classList.add("has-photo");
      requestAnimationFrame(() => img.classList.add("loaded"));
    };
    img.onerror = () => { queue.shift(); if (queue.length) img.src = queue[0]; else el.classList.add("missing"); };
    img.src = queue[0];
  }

  /* =============================== LOCK ================================= */
  const Lock = (() => {
    const lock = $("#lock"), slots = $$("#codeDisplay .code-group span"), hint = $("#lockHint"), display = $("#codeDisplay");
    let code = "", busy = false;
    function paint() { slots.forEach((s, i) => { s.textContent = code[i] || ""; s.classList.toggle("filled", i < code.length); }); }
    function press(k) {
      if (busy) return;
      if (k === "back") code = code.slice(0, -1);
      else if (k === "clear") code = "";
      else if (/^\d$/.test(k) && code.length < 8) code += k;
      paint();
      if (code.length === 8) { busy = true; setTimeout(check, 220); }
    }
    function check() {
      if (code === CONFIG.PASSCODE) { open(true); return; }
      hint.textContent = "Think about our first message. ✨";
      display.classList.remove("shake"); void display.offsetWidth; display.classList.add("shake");
      if (navigator.vibrate) navigator.vibrate([30, 40, 30]);
      setTimeout(() => { code = ""; paint(); busy = false; display.classList.remove("shake"); }, 600);
    }
    function open(animated) {
      if (CONFIG.REMEMBER_UNLOCK) try { sessionStorage.setItem("nova-unlocked", "1"); } catch (e) {}
      hint.textContent = "";
      if (animated) {
        lock.classList.add("opening");
        if (typeof window.confetti === "function") confetti({ particleCount: 90, spread: 360, startVelocity: 28, shapes: ["star"], colors: ["#6D4AFF", "#E8B65C", "#C9B8F5"], scalar: 1.1, origin: { y: 0.4 }, disableForReducedMotion: true, zIndex: 101 });
        setTimeout(() => { lock.hidden = true; }, 1300);
        setTimeout(() => App.enter(true), 650);
      } else { lock.hidden = true; App.enter(false); }
    }
    $("#keypad").addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) press(b.dataset.k); });
    document.addEventListener("keydown", (e) => {
      if (lock.hidden) return;
      if (/^\d$/.test(e.key)) press(e.key); else if (e.key === "Backspace") press("back"); else if (e.key === "Escape") press("clear");
      const b = $(`#keypad [data-k="${/^\d$/.test(e.key) ? e.key : e.key === "Backspace" ? "back" : "-"}"]`);
      if (b) { b.classList.add("pressed"); setTimeout(() => b.classList.remove("pressed"), 140); }
    });
    return {
      init() {
        let remembered = false;
        try { remembered = CONFIG.REMEMBER_UNLOCK && sessionStorage.getItem("nova-unlocked") === "1"; } catch (e) {}
        if (remembered) open(false);
      },
    };
  })();

  /* =============================== AUDIO ================================ */
  const Audio = (() => {
    const a = $("#songAudio"), btn = $("#musicBtn"), play = $("#playBtn"), vinyl = $("#vinyl");
    const fill = $("#progressFill"), bar = $("#progress"), tc = $("#tCur"), td = $("#tDur");
    let missing = false;
    const fmt = (s) => (isFinite(s) ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}` : "--:--");
    function sync() {
      const on = !a.paused && !missing;
      btn.classList.toggle("playing", on); btn.setAttribute("aria-pressed", String(on)); btn.setAttribute("aria-label", on ? "Mute music" : "Play music");
      play.classList.toggle("playing", on); play.setAttribute("aria-label", on ? "Pause song" : "Play song");
      vinyl.classList.toggle("spinning", on);
    }
    function markMissing() { missing = true; btn.classList.add("no-audio"); play.classList.add("no-audio"); sync(); }
    a.addEventListener("error", markMissing);
    a.addEventListener("play", sync); a.addEventListener("pause", sync);
    a.addEventListener("loadedmetadata", () => (td.textContent = fmt(a.duration)));
    a.addEventListener("timeupdate", () => { const p = a.duration ? (a.currentTime / a.duration) * 100 : 0; fill.style.width = p + "%"; bar.setAttribute("aria-valuenow", Math.round(p)); tc.textContent = fmt(a.currentTime); });
    function toggle() {
      if (missing) { btn.animate?.([{ transform: "translateX(0)" }, { transform: "translateX(-4px)" }, { transform: "translateX(4px)" }, { transform: "translateX(0)" }], { duration: 300 }); return; }
      if (a.paused) a.play().catch(() => {}); else a.pause();
    }
    btn.addEventListener("click", toggle); play.addEventListener("click", toggle);
    function seek(e) { if (!a.duration) return; const r = bar.getBoundingClientRect(); const x = Math.min(Math.max((e.clientX - r.left) / r.width, 0), 1); a.currentTime = x * a.duration; }
    bar.addEventListener("pointerdown", (e) => { seek(e); bar.setPointerCapture(e.pointerId); bar.onpointermove = seek; });
    bar.addEventListener("pointerup", () => (bar.onpointermove = null));
    bar.addEventListener("keydown", (e) => { if (!a.duration) return; if (e.key === "ArrowRight") a.currentTime += 5; if (e.key === "ArrowLeft") a.currentTime -= 5; });
    return { tryAutoplay() { if (!missing) a.play().catch(() => {}); } };
  })();

  /* ================================ HERO ================================ */
  function splitHeroName() {
    const el = $(".hero-name");
    el.innerHTML = el.textContent.split("").map((c) => `<span class="ch">${c}</span>`).join("");
  }
  function openingAnimation(animated) {
    const after = () => fireConfetti("burst"); // always celebrate on entry
    if (!hasGSAP || reduceMotion || !animated) { setTimeout(after, 300); return; }
    Starfield.revealOneByOne();
    const tl = gsap.timeline({ delay: 0.15, defaults: { ease: "expo.out" } });
    tl.set(".hero-kicker", { opacity: 0, letterSpacing: "0.15em" })
      .set(".hero-name .ch", { opacity: 0, yPercent: 60, rotateX: -70, filter: "blur(12px)", transformOrigin: "50% 100%" })
      .set(".hero-my", { clipPath: "inset(-20% 100% -20% 0)" })
      .set(".hero-portrait", { clipPath: "inset(100% 0% 0% 0%)" })
      .set(".hero-portrait > *", { scale: 1.25 })
      .set(".hero-glow", { opacity: 0, scale: 0.6 })
      .set(".nova", { scale: 0, opacity: 0 })
      .set([".hero-sub", ".scroll-cue"], { opacity: 0, y: 24 })
      .to(".hero-kicker", { opacity: 1, letterSpacing: "0.62em", duration: 2.2, ease: "power3.out" }, 0.5)
      .to(".hero-name .ch", { opacity: 1, yPercent: 0, rotateX: 0, filter: "blur(0px)", duration: 1.6, stagger: 0.07 }, 0.75)
      .to(".hero-portrait", { clipPath: "inset(-10% -10% 0% -10%)", duration: 1.8, ease: "expo.inOut" }, 1.2)
      .to(".hero-portrait > *", { scale: 1, duration: 2.2 }, 1.3)
      .to(".hero-glow", { opacity: 1, scale: 1, duration: 2.2, ease: "power2.out" }, 1.5)
      .to(".hero-my", { clipPath: "inset(-20% -10% -20% 0)", duration: 1.5, ease: "power2.inOut" }, 2.1)
      .to(".nova", { scale: 2.2, opacity: 1, duration: 0.45, ease: "power2.out" }, 2.5)
      .to(".nova", { scale: 1, duration: 1.4, ease: "elastic.out(1, .45)" }, 2.95)
      .to(".hero-sub", { opacity: 1, y: 0, duration: 1.2 }, 2.8)
      .to(".scroll-cue", { opacity: 1, y: 0, duration: 1.2 }, 3.3)
      .add(after, 3.0);
  }

  /* ============================== REVEALS =============================== */
  function splitTitles() {
    $$(".title").forEach((t) => {
      t.innerHTML = t.textContent.trim().split(/\s+/).map((w) => `<span class="w"><span>${w}</span></span>`).join(" ");
    });
  }
  function initScrollFx() {
    if (!hasST || reduceMotion) { $$(".reveal").forEach((e) => (e.style.opacity = 1)); return; }
    $$(".title.reveal").forEach((t) => t.classList.remove("reveal"));
    splitTitles();
    // headings: words rise out of line masks
    $$(".title").forEach((t) => {
      gsap.fromTo(t.querySelectorAll(".w > span"), { yPercent: 115 }, { yPercent: 0, duration: 1.3, stagger: 0.08, ease: "expo.out", scrollTrigger: { trigger: t, start: "top 90%", once: true } });
    });
    // every other block: soft fade-and-rise
    gsap.set(".reveal", { y: 36 });
    ScrollTrigger.batch(".reveal", {
      start: "top 90%", once: true,
      onEnter: (b) => gsap.to(b, { opacity: 1, y: 0, duration: 1.3, stagger: 0.12, ease: "expo.out", overwrite: true }),
    });
    // hero parallax: name drifts slower than the portrait, kicker fades
    const hs = { trigger: "#hero", start: "top top", end: "bottom top", scrub: 0.6 };
    gsap.to(".hero-name", { yPercent: 28, ease: "none", scrollTrigger: hs });
    gsap.to(".hero-my", { yPercent: -60, ease: "none", scrollTrigger: hs });
    gsap.to(".hero-portrait-wrap", { y: -90, ease: "none", scrollTrigger: hs });
    gsap.to(".hero-glow", { scale: 1.25, opacity: 0.4, ease: "none", scrollTrigger: hs });
    gsap.to(".hero-kicker", { y: 60, opacity: 0, ease: "none", scrollTrigger: hs });
    gsap.to(".hero-foot", { y: -40, opacity: 0, ease: "none", scrollTrigger: { ...hs, start: "15% top" } });
    // smooth section transitions: content settles in as each section enters
    gsap.utils.toArray("main .section:not(.hero) > .wrap").forEach((w) => {
      gsap.fromTo(w, { scale: 0.975, transformOrigin: "50% 0%" }, { scale: 1, ease: "none", scrollTrigger: { trigger: w.parentElement, start: "top bottom", end: "top 35%", scrub: 0.6 } });
    });
    // Section 2: the two name cards slide in from opposite sides
    gsap.utils.toArray(".name-card").forEach((c, i) => { c.classList.remove("reveal"); gsap.fromTo(c, { opacity: 0, x: i ? 40 : -40, y: 20 }, { opacity: 1, x: 0, y: 0, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: c, start: "top 88%", once: true } }); });
    gsap.utils.toArray(".polaroid").forEach((p, i) => gsap.from(p, { opacity: 0, y: 60, rotate: 0, duration: 1.2, delay: (i % 4) * 0.08, ease: "expo.out", scrollTrigger: { trigger: p, start: "top 94%", once: true } }));
    gsap.utils.toArray(".qcard").forEach((p, i) => gsap.from(p, { opacity: 0, y: 50, duration: 1.2, delay: (i % 4) * 0.08, ease: "expo.out", scrollTrigger: { trigger: p, start: "top 92%", once: true } }));
    gsap.utils.toArray(".envelope").forEach((p, i) => gsap.from(p, { opacity: 0, y: 40, rotate: i % 2 ? 4 : -4, duration: 0.9, delay: (i % 3) * 0.1, ease: "back.out(1.4)", scrollTrigger: { trigger: p, start: "top 94%", once: true } }));
  }

  /* ================================ NAV ================================= */
  function initNav() {
    const groups = { hero: "hero", name: "hero", letter: "hero", book: "book", questions: "book", reasons: "book", openwhen: "book", verses: "song-section", "song-section": "song-section", gallery: "gallery", promises: "gallery", wish: "wish" };
    const topMap = { hero: "hero", name: "hero", letter: "letter", book: "book", questions: "questions", reasons: "reasons", openwhen: "reasons", verses: "song-section", "song-section": "song-section", gallery: "gallery", promises: "gallery", wish: "wish" };
    const io = new IntersectionObserver((ents) => {
      ents.forEach((en) => {
        if (!en.isIntersecting) return;
        const id = en.target.id;
        $$(".bottomnav a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + groups[id]));
        $$(".topnav a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + topMap[id]));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main .section").forEach((s) => io.observe(s));
  }

  /* ============================ SPARKLE FX ============================== */
  function sparkleAt(el, n = 10) {
    if (reduceMotion) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    for (let i = 0; i < n; i++) {
      const s = document.createElement("span");
      s.className = "sparkle"; s.innerHTML = STAR;
      s.style.left = cx + "px"; s.style.top = cy + "px";
      document.body.appendChild(s);
      const ang = (Math.PI * 2 * i) / n + Math.random() * 0.5, dist = 40 + Math.random() * 50;
      const anim = s.animate([
        { transform: "translate(-50%,-50%) scale(.2)", opacity: 1 },
        { transform: `translate(calc(-50% + ${Math.cos(ang) * dist}px), calc(-50% + ${Math.sin(ang) * dist}px)) scale(${0.6 + Math.random() * 0.6}) rotate(90deg)`, opacity: 0 },
      ], { duration: 700 + Math.random() * 400, easing: "cubic-bezier(.2,.8,.3,1)" });
      anim.onfinish = () => s.remove();
    }
  }

  /* ============================= SECTION 3 ============================== */
  function initLetter() {
    const card = $("#blCard"), seal = $("#blSeal"), paper = $("#blPaper");
    const paras = $$("p", paper);
    seal.addEventListener("click", () => {
      if (card.classList.contains("open")) return;
      card.classList.add("open");
      sparkleAt(seal, 12);
      if (hasGSAP && !reduceMotion) {
        gsap.fromTo(paras, { opacity: 0, y: 14, filter: "blur(4px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, stagger: 0.55, ease: "power2.out", delay: 0.7, onComplete: () => hasST && ScrollTrigger.refresh() });
      } else paras.forEach((p) => (p.style.opacity = 1));
      setTimeout(() => hasST && ScrollTrigger.refresh(), 900);
    });
  }

  /* ============================= SECTION 6 ============================== */
  function initQuestions() {
    const grid = $("#flipGrid"), prog = $("#qProgress"), done = $("#qDone");
    const total = CONTENT.questions.length, opened = new Set();
    grid.innerHTML = CONTENT.questions.map(([q, a], i) => `
      <button type="button" class="qcard" data-i="${i}" aria-pressed="false" aria-label="${q.replace(/"/g, "&quot;")}">
        <span class="qcard-inner">
          <span class="qface qfront"><span class="q-num">${i + 1}</span><span class="q-title">${q}</span><span class="q-star">${STAR}</span></span>
          <span class="qface qback"><span class="q-ans">${a}</span></span>
        </span>
      </button>`).join("");
    grid.addEventListener("click", (e) => {
      const c = e.target.closest(".qcard"); if (!c) return;
      const on = c.classList.toggle("flipped");
      c.setAttribute("aria-pressed", on);
      if (on) sparkleAt(c, 9);
      const i = +c.dataset.i;
      if (!opened.has(i)) {
        opened.add(i);
        prog.innerHTML = `<b>${opened.size}</b> of ${total} opened`;
        if (opened.size === total) {
          done.classList.add("show");
          if (typeof confetti === "function") confetti({ particleCount: 80, spread: 90, shapes: ["star", "circle"], colors: PALETTE, origin: { y: 0.6 }, disableForReducedMotion: true, zIndex: 90 });
          sparkleAt(prog, 14);
        }
      }
    });
  }

  /* ============================= SECTION 7 ============================== */
  function initReasons() {
    const box = $("#skyStars"), card = $("#reasonCard"), txt = $("#reasonText"), doneEl = $("#reasonsDone");
    const pts = [[18, 18], [50, 12], [82, 20], [30, 42], [70, 40], [14, 70], [50, 66], [86, 72]];
    const caught = new Set();
    let hideT = null;
    box.innerHTML = pts.map((p, i) => `<button type="button" class="sky-star" style="left:${p[0]}%;top:${p[1]}%;--d:${(i * 0.7) % 4}s" data-i="${i}" aria-label="Star ${i + 1}">${STAR}</button>`).join("");
    const hide = () => { card.classList.remove("show"); };
    function showCard(text) {
      clearTimeout(hideT);
      txt.textContent = text;
      card.classList.remove("show"); void card.offsetWidth; card.classList.add("show");
      hideT = setTimeout(hide, 4500);
    }
    card.addEventListener("click", () => { clearTimeout(hideT); hide(); });
    box.addEventListener("click", (e) => {
      const b = e.target.closest(".sky-star"); if (!b || b.classList.contains("caught")) return;
      const i = +b.dataset.i;
      sparkleAt(b, 12);
      b.classList.add("caught");
      caught.add(i);
      showCard(CONTENT.reasons[i]);
      if (caught.size === pts.length) {
        setTimeout(() => {
          doneEl.classList.add("show"); Starfield.shoot(); sparkleAt(doneEl, 16);
          if (typeof confetti === "function") { const r = doneEl.getBoundingClientRect(); confetti({ particleCount: 40, spread: 100, startVelocity: 20, shapes: ["star"], colors: ["#6D4AFF", "#E8B65C", "#C9B8F5"], scalar: 0.9, origin: { x: 0.5, y: (r.top + r.height / 2) / innerHeight }, disableForReducedMotion: true, zIndex: 90 }); }
        }, 1200);
      }
    });
  }

  /* ============================= SECTION 8 ============================== */
  function initLetters() {
    const grid = $("#envGrid"), modal = $("#letterModal");
    grid.innerHTML = CONTENT.letters.map((l, i) => `
      <button type="button" class="envelope" data-i="${i}" aria-label="${l.when.replace(/"/g, "&quot;")}">
        <span class="env-body"></span><span class="env-flap"></span><span class="env-pocket"></span>
        <span class="env-seal">${STAR}</span><span class="env-label">${l.when}</span>
      </button>`).join("");
    let lastFocus = null;
    grid.addEventListener("click", (e) => {
      const env = e.target.closest(".envelope"); if (!env) return;
      env.classList.add("opened");
      const l = CONTENT.letters[+env.dataset.i];
      lastFocus = env;
      setTimeout(() => {
        $("#letterTitle").textContent = l.when;
        $("#letterBody").innerHTML = `<p>${l.body}</p>`;
        modal.hidden = false; document.body.style.overflow = "hidden"; $("#letterClose").focus();
      }, reduceMotion ? 0 : 450);
    });
    const close = () => { modal.hidden = true; document.body.style.overflow = ""; lastFocus?.focus({ preventScroll: true }); };
    $("#letterClose").addEventListener("click", close);
    modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) close(); });
  }

  /* ============================= SECTION 9 ============================== */
  function initVerses() {
    const track = $("#verseTrack"), dots = $("#verseDots"), slider = $("#verseSlider");
    const V = CONTENT.verses;
    track.innerHTML = V.map((v, i) => `
      <figure class="verse-slide${i === 0 ? " active" : ""}" aria-hidden="${i !== 0}">
        <blockquote>“${v.text}”</blockquote>
        <figcaption><span class="verse-ref">${v.ref}</span><span class="verse-note">${v.note}</span></figcaption>
      </figure>`).join("");
    dots.innerHTML = V.map((_, i) => `<button type="button" role="tab" aria-label="Verse ${i + 1}" aria-selected="${i === 0}"><i></i></button>`).join("");
    const slides = $$(".verse-slide", track), dbs = $$("button", dots);
    let cur = 0, timer = null, paused = false;
    function size() { track.style.height = Math.max(...slides.map((s) => s.offsetHeight)) + "px"; }
    function go(i) {
      slides[cur].classList.remove("active"); slides[cur].setAttribute("aria-hidden", "true"); dbs[cur].setAttribute("aria-selected", "false");
      cur = (i + V.length) % V.length;
      slides[cur].classList.add("active"); slides[cur].setAttribute("aria-hidden", "false"); dbs[cur].setAttribute("aria-selected", "true");
    }
    function start() { clearInterval(timer); if (!reduceMotion) timer = setInterval(() => { if (!paused && !document.hidden) go(cur + 1); }, 7000); }
    dbs.forEach((b, i) => b.addEventListener("click", () => { go(i); start(); }));
    slider.addEventListener("pointerenter", () => (paused = true)); slider.addEventListener("pointerleave", () => (paused = false));
    let sx = 0;
    slider.addEventListener("touchstart", (e) => (sx = e.touches[0].clientX), { passive: true });
    slider.addEventListener("touchend", (e) => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) { go(cur + (dx < 0 ? 1 : -1)); start(); } }, { passive: true });
    window.addEventListener("resize", size, { passive: true });
    document.fonts?.ready.then(size); size(); start();
  }

  /* =========================== OUR LITTLE MOMENTS ======================= */
  // All videos autoplay muted + looping + inline (iOS-safe). No sound until tapped.
  // Tapping a video with audio unmutes it (muting any other), pausing the background
  // song while it plays with sound; tap again to mute (song resumes). Off-screen
  // videos are paused and re-muted, and resume muted when they scroll back in.
  function initGallery() {
    const grid = $("#galleryGrid"), items = CONFIG.GALLERY || [];
    const SPK_OFF = '<svg class="ic-off" viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4Zm16.6 3 2.1-2.1-1.4-1.4-2.1 2.1-2.1-2.1-1.4 1.4 2.1 2.1-2.1 2.1 1.4 1.4 2.1-2.1 2.1 2.1 1.4-1.4-2.1-2.1Z"/></svg>';
    const SPK_ON = '<svg class="ic-on" viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4Zm12.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4Zm-2.5-8.8v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6Z"/></svg>';
    grid.innerHTML = items.map((it, i) => {
      const rot = (((i * 37) % 9) - 4) * 0.8;
      if (it.type === "video") {
        return `<figure class="polaroid is-video${it.audio ? "" : " silent"}" style="--rot:${rot}deg" data-i="${i}">
          <div class="media"${it.audio ? ` role="button" tabindex="0" aria-pressed="false" aria-label="Turn on sound"` : ""}>
            <video data-src="${it.src}" data-poster="${it.poster || ""}" muted loop playsinline webkit-playsinline preload="none" disablepictureinpicture disableremoteplayback aria-hidden="true"></video>
            ${it.audio ? `<span class="vid-sound" aria-hidden="true">${SPK_OFF}${SPK_ON}</span>` : ""}
          </div></figure>`;
      }
      return `<figure class="polaroid is-photo" style="--rot:${rot}deg" data-i="${i}">
        <div class="media" role="button" tabindex="0" aria-label="Open photo"><img src="${it.thumb || it.src}" alt="" loading="lazy" decoding="async" width="480" height="853"></div></figure>`;
    }).join("");

    const vids = $$("video", grid);
    const song = $("#songAudio");
    let songWasPlaying = false;
    vids.forEach((v) => { v.muted = true; v.defaultMuted = true; v.playsInline = true; });
    const tryPlay = (v) => { const p = v.play(); if (p && p.catch) p.catch(() => {}); };

    function setSound(v, on) {
      const fig = v.closest(".polaroid"), btn = fig.querySelector(".media");
      if (on) {
        vids.forEach((o) => { if (o !== v && !o.muted) setSound(o, false); });
        activate(v); v.muted = false; tryPlay(v);
        if (!song.paused) { songWasPlaying = true; song.pause(); }
      } else {
        v.muted = true;
        if (songWasPlaying && !vids.some((o) => !o.muted)) { songWasPlaying = false; song.play().catch(() => {}); }
      }
      fig.classList.toggle("unmuted", on);
      btn.setAttribute("aria-pressed", String(on)); btn.setAttribute("aria-label", on ? "Mute video" : "Turn on sound");
    }
    // If she starts the background song while a video has sound, mute the video.
    song.addEventListener("play", () => { vids.forEach((o) => { if (!o.muted) { songWasPlaying = false; setSound(o, false); } }); });

    grid.addEventListener("click", (e) => {
      const fig = e.target.closest(".polaroid"); if (!fig) return;
      if (fig.classList.contains("is-photo")) return openPhoto(+fig.dataset.i);
      if (fig.classList.contains("silent")) return;
      const v = fig.querySelector("video"); setSound(v, v.muted);
    });
    grid.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const m = e.target.closest(".media"); if (!m) return; e.preventDefault(); m.click();
    });

    // Lazy: the poster is fetched when the gallery gets close, the video itself only when it
    // is about to be on screen; then it autoplays muted. Off-screen videos pause (and re-mute)
    // and resume muted when visible again.
    const activate = (v) => { if (v.dataset.src) { v.autoplay = true; v.preload = "auto"; v.src = v.dataset.src; v.removeAttribute("data-src"); } };
    const showPoster = (v) => { if (v.dataset.poster) { v.poster = v.dataset.poster; v.removeAttribute("data-poster"); } };
    if ("IntersectionObserver" in window) {
      const near = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { showPoster(en.target); near.unobserve(en.target); } }), { rootMargin: "900px 0px" });
      const io = new IntersectionObserver((ents) => ents.forEach((en) => {
        const v = en.target;
        if (en.isIntersecting) { showPoster(v); activate(v); tryPlay(v); }
        else if (!v.dataset.src) { if (!v.muted) setSound(v, false); v.pause(); }
      }), { rootMargin: "200px 0px" });
      vids.forEach((v) => { near.observe(v); io.observe(v); });
    } else vids.forEach((v) => { showPoster(v); activate(v); tryPlay(v); });
    document.addEventListener("visibilitychange", () => { if (document.hidden) vids.forEach((v) => { if (!v.muted) setSound(v, false); }); });

    // Lightbox (photos only)
    const photos = items.map((it, i) => (it.type === "photo" ? i : -1)).filter((i) => i >= 0);
    const lb = $("#lightbox"), media = $("#lbMedia"), count = $("#lbCount");
    let cur = 0;
    lb.classList.toggle("single", photos.length < 2);
    function show(k) {
      cur = (k + photos.length) % photos.length;
      media.innerHTML = `<img src="${items[photos[cur]].src}" alt="">`;
      count.textContent = `${cur + 1} / ${photos.length}`;
      if (hasGSAP && !reduceMotion) gsap.fromTo(media, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.4 });
    }
    function openPhoto(i) { show(Math.max(0, photos.indexOf(i))); lb.hidden = false; document.body.style.overflow = "hidden"; $("#lbClose").focus(); }
    function close() { lb.hidden = true; document.body.style.overflow = ""; }
    const step = (d) => { if (photos.length > 1) show(cur + d); };
    $("#lbClose").addEventListener("click", close);
    $("#lbPrev").addEventListener("click", () => step(-1));
    $("#lbNext").addEventListener("click", () => step(1));
    lb.addEventListener("click", (e) => { if (e.target === lb || e.target === media) close(); });
    document.addEventListener("keydown", (e) => { if (lb.hidden) return; if (e.key === "Escape") close(); if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1); });
    let sx = 0, sy = 0;
    lb.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
    lb.addEventListener("touchend", (e) => { const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy; if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1); }, { passive: true });
  }

  /* ============================== PROMISES ============================== */
  function initPromises() {
    $("#promiseList").innerHTML = CONTENT.promises.map((p) => `<li class="reveal">${STAR}<span>${p}</span></li>`).join("");
  }

  /* ================================ WISH ================================ */
  function initWish() {
    const star = $("#wishStar"), after = $("#wishAfter"), sky = $("#shooting");
    let holdTimer = null, fired = false;
    function shootingStar() {
      const el = document.createElement("i"); sky.appendChild(el);
      const W = sky.clientWidth, H = sky.clientHeight;
      if (reduceMotion || !el.animate) { el.remove(); return; }
      el.style.left = "0px"; el.style.top = "0px";
      const a = el.animate([
        { transform: `translate(${-200}px, ${H * 0.15}px) rotate(18deg)`, opacity: 0 },
        { opacity: 1, offset: 0.15 },
        { transform: `translate(${W + 200}px, ${H * 0.15 + (W + 400) * Math.tan(18 * Math.PI / 180)}px) rotate(18deg)`, opacity: 0 },
      ], { duration: 1400, easing: "cubic-bezier(.3,.1,.3,1)" });
      a.onfinish = () => el.remove();
    }
    function wish() {
      clearTimeout(holdTimer); star.classList.remove("holding");
      if (fired && after.classList.contains("show") && Date.now() - fired < 1500) return;
      fired = Date.now();
      if (hasGSAP && !reduceMotion) gsap.fromTo(star.querySelector("svg"), { scale: 1.5 }, { scale: 1, duration: 1.2, ease: "elastic.out(1, .4)" });
      shootingStar(); Starfield.shoot();
      fireConfetti("wish");
      setTimeout(() => after.classList.add("show"), 600);
    }
    star.addEventListener("pointerdown", (e) => { e.preventDefault(); star.classList.add("holding"); holdTimer = setTimeout(wish, 1400); });
    star.addEventListener("pointerup", () => { if (star.classList.contains("holding")) wish(); });
    star.addEventListener("pointerleave", () => { clearTimeout(holdTimer); star.classList.remove("holding"); });
    star.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); wish(); } });
    star.addEventListener("contextmenu", (e) => e.preventDefault());
  }

  /* ================================ BOOK ================================ */
  const Book = (() => {
    const stage = $("#bookStage"), closed = $("#bookClosed"), openEl = $("#bookOpen"), holder = $("#flipHolder"), viewport = $("#bookViewport");
    const loading = $("#bookLoading"), loadingText = $("#bookLoadingText"), indicator = $("#pageIndicator");
    const btnPrev = $("#bookPrev"), btnNext = $("#bookNext"), btnFs = $("#bookFs"), arPrev = $("#bookArrowPrev"), arNext = $("#bookArrowNext");
    let total = CONFIG.BOOK_PAGES || 23, pageEls = [], flip = null, mode = null, current = 0, coverDone = false;
    const ASPECT = 648 / 432;
    
    // soft, synthesized page-turn sound (no audio file needed)
    let actx = null;
    function pageSound() {
      if (!CONFIG.PAGE_TURN_SOUND) return;
      try {
        actx = actx || new (window.AudioContext || window.webkitAudioContext)();
        if (actx.state === "suspended") actx.resume();
        const dur = 0.32, n = Math.floor(actx.sampleRate * dur), buf = actx.createBuffer(1, n, actx.sampleRate), d = buf.getChannelData(0);
        for (let i = 0; i < n; i++) { const t = i / n; d[i] = (Math.random() * 2 - 1) * Math.pow(Math.sin(Math.PI * t), 2) * (1 - t * 0.6); }
        const src = actx.createBufferSource(); src.buffer = buf;
        const bp = actx.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 2400; bp.Q.value = 0.7;
        const g = actx.createGain(); g.gain.value = 0.07;
        src.connect(bp).connect(g).connect(actx.destination); src.start();
      } catch (e) {}
    }


    /* ---------- page images (pre-rendered, no PDF.js at runtime) ---------- */
    // 900px-tall set for 1x screens, 1400px set when a page is shown taller than ~1000 device px.
    const DIR = CONFIG.BOOK_PAGES_DIR || "book/pages";
    const wantRes = (cssH) => (cssH * Math.min(window.devicePixelRatio || 1, 3) > 1000 ? 1400 : 900);
    const estPageH = () => (isDesktop() ? Math.min(window.innerHeight * 0.72, 900) : Math.min(Math.min(window.innerWidth, 420) * ASPECT, window.innerHeight * 0.66));
    let res = wantRes(estPageH());
    const pageUrl = (i) => `${DIR}/p${String(i + 1).padStart(2, "0")}-${res}.webp`;
    let loaded = [], requested = [], version = 0;
    function resetPages() {
      loaded = new Array(total).fill(false); requested = new Array(total).fill(false);
      pageEls = Array.from({ length: total }, (_, i) => {
        const d = document.createElement("div"); d.className = "page"; d.dataset.density = i === 0 || i === total - 1 ? "hard" : "soft"; d.dataset.i = i;
        d.innerHTML = `<img alt="Page ${i + 1} of ${total}" draggable="false" decoding="async" width="600" height="900" />`;
        return d;
      });
    }
    resetPages();
    function applySrc(i, url) {
      pageEls[i].querySelector("img").setAttribute("src", url);
      holder.querySelectorAll(`.page[data-i="${i}"] img`).forEach((im) => { if (im.getAttribute("src") !== url) im.src = url; });
      version++;
    }
    function request(i, prio) {
      if (i < 0 || i >= total || requested[i]) return Promise.resolve();
      requested[i] = true;
      const url = pageUrl(i), r0 = res;
      return new Promise((done) => {
        const im = new Image(); im.decoding = "async"; if (prio) im.fetchPriority = prio;
        im.onload = im.onerror = () => { if (r0 === res) { loaded[i] = !!im.naturalWidth; applySrc(i, url); } done(); };
        im.src = url;
      });
    }
    // pages around the current one first, then the rest quietly in the background
    function ensureAround(c) { for (let k = c - 2; k <= c + 5; k++) request(k, k <= c + 2 ? "high" : "auto"); }
    const idle = () => new Promise((r) => (window.requestIdleCallback ? requestIdleCallback(() => r(), { timeout: 800 }) : setTimeout(r, 50)));
    let bgRunning = false;
    async function backgroundFill() {
      if (bgRunning) return; bgRunning = true;
      // 3 at a time: on slow mobile networks the round-trip, not the size, is the bottleneck
      const worker = async () => { for (let i = 0; i < total; i++) { if (!requested[i]) { await idle(); await request(i, "low"); } } };
      await Promise.all([worker(), worker(), worker()]);
      bgRunning = false;
    }

    // page-flip (StPageFlip) is only downloaded when the book is about to be used
    let libP = null;
    function loadLib() {
      if (window.St || window.__forceCssBook) return Promise.resolve();
      return libP || (libP = new Promise((done) => {
        const sc = document.createElement("script");
        sc.src = "https://cdn.jsdelivr.net/npm/page-flip@2.0.7/dist/js/page-flip.browser.js"; sc.async = true;
        sc.onload = sc.onerror = () => done(); document.head.appendChild(sc); setTimeout(done, 10000);
      }));
    }

    function loadCover() {
      if (coverDone) return; coverDone = true;
      request(0, "high").then(() => {
        if (loaded[0]) $("#bookCover").innerHTML = `<img src="${pageUrl(0)}" alt="Maybe You Never Asked — book cover" width="600" height="900" />`;
        else $("#bookCover").innerHTML = `<span style="font-family:var(--serif);font-size:1.6rem;text-align:center;padding:20px;color:var(--cream)">Maybe You Never Asked</span>`;
        ensureAround(0); loadLib();
      });
    }

    function computeSize() {
      const desktop = isDesktop();
      const fs = stage.classList.contains("is-fs");
      const spread = desktop || (fs && window.innerWidth > window.innerHeight * 1.1);
      let availW = viewport.clientWidth - (desktop ? 128 : 0);
      if (!desktop && !fs) availW = Math.min(availW, 420);
      let availH = fs ? viewport.clientHeight - 8 : Math.min(window.innerHeight * (desktop ? 0.72 : 0.66), 900);
      let pageW = spread ? availW / 2 : availW;
      let pageH = pageW * ASPECT;
      if (pageH > availH) { pageH = availH; pageW = pageH / ASPECT; }
      return { spread, pageW: Math.floor(pageW), pageH: Math.floor(pageH) };
    }

    function updateUI() {
      const { spread } = mode || {};
      let label;
      if (spread && current > 0) {
        const left = current % 2 === 1 ? current : current - 1;
        const right = Math.min(left + 1, total - 1);
        label = right > left ? `Pages ${left + 1}–${right + 1} of ${total}` : `Page ${left + 1} of ${total}`;
      } else label = `Page ${current + 1} of ${total}`;
      indicator.textContent = label;
      holder.classList.toggle("at-cover", current === 0 || (spread && current >= total - 1 && total % 2 === 0));
      const atStart = current <= 0;
      const atEnd = spread ? current >= total - (total % 2 === 1 ? 2 : 1) : current >= total - 1;
      [btnPrev, arPrev].forEach((b) => (b.disabled = atStart));
      [btnNext, arNext].forEach((b) => (b.disabled = atEnd));
    }

    function destroyFlip() {
      if (flip) {
        try { flip.destroy(); } catch (e) {}
        flip = null;
      }
      if (mode && mode.css) mode.css.destroy();
      holder.innerHTML = "";
    }

    function build() {
      const size = computeSize();
      const r = wantRes(size.pageH);
      if (r > res) { res = r; resetPages(); ensureAround(current); backgroundFill(); }
      // keep page elements alive across rebuilds (StPageFlip.destroy() removes them)
      destroyFlip();
      holder.style.width = (size.spread ? size.pageW * 2 : size.pageW) + "px";
      holder.style.height = size.pageH + "px";
      holder.style.aspectRatio = "auto";
      holder.classList.toggle("spread", size.spread);
      mode = { spread: size.spread };
      const useStPageFlip = window.St && window.St.PageFlip && !window.__forceCssBook;
      if (useStPageFlip) {
        try {
          const root = document.createElement("div"); holder.appendChild(root);
          const els = pageEls.map((p) => p.cloneNode(true));
          els.forEach((e) => root.appendChild(e));
          flip = new St.PageFlip(root, {
            width: size.pageW, height: size.pageH, size: "fixed",
            showCover: true, usePortrait: !size.spread, autoSize: false,
            maxShadowOpacity: 0.55, flippingTime: reduceMotion ? 1 : 850, mobileScrollSupport: false,
            drawShadow: true, startPage: Math.min(current, total - 1), showPageCorners: !reduceMotion,
          });
          flip.loadFromHTML(els);
          flip.on("flip", (e) => { current = e.data; ensureAround(current); updateUI(); pageSound(); });
          flip.on("changeState", (e) => { stage.dataset.flipState = e.data; });
          mode.api = { next: () => flip.flipNext(), prev: () => flip.flipPrev() };
          stage.dataset.engine = "stpageflip";
        } catch (err) {
          console.warn("[book] StPageFlip failed, using CSS fallback", err);
          destroyFlip(); buildCss(size);
        }
      } else buildCss(size);
      loading.classList.add("done");
      updateUI();
    }

    /* ---------- custom 3D CSS page-turn fallback ---------- */
    function buildCss(size) {
      stage.dataset.engine = "css";
      const book = document.createElement("div"); book.className = "css-book"; holder.appendChild(book);
      const spread = size.spread;
      const img = (i) => (i >= 0 && i < total && pageEls[i] && pageEls[i].innerHTML) || "";
      let busy = false;
      // spread layout index: 0 = cover alone (right), then [1,2], [3,4] ...
      const leftOf = (c) => (c === 0 ? -1 : c % 2 === 1 ? c : c - 1);
      function paint() {
        if (spread) {
          const l = leftOf(current), r = l + 1;
          book.innerHTML = `<div class="cb-page ${l < 0 ? "empty" : ""}" style="width:${size.pageW}px">${img(l)}</div><div class="cb-page ${r >= total ? "empty" : ""}" style="width:${size.pageW}px">${img(r)}</div>`;
        } else book.innerHTML = `<div class="cb-page" style="width:${size.pageW}px">${img(current)}</div>`;
      }
      function turn(dir) {
        if (busy) return;
        let target;
        if (spread) { const l = leftOf(current); target = dir > 0 ? l + 2 : l - 2; if (current === 0 && dir > 0) target = 1; if (target <= 0) target = 0; if (target >= total) return; }
        else { target = current + dir; if (target < 0 || target >= total) return; }
        if (target === current) return;
        busy = true;
        const leaf = document.createElement("div"); leaf.className = "cb-leaf"; leaf.style.width = size.pageW + "px";
        const finish = () => { if (!busy) return; current = target; ensureAround(current); paint(); updateUI(); busy = false; };
        pageSound();
        if (reduceMotion) { finish(); return; }
        if (spread) {
          const l = leftOf(current), nl = leftOf(target);
          if (dir > 0) {
            leaf.style.left = "50%"; leaf.style.transformOrigin = "left center";
            leaf.innerHTML = `<div class="face front">${img(l + 1)}</div><div class="face back">${img(nl)}</div>`;
            book.children[1].innerHTML = img(nl + 1); if (nl + 1 >= total) book.children[1].classList.add("empty");
          } else {
            leaf.style.left = `calc(50% - ${size.pageW}px)`; leaf.style.transformOrigin = "right center";
            leaf.innerHTML = `<div class="face front">${img(l)}</div><div class="face back">${img(nl + 1)}</div>`;
            book.children[0].innerHTML = img(nl); book.children[0].classList.toggle("empty", nl < 0);
          }
        } else {
          leaf.style.left = `calc(50% - ${size.pageW / 2}px)`; leaf.style.transformOrigin = "left center";
          if (dir > 0) { leaf.innerHTML = `<div class="face front">${img(current)}</div><div class="face back"></div>`; book.children[0].innerHTML = img(target); }
          else { leaf.innerHTML = `<div class="face front">${img(target)}</div><div class="face back"></div>`; leaf.style.transform = "rotateY(-180deg)"; }
        }
        book.appendChild(leaf);
        void leaf.offsetWidth;
        const to = spread ? (dir > 0 ? "rotateY(-180deg)" : "rotateY(180deg)") : dir > 0 ? "rotateY(-180deg)" : "rotateY(0deg)";
        leaf.style.transform = to;
        leaf.addEventListener("transitionend", finish, { once: true });
        setTimeout(() => { if (busy) finish(); }, 1300);
      }
      let sx = 0;
      book.addEventListener("touchstart", (e) => (sx = e.touches[0].clientX), { passive: true });
      book.addEventListener("touchend", (e) => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) turn(dx < 0 ? 1 : -1); }, { passive: true });
      book.addEventListener("click", (e) => { const r = book.getBoundingClientRect(); turn(e.clientX > r.left + r.width / 2 ? 1 : -1); });
      let seen = version;
      const filler = setInterval(() => { if (!busy && seen !== version) { seen = version; paint(); } if (loaded.every(Boolean) && seen === version) clearInterval(filler); }, 500);
      mode.css = { destroy: () => clearInterval(filler) };
      mode.api = { next: () => turn(1), prev: () => turn(-1) };
      paint();
    }

    function open() {
      closed.hidden = true; openEl.hidden = false;
      if (hasGSAP && !reduceMotion) gsap.from(openEl, { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" });
      loadCover(); ensureAround(current);
      loadLib().then(() => { build(); backgroundFill(); });
      setTimeout(() => hasST && ScrollTrigger.refresh(), 900);
    }
    let rt = null, lastW = window.innerWidth, lastDesk = isDesktop();
    function onResize() {
      clearTimeout(rt);
      rt = setTimeout(() => {
        if (!mode) return;
        const w = window.innerWidth;
        if (stage.classList.contains("is-fs") || isDesktop() !== lastDesk || Math.abs(w - lastW) > 40) { lastW = w; lastDesk = isDesktop(); build(); }
      }, 250);
    }
    function setFs(on) {
      stage.classList.toggle("is-fs", on); document.body.classList.toggle("book-fs", on);
      btnFs.textContent = on ? "Exit" : "Fullscreen"; btnFs.setAttribute("aria-label", on ? "Exit fullscreen" : "Fullscreen");
      setTimeout(build, 60);
    }
    function toggleFs() {
      const on = !stage.classList.contains("is-fs");
      if (on) { if (stage.requestFullscreen) stage.requestFullscreen().catch(() => {}); setFs(true); }
      else { if (document.fullscreenElement) document.exitFullscreen().catch(() => {}); setFs(false); }
    }
    document.addEventListener("fullscreenchange", () => { if (!document.fullscreenElement && stage.classList.contains("is-fs")) setFs(false); });

    // Tapping the left / right edge of a page is handled natively by StPageFlip
    // (a tap on the right half turns forward, left half turns back), so no extra
    // click handler here — adding one made a single tap turn two pages on phones.
    closed.addEventListener("click", open);
    [btnNext, arNext].forEach((b) => b.addEventListener("click", () => mode?.api?.next()));
    [btnPrev, arPrev].forEach((b) => b.addEventListener("click", () => mode?.api?.prev()));
    btnFs.addEventListener("click", toggleFs);
    window.addEventListener("resize", onResize, { passive: true });
    document.addEventListener("keydown", (e) => {
      if (!mode || openEl.hidden) return;
      if (e.target.matches("textarea,input,[contenteditable]")) return;
      const r = stage.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      if (e.key === "ArrowRight") mode.api?.next(); if (e.key === "ArrowLeft") mode.api?.prev();
      if (e.key === "Escape" && stage.classList.contains("is-fs")) toggleFs();
    });
    return {
      warm() {
        const io = new IntersectionObserver((en) => { if (en.some((x) => x.isIntersecting)) { io.disconnect(); loadCover(); } }, { rootMargin: "1200px 0px" });
        io.observe(stage);
        // the cover is tiny: fetch it once the opening animation is done, so it is ready when she scrolls there
        setTimeout(() => idle().then(loadCover), 4500);
      },
      get state() { return { current, total, engine: stage.dataset.engine, spread: mode?.spread, rendered: loaded.filter(Boolean).length, res }; },
      next: () => mode?.api?.next(), prev: () => mode?.api?.prev(),
    };
  })();
  window.__novaBook = Book;

  /* ================================ APP ================================= */
  const App = {
    entered: false,
    enter(animated) {
      if (this.entered) return; this.entered = true;
      document.body.classList.remove("is-locked"); document.body.classList.add("is-open");
      $("#site").removeAttribute("aria-hidden");
      if (animated) Audio.tryAutoplay();
      openingAnimation(animated);
      initScrollFx();
      Book.warm();
      setTimeout(() => hasST && ScrollTrigger.refresh(), 400);
    },
  };

  /* ================================ INIT ================================ */
  $$(".asset[data-src]").forEach((el) => { if (!el.closest("#galleryGrid")) initAsset(el); });
  initLetter(); initQuestions(); initReasons(); initLetters(); initVerses(); initGallery(); initPromises(); initWish(); initNav();
  splitHeroName();
  Lock.init();
})();
