const confettiContainer = document.querySelector('.confetti');

function createConfetti() {
    for (let i = 0; i < 10; i++) { // Create 10 pieces of confetti at once
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.position = 'absolute';
        confetti.style.width = '10px'; // Size of the confetti
        confetti.style.height = '10px'; // Size of the confetti
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.opacity = Math.random() * 0.7 + 0.3; // Set a minimum opacity
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = Math.random() * window.innerHeight + 'px';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confettiContainer.appendChild(confetti);

        // Animate the confetti
        setTimeout(() => {
            confetti.style.transition = 'transform 2s, opacity 2s';
            confetti.style.transform = `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`;
            confetti.style.opacity = 0;
        }, 10);

        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 2100);
    }
}

function getRandomColor() {
    const colors = ['#FFC700', '#FF3D00', '#00BFAE', '#D500F9', '#FF0080', '#FFAB00', '#00C853'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Increase the interval to create more confetti
setInterval(createConfetti, 100); // Keep the frequency
