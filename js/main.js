/* =========================================================================
   NOVA GRACE — BIRTHDAY SITE
   =========================================================================
   ✏️  EDIT YOUR SETTINGS HERE  ✏️
   Everything you normally need to change lives in this CONFIG object.
   ========================================================================= */
const CONFIG = {
  // Nova's birthday in YYYY-MM-DD format.
  // ⚠️ PLACEHOLDER — change this to her real birthday!
  // Before this date the hero shows a countdown; on/after it, confetti plays.
  BIRTHDAY_DATE: "2026-12-31",

  // The 8-digit passcode for the lock screen (MMDDYYYY). 01242025 = January 24, 2025.
  PASSCODE: "01242025",

  // Where "Send to John Carlo" sends her question (opens her mail app).
  // ⚠️ PLACEHOLDER — put your real email address here.
  MY_EMAIL: "your-email@example.com",

  // Paths (relative, so they work on GitHub Pages)
  BOOK_PDF: "book/maybe-you-never-asked.pdf",
  SONG: "audio/good-evening-love.mp3",
  PHOTO_COUNT: 12, // images/photo-01.jpg ... photo-12.jpg

  // Gallery captions (index 0 = photo-01). Leave "" to show "Add a caption".
  // She can also tap a caption on the site to write her own (saved on her device).
  GALLERY_CAPTIONS: ["", "", "", "", "", "", "", "", "", "", "", ""],

  // Remember the unlock for this browser tab session (so a refresh doesn't re-lock).
  REMEMBER_UNLOCK: true,
};

/* ---------------------------- SITE CONTENT ----------------------------- */
const CONTENT = {
  questions: [
    { q: "When and where did we meet?", a: "We met on January 24, 2025, at around 2 PM. And if you want to know where, it was on TikTok, of all places.", page: 2 },
    { q: "Can I eat that love?", a: "So no, you can't eat it. But somehow, love still nourishes you in a different way.", page: 6 },
    { q: "Did you ever fall in love with me before?", a: "So yes, I did. I fell in love with you back then, and I would choose you all over again.", page: 7 },
    { q: "Do you only see me as a friend?", a: "At first, yes. But as time went by, I couldn’t hide it anymore. I had fallen for you too.", page: 8 },
    { q: "What brought us closer?", a: "For me, it was God.", page: 9 },
    { q: "What if the day comes that you get tired of me?", a: "I will never be tired of you. You are not the weight I carry, you are one of the reasons I keep going.", page: 11 },
    { q: "Until when will you choose me?", a: "For life.", page: 12 },
    { q: "What if I’m not perfect?", a: "Good, because neither am I.", page: 16 },
    { q: "What do I mean to you?", a: "You mean more than I know how to write in a book. But I tried anyway, and every page of this is for you.", page: 17 },
  ],
  reasons: [
    "The way you are genuine.",
    "The way you stay consistent, on busy days and on tired days.",
    "The way you cheer for the people you care about.",
    "The way you pray for them.",
    "You shared your day with me, even when we were only frenny.",
    "You never made me feel like I was just another name in your inbox.",
    "You made me feel like I mattered.",
    "Every morning, we opened His Word together.",
    "When I told you the truth, you didn’t pull away.",
    "You are my peace on loud days.",
    "You are my reason to smile on quiet ones.",
    "You are real, with your tired days, your confusing days, and your quiet days.",
  ],
  letters: [
    { when: "Open when you feel tired", body: [
      "Life will make us tired. Work, long days, and heavy weeks will take something out of us. But I will never be tired of you.",
      "And if one day you are the one who feels tired, then we rest. We slow down, we breathe, and we take it one day at a time, together.",
      "Just keep the energy drinks on standby." ] },
    { when: "Open when you miss me", body: [
      "Send me an update, even if it is only a simple “good evening, frenny.”",
      "You are the first one I want to tell about my day, the good parts and the hard parts." ] },
    { when: "Open when you forget you are loved", body: [
      "That you are loved, on the days you feel it and on the days you don’t.",
      "That you are chosen. Not by accident, not out of convenience, but on purpose, and again and again.",
      "That you are not alone, whatever season you are in. And that you are enough, exactly as you are." ] },
    { when: "Open when you feel you’re not enough", body: [
      "I never chose you because you are perfect. I chose you because you are real.",
      "I am not looking for a perfect love. I am looking for a true one, and I found it in you." ] },
    { when: "Open when you need a prayer", body: [
      "I pray that God keeps you safe and gives you strength on your tired days. I pray for peace when your mind is heavy, and for joy in the small things. I pray that He guards your heart, and ours.",
      "Most of all, I pray that we keep growing closer to Him, and that He keeps us close to each other." ] },
    { when: "Open on your birthday", body: [
      "Happy birthday, Nova Grace.",
      "You started as a message from a stranger on TikTok. Then you became my frenny. Then you became the person I love.",
      "Today, tomorrow, and for all the days after that, you will still be the one I choose." ] },
  ],
  // Song lyrics: [section label, lines...]
  lyrics: [
    ["Pre-Chorus", "Frenny was the name before,", "Now love is the word I'm living for,", "And that little flame on that little screen", "Was the start of everything."],
    ["Bridge", "So if you ask me how long, I'll say for life,", "Through the heavy seasons, through the quiet nights,", "Through the days you're lost, through the days you're tired,", "I will choose you, again and again.", "And you know what's beautiful?", "Read the first word.", "You."],
    ["Final Chorus", "Good evening, love, good evening, love,", "Frenny turned to my whole world, my everything.", "Nova Grace, my star, my prayer, my plan,", "I'll hold your hand as long as I can.", "Maybe you never asked, but I answered anyway,", "I'll choose you, love, every single day."],
    ["Outro", "Maybe you never asked,", "So I wrote it all down.", "Good evening, love."],
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
  const PALETTE = ["#6D4AFF", "#8B6BE8", "#C9B8F5", "#E9DDFB", "#FFF6E9", "#FFD98E"];
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
      confetti({ ...base, particleCount: 70, spread: 360, startVelocity: 30, shapes: ["star"], colors: ["#FFD98E", "#FFF6E9", "#E9DDFB"], scalar: 1.4, origin: { y: 0.45 } });
    }
  }

  /* ============================== STARFIELD ============================== */
  const Starfield = (() => {
    const cv = $("#starfield");
    const ctx = cv.getContext("2d");
    let W = 0, H = 0, dpr = 1, stars = [], shooters = [], t0 = performance.now(), revealAt = -1, running = true, nextShoot = 4000;
    const COLORS = ["255,255,255", "233,221,251", "201,184,245", "255,217,142"];
    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth; H = window.innerHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(Math.round((W * H) / (W < 700 ? 2300 : 3400)), 380);
      stars = Array.from({ length: n }, () => ({
        x: Math.random() * W, y: Math.random() * H * 1.5,
        r: Math.random() < 0.08 ? 1.3 + Math.random() * 0.9 : 0.35 + Math.random() * 0.9,
        a: 0.35 + Math.random() * 0.65, tw: 0.6 + Math.random() * 2.2, ph: Math.random() * 6.28,
        d: 0.15 + Math.random() * 0.85, c: COLORS[Math.random() < 0.1 ? 3 : Math.floor(Math.random() * 3)],
        delay: Math.random() * 2600,
      }));
      if (reduceMotion) draw(performance.now());
    }
    function shoot() {
      const fromLeft = Math.random() < 0.5;
      shooters.push({ x: fromLeft ? Math.random() * W * 0.5 : W * 0.5 + Math.random() * W * 0.5, y: Math.random() * H * 0.4, vx: (fromLeft ? 1 : -1) * (7 + Math.random() * 4), vy: 3 + Math.random() * 2, life: 0, max: 60 + Math.random() * 30 });
    }
    function draw(now) {
      const t = now - t0;
      ctx.clearRect(0, 0, W, H);
      const sy = window.scrollY || 0;
      const Hx = H * 1.5;
      for (const s of stars) {
        let vis = 1;
        if (revealAt >= 0) { const k = (now - revealAt - s.delay) / 600; vis = k <= 0 ? 0 : Math.min(1, k); if (vis === 0) continue; }
        let y = (s.y - sy * s.d * 0.12 - (reduceMotion ? 0 : t * 0.004 * s.d)) % Hx; if (y < 0) y += Hx;
        if (y > H + 4) continue;
        const tw = reduceMotion ? 1 : 0.55 + 0.45 * Math.sin(t * 0.001 * s.tw + s.ph);
        const alpha = s.a * tw * vis;
        ctx.beginPath(); ctx.fillStyle = `rgba(${s.c},${alpha})`; ctx.arc(s.x, y, s.r, 0, 6.283); ctx.fill();
        if (s.r > 1.3) { ctx.beginPath(); ctx.fillStyle = `rgba(${s.c},${alpha * 0.18})`; ctx.arc(s.x, y, s.r * 3.2, 0, 6.283); ctx.fill(); }
      }
      if (!reduceMotion) {
        if (t > nextShoot) { shoot(); nextShoot = t + 6000 + Math.random() * 9000; }
        shooters = shooters.filter((m) => m.life < m.max);
        for (const m of shooters) {
          m.life++; m.x += m.vx; m.y += m.vy;
          const fade = 1 - m.life / m.max;
          const g = ctx.createLinearGradient(m.x, m.y, m.x - m.vx * 12, m.y - m.vy * 12);
          g.addColorStop(0, `rgba(255,246,233,${fade})`); g.addColorStop(1, "rgba(255,246,233,0)");
          ctx.strokeStyle = g; ctx.lineWidth = 1.6; ctx.lineCap = "round";
          ctx.beginPath(); ctx.moveTo(m.x, m.y); ctx.lineTo(m.x - m.vx * 12, m.y - m.vy * 12); ctx.stroke();
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
    const label = src.split("/").pop();
    if (!el.querySelector(".ph")) {
      el.insertAdjacentHTML("beforeend", `<div class="ph">${STAR}${el.dataset.optional ? "" : `<small>${label}</small>`}</div>`);
    }
    const img = new Image();
    img.alt = el.dataset.alt || "";
    img.decoding = "async";
    img.loading = "lazy";
    img.onload = () => { el.classList.add("has-img"); el.prepend(img); requestAnimationFrame(() => img.classList.add("loaded")); };
    img.onerror = () => el.classList.add("missing");
    img.src = src;
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
        if (typeof window.confetti === "function") confetti({ particleCount: 90, spread: 360, startVelocity: 28, shapes: ["star"], colors: ["#FFD98E", "#FFF6E9", "#E9DDFB"], scalar: 1.1, origin: { y: 0.4 }, disableForReducedMotion: true, zIndex: 101 });
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
    const a = $("#songAudio"), btn = $("#musicBtn"), play = $("#playBtn"), vinyl = $("#vinyl"), note = $("#playerNote");
    const fill = $("#progressFill"), bar = $("#progress"), tc = $("#tCur"), td = $("#tDur");
    let missing = false;
    const fmt = (s) => (isFinite(s) ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}` : "--:--");
    function sync() {
      const on = !a.paused && !missing;
      btn.classList.toggle("playing", on); btn.setAttribute("aria-pressed", String(on)); btn.setAttribute("aria-label", on ? "Mute music" : "Play music");
      play.classList.toggle("playing", on); play.setAttribute("aria-label", on ? "Pause song" : "Play song");
      vinyl.classList.toggle("spinning", on);
    }
    function markMissing() { missing = true; note.hidden = false; sync(); }
    a.addEventListener("error", markMissing);
    a.addEventListener("play", sync); a.addEventListener("pause", sync);
    a.addEventListener("loadedmetadata", () => (td.textContent = fmt(a.duration)));
    a.addEventListener("timeupdate", () => { const p = a.duration ? (a.currentTime / a.duration) * 100 : 0; fill.style.width = p + "%"; bar.setAttribute("aria-valuenow", Math.round(p)); tc.textContent = fmt(a.currentTime); });
    function toggle() {
      if (missing) { note.hidden = false; btn.animate?.([{ transform: "translateX(0)" }, { transform: "translateX(-4px)" }, { transform: "translateX(4px)" }, { transform: "translateX(0)" }], { duration: 300 }); return; }
      if (a.paused) a.play().catch(() => {}); else a.pause();
    }
    btn.addEventListener("click", toggle); play.addEventListener("click", toggle);
    function seek(e) { if (!a.duration) return; const r = bar.getBoundingClientRect(); const x = Math.min(Math.max((e.clientX - r.left) / r.width, 0), 1); a.currentTime = x * a.duration; }
    bar.addEventListener("pointerdown", (e) => { seek(e); bar.setPointerCapture(e.pointerId); bar.onpointermove = seek; });
    bar.addEventListener("pointerup", () => (bar.onpointermove = null));
    bar.addEventListener("keydown", (e) => { if (!a.duration) return; if (e.key === "ArrowRight") a.currentTime += 5; if (e.key === "ArrowLeft") a.currentTime -= 5; });
    return { tryAutoplay() { if (!missing) a.play().catch(() => {}); } };
  })();

  /* ============================ HERO / COUNTDOWN ======================== */
  function birthday() { const [y, m, d] = CONFIG.BIRTHDAY_DATE.split("-").map(Number); return new Date(y, (m || 1) - 1, d || 1, 0, 0, 0); }
  function initCountdown() {
    const target = birthday();
    if (isNaN(target) || Date.now() >= target.getTime()) return false;
    const box = $("#countdown"); box.hidden = false;
    const els = { d: $("#cdD"), h: $("#cdH"), m: $("#cdM"), s: $("#cdS") };
    const tick = () => {
      let ms = target.getTime() - Date.now();
      if (ms <= 0) { clearInterval(iv); box.hidden = true; fireConfetti("burst"); return; }
      const s = Math.floor(ms / 1000);
      els.d.textContent = String(Math.floor(s / 86400)).padStart(2, "0");
      els.h.textContent = String(Math.floor((s % 86400) / 3600)).padStart(2, "0");
      els.m.textContent = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
      els.s.textContent = String(s % 60).padStart(2, "0");
    };
    const iv = setInterval(tick, 1000); tick();
    return true;
  }

  function openingAnimation(animated) {
    const counting = initCountdown();
    const after = () => { if (!counting) fireConfetti("burst"); };
    if (!hasGSAP || reduceMotion || !animated) { window.gsap?.set?.(".nova", { opacity: 0.9, scale: 1 }); setTimeout(after, 300); return; }
    Starfield.revealOneByOne();
    const tl = gsap.timeline({ delay: 0.2 });
    tl.set([".hero-portrait", ".hero-eyebrow", ".ht-line", ".hero-sub", "#countdown", ".scroll-cue"], { opacity: 0, y: 26 })
      .to(".nova", { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }, 1.6)
      .to(".nova", { scale: 3.4, duration: 0.5, ease: "power2.in" }, 2.2)
      .to(".nova", { scale: 1, opacity: 0.85, duration: 1.2, ease: "power3.out" }, 2.7)
      .to(".hero-portrait", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, 2.6)
      .to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, 2.8)
      .to(".ht-line", { opacity: 1, y: 0, duration: 1.1, stagger: 0.25, ease: "power3.out" }, 2.95)
      .to(".hero-sub", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, 3.5)
      .to("#countdown", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, 3.7)
      .to(".scroll-cue", { opacity: 1, y: 0, duration: 1 }, 4)
      .add(after, 3.2);
  }

  /* ============================== REVEALS =============================== */
  function splitTitles() {
    $$(".title").forEach((t) => {
      t.innerHTML = t.textContent.split(" ").map((w) => `<span class="w" style="display:inline-block">${w}</span>`).join(" ");
    });
  }
  function initScrollFx() {
    if (!hasST || reduceMotion) { $$(".reveal").forEach((e) => (e.style.opacity = 1)); return; }
    $$(".title.reveal").forEach((t) => t.classList.remove("reveal"));
    splitTitles();
    $$(".title").forEach((t) => {
      gsap.from(t.querySelectorAll(".w"), { opacity: 0, y: 26, rotateX: -40, duration: 0.9, stagger: 0.08, ease: "power3.out", scrollTrigger: { trigger: t, start: "top 88%", once: true } });
    });
    ScrollTrigger.batch(".reveal", {
      start: "top 90%", once: true,
      onEnter: (b) => gsap.to(b, { opacity: 1, y: 0, duration: 1, stagger: 0.14, ease: "power3.out", overwrite: true }),
    });
    gsap.to(".hero-content", { yPercent: 18, opacity: 0.25, ease: "none", scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true } });
    gsap.to(".nova", { y: -80, ease: "none", scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true } });
    gsap.fromTo("#bYou", { opacity: 0, scale: 0.6, filter: "blur(12px)" }, { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.6, ease: "power3.out", scrollTrigger: { trigger: "#bYou", start: "top 82%", once: true } });
    gsap.utils.toArray(".polaroid").forEach((p, i) => gsap.from(p, { opacity: 0, y: 50, rotate: 0, duration: 0.9, delay: (i % 4) * 0.08, ease: "power3.out", scrollTrigger: { trigger: p, start: "top 94%", once: true } }));
    gsap.utils.toArray(".qcard").forEach((p, i) => gsap.from(p, { opacity: 0, y: 40, duration: 0.9, delay: (i % 3) * 0.1, ease: "power3.out", scrollTrigger: { trigger: p, start: "top 92%", once: true } }));
    gsap.utils.toArray(".envelope").forEach((p, i) => gsap.from(p, { opacity: 0, y: 40, rotate: i % 2 ? 4 : -4, duration: 0.9, delay: (i % 3) * 0.1, ease: "back.out(1.4)", scrollTrigger: { trigger: p, start: "top 94%", once: true } }));
  }

  /* ================================ NAV ================================= */
  function initNav() {
    const groups = { hero: "hero", story: "story", timeline: "story", verse: "story", book: "book", questions: "book", reasons: "book", letters: "book", beautiful: "book", "song-section": "song-section", gallery: "song-section", promises: "song-section", wish: "wish", ask: "wish" };
    const topMap = { hero: "hero", story: "story", timeline: "story", verse: "story", book: "book", questions: "questions", reasons: "reasons", letters: "reasons", beautiful: "reasons", "song-section": "song-section", gallery: "gallery", promises: "gallery", wish: "wish", ask: "ask" };
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

  /* ============================= FLIP CARDS ============================= */
  function initQuestions() {
    const grid = $("#flipGrid");
    grid.innerHTML = CONTENT.questions.map((c, i) => `
      <button type="button" class="qcard" aria-pressed="false" aria-label="${c.q} Tap to see my answer">
        <span class="qcard-inner">
          <span class="qface qfront"><span class="q-num">No. ${String(i + 1).padStart(2, "0")}</span><span class="q-title">${c.q}</span><span class="q-tap">${STAR}tap to flip</span></span>
          <span class="qface qback"><span class="q-ans">${c.a}</span><span class="q-sm">from page ${c.page} of the book</span></span>
        </span>
      </button>`).join("");
    grid.addEventListener("click", (e) => { const c = e.target.closest(".qcard"); if (!c) return; c.classList.toggle("flipped"); c.setAttribute("aria-pressed", c.classList.contains("flipped")); });
  }

  /* ============================== REASONS =============================== */
  function initReasons() {
    const box = $("#skyStars"), svg = $("#constellation"), txt = $("#reasonText"), cnt = $("#reasonCount");
    // hand-placed constellation (percent positions) — a gentle heart-ish shape
    const pts = [[50, 22], [36, 12], [20, 18], [12, 36], [20, 56], [34, 72], [50, 88], [66, 72], [80, 56], [88, 36], [80, 18], [64, 12]];
    const found = new Set();
    box.innerHTML = pts.map((p, i) => `<button type="button" class="sky-star" style="left:${p[0]}%;top:${p[1]}%" data-i="${i}" aria-label="Star ${i + 1}">${STAR}</button>`).join("");
    function drawLines() {
      const r = box.getBoundingClientRect(), r0 = svg.getBoundingClientRect();
      const order = [...found].sort((a, b) => a - b);
      let html = "";
      for (let k = 0; k < pts.length; k++) {
        const a = k, b = (k + 1) % pts.length;
        if (found.has(a) && found.has(b)) html += `<line x1="${(pts[a][0] / 100) * r.width + r.left - r0.left}" y1="${(pts[a][1] / 100) * r.height + r.top - r0.top}" x2="${(pts[b][0] / 100) * r.width + r.left - r0.left}" y2="${(pts[b][1] / 100) * r.height + r.top - r0.top}"/>`;
      }
      svg.innerHTML = html; return order;
    }
    box.addEventListener("click", (e) => {
      const b = e.target.closest(".sky-star"); if (!b) return;
      const i = +b.dataset.i; found.add(i);
      $$(".sky-star", box).forEach((s) => s.classList.remove("active"));
      b.classList.add("found", "active");
      if (hasGSAP && !reduceMotion) gsap.fromTo(txt, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.5 });
      txt.textContent = CONTENT.reasons[i];
      cnt.textContent = found.size === pts.length ? "All 12 found. And there are countless more." : `${found.size} of ${pts.length} found`;
      drawLines();
      if (found.size === pts.length) { Starfield.shoot(); if (typeof confetti === "function") { const r = b.getBoundingClientRect(); confetti({ particleCount: 50, spread: 80, shapes: ["star"], colors: ["#FFD98E", "#FFF6E9"], origin: { x: (r.left + r.width / 2) / innerWidth, y: (r.top + r.height / 2) / innerHeight }, disableForReducedMotion: true, zIndex: 90 }); } }
    });
    window.addEventListener("resize", drawLines, { passive: true });
  }

  /* ============================== LETTERS =============================== */
  function initLetters() {
    const grid = $("#envGrid"), modal = $("#letterModal");
    grid.innerHTML = CONTENT.letters.map((l, i) => `
      <button type="button" class="envelope" data-i="${i}" aria-label="${l.when}">
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
        $("#letterTitle").textContent = l.when + "…";
        $("#letterBody").innerHTML = l.body.map((p) => `<p>${p}</p>`).join("");
        modal.hidden = false; document.body.style.overflow = "hidden"; $("#letterClose").focus();
      }, reduceMotion ? 0 : 450);
    });
    const close = () => { modal.hidden = true; document.body.style.overflow = ""; lastFocus?.focus({ preventScroll: true }); };
    $("#letterClose").addEventListener("click", close);
    modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) close(); });
  }

  /* =============================== LYRICS =============================== */
  function initLyrics() {
    $("#lyrics").innerHTML = CONTENT.lyrics.map(([label, ...lines]) => `<h4>${label}</h4>${lines.map((l) => `<p>${l}</p>`).join("")}`).join("");
  }

  /* =============================== GALLERY ============================== */
  function initGallery() {
    const grid = $("#galleryGrid");
    const n = CONFIG.PHOTO_COUNT;
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem("nova-captions") || "{}"); } catch (e) {}
    const caps = Array.from({ length: n }, (_, i) => saved[i] ?? CONFIG.GALLERY_CAPTIONS[i] ?? "");
    grid.innerHTML = Array.from({ length: n }, (_, i) => {
      const num = String(i + 1).padStart(2, "0");
      const rot = (((i * 37) % 9) - 4) * 0.9;
      return `<figure class="polaroid" style="--rot:${rot}deg" data-i="${i}">
        <div class="asset" data-src="images/photo-${num}.jpg" data-alt="Photo ${i + 1}" role="button" tabindex="0" aria-label="Open photo ${i + 1}"></div>
        <figcaption class="pol-cap" contenteditable="true" spellcheck="false" data-placeholder="Add a caption" data-i="${i}">${caps[i].replace(/</g, "&lt;")}</figcaption>
      </figure>`;
    }).join("");
    $$(".asset", grid).forEach(initAsset);
    grid.addEventListener("input", (e) => {
      const c = e.target.closest(".pol-cap"); if (!c) return;
      caps[+c.dataset.i] = c.textContent.trim();
      const store = {}; caps.forEach((v, i) => { if (v !== (CONFIG.GALLERY_CAPTIONS[i] || "")) store[i] = v; });
      try { localStorage.setItem("nova-captions", JSON.stringify(store)); } catch (er) {}
    });
    grid.addEventListener("keydown", (e) => { if (e.target.classList.contains("pol-cap") && e.key === "Enter") { e.preventDefault(); e.target.blur(); } });

    // Lightbox
    const lb = $("#lightbox"), media = $("#lbMedia"), cap = $("#lbCaption"), count = $("#lbCount");
    let cur = 0;
    function show(i) {
      cur = (i + n) % n;
      const num = String(cur + 1).padStart(2, "0");
      media.innerHTML = `<div class="asset" data-src="images/photo-${num}.jpg" data-alt="Photo ${cur + 1}"></div>`;
      const a = media.firstElementChild; initAsset(a); a.querySelector("img")?.removeAttribute("loading");
      cap.textContent = caps[cur] || "";
      count.textContent = `${cur + 1} / ${n}`;
      if (hasGSAP && !reduceMotion) gsap.fromTo(media, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.4 });
    }
    function open(i) { show(i); lb.hidden = false; document.body.style.overflow = "hidden"; $("#lbClose").focus(); }
    function close() { lb.hidden = true; document.body.style.overflow = ""; }
    grid.addEventListener("click", (e) => { const a = e.target.closest(".asset"); if (a) open(+a.closest(".polaroid").dataset.i); });
    grid.addEventListener("keydown", (e) => { const a = e.target.closest(".asset"); if (a && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); open(+a.closest(".polaroid").dataset.i); } });
    $("#lbClose").addEventListener("click", close);
    $("#lbPrev").addEventListener("click", () => show(cur - 1));
    $("#lbNext").addEventListener("click", () => show(cur + 1));
    lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
    document.addEventListener("keydown", (e) => { if (lb.hidden) return; if (e.key === "Escape") close(); if (e.key === "ArrowLeft") show(cur - 1); if (e.key === "ArrowRight") show(cur + 1); });
    let sx = 0, sy = 0;
    lb.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
    lb.addEventListener("touchend", (e) => { const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy; if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) show(cur + (dx < 0 ? 1 : -1)); }, { passive: true });
  }

  /* ============================== PROMISES ============================== */
  function initPromises() {
    $("#promiseList").innerHTML = CONTENT.promises.map((p) => `<li class="reveal">${STAR}<span>${p}</span></li>`).join("");
  }

  /* ================================ WISH ================================ */
  function initWish() {
    const star = $("#wishStar"), hint = $("#wishHint"), after = $("#wishAfter"), sky = $("#shooting");
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
      hint.style.opacity = 0;
      setTimeout(() => after.classList.add("show"), 600);
    }
    star.addEventListener("pointerdown", (e) => { e.preventDefault(); star.classList.add("holding"); holdTimer = setTimeout(wish, 1400); });
    star.addEventListener("pointerup", () => { if (star.classList.contains("holding")) wish(); });
    star.addEventListener("pointerleave", () => { clearTimeout(holdTimer); star.classList.remove("holding"); });
    star.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); wish(); } });
    star.addEventListener("contextmenu", (e) => e.preventDefault());
  }

  /* ================================ ASK ================================= */
  function initAsk() {
    const f = $("#askForm"), t = $("#askInput");
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = t.value.trim();
      if (!q) { t.classList.remove("shake"); void t.offsetWidth; t.classList.add("shake"); t.focus(); return; }
      const href = `mailto:${CONFIG.MY_EMAIL}?subject=${encodeURIComponent("A question for you ✨")}&body=${encodeURIComponent(q)}`;
      window.location.href = href;
    });
  }

  /* ================================ BOOK ================================ */
  const Book = (() => {
    const stage = $("#bookStage"), closed = $("#bookClosed"), openEl = $("#bookOpen"), holder = $("#flipHolder"), viewport = $("#bookViewport");
    const loading = $("#bookLoading"), loadingText = $("#bookLoadingText"), indicator = $("#pageIndicator");
    const btnPrev = $("#bookPrev"), btnNext = $("#bookNext"), btnFs = $("#bookFs"), arPrev = $("#bookArrowPrev"), arNext = $("#bookArrowNext");
    let pdf = null, total = 23, urls = [], pageEls = [], flip = null, mode = null, current = 0, rendering = null, coverDone = false;
    const ASPECT = 648 / 432;

    function pdfReady() {
      if (pdf) return Promise.resolve(pdf);
      if (!window.pdfjsLib) return Promise.reject(new Error("PDF.js failed to load"));
      pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
      return pdfjsLib.getDocument(CONFIG.BOOK_PDF).promise.then((d) => { pdf = d; total = d.numPages; return d; });
    }
    async function renderPage(n, targetW) {
      const page = await pdf.getPage(n);
      const vp1 = page.getViewport({ scale: 1 });
      const scale = targetW / vp1.width;
      const vp = page.getViewport({ scale });
      const c = document.createElement("canvas");
      c.width = Math.round(vp.width); c.height = Math.round(vp.height);
      await page.render({ canvasContext: c.getContext("2d"), viewport: vp }).promise;
      return new Promise((res) => c.toBlob((b) => res(URL.createObjectURL(b)), "image/jpeg", 0.9));
    }
    const renderW = () => Math.round(Math.min(Math.max((isDesktop() ? 460 : window.innerWidth) * Math.min(devicePixelRatio || 1, 2.5), 700), 1300));

    async function loadCover() {
      if (coverDone) return; coverDone = true;
      try {
        await pdfReady();
        const u = await renderPage(1, 700);
        $("#bookCover").innerHTML = `<img src="${u}" alt="Maybe You Never Asked — book cover" />`;
      } catch (e) {
        console.warn("[book] cover", e);
        $("#bookCover").innerHTML = `<span style="font-family:var(--serif);font-size:1.6rem;text-align:center;padding:20px;color:var(--cream)">Maybe You Never Asked</span>`;
      }
    }

    function renderAll() {
      if (rendering) return rendering;
      rendering = (async () => {
        await pdfReady();
        const w = renderW();
        pageEls = Array.from({ length: total }, (_, i) => { const d = document.createElement("div"); d.className = "page"; d.dataset.density = i === 0 || i === total - 1 ? "hard" : "soft"; return d; });
        urls = new Array(total);
        for (let i = 1; i <= total; i++) {
          const u = await renderPage(i, w);
          urls[i - 1] = u;
          pageEls[i - 1].innerHTML = `<img src="${u}" alt="Page ${i} of ${total}" draggable="false" />`;
          loadingText.textContent = `Opening the book… ${i} / ${total}`;
          if (i === Math.min(4, total)) build(); // show the book as soon as the first pages are ready
        }
        if (!flip && !mode) build();
      })();
      return rendering;
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
      // keep page elements alive across rebuilds (StPageFlip.destroy() removes them)
      destroyFlip();
      holder.style.width = (size.spread ? size.pageW * 2 : size.pageW) + "px";
      holder.style.height = size.pageH + "px";
      holder.style.aspectRatio = "auto";
      mode = { spread: size.spread };
      const useStPageFlip = window.St && window.St.PageFlip && !window.__forceCssBook;
      if (useStPageFlip) {
        try {
          const root = document.createElement("div"); holder.appendChild(root);
          const els = pageEls.map((p) => { const c = p.cloneNode(true); return c; });
          els.forEach((e) => root.appendChild(e));
          flip = new St.PageFlip(root, {
            width: size.pageW, height: size.pageH, size: "fixed",
            showCover: true, usePortrait: !size.spread, autoSize: false,
            maxShadowOpacity: 0.55, flippingTime: reduceMotion ? 1 : 850, mobileScrollSupport: false,
            drawShadow: true, startPage: Math.min(current, total - 1), showPageCorners: !reduceMotion,
          });
          flip.loadFromHTML(els);
          // keep late-rendered pages in sync
          pageEls.forEach((p, i) => { if (!p.firstChild) waitFill(i, els[i]); });
          flip.on("flip", (e) => { current = e.data; updateUI(); });
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
    function waitFill(i, el) {
      const iv = setInterval(() => { if (pageEls[i].firstChild) { el.innerHTML = pageEls[i].innerHTML; clearInterval(iv); } }, 250);
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
        const finish = () => { current = target; paint(); updateUI(); busy = false; };
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
      const filler = setInterval(() => { if (!busy) paint(); if (pageEls.every((p) => p.firstChild)) clearInterval(filler); }, 600);
      mode.css = { destroy: () => clearInterval(filler) };
      mode.api = { next: () => turn(1), prev: () => turn(-1) };
      paint();
    }

    function open() {
      closed.hidden = true; openEl.hidden = false;
      if (hasGSAP && !reduceMotion) gsap.from(openEl, { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" });
      renderAll().catch((e) => {
        console.error("[book]", e);
        loadingText.innerHTML = location.protocol === "file:" ? "The book needs a local server to load.<br/>See the README ✨" : "The book could not be loaded. Check book/maybe-you-never-asked.pdf ✨";
      });
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
        const io = new IntersectionObserver((en) => { if (en.some((x) => x.isIntersecting)) { io.disconnect(); loadCover(); } }, { rootMargin: "800px 0px" });
        io.observe(stage);
      },
      get state() { return { current, total, engine: stage.dataset.engine, spread: mode?.spread, rendered: urls.filter(Boolean).length }; },
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
  initQuestions(); initReasons(); initLetters(); initLyrics(); initGallery(); initPromises(); initWish(); initAsk(); initNav();
  if (hasGSAP && !reduceMotion) gsap.set(".nova", { opacity: 0, scale: 0.2 }); else document.querySelector(".nova").style.opacity = 0.85;
  Lock.init();
  if (!window.St) console.info("[book] StPageFlip not available — the custom 3D CSS page-turn will be used.");
})();
