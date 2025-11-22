// ==========================================
// Navigation Menu Toggle & Scroll Effect
// ==========================================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Navbar Scroll Effect - toggle class
window.addEventListener('scroll', () => {
    if (!navbar) return;
    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==========================================
// Language Toggle (Arabic / English)
// ==========================================
const langToggleBtn = document.getElementById('langToggle');
const htmlElement = document.documentElement;

const translations = {
    ar: {
        'page.title': 'صالون العناية بالحيوانات الأليفة - خدمات احترافية في منزلك',
        'logo.title': 'صالون الحيوانات الأليفة',
        'nav.home': 'الرئيسية',
        'nav.about': 'من نحن',
        'nav.services': 'خدماتنا',
        'nav.gallery': 'معرض الأعمال',
        'nav.contact': 'اتصل بنا',

        'hero.title': 'العناية الاحترافية بحيوانك الأليف',
        'hero.subtitle': 'خدمات متميزة في راحة منزلك',
        'hero.ctaContact': 'احجز موعد',
        'hero.ctaServices': 'خدماتنا',

        'about.title': 'من نحن',
        'about.subtitle': 'نقدم جميع الخدمات الخاصة بالحيوانات الأليفة',
        'about.highlight': 'نحن متخصصون في تقديم خدمات العناية الشاملة لجميع أنواع الحيوانات الأليفة:',
        'about.dogs': 'الكلاب',
        'about.cats': 'القطط',
        'about.birds': 'الطيور',
        'about.others': 'القوارض الأخرى',
        'about.feature1': 'خدمات على أعلى مستوى احترافي',
        'about.feature2': 'قصات الشعر العالمية',
        'about.feature3': 'خدمات منزلية داخل المنزل',
        'about.feature4': 'نمتلك سيارة مجهزة بالكامل',

        'services.title': 'خدماتنا',
        'services.subtitle': 'نقدم مجموعة واسعة من الخدمات الاحترافية لحيوانك الأليف',
        'services.haircut.title': 'قصات الشعر العالمية',
        'services.haircut.desc': 'قصات عصرية واحترافية تناسب جميع السلالات والأنواع بأحدث التقنيات العالمية',
        'services.nails.title': 'قص الأظافر',
        'services.nails.desc': 'قص وتنظيف الأظافر بشكل آمن ومريح لحيوانك الأليف',
        'services.shower.title': 'الاستحمام والتنظيف',
        'services.shower.desc': 'حمامات كاملة باستخدام منتجات عالية الجودة مناسبة لكل نوع',
        'services.brush.title': 'تمشيط وتصفيف الشعر',
        'services.brush.desc': 'تصفيف احترافي وإزالة الشعر المتشابك والميت',
        'services.spray.title': 'العطور والتعطير',
        'services.spray.desc': 'استخدام عطور آمنة وخاصة بالحيوانات الأليفة',
        'services.teeth.title': 'العناية بالأسنان',
        'services.teeth.desc': 'تنظيف الأسنان والعناية بصحة الفم',

        'gallery.title': 'معرض أعمالنا',
        'gallery.subtitle': 'شاهد بعض من أعمالنا الاحترافية',
        'gallery.slide1': 'قصة شعر احترافية',
        'gallery.slide2': 'تنظيف وتصفيف',
        'gallery.slide3': 'قص أظافر احترافي',
        'gallery.slide4': 'استحمام ورعاية',
        'gallery.slide5': 'تصفيف عصري',
        'gallery.slide6': 'خدمات منزلية',

        'contact.title': 'اتصل بنا',
        'contact.subtitle': 'هل أنت جاهز لجعل حيوانك الأليف أسعد وأجمل؟ تواصل معنا الآن!',
        'contact.phone.title': 'اتصل بنا',
        'contact.email.title': 'البريد الإلكتروني',
        'contact.hours.title': 'ساعات العمل',
        'contact.hours.value': 'السبت - الخميس: 9 صباحاً - 9 مساءً',
        'contact.whatsapp.title': 'واتساب',
        'contact.whatsapp.cta': 'تواصل عبر واتساب',

        'form.name': 'الاسم الكامل',
        'form.phone': 'رقم الهاتف',
        'form.email': 'البريد الإلكتروني',
        'form.petType.placeholder': 'نوع الحيوان الأليف',
        'form.petType.dog': 'كلب',
        'form.petType.cat': 'قطة',
        'form.petType.bird': 'طائر',
        'form.petType.rabbit': 'أرنب',
        'form.petType.other': 'قوارض أخرى',
        'form.service.placeholder': 'نوع الخدمة المطلوبة',
        'form.service.haircut': 'قص الشعر',
        'form.service.nails': 'قص الأظافر',
        'form.service.shower': 'استحمام',
        'form.service.full': 'خدمة كاملة',
        'form.message': 'رسالتك أو ملاحظات إضافية',
        'form.submit': 'إرسال',

        'footer.brand': 'صالون الحيوانات الأليفة',
        'footer.tagline': 'نقدم أفضل خدمات العناية بالحيوانات الأليفة في راحة منزلك',
        'footer.quickLinks.title': 'روابط سريعة',
        'footer.quickLinks.home': 'الرئيسية',
        'footer.quickLinks.about': 'من نحن',
        'footer.quickLinks.services': 'خدماتنا',
        'footer.quickLinks.gallery': 'معرض الأعمال',
        'footer.services.title': 'خدماتنا',
        'footer.services.haircut': 'قصات الشعر العالمية',
        'footer.services.nails': 'قص الأظافر',
        'footer.services.shower': 'الاستحمام والتنظيف',
        'footer.services.home': 'خدمات منزلية',
        'footer.copy': '© 2024 صالون الحيوانات الأليفة. جميع الحقوق محفوظة.'
    },
    en: {
        'page.title': 'Pet Care Salon - Professional Services at Your Home',
        'logo.title': 'Pet Grooming Salon',
        'nav.home': 'Home',
        'nav.about': 'About Us',
        'nav.services': 'Services',
        'nav.gallery': 'Gallery',
        'nav.contact': 'Contact Us',

        'hero.title': 'Professional Care for Your Pet',
        'hero.subtitle': 'Premium services at the comfort of your home',
        'hero.ctaContact': 'Book Now',
        'hero.ctaServices': 'Our Services',

        'about.title': 'About Us',
        'about.subtitle': 'We provide all pet care services',
        'about.highlight': 'We specialize in providing full-care services for all kinds of pets:',
        'about.dogs': 'Dogs',
        'about.cats': 'Cats',
        'about.birds': 'Birds',
        'about.others': 'Other Small Pets',
        'about.feature1': 'Top-level professional services',
        'about.feature2': 'International haircut styles',
        'about.feature3': 'In-home mobile services',
        'about.feature4': 'Fully equipped grooming van',

        'services.title': 'Our Services',
        'services.subtitle': 'We offer a wide range of professional services for your pet',
        'services.haircut.title': 'Premium Haircuts',
        'services.haircut.desc': 'Modern, professional cuts for all breeds using the latest techniques',
        'services.nails.title': 'Nail Trimming',
        'services.nails.desc': 'Safe and comfortable nail trimming and cleaning',
        'services.shower.title': 'Bathing & Cleaning',
        'services.shower.desc': 'Full baths using high-quality products for every type',
        'services.brush.title': 'Brushing & Styling',
        'services.brush.desc': 'Professional styling and removal of tangled and dead hair',
        'services.spray.title': 'Perfumes & Fragrance',
        'services.spray.desc': 'Safe perfumes specially made for pets',
        'services.teeth.title': 'Dental Care',
        'services.teeth.desc': 'Teeth cleaning and oral health care',

        'gallery.title': 'Our Work Gallery',
        'gallery.subtitle': 'See some of our professional work',
        'gallery.slide1': 'Professional haircut',
        'gallery.slide2': 'Cleaning & grooming',
        'gallery.slide3': 'Professional nail trimming',
        'gallery.slide4': 'Bath & care',
        'gallery.slide5': 'Trendy styling',
        'gallery.slide6': 'Home services',

        'contact.title': 'Contact Us',
        'contact.subtitle': 'Ready to make your pet happier and look better? Contact us now!',
        'contact.phone.title': 'Call Us',
        'contact.email.title': 'Email',
        'contact.hours.title': 'Working Hours',
        'contact.hours.value': 'Sat - Thu: 9:00 AM - 9:00 PM',
        'contact.whatsapp.title': 'WhatsApp',
        'contact.whatsapp.cta': 'Chat on WhatsApp',

        'form.name': 'Full Name',
        'form.phone': 'Phone Number',
        'form.email': 'Email Address',
        'form.petType.placeholder': 'Type of pet',
        'form.petType.dog': 'Dog',
        'form.petType.cat': 'Cat',
        'form.petType.bird': 'Bird',
        'form.petType.rabbit': 'Rabbit',
        'form.petType.other': 'Other small pet',
        'form.service.placeholder': 'Requested service',
        'form.service.haircut': 'Haircut',
        'form.service.nails': 'Nail trimming',
        'form.service.shower': 'Bath',
        'form.service.full': 'Full service',
        'form.message': 'Your message or extra notes',
        'form.submit': 'Send',

        'footer.brand': 'Pet Grooming Salon',
        'footer.tagline': 'We offer the best pet care services at the comfort of your home',
        'footer.quickLinks.title': 'Quick Links',
        'footer.quickLinks.home': 'Home',
        'footer.quickLinks.about': 'About Us',
        'footer.quickLinks.services': 'Services',
        'footer.quickLinks.gallery': 'Gallery',
        'footer.services.title': 'Our Services',
        'footer.services.haircut': 'Premium haircuts',
        'footer.services.nails': 'Nail trimming',
        'footer.services.shower': 'Bath & cleaning',
        'footer.services.home': 'Home services',
        'footer.copy': '© 2024 Pet Grooming Salon. All rights reserved.'
    }
};

let currentLang = 'ar';

function applyTranslations(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // Update document title explicitly if key exists
    if (dict['page.title']) {
        document.title = dict['page.title'];
    }

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) {
            el.setAttribute('placeholder', dict[key]);
        }
    });

    // Update direction and html lang
    htmlElement.lang = lang === 'ar' ? 'ar' : 'en';
    htmlElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update button label
    if (langToggleBtn) {
        langToggleBtn.textContent = lang === 'ar' ? 'EN' : 'عربي';
    }
}

if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        applyTranslations(currentLang);
    });
}

// Apply default language on load
applyTranslations(currentLang);

// ==========================================
// Image Carousel
// ==========================================
class Carousel {
    constructor() {
        this.track = document.querySelector('.carousel-track');
        this.slides = Array.from(document.querySelectorAll('.carousel-slide'));
        this.nextButton = document.querySelector('.next-btn');
        this.prevButton = document.querySelector('.prev-btn');
        this.indicators = Array.from(document.querySelectorAll('.indicator'));
        this.currentIndex = 0;
        this.autoPlayInterval = null;
        
        this.init();
    }

    init() {
        // Set up button listeners
        this.nextButton.addEventListener('click', () => this.moveToNext());
        this.prevButton.addEventListener('click', () => this.moveToPrev());

        // Set up indicator listeners
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.moveToIndex(index));
        });

        // Auto play
        this.startAutoPlay();

        // Pause on hover
        const carouselContainer = document.querySelector('.carousel-container');
        carouselContainer.addEventListener('mouseenter', () => this.stopAutoPlay());
        carouselContainer.addEventListener('mouseleave', () => this.startAutoPlay());

        // Touch events for mobile swipe
        let touchStartX = 0;
        let touchEndX = 0;

        this.track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        this.track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        });
    }

    moveToIndex(index) {
        this.currentIndex = index;
        this.updateCarousel();
    }

    moveToNext() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateCarousel();
    }

    moveToPrev() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.updateCarousel();
    }

    updateCarousel() {
        const offset = -this.currentIndex * 100;
        this.track.style.transform = `translateX(${offset}%)`;

        // Update indicators
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.moveToNext();
        }, 2000); // Change slide every 2 seconds
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }

    handleSwipe(startX, endX) {
        const threshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Swipe left - show next
                this.moveToNext();
            } else {
                // Swipe right - show previous
                this.moveToPrev();
            }
        }
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Carousel();
});

// ==========================================
// Scroll to Top Button
// ==========================================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// (Contact form JS removed – site now relies on phone & WhatsApp only)

// ==========================================
// Smooth Scroll for Navigation Links
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Height of fixed navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// Intersection Observer for Animations
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.hero-content, .scroll-indicator, .section-header, .service-card, .pet-card, .feature-item, .info-card, .carousel-container, .contact-info, .footer-section'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Simple Gallery Slider
    const simpleGalleryImages = [
        { src: 'gallery/Dog1.jfif', alt: 'قصة شعر احترافية' },
        { src: 'gallery/Dog2.jfif', alt: 'تنظيف وتصفيف' },
        { src: 'gallery/Dog3.jfif', alt: 'قص أظافر احترافي' },
        { src: 'gallery/Dog7.jfif', alt: 'استحمام ورعاية' },
        { src: 'gallery/DOG6.jfif', alt: 'تصفيف عصري' },
        { src: 'gallery/dog4.jfif', alt: 'خدمات منزلية' },
        { src: 'gallery/dog5.jfif', alt: 'خدمات منزلية' },
        { src: 'gallery/cat1.jfif', alt: 'قصة شعر احترافية' },
        { src: 'gallery/cat2.jfif', alt: 'تنظيف وتصفيف' },
        { src: 'gallery/cat4.jfif', alt: 'قص أظافر احترافي' },
        { src: 'gallery/cats3.jfif', alt: 'تصفيف عصري' },
        { src: 'gallery/t6xreHxg.jfif', alt: 'خدمات منزلية' }
    ];

    const simpleImgEl = document.getElementById('simpleGalleryImage');
    const simplePrevBtn = document.querySelector('.simple-gallery-prev');
    const simpleNextBtn = document.querySelector('.simple-gallery-next');
    const simpleDots = Array.from(document.querySelectorAll('.simple-gallery-dots .simple-dot'));
    let simpleIndex = 0;

    function updateSimpleGallery(index) {
        if (!simpleImgEl) return;
        simpleIndex = (index + simpleGalleryImages.length) % simpleGalleryImages.length;
        const item = simpleGalleryImages[simpleIndex];
        simpleImgEl.src = item.src;
        simpleImgEl.alt = item.alt;

        simpleDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === simpleIndex);
        });
    }

    if (simplePrevBtn) {
        simplePrevBtn.addEventListener('click', () => {
            updateSimpleGallery(simpleIndex - 1);
        });
    }

    if (simpleNextBtn) {
        simpleNextBtn.addEventListener('click', () => {
            updateSimpleGallery(simpleIndex + 1);
        });
    }

    simpleDots.forEach((dot, i) => {
        dot.addEventListener('click', () => updateSimpleGallery(i));
    });

    // Initialize gallery
    if (simpleImgEl) {
        updateSimpleGallery(0);
    }
});

// ==========================================
// WhatsApp Direct Links
// ==========================================
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', (e) => {
        // Analytics or tracking can be added here
        console.log('WhatsApp link clicked');
    });
});

// Make entire contact cards clickable (phone & WhatsApp)
document.querySelectorAll('.info-card').forEach(card => {
    card.addEventListener('click', (e) => {
        const anchor = card.querySelector('a');
        if (!anchor) return;

        // Avoid double-handling when the actual link is clicked
        if (e.target.tagName.toLowerCase() === 'a') return;

        anchor.click();
    });
});

// ==========================================
// Loading Screen (Optional)
// ==========================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ==========================================
// Service Worker Registration (for PWA - Optional)
// ==========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment below to enable service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(err => console.log('SW registration failed'));
    });
}

// ==========================================
// Performance Optimization - Lazy Loading
// ==========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==========================================
// Console Message (Optional)
// ==========================================
console.log('%c🐾 Welcome to Pet Barber Website! 🐾', 'color: #FF6B6B; font-size: 20px; font-weight: bold;');
console.log('%cDeveloped with ❤️ for Pet Lovers', 'color: #4ECDC4; font-size: 14px;');
