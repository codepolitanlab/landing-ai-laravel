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
        title: 'Fundamental PHP 8',
        description: 'Bangun fondasi yang kokoh dengan PHP 8 modern. Kelas ini dirancang untuk pemula yang ingin memahami konsep dasar pemrograman server-side.',
        syllabus: [
            {
                topic: "Persiapan & Dasar",
                materials: [
                    { title: "Pengenalan & Instalasi Environment", duration: "10:00" },
                    { title: "Basic Syntax & Variable", duration: "15:00" },
                    { title: "Tipe Data & Operator", duration: "20:00" }
                ]
            },
            {
                topic: "Control Structure",
                materials: [
                    { title: "Logic Control Structure (If/Else, Switch)", duration: "25:00" },
                    { title: "Perulangan (For, While, Foreach)", duration: "20:00" }
                ]
            },
            {
                topic: "Fungsi & Fitur Modern",
                materials: [
                    { title: "Function & Type Hinting", duration: "30:00" },
                    { title: "Superglobal Variables", duration: "15:00" },
                    { title: "PHP 8 New Features", duration: "20:00" }
                ]
            }
        ]
    },
    'oop': {
        title: 'Object-Oriented Programming (OOP) PHP',
        description: 'Kuasai paradigma OOP standar industri. Materi ini wajib bagi kamu yang ingin lanjut mempelajari Framework Laravel.',
        syllabus: [
            {
                topic: "Konsep Dasar OOP",
                materials: [
                    { title: "Class & Object", duration: "15:00" },
                    { title: "Property & Method", duration: "20:00" },
                    { title: "Constructor & Destructor", duration: "15:00" }
                ]
            },
            {
                topic: "Advanced OOP",
                materials: [
                    { title: "Inheritance (Pewarisan)", duration: "25:00" },
                    { title: "Encapsulation & Visibility", duration: "20:00" },
                    { title: "Abstract Class & Interface", duration: "30:00" }
                ]
            },
            {
                topic: "Modern PHP OOP",
                materials: [
                    { title: "Namespace & Autoloading", duration: "15:00" },
                    { title: "Trait & Anonymous Class", duration: "20:00" }
                ]
            }
        ]
    },
    'olx': {
        title: 'Studi Kasus OLX Clone',
        description: 'Praktek langsung membangun aplikasi web marketplace barang bekas dari nol dengan bantuan AI tools.',
        syllabus: [
            {
                topic: "Perancangan Sistem",
                materials: [
                    { title: "Analisis Kebutuhan", duration: "15:00" },
                    { title: "Database Design & ERD", duration: "30:00" }
                ]
            },
            {
                topic: "Backend Development",
                materials: [
                    { title: "Setup Laravel & Auth", duration: "20:00" },
                    { title: "CRUD Produk", duration: "45:00" },
                    { title: "Upload Gambar Multiple", duration: "25:00" }
                ]
            },
            {
                topic: "Frontend & AI Integration",
                materials: [
                    { title: "Search & Filter Feature", duration: "30:00" },
                    { title: "Windsurf AI Integration", duration: "20:00" },
                    { title: "Deployment", duration: "15:00" }
                ]
            }
        ]
    },
    'laravel11': {
        title: 'Laravel 11 Fullstack',
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
        title: 'Laravel 12 Master (HRIS)',
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
        title: 'AI-Driven Restoran App',
        description: 'Membuat aplikasi Point of Sales (Kasir) restoran dengan fitur cerdas menggunakan Github Copilot.',
        syllabus: [
            {
                topic: "POS Architecting",
                materials: [{ title: "System Design", duration: "20:00" }]
            }
        ]
    },
    'filament': {
        title: 'Filament Mastery',
        description: 'Cara tercepat membuat Admin Panel yang elegan dan powerful.',
        syllabus: [
            {
                topic: "Filament Basics",
                materials: [{ title: "Installation & Resource", duration: "25:00" }]
            }
        ]
    },
    'dummy1': {
        title: 'New Course Update 1',
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
        title: 'New Course Update 2',
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
        title: 'Personal Branding',
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
