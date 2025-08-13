document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Close mobile menu when clicking on links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .portfolio-item');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Service Details Functionality
    document.querySelectorAll('.tech-tag').forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.preventDefault();
            
            const portfolioItem = this.closest('.portfolio-item');
            const detailsContainer = portfolioItem.querySelector('.service-details');
            const targetId = this.dataset.target;
            const targetParagraph = detailsContainer.querySelector(`#${targetId}`);
            
            // Close any open service details
            document.querySelectorAll('.service-details').forEach(container => {
                container.classList.remove('active');
            });
            
            // Hide all paragraphs in this container
            detailsContainer.querySelectorAll('p').forEach(p => {
                p.classList.remove('active');
            });
            
            // Show the selected paragraph
            targetParagraph.classList.add('active');
            
            // Show the details container
            detailsContainer.classList.add('active');
        });
    });

    // Close button functionality
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            this.closest('.service-details').classList.remove('active');
        });
    });

    // Close service details when clicking outside content
    document.querySelectorAll('.service-details').forEach(container => {
        container.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    });
});