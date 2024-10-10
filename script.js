// JavaScript for handling button clicks and transitions
function resetAnimation() {
    const infoBox = document.getElementById('info');
    infoBox.style.opacity = 0; // Reset opacity to trigger fade-out
    infoBox.style.transform = ''; // Reset transform for next animation
    setTimeout(() => {
        infoBox.style.display = 'none'; // Hide the box after fade-out
        infoBox.className = 'info-box'; // Reset animation class
    }, 500); // Match this timeout to the duration of the fade-out transition
}

function showInfo(content, animationClass) {
    const infoBox = document.getElementById('info');
    infoBox.innerHTML = content;
    infoBox.className = `info-box ${animationClass}`;
    infoBox.style.display = 'block'; // Show the info box
    setTimeout(() => {
        infoBox.style.opacity = 1; // Fade in
        infoBox.style.transform = 'translate(0, 0)'; // Apply transform for slide in
    }, 10); // Allow a brief pause before applying opacity and transform
}

document.getElementById('birthplace').addEventListener('click', function() {
    resetAnimation();
    setTimeout(() => { // Wait for resetAnimation to complete before showing new info
        showInfo(
            `<h2>Birthplace</h2><p>Ratan Tata was born in Mumbai, India, on December 28, 1937.</p>`,
            'slide-from-top-right'
        );
    }, 500); // Match this timeout to the fade-out duration
});

document.getElementById('details').addEventListener('click', function() {
    resetAnimation();
    setTimeout(() => {
        showInfo(
            `<h2>Details</h2><p>Ratan Tata's journey in the Tata Group began in 1962, and he became Chairman in 1991.</p>`,
            'slide-from-top-left'
        );
    }, 500);
});

document.getElementById('role').addEventListener('click', function() {
    resetAnimation();
    setTimeout(() => {
        showInfo(
            `<h2>His Role</h2><p>Ratan Tata played a key role in transforming the Tata Group into a global company.</p>`,
            'slide-from-bottom-right'
        );
    }, 500);
});

document.getElementById('death').addEventListener('click', function() {
    resetAnimation();
    setTimeout(() => {
        showInfo(
            `<h2>Death</h2><p>Ratan Tata passed away on October 9, 2024, leaving behind a remarkable legacy.</p>`,
            'slide-from-bottom-left'
        );
    }, 500);
});
