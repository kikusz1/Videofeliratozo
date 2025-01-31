const imageContainer = document.querySelector('.image-container');
let isDragging = false;
let startX = 0;
let scrollLeft = 0;

imageContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - imageContainer.offsetLeft;
    scrollLeft = imageContainer.scrollLeft;
});

imageContainer.addEventListener('mouseleave', () => {
    isDragging = false;
});

imageContainer.addEventListener('mouseup', () => {
    isDragging = false;
});

imageContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - imageContainer.offsetLeft;
    const walk = (x - startX) * 2; // Szorzó a görgetés sebességének beállításához
    imageContainer.scrollLeft = scrollLeft - walk;
});
