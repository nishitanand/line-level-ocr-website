// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
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

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 1px 2px 0 rgb(0 0 0 / 0.05)';
        }

        lastScrollY = currentScrollY;
    });

    // Animate stats on scroll
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats(entry.target);
            }
        });
    }, observerOptions);

    // Observe stats elements
    document.querySelectorAll('.stat-number, .big-number').forEach(stat => {
        observer.observe(stat);
    });

    // Add click effect to cards
    document.querySelectorAll('.contribution-card, .pipeline-card, .stat').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Mobile menu toggle (if needed)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});

// Copy BibTeX to clipboard
function copyBibtex() {
    const bibtexText = `@article{vempati2024lineocr,
  title={Why Stop at Words? Unveiling the Bigger Picture through Line-Level OCR},
  author={Vempati, Shashank and Anand, Nishit and Talebailkar, Gaurav and Garai, Arpan and Arora, Chetan},
  journal={arXiv preprint},
  year={2024},
  institution={Indian Institute of Technology Delhi}
}`;

    // Create a temporary textarea to copy the text
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = bibtexText;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);

    // Show feedback
    const copyBtn = document.querySelector('.copy-btn');
    const originalText = copyBtn.innerHTML;
    copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    copyBtn.style.background = '#10b981';

    setTimeout(() => {
        copyBtn.innerHTML = originalText;
        copyBtn.style.background = '#2563eb';
    }, 2000);
}

// Animate numbers counting up
function animateStats(element) {
    if (element.dataset.animated) return;
    element.dataset.animated = 'true';

    const text = element.textContent;
    const hasPercent = text.includes('%');
    const hasX = text.includes('×');
    const hasPlus = text.includes('+');
    const hasMinus = text.includes('-');
    
    let number = parseFloat(text.replace(/[^0-9.]/g, ''));
    
    if (isNaN(number)) return;

    let current = 0;
    const increment = number / 30;
    const timer = setInterval(() => {
        current += increment;
        
        if (current >= number) {
            current = number;
            clearInterval(timer);
        }

        let displayValue = Math.floor(current * 10) / 10;
        let suffix = '';
        
        if (hasPercent) suffix = '%';
        if (hasX) suffix = '×';
        if (hasPlus) suffix = '+';
        if (hasMinus && number > 0) suffix = '';
        if (hasMinus && number === 1) displayValue = '-1';

        element.textContent = displayValue + suffix;
    }, 50);
}

// Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is loaded
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add typing effect to the main title (optional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Enhanced scroll animations
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.contribution-card, .result-card, .pipeline-card');
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        scrollObserver.observe(el);
    });
}

// Initialize scroll animations when DOM is ready
document.addEventListener('DOMContentLoaded', initScrollAnimations);

// Handle form submissions (if any)
function handleFormSubmission(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add your form handling logic here
        const formData = new FormData(form);
        
        // Show success message
        showNotification('Message sent successfully!', 'success');
    });
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#10b981' : '#2563eb'};
        color: white;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    // Escape key to close any open modals
    if (e.key === 'Escape') {
        // Close any open modals or overlays
        const openModals = document.querySelectorAll('.modal.open');
        openModals.forEach(modal => {
            modal.classList.remove('open');
        });
    }
    
    // Ctrl/Cmd + K for quick search (if implemented)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Open search modal if implemented
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScroll = debounce(() => {
    // Handle scroll events here
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScroll); 