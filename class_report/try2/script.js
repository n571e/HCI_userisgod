// Presentation State
let currentSlide = 1;
const totalSlides = document.querySelectorAll('.slide').length;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializePresentation();
    setupEventListeners();
    updateSlideCounter();
    createSlideIndicators();
    animateCurrentSlide();
});

// Initialize Presentation
function initializePresentation() {
    // Set total slides
    document.querySelector('.total-slides').textContent = totalSlides;

    // Show first slide
    showSlide(1);
}

// Setup Event Listeners
function setupEventListeners() {
    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });

    // Button Navigation
    document.querySelector('.next-btn').addEventListener('click', nextSlide);
    document.querySelector('.prev-btn').addEventListener('click', prevSlide);

    // Touch Support
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) nextSlide();
        if (touchEndX > touchStartX + 50) prevSlide();
    }
}

// Navigation Functions
function nextSlide() {
    if (currentSlide < totalSlides) {
        currentSlide++;
        showSlide(currentSlide);
    }
}

function prevSlide() {
    if (currentSlide > 1) {
        currentSlide--;
        showSlide(currentSlide);
    }
}

function showSlide(slideNumber) {
    // Remove active class from all slides
    document.querySelectorAll('.slide').forEach((slide, index) => {
        slide.classList.remove('active', 'prev');
        if (index + 1 < slideNumber) {
            slide.classList.add('prev');
        }
    });

    // Add active class to current slide
    const currentSlideElement = document.querySelector(`.slide[data-slide="${slideNumber}"]`);
    if (currentSlideElement) {
        currentSlideElement.classList.add('active');

        // Update progress bar
        updateProgressBar();

        // Update slide counter
        updateSlideCounter();

        // Update indicators
        updateIndicators();

        // Animate content
        animateCurrentSlide();

        // Trigger any slide-specific animations
        triggerSlideAnimations(slideNumber);
    }
}

function updateProgressBar() {
    const progress = (currentSlide / totalSlides) * 100;
    document.querySelector('.progress-fill').style.width = `${progress}%`;
}

function updateSlideCounter() {
    document.querySelector('.current-slide').textContent = currentSlide;
}

// Slide Indicators
function createSlideIndicators() {
    const indicatorsContainer = document.querySelector('.slide-indicators');

    for (let i = 1; i <= totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('slide-indicator');
        if (i === 1) indicator.classList.add('active');
        indicator.addEventListener('click', () => {
            currentSlide = i;
            showSlide(i);
        });
        indicatorsContainer.appendChild(indicator);
    }
}

function updateIndicators() {
    document.querySelectorAll('.slide-indicator').forEach((indicator, index) => {
        indicator.classList.toggle('active', index + 1 === currentSlide);
    });
}

// Animations
function animateCurrentSlide() {
    const currentSlideElement = document.querySelector('.slide.active');
    if (!currentSlideElement) return;

    // Reset animations
    const animatedElements = currentSlideElement.querySelectorAll('[data-animation-delay]');
    animatedElements.forEach(el => {
        el.style.animation = 'none';
        setTimeout(() => {
            el.style.animation = '';
        }, 10);
    });

    // Animate TOC items
    const tocItems = currentSlideElement.querySelectorAll('.toc-item');
    tocItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
}

// Counting Animation
function animateCount(element, start, end, duration) {
    let startTime = null;

    const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value;

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };

    window.requestAnimationFrame(step);
}

// Slide-specific Animations
function triggerSlideAnimations(slideNumber) {
    const slide = document.querySelector(`.slide[data-slide="${slideNumber}"]`);
    if (!slide) return;

    // Animate stat numbers (Slide 8 - Methodology)
    if (slideNumber === 8) {
        setTimeout(() => {
            const statNumbers = slide.querySelectorAll('.stat-number[data-count]');
            statNumbers.forEach(stat => {
                const targetCount = parseInt(stat.getAttribute('data-count'));
                animateCount(stat, 0, targetCount, 2000);
            });
        }, 500);
    }

    // Animate stat numbers (Slide 14 - Results RQ1)
    if (slideNumber === 14) {
        setTimeout(() => {
            const statValues = slide.querySelectorAll('.stat-value[data-count]');
            statValues.forEach(stat => {
                const targetCount = parseFloat(stat.getAttribute('data-count'));
                animateCount(stat, 0, targetCount, 2000);
            });
        }, 300);
    }

    // Draw workflow visualization (Slide 10)
    if (slideNumber === 10) {
        setTimeout(() => {
            drawWorkflowVisualization();
        }, 500);
    }
}

// Workflow Visualization
function drawWorkflowVisualization() {
    const canvas = document.getElementById('workflowCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Settings
    const stepCount = 4;
    const stepWidth = width / (stepCount + 1);
    const centerY = height / 2;
    const circleRadius = 40;

    // Colors
    const primaryBlue = '#0066cc';
    const primaryGreen = '#009944';

    // Draw connections
    ctx.strokeStyle = primaryBlue;
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);

    for (let i = 0; i < stepCount - 1; i++) {
        const startX = stepWidth * (i + 1) + circleRadius;
        const endX = stepWidth * (i + 2) - circleRadius;

        ctx.beginPath();
        ctx.moveTo(startX, centerY);
        ctx.lineTo(endX, centerY);
        ctx.stroke();
    }

    // Draw circles and labels
    ctx.setLineDash([]);
    const labels = ['Index', 'Retrieve', 'Generate', 'Feedback'];

    for (let i = 0; i < stepCount; i++) {
        const x = stepWidth * (i + 1);

        // Draw circle
        const gradient = ctx.createLinearGradient(x - circleRadius, 0, x + circleRadius, 0);
        gradient.addColorStop(0, primaryBlue);
        gradient.addColorStop(1, primaryGreen);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, centerY, circleRadius, 0, Math.PI * 2);
        ctx.fill();

        // Draw step number
        ctx.fillStyle = 'white';
        ctx.font = 'bold 30px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText((i + 1).toString(), x, centerY);

        // Draw label
        ctx.fillStyle = '#2c3e50';
        ctx.font = '16px Arial';
        ctx.fillText(labels[i], x, centerY + circleRadius + 30);
    }

    // Add arrow at the end (feedback loop)
    const lastX = stepWidth * stepCount;
    ctx.strokeStyle = primaryGreen;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(lastX + 50, centerY, 30, 0, Math.PI * 1.5);
    ctx.stroke();

    // Arrow head
    ctx.beginPath();
    ctx.moveTo(lastX + 50, centerY - 30);
    ctx.lineTo(lastX + 45, centerY - 40);
    ctx.lineTo(lastX + 55, centerY - 40);
    ctx.closePath();
    ctx.fillStyle = primaryGreen;
    ctx.fill();
}

// Utility Functions
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

// Window resize handler
window.addEventListener('resize', debounce(() => {
    // Redraw visualizations if needed
    if (currentSlide === 10) {
        drawWorkflowVisualization();
    }
}, 250));

// Prevent default space bar scrolling
window.addEventListener('keydown', (e) => {
    if (e.key === ' ' && e.target === document.body) {
        e.preventDefault();
    }
});
