// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach(element => observer.observe(element));
}

// ============================================
// COUNTDOWN TIMER
// ============================================

function initCountdown() {
    // Set countdown to 3 days from now
    const countdownDate = new Date().getTime() + (3 * 24 * 60 * 60 * 1000);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            // If countdown is over, restart it
            const newCountdownDate = new Date().getTime() + (3 * 24 * 60 * 60 * 1000);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update DOM
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    // Update immediately
    updateCountdown();

    // Update every second
    setInterval(updateCountdown, 1000);
}

// ============================================
// SMOOTH SCROLLING
// ============================================

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// PARALLAX EFFECT FOR HERO
// ============================================

function initParallax() {
    const hero = document.querySelector('.hero');

    if (!hero) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = hero.querySelector('.hero-content');

        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
        }
    });
}

// ============================================
// CARD HOVER EFFECTS
// ============================================

function initCardEffects() {
    const cards = document.querySelectorAll('.course-card, .problem-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function (e) {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function (e) {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ============================================
// CODE WINDOW TYPING ANIMATION
// ============================================

function initCodeAnimation() {
    const codeWindow = document.querySelector('.code-window');

    if (!codeWindow) return;

    // Add a subtle floating animation
    let direction = 1;
    let position = 0;

    setInterval(() => {
        position += direction * 0.5;

        if (position > 10 || position < -10) {
            direction *= -1;
        }

        codeWindow.style.transform = `perspective(1000px) rotateY(-5deg) translateY(${position}px)`;
    }, 50);
}

// ============================================
// CTA BUTTON TRACKING
// ============================================

function initCTATracking() {
    const ctaButtons = document.querySelectorAll('.btn-primary');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            // Add click animation
            this.style.transform = 'scale(0.95)';

            setTimeout(() => {
                this.style.transform = '';
            }, 150);

            // You can add analytics tracking here
            console.log('CTA Button clicked:', this.textContent);
        });
    });
}

// ============================================
// LOADING PERFORMANCE
// ============================================

function optimizeImages() {
    // Add lazy loading to images
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// SOCIAL PROOF ANIMATION
// ============================================

function initSocialProof() {
    const avatars = document.querySelectorAll('.avatar');

    avatars.forEach((avatar, index) => {
        // Add staggered animation
        setTimeout(() => {
            avatar.style.animation = 'fadeInScale 0.5s ease-out forwards';
        }, index * 100);
    });
}

// Add the animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// FLOATING ELEMENTS
// ============================================

function initFloatingElements() {
    // Add floating animation to certain elements
    const floatingElements = document.querySelectorAll('.course-number');

    floatingElements.forEach(element => {
        const randomDelay = Math.random() * 2;
        const randomDuration = 3 + Math.random() * 2;

        element.style.animation = `float ${randomDuration}s ease-in-out ${randomDelay}s infinite`;
    });
}

// Add float animation
const floatStyle = document.createElement('style');
floatStyle.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
    }
`;
document.head.appendChild(floatStyle);

// ============================================
// INITIALIZE ALL FUNCTIONS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Initializing AI-Powered Laravel 12 Landing Page...');

    // Core animations and interactions
    initScrollAnimations();
    initSmoothScrolling();
    initCountdown();

    // Visual effects
    initParallax();
    initCardEffects();
    initCodeAnimation();
    initFloatingElements();

    // User interactions
    initCTATracking();
    initSocialProof();

    // Performance optimizations
    optimizeImages();

    console.log('✅ Landing page initialized successfully!');
});

// ============================================
// HANDLE WINDOW RESIZE
// ============================================

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        console.log('Window resized, recalculating layouts...');
        // Add any resize-specific logic here
    }, 250);
});

// ============================================
// PERFORMANCE MONITORING
// ============================================

window.addEventListener('load', () => {
    // Check page load performance
    const perfData = performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

    console.log(`📊 Page loaded in ${pageLoadTime}ms`);

    // You can send this to analytics
    if (pageLoadTime > 3000) {
        console.warn('⚠️ Page load time is above 3 seconds. Consider optimization.');
    }
});

// ============================================
// SYLLABUS MODAL FUNCTIONALITY
// ============================================

const courseData = {
    'php8': {
        title: 'Fundamental PHP 8',
        description: 'Bangun fondasi yang kokoh dengan PHP 8 modern. Kelas ini dirancang untuk pemula yang ingin memahami konsep dasar pemrograman server-side.',
        syllabus: [
            'Pengenalan & Instalasi Environment (XAMPP/Laragon)',
            'Basic Syntax, Variable & Tipe Data',
            'Operator & Logic Control Structure',
            'Perulangan (Looping) & Array Manipulation',
            'Function & Type Hinting di PHP 8',
            'Superglobal Variables & Form Handling',
            'PHP 8 New Features (Named Arguments, Union Types)'
        ]
    },
    'oop': {
        title: 'Object-Oriented Programming (OOP) PHP',
        description: 'Kuasai paradigma OOP standar industri. Materi ini wajib bagi kamu yang ingin lanjut mempelajari Framework Laravel.',
        syllabus: [
            'Konsep Dasar Class & Object',
            'Constructor & Destructor',
            'Inheritance (Pewarisan)',
            'Visibility (Public, Private, Protected)',
            'Abstract Class & Interface',
            'Namespace & Autoloading (Composer)',
            'Trait & Anonymous Class'
        ]
    },
    'olx': {
        title: 'Studi Kasus OLX Clone',
        description: 'Praktek langsung membangun aplikasi web marketplace barang bekas dari nol dengan bantuan AI tools.',
        syllabus: [
            'Perancangan Database & Model',
            'Authentication & Authorization',
            'CRUD Produk & Upload Gambar Multiple',
            'Implementasi Fitur Pencarian & Filter',
            'Integrasi Lokasi & Wilayah',
            'Windsurf AI: Generating Code Logic',
            'Deployment ke Hosting'
        ]
    },
    'laravel11': {
        title: 'Laravel 11 Fullstack',
        description: 'Panduan lengkap Framework Laravel 11. Membahas fitur-fitur core hingga best practice struktur aplikasi.',
        syllabus: [
            'Instalasi & Struktur Folder Laravel 11',
            'Routing & Controller',
            'Blade Templating Engine',
            'Database Migration & Seeding',
            'Eloquent ORM & Relationships',
            'Form Validation & Request Handling',
            'Middleware & Security'
        ]
    },
    'laravel12': {
        title: 'Laravel 12 Master (HRIS)',
        description: 'Deep dive ke Laravel 12 dengan studi kasus kompleks membuat Sistem Informasi SDM (HRIS) perusahaan.',
        syllabus: [
            'Laravel 12 New Features Overview',
            'HRIS Database Design (Multi-tenant)',
            'Module Management Karyawan',
            'Sistem Absensi & Payroll',
            'Role & Permission Management',
            'Advanced Eloquent & Performance Tuning',
            'Testing & Deployment'
        ]
    },
    'pos': {
        title: 'AI-Driven Restoran App',
        description: 'Membuat aplikasi Point of Sales (Kasir) restoran dengan fitur cerdas menggunakan Github Copilot.',
        syllabus: [
            'Analisa Kebutuhan Sistem POS',
            'Database Design untuk Transaksi & Stok',
            'Backend API Development',
            'Frontend Integration',
            'Copilot AI: Suggesting Complex Logic',
            'Realtime Order Notification',
            'Laporan Penjualan & Grafik'
        ]
    },
    'filament': {
        title: 'Filament Mastery',
        description: 'Cara tercepat membuat Dashboard Admin yang elegan menggunakan FilamentPHP. Hemat waktu coding hingga 80%.',
        syllabus: [
            'Instalasi Filament & Konfigurasi Dasar',
            'Resource Management (CRUD Generator)',
            'Form Builder & Table Builder',
            'Custom Action & Bulk Actions',
            'Widgets & Dashboard Metrics',
            'Relation Manager',
            'Customizing Filament Theme'
        ]
    },
    'career': {
        title: 'Strategi Karir Full Stack Web Developer',
        description: 'Roadmap langkah demi langkah menembus industri tech. Pelajari cara membuat CV yang dilirik recruiter dan strategi negosiasi gaji.',
        syllabus: [
            'Memahami Jalur Karir Developer',
            'Membuat CV & Portfolio yang Menjual',
            'Tips Wawancara HR & User',
            'Strategi Negosiasi Gaji',
            'Remote Work Mastery',
            'Freelancing vs Fulltime'
        ]
    },
    'branding': {
        title: 'Membangun Personal Branding untuk Programmer',
        description: 'Cara menonjol di antara ribuan developer lain. Bangun reputasi online yang kuat melalui LinkedIn dan GitHub.',
        syllabus: [
            'Pentingnya Personal Branding',
            'Optimasi Profil LinkedIn',
            'Membangun Portfolio di GitHub',
            'Content Creation untuk Developer',
            'Networking di Komunitas Tech',
            'Studi Kasus Developer Sukses'
        ]
    },
    'english': {
        title: 'English For Developer',
        description: 'Kuasai istilah teknis dan percakapan profesional. Tingkatkan kepercayaan diri untuk bekerja di lingkungan internasional.',
        syllabus: [
            'Technical Vocabulary',
            'Reading Documentation',
            'Writing Clean Code Comments',
            'Daily Standup & Meeting Expressions',
            'Job Interview in English',
            'Email Communication'
        ]
    }
};

function openSyllabus(courseId) {
    const modal = document.getElementById('syllabusModal');
    const data = courseData[courseId];

    if (!data) return;

    // Populate Data
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalDesc').textContent = data.description;

    const syllabusBody = document.getElementById('modalSyllabus');
    syllabusBody.innerHTML = ''; // Clear previous content

    data.syllabus.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item}</td>
        `;
        syllabusBody.appendChild(row);
    });

    // Show Modal
    modal.style.display = 'block';
    // Small delay to allow display:block to apply before adding opacity class for transition
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);

    // Add event listener to close on click outside
    window.addEventListener('click', outsideClick);
}

function closeSyllabus() {
    const modal = document.getElementById('syllabusModal');
    modal.classList.remove('show');

    // Wait for transition to finish before hiding
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);

    window.removeEventListener('click', outsideClick);
}

function outsideClick(e) {
    const modal = document.getElementById('syllabusModal');
    if (e.target == modal) {
        closeSyllabus();
    }
}
