/**
 * TeachInspire Landing Page - Main JavaScript
 * Handles general functionality, performance optimization, and user interactions
 */

class TeachInspireApp {
  constructor() {
    this.init();
  }
  
  init() {
    this.setupLazyLoading();
    this.setupSmoothScrolling();
    this.setupCTATracking();
    this.setupAccessibility();
    this.setupPerformanceOptimizations();
  }
  
  /**
   * Setup lazy loading for images
   */
  setupLazyLoading() {
    // Use Intersection Observer for lazy loading if supported
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });
      
      // Observe all images with loading="lazy"
      document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }
  
  /**
   * Setup smooth scrolling for anchor links
   */
  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
  
  /**
   * Setup CTA click tracking and analytics
   */
  setupCTATracking() {
    // Track primary CTA clicks
    document.querySelectorAll('.btn-primary').forEach(button => {
      button.addEventListener('click', (e) => {
        this.trackEvent('CTA_Click', {
          type: 'primary',
          text: button.textContent.trim(),
          url: button.href
        });
      });
    });
    
    // Track email contact clicks
    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
      link.addEventListener('click', (e) => {
        this.trackEvent('Contact_Click', {
          type: 'email',
          email: 'greg@teachinspire.me'
        });
      });
    });
  }
  
  /**
   * Setup accessibility enhancements
   */
  setupAccessibility() {
    // Add skip link for keyboard navigation
    this.addSkipLink();
    
    // Enhance focus management
    this.setupFocusManagement();
    
    // Add ARIA labels where needed
    this.enhanceARIA();
  }
  
  addSkipLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Aller au contenu principal';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: var(--text-primary);
      color: var(--white);
      padding: 8px;
      text-decoration: none;
      border-radius: 4px;
      z-index: 1000;
      transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }
  
  setupFocusManagement() {
    // Ensure focus is visible for keyboard users
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });
    
    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }
  
  enhanceARIA() {
    // Add main content landmark
    const heroSection = document.querySelector('.hero');
    if (heroSection && !document.getElementById('main-content')) {
      heroSection.id = 'main-content';
      heroSection.setAttribute('role', 'main');
    }
    
    // Enhance section headings with proper hierarchy
    document.querySelectorAll('section').forEach((section, index) => {
      if (!section.getAttribute('aria-labelledby')) {
        const heading = section.querySelector('h2');
        if (heading && !heading.id) {
          heading.id = `section-heading-${index + 1}`;
          section.setAttribute('aria-labelledby', heading.id);
        }
      }
    });
  }
  
  /**
   * Setup performance optimizations
   */
  setupPerformanceOptimizations() {
    // Preload critical resources
    this.preloadCriticalResources();
    
    // Setup service worker if supported
    this.setupServiceWorker();
    
    // Monitor performance
    this.monitorPerformance();
  }
  
  preloadCriticalResources() {
    // Preload Cal.com if user shows intent to book
    let calPreloaded = false;
    
    document.querySelectorAll('.btn-primary').forEach(button => {
      button.addEventListener('mouseenter', () => {
        if (!calPreloaded) {
          const link = document.createElement('link');
          link.rel = 'dns-prefetch';
          link.href = 'https://cal.com';
          document.head.appendChild(link);
          calPreloaded = true;
        }
      }, { once: true });
    });
  }
  
  setupServiceWorker() {
    if ('serviceWorker' in navigator) {
      // Service worker setup would go here for caching
      // Not implementing for this static site, but structure is ready
    }
  }
  
  monitorPerformance() {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          this.trackEvent('Performance', {
            metric: 'LCP',
            value: Math.round(entry.startTime)
          });
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });
      
      // First Input Delay
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          this.trackEvent('Performance', {
            metric: 'FID',
            value: Math.round(entry.processingStart - entry.startTime)
          });
        }
      }).observe({ entryTypes: ['first-input'] });
    }
  }
  
  /**
   * Event tracking utility
   */
  trackEvent(eventName, properties = {}) {
    // Console log for development
    console.log('Event:', eventName, properties);
    
    // Here you would integrate with your analytics service
    // Example: Google Analytics, Mixpanel, etc.
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, properties);
    }
    
    // Custom event for other tracking systems
    document.dispatchEvent(new CustomEvent('teachinspire:track', {
      detail: { eventName, properties }
    }));
  }
  
  /**
   * Utility method to check if element is in viewport
   */
  isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.teachInspireApp = new TeachInspireApp();
});

// Handle page load performance
window.addEventListener('load', () => {
  // Track page load time
  const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
  console.log(`Page loaded in ${loadTime}ms`);
  
  if (window.teachInspireApp) {
    window.teachInspireApp.trackEvent('Page_Load', {
      loadTime: loadTime,
      userAgent: navigator.userAgent
    });
  }
});

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TeachInspireApp;
}
