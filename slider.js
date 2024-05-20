// JavaScript for slider functionality
let slider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;

Left = slider.scrollLeft;

slider.addEventListener('mouseleave', () => {
    isDown = false;
});


slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; // Adjust scroll speed if necessary
    slider.scrollLeft = scrollLeft - walk;
});
