// Pricing Tab switching
function switchTab(type) {
    document
        .querySelectorAll(".pricing-tab")
        .forEach(t => t.classList.remove("active"));
    document
        .querySelectorAll(".pricing-panel")
        .forEach(p => p.classList.remove("active"));

    const tabMap = { shop1: 0, shop2: 1, apt: 2 };
    document
        .querySelectorAll(".pricing-tab")
        [tabMap[type]].classList.add("active");
    document.getElementById("panel-" + type).classList.add("active");
}

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Header shadow on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
    }
});

// Lightbox functions
function openLightbox(img, label) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxLabel = document.getElementById('lightbox-label');
    
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxLabel.textContent = label;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ESC 키로 라이트박스 닫기
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

