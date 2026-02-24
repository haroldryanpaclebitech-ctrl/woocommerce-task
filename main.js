// Scroll Reveal Logic
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            // Optional: Remove if you want elements to stay visible after reveal
            // reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Initial call to reveal elements on load
window.addEventListener("load", () => {
    reveal();
    
    // Add smooth scroll for the hero button
    document.querySelector('a[href^="#"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Blob Movement
document.addEventListener('mousemove', (e) => {
    const blobs = document.querySelectorAll('.blob');
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    blobs.forEach((blob, index) => {
        const speed = (index + 1) * 0.05;
        const x = (window.innerWidth - mouseX * speed) / 100;
        const y = (window.innerHeight - mouseY * speed) / 100;
        
        blob.style.transform = `translate(${x}px, ${y}px)`;
    });
});
