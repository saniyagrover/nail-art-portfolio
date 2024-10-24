// Create and append loading screen
const loadingScreen = document.createElement('div');
loadingScreen.id = 'loading-screen';
loadingScreen.innerHTML = '<div class="loader"></div>';
document.body.appendChild(loadingScreen);

// Function to remove loading screen
function removeLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.remove();
        }, 500); // Delay to allow fade-out animation
    }
}

// Remove loading screen when the page is fully loaded
window.addEventListener('load', removeLoadingScreen);

// Fallback: Remove loading screen after 5 seconds if it hasn't been removed
setTimeout(removeLoadingScreen, 5000);

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to Top Button
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Lightbox for gallery images
document.querySelectorAll('.gallery-item img').forEach(image => {
    image.addEventListener('click', function() {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        document.body.appendChild(lightbox);

        const img = document.createElement('img');
        img.src = this.src;
        lightbox.appendChild(img);

        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});

// Form submission
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For now, we'll just log it to the console
        console.log('Form submitted');
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });
}

// Add animation to testimonials
const testimonials = document.querySelectorAll('.testimonial');
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

testimonials.forEach(testimonial => {
    testimonial.style.opacity = 0;
    testimonial.style.transform = 'translateY(20px)';
    testimonial.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    observer.observe(testimonial);
});
