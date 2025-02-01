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
