/**
 * TeachInspire Header Animation - OPTIMIZED VERSION
 * Critical animation sequence for hero section
 *
 * EXACT REQUIREMENTS:
 * Base text: "Créer des cours sur mesure est..."
 * Animation Sequence (plays ONCE on page load only):
 * 1. "chronophage" (red, strikethrough) - 1.5s
 * 2. "rapide" (green) - 1.5s
 * 3. "générique" (red, strikethrough) - 1.5s
 * 4. "adapté" (green) - 1.5s
 * 5. "complexe" (red, strikethrough) - 1.5s
 * 6. "fluide" (green, remains visible)
 * Total duration: ~9 seconds
 */

class HeaderAnimation {
  constructor() {
    this.animationContainer = document.getElementById('animated-text');
    this.currentWordIndex = 0;
    this.animationCompleted = false;
    this.hasPlayedOnce = false; // Ensure animation plays only once
    this.transitionDuration = 500; // Smooth 0.5s transitions

    // Animation sequence data - EXACT as per client brief
    this.words = [
      { text: 'chronophage', type: 'negative', displayDuration: 1500 },
      { text: 'rapide', type: 'positive', displayDuration: 1500 },
      { text: 'générique', type: 'negative', displayDuration: 1500 },
      { text: 'adapté', type: 'positive', displayDuration: 1500 },
      { text: 'complexe', type: 'negative', displayDuration: 1500 },
      { text: 'fluide', type: 'positive', displayDuration: 0 } // Final word stays
    ];

    this.init();
  }
  
  init() {
    if (!this.animationContainer) {
      console.warn('Animation container not found');
      return;
    }

    // CRITICAL: Only play animation once per page load
    if (this.hasPlayedOnce) {
      this.showFinalState();
      return;
    }

    // Check if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.showFinalState();
      return;
    }

    // Mark as played to prevent replay
    this.hasPlayedOnce = true;

    // Clear existing content and start animation
    this.animationContainer.innerHTML = '';
    this.createWordElements();
    this.startAnimation();
  }
  
  createWordElements() {
    // Create span elements for each word with perfect baseline alignment
    this.words.forEach((wordData, index) => {
      const wordElement = document.createElement('span');
      wordElement.className = `word ${wordData.type}`;
      wordElement.textContent = wordData.text;
      wordElement.setAttribute('aria-hidden', 'true'); // Hide from screen readers during animation

      // Use display: none for hidden words (perfect baseline alignment when shown)
      wordElement.style.display = 'none';

      // Show first word immediately with perfect baseline alignment
      if (index === 0) {
        wordElement.style.display = 'inline';
        wordElement.classList.add('active');
      }

      this.animationContainer.appendChild(wordElement);
    });
  }
  
  startAnimation() {
    // Start animation sequence immediately with first word visible
    this.scheduleNextTransition(0);
  }

  scheduleNextTransition(wordIndex) {
    if (wordIndex >= this.words.length - 1) {
      // Animation complete - final word stays visible
      this.completeAnimation();
      return;
    }

    const currentWord = this.words[wordIndex];
    const nextWordIndex = wordIndex + 1;

    // Schedule transition to next word after display duration
    setTimeout(() => {
      this.transitionToWord(nextWordIndex);
    }, currentWord.displayDuration);
  }

  transitionToWord(nextWordIndex) {
    const currentWordElement = this.animationContainer.children[this.currentWordIndex];
    const nextWordElement = this.animationContainer.children[nextWordIndex];

    // Hide current word (instant for perfect alignment)
    if (currentWordElement) {
      currentWordElement.style.display = 'none';
      currentWordElement.classList.remove('active');
    }

    // Show next word immediately (perfect baseline alignment)
    if (nextWordElement) {
      nextWordElement.style.display = 'inline';
      nextWordElement.classList.add('active');
    }

    this.currentWordIndex = nextWordIndex;

    // Schedule next transition
    this.scheduleNextTransition(nextWordIndex);
  }
  
  // Simplified show/hide methods for perfect baseline alignment
  showWord(wordElement) {
    if (wordElement) {
      wordElement.style.display = 'inline';
      wordElement.classList.add('active');
    }
  }

  hideWord(wordElement) {
    if (wordElement) {
      wordElement.style.display = 'none';
      wordElement.classList.remove('active');
    }
  }
  
  completeAnimation() {
    this.animationCompleted = true;

    // Ensure final word is visible and accessible with perfect alignment
    const finalWord = this.animationContainer.children[this.words.length - 1];
    if (finalWord) {
      finalWord.style.display = 'inline';
      finalWord.classList.add('active');
      finalWord.removeAttribute('aria-hidden');
    }

    // Hide all other words completely
    for (let i = 0; i < this.words.length - 1; i++) {
      const word = this.animationContainer.children[i];
      if (word) {
        word.style.display = 'none';
        word.classList.remove('active');
        word.setAttribute('aria-hidden', 'true');
      }
    }

    // Update aria-live region for screen readers
    this.animationContainer.setAttribute('aria-live', 'off');

    // Dispatch custom event for analytics or other tracking
    document.dispatchEvent(new CustomEvent('headerAnimationComplete', {
      detail: {
        finalWord: this.words[this.words.length - 1].text,
        totalDuration: this.calculateTotalDuration(),
        playedOnce: this.hasPlayedOnce
      }
    }));

    console.log('TeachInspire header animation completed successfully');
  }

  calculateTotalDuration() {
    // Calculate total animation duration for verification
    let total = 0;
    for (let i = 0; i < this.words.length - 1; i++) {
      total += this.words[i].displayDuration;
    }
    total += (this.words.length - 1) * this.transitionDuration; // Add transition times
    return total;
  }
  
  showFinalState() {
    // For users who prefer reduced motion, show final state immediately with perfect alignment
    this.animationContainer.innerHTML = `
      <span class="word positive final-state" aria-hidden="false" style="display: inline;">fluide</span>
    `;
    this.animationCompleted = true;
    this.hasPlayedOnce = true; // Mark as played to prevent future replays
  }

  // REMOVED: restart method - animation should only play once per page load
  // This ensures compliance with "plays once on page load only" requirement
}

// Initialize animation when DOM is ready - PLAYS ONCE ONLY
document.addEventListener('DOMContentLoaded', () => {
  // Small delay to ensure all styles are loaded
  setTimeout(() => {
    window.headerAnimation = new HeaderAnimation();

    // Initialize hero transformation animation
    initializeHeroTransformation();
  }, 100);
});

/**
 * Hero Transformation Animation Controller - LAYERED SYSTEM
 * Controls sophisticated multi-layer transformation animation
 */
function initializeHeroTransformation() {
  const transformationContainer = document.querySelector('.transformation-container');

  if (!transformationContainer) {
    console.warn('Transformation container not found');
    return;
  }

  // Check if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    console.log('Reduced motion preferred - showing final transformation state');
    showFinalTransformationState(transformationContainer);
    return;
  }

  // Add intersection observer for performance optimization
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Start layered transformation sequence
        startTransformationSequence(entry.target);

        // Disconnect observer after first trigger
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3 // Trigger when 30% of hero is visible
  });

  observer.observe(transformationContainer);

  console.log('Layered hero transformation animation initialized');
}

/**
 * Starts the complete transformation animation sequence
 */
function startTransformationSequence(container) {
  // Phase 1: Begin transformation (immediate)
  container.classList.add('animate-transformation');

  // Phase 2: Flow activation (after 500ms)
  setTimeout(() => {
    container.classList.add('flow-active');
  }, 500);

  // Phase 3: Lightbulb illumination (after 1000ms)
  setTimeout(() => {
    container.classList.add('illuminate-complete');
  }, 1000);

  // Phase 4: Final state (after 3000ms)
  setTimeout(() => {
    container.classList.add('transformation-complete');
  }, 3000);

  console.log('Transformation sequence started');
}

/**
 * Shows final state for reduced motion users
 */
function showFinalTransformationState(container) {
  container.classList.add('transformation-complete', 'reduced-motion');

  // Set final states directly
  const hourglass = container.querySelector('.layer-hourglass');
  const lightbulb = container.querySelector('.layer-lightbulb');
  const flow = container.querySelector('.layer-flow');

  if (hourglass) hourglass.style.opacity = '0.4';
  if (lightbulb) {
    lightbulb.style.opacity = '1';
    lightbulb.style.filter = 'brightness(1.2)';
  }
  if (flow) flow.style.opacity = '0.6';
}

// REMOVED: Page visibility change handler
// Animation should only play once per page load, not restart on visibility changes
// This ensures compliance with client brief requirement

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = HeaderAnimation;
}
