/* ════════════════════════════════════════════════════════════
   DEEPAK R — Portfolio JavaScript
   ════════════════════════════════════════════════════════════ */

// ── CUSTOM CURSOR ─────────────────────────────────────────────
const dot  = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

function animateCursor() {
  dot.style.left  = mx + 'px';
  dot.style.top   = my + 'px';
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('a, button, .project-card, .stat-card, .edu-card').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

// ── NAV SCROLL ────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── HERO DOT-GRID CANVAS ──────────────────────────────────────
const canvas = document.getElementById('hero-canvas');
const ctx    = canvas.getContext('2d');
let cw, ch, dots = [];
let cmx = 0, cmy = 0;

function resizeCanvas() {
  cw = canvas.width  = canvas.offsetWidth;
  ch = canvas.height = canvas.offsetHeight;
  buildDots();
}

function buildDots() {
  dots = [];
  const gap = 36;
  for (let x = 0; x < cw; x += gap) {
    for (let y = 0; y < ch; y += gap) {
      dots.push({ ox: x, oy: y, x, y, r: 1.5 });
    }
  }
}

document.getElementById('hero').addEventListener('mousemove', e => {
  const rect = canvas.getBoundingClientRect();
  cmx = e.clientX - rect.left;
  cmy = e.clientY - rect.top;
});

function drawCanvas() {
  ctx.clearRect(0, 0, cw, ch);
  const radius = 140;
  dots.forEach(d => {
    const dx   = d.ox - cmx, dy = d.oy - cmy;
    const dist = Math.sqrt(dx*dx + dy*dy);
    const force = Math.max(0, 1 - dist / radius);
    d.x = d.ox + dx * force * 0.35;
    d.y = d.oy + dy * force * 0.35;
    const opacity = 0.08 + force * 0.25;
    const size    = d.r + force * 1.5;
    ctx.beginPath();
    ctx.arc(d.x, d.y, size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(243,108,33,${opacity})`;
    ctx.fill();
  });
  requestAnimationFrame(drawCanvas);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
drawCanvas();

// ── TYPEWRITER ────────────────────────────────────────────────
const phrases = [
  'Python Full Stack Developer.',
  'Django Web Developer.',
  'Software Developer.',
  'Data Analytics Enthusiast.',
  'Problem Solver.'
];
let pi = 0, ci = 0, deleting = false;
const tw = document.getElementById('typewriter');

function type() {
  const word = phrases[pi];
  if (!deleting) {
    tw.textContent = word.slice(0, ++ci);
    if (ci === word.length) { deleting = true; setTimeout(type, 1600); return; }
    setTimeout(type, 85);
  } else {
    tw.textContent = word.slice(0, --ci);
    if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(type, 300); return; }
    setTimeout(type, 45);
  }
}
setTimeout(type, 800);

// ── SCROLL REVEAL ─────────────────────────────────────────────
const reveals = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(r => revealObs.observe(r));

// ── SKILL BAR ANIMATION ───────────────────────────────────────
const bars = document.querySelectorAll('.skill-bar-fill');
const barObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('animated');
      barObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
bars.forEach(b => barObs.observe(b));

// ── 3D CARD TILT ──────────────────────────────────────────────
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(6px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) translateZ(0)';
    card.style.transition = 'transform 0.5s cubic-bezier(.22,1,.36,1)';
  });
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.1s';
  });
});

// ── HERO INITIAL REVEAL ───────────────────────────────────────
document.querySelectorAll('#hero .reveal').forEach((el, i) => {
  setTimeout(() => el.classList.add('visible'), 200 + i * 120);
});
