// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scrolling - Only for anchor links (not file downloads)
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
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    }
    
    lastScroll = currentScroll;
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', activateNavLink);


// Form submission handler
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    // For now, we'll just show an alert
    alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
    
    // Reset form
    contactForm.reset();
    
    // In a real application, you might want to:
    // - Send data to a backend API
    // - Use a service like Formspree, EmailJS, or similar
    // - Show a success message in the UI instead of alert
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .skill-category, .stat-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add active class to nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Horizontal Scroll Functionality
const scrollWrapper = document.getElementById('scrollWrapper');
const scrollLeftBtn = document.getElementById('scrollLeft');

// Ensure scroll starts at the first section
if (scrollWrapper) {
    scrollWrapper.scrollTop = 0;
    // Force scroll to start position on load
    window.addEventListener('load', () => {
        scrollWrapper.scrollTop = 0;
    });
    // Also set on DOMContentLoaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            scrollWrapper.scrollTop = 0;
        });
    } else {
        scrollWrapper.scrollTop = 0;
    }
}
const scrollRightBtn = document.getElementById('scrollRight');


// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section && scrollWrapper) {
        const sectionTop = section.offsetTop;
        scrollWrapper.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

// Update navigation links for horizontal scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        scrollToSection(targetId);
        
        // Close mobile menu if open
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Hide horizontal arrow buttons for vertical scrolling
if (scrollLeftBtn) {
    scrollLeftBtn.style.display = 'none';
}
if (scrollRightBtn) {
    scrollRightBtn.style.display = 'none';
}

// Scroll event listener for updating active nav link
if (scrollWrapper) {
    scrollWrapper.addEventListener('scroll', () => {
        scrollWrapper.classList.add('scrolling');
    }, { passive: true });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active nav link
    updateActiveNavLink();
});

// Update active nav link on vertical scroll
function updateActiveNavLink() {
    if (!scrollWrapper) return;
    
    const scrollPosition = scrollWrapper.scrollTop;
    const windowHeight = window.innerHeight;
    
    // Find which section is currently most visible in the viewport
    let currentSection = null;
    let maxVisibleRatio = 0;
    
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        // Calculate how much of the section is visible
        const viewportTop = scrollPosition;
        const viewportBottom = scrollPosition + windowHeight;
        const sectionBottom = sectionTop + sectionHeight;
        
        // Calculate visible portion
        const visibleTop = Math.max(viewportTop, sectionTop);
        const visibleBottom = Math.min(viewportBottom, sectionBottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibleRatio = visibleHeight / Math.min(windowHeight, sectionHeight);
        
        if (visibleRatio > maxVisibleRatio) {
            maxVisibleRatio = visibleRatio;
            currentSection = section;
        }
    });
    
    // Update active class on nav links
    sections.forEach((section) => {
        const navLink = document.querySelector(`.nav-link[href="#${section.getAttribute('id')}"]`);
        if (navLink) {
            navLink.classList.remove('active');
            if (currentSection && section === currentSection) {
                navLink.classList.add('active');
            }
        }
    });
    
    // Set initial active state if no section is found
    if (!currentSection && sections.length > 0 && scrollPosition < windowHeight) {
        const firstNavLink = document.querySelector(`.nav-link[href="#${sections[0].getAttribute('id')}"]`);
        if (firstNavLink) {
            firstNavLink.classList.add('active');
        }
    }
}

if (scrollWrapper) {
    scrollWrapper.addEventListener('scroll', updateActiveNavLink);
}

// Remove old vertical scroll listeners
window.removeEventListener('scroll', activateNavLink);
window.removeEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    // Remove vertical scroll navbar effect
});

// Background code animation is handled by CSS animations

