// Simple interactivity for the WooCommerce Mockup
document.addEventListener('DOMContentLoaded', () => {
    // Highlight effect on sidebar items
    const sidebarItems = document.querySelectorAll('.wp-sidebar-item');
    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            sidebarItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Alert on Publish click
    const publishBtn = document.querySelector('.button-primary');
    if (publishBtn) {
        publishBtn.addEventListener('click', () => {
            alert('Tutorial Complete! In a real scenario, this would save your product to the database.');
        });
    }

    // Interactive step highlighting
    const tutorialSteps = document.querySelectorAll('.tutorial-step');
    tutorialSteps.forEach(step => {
        step.addEventListener('mouseenter', () => {
            step.parentElement.style.boxShadow = '0 0 15px rgba(150, 88, 138, 0.3)';
        });
        step.addEventListener('mouseleave', () => {
            step.parentElement.style.boxShadow = 'none';
        });
    });
});
