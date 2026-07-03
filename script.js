/* ============================================
   الأمير السوري - JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Mobile Nav Toggle --- */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
  });
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('open');
    });
  });

  /* --- Navbar Scroll Effect --- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  /* --- Menu Tabs (Legacy) --- */
  const tabBtns = document.querySelectorAll('.tab-btn');
  const menuCategories = document.querySelectorAll('.menu-category');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      menuCategories.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.tab);
      if (target) target.classList.add('active');
    });
  });

  /* --- E-Menu Tabs --- */
  const emenuTabs = document.querySelectorAll('.emenu-tab');
  const emenuCategories = document.querySelectorAll('.emenu-category');
  emenuTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      emenuTabs.forEach(b => b.classList.remove('active'));
      emenuCategories.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.emenu);
      if (target) target.classList.add('active');
    });
  });

  /* --- Gallery Lightbox --- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.dataset.full || img.src;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  /* --- Scroll Reveal Animation --- */
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.menu-card, .gallery-item, .contact-card, .hours-card, .about-content').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
});
