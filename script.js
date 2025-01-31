const imageContainer = document.querySelector('.image-container');
let isDragging = false;
let startX = 0;
let scrollLeft = 0;
let throttled = false;

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
    if (!isDragging || throttled) return;
    e.preventDefault();

    throttled = true;
    const x = e.pageX - imageContainer.offsetLeft;
    const walk = (x - startX) * 2;
    imageContainer.scrollLeft = scrollLeft - walk;

    setTimeout(() => {
        throttled = false;
    }, 16); // 16ms késleltetés (kb. 60 FPS)
});
