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
    initFaqAccordion();

    // Performance optimizations
    optimizeImages();

    console.log('✅ Landing page initialized successfully!');
});

// ============================================
// FAQ ACCORDION
// ============================================

function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (question && answer) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        if (otherAnswer) {
                            otherAnswer.style.maxHeight = null;
                        }
                    }
                });

                // Toggle current item
                item.classList.toggle('active');
                if (!isActive) {
                    answer.style.maxHeight = answer.scrollHeight + "px";
                } else {
                    answer.style.maxHeight = null;
                }
            });
        }
    });
}

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
        title: 'Modern PHP 8 & Database Mastery',
        description: 'Pelajari fondasi utama bahasa pemrograman PHP versi terbaru dan teknik pengelolaan database. Inilah modal utama kamu sebelum menjadi developer profesional.',
        syllabus: [
            {
                topic: "PHP 8 dan MySQL: Panduan CRUD Lengkap untuk Pemula",
                materials: [
                    { title: "Introduction", duration: "04:14" },
                    { title: "PHPMyAdmin", duration: "08:12" },
                    { title: "Create Table", duration: "08:46" },
                    { title: "Alter Table", duration: "04:41" },
                    { title: "Insert Data", duration: "13:18" },
                    { title: "Select", duration: "12:45" },
                    { title: "Select Filter", duration: "06:51" },
                    { title: "Update", duration: "11:18" },
                    { title: "Delete", duration: "04:41" },
                    { title: "Pengenalan MySQLi", duration: "05:07" },
                    { title: "Mengkoneksikan database", duration: "12:51" },
                    { title: "Select Query", duration: "09:00" },
                    { title: "Menampilkan data", duration: "08:53" },
                    { title: "Menampilkan data detail", duration: "10:50" },
                    { title: "Menampilkan data detail", duration: "10:32" },
                    { title: "Form Tambah Data", duration: "14:33" },
                    { title: "Insert data", duration: "13:49" },
                    { title: "Form Update", duration: "12:53" },
                    { title: "Update", duration: "05:27" },
                    { title: "Delete", duration: "06:52" },
                    { title: "Search", duration: "13:56" },
                    { title: "Pendahuluan & Connection", duration: "08:51" },
                    { title: "Insert", duration: "10:16" },
                    { title: "List & Search", duration: "11:09" },
                    { title: "Detail", duration: "04:46" },
                    { title: "Update & Delete", duration: "06:17" }
                ]
            }
        ]
    },
    'git': {
        title: 'Professional Workflow dengan Git',
        description: 'Kuasai cara mengelola kode dan kolaborasi tim menggunakan Git. Kamu akan belajar standar kerja yang digunakan oleh tim developer di perusahaan besar.',
        syllabus: [
            {
                topic: "Belajar Git Pemula",
                materials: [
                    { title: "GIT Pendahuluan", duration: "11:40" },
                    { title: "GIT Panduan Instalasi GIT", duration: "03:38" },
                    { title: "GIT Macam-macam Perintah GIT Dasar", duration: "02:44" },
                    { title: "GIT Menginisialisasi project dengan git init dan mencoba clone", duration: "06:12" },
                    { title: "GIT Menambahkan file baru, dan melakukan git add", duration: "03:47" },
                    { title: "GIT Reset perubahan file dengan git reset", duration: "01:54" },
                    { title: "GIT Melakukan commit, mempraktekan diff dan log", duration: "06:51" },
                    { title: "GIT Melakukan unggah file dengan git push", duration: "08:52" },
                    { title: "GIT Melakukan unduh file dengan git pull", duration: "03:16" },
                    { title: "GIT Bermain main dengan fetch dan branch", duration: "05:21" },
                    { title: "GIT Membuat branch baru, melakukan checkout", duration: "07:31" },
                    { title: "GIT Menyatukan branch satu dengan lainnya, git merge", duration: "03:44" },
                    { title: "GIT Menyelesaikan Konflik pada GIT", duration: "07:23" },
                    { title: "GIT Menandai milestone project dengan git tag", duration: "04:21" }
                ]
            }
        ]
    },
    'oop': {
        title: 'Mastering OOP PHP (Object Oriented Programming)',
        description: 'Pelajari cara menulis kode yang rapi, terstruktur, dan mudah dikembangkan. Konsep ini adalah kunci utama untuk memahami kecanggihan framework Laravel.',
        syllabus: [
            {
                topic: "Pengenalan OOP",
                materials: [
                    { title: "Apa itu OOP", duration: "09:05" },
                    { title: "Cara Mendefinisikan Class", duration: "08:06" },
                    { title: "Memahami Instance Object", duration: "05:16" },
                    { title: "Property pada Class OOP", duration: "10:37" },
                    { title: "Method pada Class OOP", duration: "07:32" },
                    { title: "Menggunakan Object", duration: "08:54" },
                    { title: "Mengenal Inheritance", duration: "05:39" },
                    { title: "Mendefinisikan Subclass", duration: "08:39" }
                ]
            },
            {
                topic: "MATERI LANJUTAN",
                materials: [
                    { title: "Extend dan Override", duration: "09:52" },
                    { title: "Visibilitas Object – Encapsulation", duration: "14:24" },
                    { title: "Setter dan Getter", duration: "08:59" },
                    { title: "Static Property dan Method", duration: "10:14" },
                    { title: "Pewarisan Static Property dan Method", duration: "08:07" },
                    { title: "Constant Class", duration: "06:01" },
                    { title: "Merujuk Parent Class", duration: "09:45" },
                    { title: "Construct Method", duration: "06:57" },
                    { title: "Construct Argument", duration: "08:05" },
                    { title: "Destruct Method", duration: "07:30" },
                    { title: "Clone Method", duration: "05:50" },
                    { title: "Autoload Method", duration: "08:50" },
                    { title: "PHP Namespace Overview", duration: "04:17" },
                    { title: "Menggunakan Namespace", duration: "07:18" },
                    { title: "Menggunakan Composer", duration: "08:19" },
                    { title: "Penjelasan Interface", duration: "04:50" },
                    { title: "Membuat Interface", duration: "06:35" },
                    { title: "Penjelasan Trait", duration: "03:11" },
                    { title: "Membuat Trait", duration: "03:55" },
                    { title: "Penjelasan Abstract Class", duration: "02:48" },
                    { title: "Membuat Abstract Class", duration: "04:11" },
                    { title: "Penjelasan Type Hint", duration: "06:04" },
                    { title: "Penjelasan Strict Declaration", duration: "04:49" },
                    { title: "Penjelasan Return Type", duration: "07:15" },
                    { title: "Penjelasan Closure", duration: "07:41" },
                    { title: "Membuat Closure", duration: "08:48" }
                ]
            }
        ]
    },
    'laravel11': {
        title: 'Membangun Marketplace dengan AI Assist',
        description: 'Panduan lengkap Framework Laravel 11. Membahas fitur-fitur core hingga best practice struktur aplikasi.',
        syllabus: [
            {
                topic: "Getting Started",
                materials: [
                    { title: "Instalasi Laravel 11", duration: "10:00" },
                    { title: "Struktur Folder & Konfigurasi", duration: "15:00" }
                ]
            },
            {
                topic: "Core Features",
                materials: [
                    { title: "Routing & Controller", duration: "25:00" },
                    { title: "Blade Templating Engine", duration: "30:00" },
                    { title: "Request & Validation", duration: "20:00" }
                ]
            },
            {
                topic: "Database & Security",
                materials: [
                    { title: "Migration & Seeding", duration: "20:00" },
                    { title: "Eloquent ORM", duration: "35:00" },
                    { title: "Middleware & Authentication", duration: "25:00" }
                ]
            }
        ]
    },
    // Dummy data for other courses to maintain functionality
    'laravel12': {
        title: 'Laravel 11: The Ultimate Fullstack Framework',
        description: 'Deep dive ke Laravel 12 dengan studi kasus kompleks membuat Sistem Informasi SDM (HRIS) perusahaan.',
        syllabus: [
            {
                topic: "Laravel 12 Overview",
                materials: [
                    { title: "What's New in Laravel 12", duration: "15:00" },
                    { title: "Upgrade Guide", duration: "10:00" }
                ]
            },
            {
                topic: "HRIS Module 1",
                materials: [
                    { title: "Database Architecture", duration: "30:00" },
                    { title: "Employee Management", duration: "40:00" }
                ]
            }
        ]
    },
    'pos': {
        title: 'Filament Mastery: Membuat Admin Panel Kilat',
        description: 'Membuat aplikasi Point of Sales (Kasir) restoran dengan fitur cerdas menggunakan Github Copilot.',
        syllabus: [
            {
                topic: "POS Architecting",
                materials: [{ title: "System Design", duration: "20:00" }]
            }
        ]
    },
    'filament': {
        title: 'Proyek Enterprise: Sistem HRIS Laravel 12',
        description: 'Cara tercepat membuat Admin Panel yang elegan dan powerful.',
        syllabus: [
            {
                topic: "Filament Basics",
                materials: [{ title: "Installation & Resource", duration: "25:00" }]
            }
        ]
    },
    'dummy1': {
        title: 'AI-Driven SaaS: Aplikasi Restoran & QR Order',
        description: 'Materi baru yang akan segera hadir untuk melengkapi skillmu.',
        syllabus: [
            {
                topic: "Introduction",
                materials: [
                    { title: "Coming Soon", duration: "00:00" },
                    { title: "Materi Segera Hadir", duration: "00:00" }
                ]
            }
        ]
    },
    'dummy2': {
        title: 'Deployment Expert: Meng-online-kan Aplikasi',
        description: 'Materi baru yang akan segera hadir untuk melengkapi skillmu.',
        syllabus: [
            {
                topic: "Introduction",
                materials: [
                    { title: "Coming Soon", duration: "00:00" },
                    { title: "Materi Segera Hadir", duration: "00:00" }
                ]
            }
        ]
    },
    'career': {
        title: 'Strategi Karir Full Stack Web Developer',
        description: 'Roadmap langkah demi langkah menembus industri tech.',
        syllabus: [
            {
                topic: "Career Path",
                materials: [{ title: "Web Dev Roadmap", duration: "20:00" }]
            }
        ]
    },
    'branding': {
        title: 'Membangun Personal Branding untuk Programmer',
        description: 'Cara menonjol di antara ribuan developer lain.',
        syllabus: [
            {
                topic: "Branding Basics",
                materials: [{ title: "Why Branding Matters", duration: "15:00" }]
            }
        ]
    },
    'english': {
        title: 'English For Developer',
        description: 'Kuasai istilah teknis dan percakapan profesional.',
        syllabus: [
            {
                topic: "Basic Tech English",
                materials: [{ title: "Common Terms", duration: "15:00" }]
            }
        ]
    }
};

function formatDuration(minutesStr) {
    // Helper to format "mm:ss" string to total minutes if needed,
    // but here we just pass it through or format nicely.
    // Actually we need to sum "mm:ss".
    return minutesStr;
}

function calculateTotalDuration(syllabus) {
    let totalSeconds = 0;
    syllabus.forEach(topic => {
        topic.materials.forEach(material => {
            const [mins, secs] = material.duration.split(':').map(Number);
            totalSeconds += (mins * 60) + secs;
        });
    });

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    return `${hours > 0 ? hours + ' Jam ' : ''}${minutes} Menit`;
}

function openSyllabus(courseId) {
    const modal = document.getElementById('syllabusModal');
    const data = courseData[courseId];

    if (!data) return;

    // Populate Title & Desc
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalDesc').textContent = data.description;

    // Calculate Total Duration
    const totalDuration = calculateTotalDuration(data.syllabus);
    document.getElementById('totalDuration').textContent = totalDuration;

    // Build Accordion
    const accordionContainer = document.getElementById('syllabusAccordion');
    accordionContainer.innerHTML = ''; // Clear previous

    data.syllabus.forEach((topic, index) => {
        // Create Accordion Item
        const itemDiv = document.createElement('div');
        itemDiv.className = 'accordion-item';

        // Header
        const headerBtn = document.createElement('button');
        headerBtn.className = 'accordion-header';
        headerBtn.innerHTML = `
            <span class="accordion-title">${topic.topic}</span>
            <i class="fa-solid fa-chevron-down accordion-icon"></i>
        `;

        // Body
        const bodyDiv = document.createElement('div');
        bodyDiv.className = 'accordion-body';

        // Materials List
        const listUl = document.createElement('ul');
        listUl.className = 'materials-list';

        topic.materials.forEach(material => {
            const li = document.createElement('li');
            li.className = 'material-item';
            li.innerHTML = `
                <div class="material-title">
                    <i class="fa-solid fa-circle-play material-icon"></i>
                    <span>${material.title}</span>
                </div>
                <span class="material-duration">${material.duration}</span>
            `;
            listUl.appendChild(li);
        });

        bodyDiv.appendChild(listUl);
        itemDiv.appendChild(headerBtn);
        itemDiv.appendChild(bodyDiv);

        // Click Event
        headerBtn.addEventListener('click', () => {
            const isActive = itemDiv.classList.contains('active');

            // Close other items (Accordion behavior)
            const allItems = accordionContainer.querySelectorAll('.accordion-item');
            allItems.forEach(otherItem => {
                if (otherItem !== itemDiv && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherBody = otherItem.querySelector('.accordion-body');
                    otherBody.style.maxHeight = null;
                }
            });

            itemDiv.classList.toggle('active');

            if (!isActive) {
                bodyDiv.style.maxHeight = bodyDiv.scrollHeight + "px";
            } else {
                bodyDiv.style.maxHeight = null;
            }
        });

        accordionContainer.appendChild(itemDiv);

        // Auto-open first item
        if (index === 0) {
            // We need to wait for the element to be in the DOM to calculate scrollHeight correctly if we rely on it immediately,
            // but since we are appending line by line, it is in the DOM (in the container which is in the modal).
            // However, the modal is display:none initially.
            // We'll set the active class, and handle the height after the modal is shown.
            itemDiv.classList.add('active');
        }
    });

    // Show Modal
    modal.style.display = 'block';

    // Recalculate height for the active item now that modal is visible
    const activeItem = accordionContainer.querySelector('.accordion-item.active');
    if (activeItem) {
        const body = activeItem.querySelector('.accordion-body');
        body.style.maxHeight = body.scrollHeight + "px";
    }

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

    setTimeout(() => {
        modal.style.display = 'none';
        // Reset Accordions? Not strictly necessary as they re-render on open.
    }, 300);

    window.removeEventListener('click', outsideClick);
}

function outsideClick(e) {
    const modal = document.getElementById('syllabusModal');
    if (e.target == modal) {
        closeSyllabus();
    }
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Toggle icon
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }
});
