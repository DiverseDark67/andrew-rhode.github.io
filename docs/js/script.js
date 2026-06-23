document.addEventListener('DOMContentLoaded', () => {
    // Console log to confirm script initialization
    console.log("Topographic environment initialized.");

    // Select the information box element
    const infoBox = document.querySelector('.info-box');
    
    // Apply a subtle fade-in animation on page load
    if (infoBox) {
        infoBox.style.opacity = '0';
        infoBox.style.transform = 'translateY(20px)';
        infoBox.style.transition = 'opacity 1.2s ease-out, transform 1.2s ease-out';
        
        // Trigger the animation slightly after the DOM loads
        setTimeout(() => {
            infoBox.style.opacity = '1';
            infoBox.style.transform = 'translateY(0)';
        }, 200);
    }
});