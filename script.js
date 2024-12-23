// script.js
window.addEventListener('load', () => {
    const loadingOverlay = document.getElementById('loading-overlay');

    // Add a 2-second delay
    setTimeout(() => {
        loadingOverlay.classList.add('hidden');
    }, 2000); // 2000 milliseconds = 2 seconds
});