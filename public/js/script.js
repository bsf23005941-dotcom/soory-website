/* =============================================
   SORRY WEBSITE — PREMIUM JAVASCRIPT
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    // ===== INITIALIZE AOS =====
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 80
    });

    // ===== PRELOADER =====
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.getElementById('preloader').classList.add('loaded');
        }, 1500);
    });

    // ===== SET CURRENT YEAR =====
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ===== SMOOTH SCROLLING FOR NAV LINKS =====
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Close mobile nav
                const navCollapse = document.querySelector('.navbar-collapse');
                if (navCollapse.classList.contains('show')) {
                    new bootstrap.Collapse(navCollapse).hide();
                }
            }
        });
    });

    // ===== ACTIVE NAV LINK ON SCROLL =====
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // ===== FLOATING PARTICLES =====
    function createParticles() {
        const container = document.getElementById('particles');
        const colors = [
            'rgba(231, 76, 139, 0.4)',
            'rgba(179, 136, 255, 0.3)',
            'rgba(255, 107, 107, 0.3)',
            'rgba(255, 215, 0, 0.2)',
            'rgba(255, 111, 167, 0.3)'
        ];

        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            const size = Math.random() * 5 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
            particle.style.animationDelay = (Math.random() * 10) + 's';
            particle.style.boxShadow = `0 0 ${size * 2}px ${colors[Math.floor(Math.random() * colors.length)]}`;
            container.appendChild(particle);
        }
    }
    createParticles();

    // ===== FORGIVE BUTTON =====
    const forgiveBtn = document.getElementById('forgiveBtn');
    forgiveBtn.addEventListener('click', () => {
        // Explosion of confetti
        createConfetti(150);

        // Start floating hearts
        startHeartRain();

        // Scroll to the next section
        setTimeout(() => {
            document.getElementById('us').scrollIntoView({ behavior: 'smooth' });
        }, 1000);
    });

    // ===== ACCEPT BUTTON =====
    const acceptBtn = document.getElementById('acceptBtn');
    acceptBtn.addEventListener('click', () => {
        // Show celebration overlay
        const celebration = document.getElementById('celebration');
        celebration.classList.remove('d-none');

        // Big confetti burst
        createConfetti(300);
        startHeartRain();

        // Auto-hide after 6 seconds
        setTimeout(() => {
            celebration.classList.add('d-none');
        }, 6000);
    });

    // ===== CONFETTI EFFECT =====
    function createConfetti(count) {
        const colors = [
            '#e74c8b', '#ff6fa7', '#b388ff', '#ff6b6b',
            '#ffd700', '#ff4081', '#7c4dff', '#ff80ab',
            '#ea80fc', '#ff5252', '#ffab40'
        ];

        for (let i = 0; i < count; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti-piece');
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.width = (Math.random() * 10 + 5) + 'px';
            confetti.style.height = (Math.random() * 6 + 4) + 'px';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.animationDelay = (Math.random() * 1) + 's';
            confetti.style.opacity = Math.random() * 0.7 + 0.3;
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 6000);
        }
    }

    // ===== HEART RAIN =====
    let heartInterval;
    function startHeartRain() {
        if (heartInterval) return; // Prevent multiple intervals

        const hearts = ['❤️', '💕', '💖', '💗', '💘', '💝', '🌹', '✨'];

        heartInterval = setInterval(() => {
            const heart = document.createElement('div');
            heart.classList.add('floating-heart');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.fontSize = (Math.random() * 20 + 14) + 'px';
            heart.style.animationDuration = (Math.random() * 4 + 3) + 's';
            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 7000);
        }, 250);

        // Stop after 15 seconds
        setTimeout(() => {
            clearInterval(heartInterval);
            heartInterval = null;
        }, 15000);
    }

    // ===== TYPEWRITER EFFECT FOR HERO TITLE =====
    // (Adds a subtle glow animation on the title)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.addEventListener('mouseover', () => {
            heroTitle.style.filter = 'drop-shadow(0 0 20px rgba(231, 76, 139, 0.5))';
        });
        heroTitle.addEventListener('mouseout', () => {
            heroTitle.style.filter = 'none';
        });
    }

    // ===== PARALLAX EFFECT ON HERO =====
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero-section');
        if (hero) {
            const scrolled = window.scrollY;
            hero.style.backgroundPositionY = scrolled * 0.3 + 'px';
        }
    });

    // ===== INTERSECTION OBSERVER FOR COUNTER ANIMATIONS =====
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reason-card, .letter-card, .promise-card').forEach(el => {
        observer.observe(el);
    });

});
