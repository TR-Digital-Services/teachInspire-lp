// ========================================
// HERO LIGHTBULB ANIMATION SYSTEM
// ========================================

/**
 * Professional lightbulb illumination animation for the hero transformation
 * Sequential storytelling: Image enhances → Lightbulb glows
 * Total duration: 4 seconds (2s per phase)
 */

class HeroTransformationController {
    constructor() {
        this.container = document.querySelector('.transformation-container');
        this.isAnimating = false;
        this.hasPlayedOnce = false;
        this.animationTimeout = null;

        this.init();
    }

    init() {
        if (!this.container) {
            console.warn('Transformation container not found');
            return;
        }

        // Check if user prefers reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            this.showFinalState();
            return;
        }

        this.setupIntersectionObserver();
        this.setupEventListeners();
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.hasPlayedOnce) {
                    // Start animation when element comes into view
                    setTimeout(() => this.startSequentialAnimation(), 1000);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(this.container);
    }

    setupEventListeners() {
        // Optional: Allow manual trigger on hover (but only once)
        this.container.addEventListener('mouseenter', () => {
            if (!this.hasPlayedOnce && !this.isAnimating) {
                this.startSequentialAnimation();
            }
        });
    }

    startSequentialAnimation() {
        if (this.isAnimating || this.hasPlayedOnce) return;

        this.isAnimating = true;
        this.hasPlayedOnce = true;

        console.log('🎬 Starting hero transformation sequence...');

        // Phase 1: Image enhancement (0-2s)
        this.container.classList.add('phase-1');
        console.log('✨ Phase 1: Image enhancing...');

        // Phase 2: Lightbulb glow (2-4s)
        setTimeout(() => {
            this.container.classList.add('phase-2');
            console.log('💡 Phase 2: Lightbulb glowing...');
        }, 2000);

        // Animation complete (4s)
        setTimeout(() => {
            this.isAnimating = false;
            console.log('✨ Hero transformation sequence complete!');

            // Dispatch custom event for analytics
            document.dispatchEvent(new CustomEvent('heroTransformationComplete', {
                detail: {
                    duration: 4000,
                    phases: ['image-enhance', 'lightbulb-glow']
                }
            }));
        }, 4000);
    }

    showFinalState() {
        // For reduced motion users, show final state immediately
        this.container.classList.add('phase-1', 'phase-2');
        this.hasPlayedOnce = true;
        console.log('♿ Showing final transformation state (reduced motion)');
    }

    // Public method to manually trigger animation
    triggerAnimation() {
        if (!this.hasPlayedOnce) {
            this.startSequentialAnimation();
        }
    }

    // Public method to reset animation (for testing)
    resetAnimation() {
        this.container.classList.remove('phase-1', 'phase-2');
        this.isAnimating = false;
        this.hasPlayedOnce = false;
        console.log('🔄 Animation reset');
    }
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the hero transformation controller
    window.heroController = new HeroTransformationController();

    console.log('🎭 Hero lightbulb animation system initialized');
});
