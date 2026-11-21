/* =========================================================================
   NOVA GRACE — BIRTHDAY SITE
   =========================================================================
   ✏️  EDIT YOUR SETTINGS HERE  ✏️
   Everything you normally need to change lives in this CONFIG object.
   ========================================================================= */
const CONFIG = {
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

  // Soft paper sound when a book page turns (true / false).
  PAGE_TURN_SOUND: true,

  // Remember the unlock for this browser tab session (so a refresh doesn't re-lock).
  REMEMBER_UNLOCK: true,
};

/* ---------------------------- SITE CONTENT ----------------------------- */
const CONTENT = {
  // Section 4 — timeline. "head — text". photo: image shown in the card's photo slot.
  timeline: [
    { head: "January 24, 2025 · around 2 PM", text: "The first message. Out of everyone who saved or hearted my content on TikTok, you were the one I looked for. I messaged first.", photo: "images/photo-01.jpg" },
    { head: "Are you in IT?", text: "You were. Boom. We ended up talking about the tech stacks we both use.", photo: "images/photo-02.jpg" },
    { head: "The streak begins", text: "The conversation stayed consistent until, unexpectedly, we had a streak.", shot: "images/screenshot-streak.png", caption: "Day 10 of our streak · February 3, 2025" },
    { head: "The frenny season", text: "Daily updates about our days. You were so genuine and so supportive. That is when I knew you were different.", shot: "images/screenshot-message.png", caption: "One of your messages · January 30, 2025" },
    { head: "Our mornings with God", text: "Every morning we shared our daily devotion. His Word became the foundation of our friendship.", photo: "images/photo-03.jpg" },
    { head: "The day I told you", text: "I was so nervous. I prayed for courage. And after I told you, we only grew closer.", photo: "images/photo-04.jpg" },
    { head: "Today", text: "From frenny to love. Happy birthday, Nova Grace.", photo: "images/photo-05.jpg" },
  ],
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
  // Section 10 — complete lyrics. "[Chorus - repeat]" repeats the Chorus lines.
  lyrics: `[Verse 1]
Friday afternoon, around two,
I sent a message to someone new.
Out of all the hearts that came and went,
You were the one I meant.
"Are you in IT?" I typed with a grin,
"I am," you said, and the talk poured in,
Tech stacks and tools, and the day went by,
Then a tiny flame lit up our night.

[Pre-Chorus]
Frenny was all that we said,
Just good evenings and the words we read,
But a little flame on a little screen
Was holding the best thing I've ever seen.

[Chorus]
Good evening, love, good evening, love,
Once you were frenny, now you're all I'm thinking of.
Nova, a new star lighting up my sky,
Grace, a gift from God, and I don't need to ask why.
Maybe you never asked, so I'll say it right now:
I fell in love with you, and I'll show you how.

[Verse 2]
Every morning, we opened the Word,
Two voices sharing what we heard,
Nobody told us where to start,
But He built the floor beneath our hearts.
I asked Him, "Lord, is this real, or just a phase?"
He answered me through all our days.
I prayed for courage, my heart was racing,
I braced myself for you to go,
But you stayed, and love began to grow.

[Pre-Chorus]
Frenny was the name before,
Now love is the word I'm living for,
And that little flame on that little screen
Was the start of everything.

[Chorus - repeat]

[Bridge]
So if you ask me how long, I'll say for life,
Through the heavy seasons, through the quiet nights,
Through the days you're lost, through the days you're tired,
I will choose you, again and again.
And you know what's beautiful?
Read the first word.
You.

[Final Chorus]
Good evening, love, good evening, love,
Frenny turned to my whole world, my everything.
Nova Grace, my star, my prayer, my plan,
I'll hold your hand as long as I can.
Maybe you never asked, but I answered anyway,
I'll choose you, love, every single day.

[Outro]
Maybe you never asked,
So I wrote it all down.
Good evening, love.`,
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
    // Section 4: glowing line draws as you scroll; each star node lights up and reveals its card
    gsap.fromTo("#timelineList", { "--line": 0 }, { "--line": 1, ease: "none", scrollTrigger: { trigger: "#timelineList", start: "top 70%", end: "bottom 60%", scrub: true } });
    gsap.utils.toArray(".tl-item").forEach((li) => {
      const card = li.querySelector(".tl-card"), node = li.querySelector(".tl-node");
      gsap.set(card, { opacity: 0, y: 40 }); gsap.set(node, { scale: 0.3, opacity: 0.4 });
      ScrollTrigger.create({ trigger: li, start: "top 82%", once: true, onEnter: () => {
        gsap.to(node, { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(2)" }); li.classList.add("lit");
        gsap.to(card, { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.1 });
      } });
    });
    gsap.utils.toArray(".polaroid").forEach((p, i) => gsap.from(p, { opacity: 0, y: 60, rotate: 0, duration: 1.2, delay: (i % 4) * 0.08, ease: "expo.out", scrollTrigger: { trigger: p, start: "top 94%", once: true } }));
    gsap.utils.toArray(".qcard").forEach((p, i) => gsap.from(p, { opacity: 0, y: 50, duration: 1.2, delay: (i % 4) * 0.08, ease: "expo.out", scrollTrigger: { trigger: p, start: "top 92%", once: true } }));
    gsap.utils.toArray(".envelope").forEach((p, i) => gsap.from(p, { opacity: 0, y: 40, rotate: i % 2 ? 4 : -4, duration: 0.9, delay: (i % 3) * 0.1, ease: "back.out(1.4)", scrollTrigger: { trigger: p, start: "top 94%", once: true } }));
  }

  /* ================================ NAV ================================= */
  function initNav() {
    const groups = { hero: "hero", name: "hero", letter: "story", story: "story", book: "book", questions: "book", reasons: "book", openwhen: "book", verses: "song-section", "song-section": "song-section", gallery: "song-section", promises: "song-section", wish: "wish", ask: "wish" };
    const topMap = { hero: "hero", name: "hero", letter: "letter", story: "story", book: "book", questions: "questions", reasons: "reasons", openwhen: "reasons", verses: "song-section", "song-section": "song-section", gallery: "gallery", promises: "gallery", wish: "wish", ask: "ask" };
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

  /* ============================= SECTION 4 ============================== */
  function initTimeline() {
    $("#timelineList").innerHTML = CONTENT.timeline.map((t, i) => `
      <li class="tl-item">
        <span class="tl-node">${STAR}</span>
        <div class="glass tl-card">
          ${t.shot
            ? `<figure class="tl-shot"><div class="asset phone" data-src="${t.shot}" data-alt="${t.caption}"></div><figcaption>${t.caption}</figcaption></figure>`
            : `<div class="asset tl-photo" data-src="${t.photo}" data-alt=""></div>`}
          <h3>${t.head}</h3>
          <p>${t.text}</p>
        </div>
      </li>`).join("");
    $$("#timelineList .asset").forEach(initAsset);
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

  /* ============================= SECTION 10 ============================= */
  function initLyrics() {
    const box = $("#lyrics");
    const blocks = CONTENT.lyrics.trim().split(/\n\s*\n/);
    const chorus = (blocks.find((b) => b.startsWith("[Chorus]")) || "").split("\n").slice(1);
    let html = "";
    blocks.forEach((b) => {
      const lines = b.split("\n");
      const label = lines[0].replace(/^\[|\]$/g, "");
      const body = /repeat/i.test(label) ? chorus : lines.slice(1);
      html += `<div class="ly-block"><h4>${label}</h4>${body.map((l) => `<p class="ly">${l}</p>`).join("")}</div>`;
    });
    box.innerHTML = html;
    // karaoke-style highlight: no timestamps, so lines follow the song's progress evenly
    const lines = $$(".ly", box), a = $("#songAudio");
    let last = -1;
    a.addEventListener("timeupdate", () => {
      if (!a.duration) return;
      const idx = Math.min(lines.length - 1, Math.floor((a.currentTime / a.duration) * lines.length));
      if (idx === last) return;
      lines[last]?.classList.remove("on"); lines[idx].classList.add("on"); last = idx;
      const target = lines[idx].offsetTop - box.clientHeight / 2 + lines[idx].offsetHeight / 2;
      box.scrollTo({ top: target, behavior: reduceMotion ? "auto" : "smooth" });
    });
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
          loadingText.textContent = `${i} / ${total}`;
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
          flip.on("flip", (e) => { current = e.data; updateUI(); pageSound(); });
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
        const finish = () => { if (!busy) return; current = target; paint(); updateUI(); busy = false; };
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
  initLetter(); initTimeline(); initQuestions(); initReasons(); initLetters(); initVerses(); initLyrics(); initGallery(); initPromises(); initWish(); initAsk(); initNav();
  splitHeroName();
  Lock.init();
  if (!window.St) console.info("[book] StPageFlip not available — the custom 3D CSS page-turn will be used.");
})();
