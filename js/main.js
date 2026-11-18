const repos = [
  { name: "DatingApp", lang: "C#", color: "#9b6bff", blurb: "Matchmaking app on ASP.NET with an Angular client.", url: "https://github.com/refaee94/DatingApp" },
  { name: "dating-website-API-", lang: "JavaScript", color: "#f0db4f", blurb: "API side of the dating website.", url: "https://github.com/refaee94/dating-website-API-" },
  { name: "datingAPP-Old", lang: "C#", color: "#9b6bff", blurb: "Earlier C# version of the dating application.", url: "https://github.com/refaee94/datingAPP-Old" },
  { name: "MERN-", lang: "TypeScript", color: "#3178c6", blurb: "Full-stack TypeScript project on the MERN stack.", url: "https://github.com/refaee94/MERN-" },
  { name: "SkiNet", lang: "C#", color: "#9b6bff", blurb: "C# application built around a store-style domain.", url: "https://github.com/refaee94/SkiNet" },
  { name: "sport-store", lang: "C#", color: "#9b6bff", blurb: "Sports store built with C#.", url: "https://github.com/refaee94/sport-store" },
  { name: "aspcore3store", lang: "TypeScript", color: "#3178c6", blurb: "ASP.NET Core store with a TypeScript front end.", url: "https://github.com/refaee94/aspcore3store" },
  { name: "book-app", lang: "TypeScript", color: "#3178c6", blurb: "TypeScript application for browsing books.", url: "https://github.com/refaee94/book-app" },
  { name: "Shop_App", lang: "Dart", color: "#2cb7f6", blurb: "Flutter shopping application.", url: "https://github.com/refaee94/Shop_App" },
  { name: "MealApp", lang: "Dart", color: "#2cb7f6", blurb: "Flutter app for browsing meals.", url: "https://github.com/refaee94/MealApp" },
  { name: "Flutter-cost-app", lang: "Dart", color: "#2cb7f6", blurb: "Flutter app for tracking costs.", url: "https://github.com/refaee94/Flutter-cost-app" },
  { name: "Great-Places", lang: "Dart", color: "#2cb7f6", blurb: "Flutter app for saving places.", url: "https://github.com/refaee94/Great-Places" },
  { name: "FlutterFirstApp", lang: "Dart", color: "#2cb7f6", blurb: "First Flutter application.", url: "https://github.com/refaee94/FlutterFirstApp" },
  { name: "React-native", lang: "JavaScript", color: "#f0db4f", blurb: "React Native mobile project.", url: "https://github.com/refaee94/React-native" },
  { name: "ReactAPP", lang: "JavaScript", color: "#f0db4f", blurb: "React application workspace.", url: "https://github.com/refaee94/ReactAPP" },
  { name: "react", lang: "JavaScript", color: "#f0db4f", blurb: "React practice and components.", url: "https://github.com/refaee94/react" },
  { name: "blazor", lang: "JavaScript", color: "#f0db4f", blurb: "Blazor project experiments.", url: "https://github.com/refaee94/blazor" },
  { name: "postApp", lang: "JavaScript", color: "#f0db4f", blurb: "JavaScript app for posts.", url: "https://github.com/refaee94/postApp" },
  { name: "Backend", lang: "JavaScript", color: "#f0db4f", blurb: "JavaScript backend services.", url: "https://github.com/refaee94/Backend" },
  { name: "managment", lang: "JavaScript", color: "#f0db4f", blurb: "JavaScript management interface.", url: "https://github.com/refaee94/managment" },
  { name: "mynodejs", lang: "JavaScript", color: "#f0db4f", blurb: "Node.js experiments and test functions.", url: "https://github.com/refaee94/mynodejs" },
  { name: "Application-website", lang: "Web", color: "#3ee0c5", blurb: "Website application repository.", url: "https://github.com/refaee94/Application-website" },
  { name: "refaee", lang: "Web", color: "#3ee0c5", blurb: "Personal repository on the profile.", url: "https://github.com/refaee94/refaee" }
];

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function renderRepos() {
  const grid = document.getElementById("repoGrid");
  grid.innerHTML = repos.map((repo) => `
    <a class="repo" href="${repo.url}" target="_blank" rel="noopener noreferrer" data-aos="fade-up">
      <div class="repo-top">
        <h3>${repo.name}</h3>
        <i class="fa-solid fa-arrow-up-right-from-square go" aria-hidden="true"></i>
      </div>
      <p>${repo.blurb}</p>
      <span class="repo-lang"><i style="--dot:${repo.color}"></i>${repo.lang}</span>
    </a>
  `).join("");
}

function initTyped() {
  const el = document.getElementById("typed");
  if (!window.Typed || reduced) {
    el.textContent = "Senior software engineer & full-stack developer";
    return;
  }
  new Typed("#typed", {
    strings: [
      "Senior software engineer",
      "Full-stack developer",
      ".NET and Angular specialist",
      "Automation with UiPath"
    ],
    typeSpeed: 46,
    backSpeed: 24,
    backDelay: 1600,
    loop: true,
    smartBackspace: true
  });
}

function initHeroMotion() {
  if (!window.gsap || reduced) return;
  gsap.from(".hero-copy .eyebrow", { y: 16, autoAlpha: 0, duration: 0.6, delay: 0.15 });
  gsap.from("h1 .line", { y: 40, autoAlpha: 0, duration: 0.8, stagger: 0.12, delay: 0.25, ease: "power3.out" });
  gsap.from(".typed-row, .lede, .hero-actions, .hero-meta", {
    y: 18,
    autoAlpha: 0,
    duration: 0.7,
    stagger: 0.08,
    delay: 0.45
  });
  gsap.from(".photo-ring", { scale: 0.86, autoAlpha: 0, duration: 0.9, delay: 0.2, ease: "power3.out" });
}

function initNetwork() {
  const canvas = document.getElementById("net");
  if (!canvas || reduced) return;
  const ctx = canvas.getContext("2d");
  const dots = [];
  const count = 48;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function seed() {
    dots.length = 0;
    for (let i = 0; i < count; i += 1) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35
      });
    }
  }

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dots.forEach((dot) => {
      dot.x += dot.vx;
      dot.y += dot.vy;
      if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
      if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;
    });
    for (let i = 0; i < dots.length; i += 1) {
      for (let j = i + 1; j < dots.length; j += 1) {
        const dx = dots[i].x - dots[j].x;
        const dy = dots[i].y - dots[j].y;
        const dist = Math.hypot(dx, dy);
        if (dist < 160) {
          ctx.strokeStyle = `rgba(62, 224, 197, ${0.16 * (1 - dist / 160)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.stroke();
        }
      }
    }
    dots.forEach((dot) => {
      ctx.fillStyle = "rgba(240, 194, 122, 0.75)";
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, 1.6, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(frame);
  }

  resize();
  seed();
  frame();
  window.addEventListener("resize", () => {
    resize();
    seed();
  });
}

function initNav() {
  const header = document.getElementById("header");
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("siteNav");
  const links = [...nav.querySelectorAll("a")];
  const progress = document.getElementById("scrollProgress");
  const toTop = document.getElementById("toTop");

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 8);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
    toTop.classList.toggle("is-on", y > 500);

    const marker = y + 140;
    let current = sections[0];
    sections.forEach((section) => {
      if (section.offsetTop <= marker) current = section;
    });
    links.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${current.id}`);
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" }));
  onScroll();
}

function initCounters() {
  const nodes = document.querySelectorAll(".stat-num");
  const run = (node) => {
    const target = Number(node.dataset.count);
    const suffix = node.dataset.suffix || "";
    if (reduced) {
      node.textContent = `${target}${suffix}`;
      return;
    }
    const start = performance.now();
    const duration = 1100;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      node.textContent = `${Math.round(target * eased)}${suffix}`;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      run(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.6 });

  nodes.forEach((node) => observer.observe(node));
}

function initForm() {
  const form = document.getElementById("contactForm");
  const error = document.getElementById("formError");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !validEmail || message.length < 4) {
      error.hidden = false;
      return;
    }
    error.hidden = true;
    const subject = encodeURIComponent(`Portfolio note from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:m.refaee123580@gmail.com?subject=${subject}&body=${body}`;
  });
}

function finishLoader() {
  const loader = document.getElementById("loader");
  const hide = () => loader.classList.add("is-done");
  if (document.readyState === "complete") {
    setTimeout(hide, reduced ? 0 : 500);
  } else {
    window.addEventListener("load", () => setTimeout(hide, reduced ? 0 : 500));
  }
}

document.getElementById("year").textContent = String(new Date().getFullYear());
renderRepos();
initTyped();
initHeroMotion();
initNetwork();
initNav();
initCounters();
initForm();
finishLoader();

if (window.AOS) {
  AOS.init({
    duration: 700,
    once: true,
    offset: 40,
    disable: reduced
  });
}
