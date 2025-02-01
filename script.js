// Görgést kezelő függvény a nyil gombokkal
function scrollImages(direction) {
    const imageContainer = document.querySelector('.image-container');
    const scrollAmount = 300; // Görgés mértéke (pixelekben)

    if (direction === 'left') {
        imageContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'right') {
        imageContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

// Töröltük a "megfogásos" görgetéshez kapcsolódó részeket
// Az alábbi kódok törlésre kerültek:
/*
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
    throttled = true;
    const x = e.pageX - imageContainer.offsetLeft;
    const walk = (x - startX) * 2;
    imageContainer.scrollLeft = scrollLeft - walk;
    setTimeout(() => {
        throttled = false;
    }, 16); // 16ms késleltetés (kb. 60 FPS)
});
*/
