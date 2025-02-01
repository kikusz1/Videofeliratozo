// Képek közötti navigációt kezelő függvény
function scrollGallery(direction) {
    const imageContainer = document.querySelector('.image-container');
    const images = Array.from(imageContainer.children).filter(child => child.tagName === 'IMG');
    const containerWidth = imageContainer.offsetWidth;

    // Aktuális pozíció kiszámítása
    let currentScroll = imageContainer.scrollLeft;

    // Egy kép szélessége (minden kép ugyanolyan széles)
    const imageWidth = images[0].offsetWidth;

    // Scroll pozíció módosítása
    if (direction === 'left') {
        if (currentScroll === 0) {
            // Ha az első képen vagyunk, nem történik semmi
            return;
        }
        imageContainer.scroll({ left: currentScroll - imageWidth, behavior: 'smooth' });
    } else if (direction === 'right') {
        if (currentScroll >= (images.length - 1) * imageWidth) {
            // Ha az utolsó képen vagyunk, nem történik semmi
            return;
        }
        imageContainer.scroll({ left: currentScroll + imageWidth, behavior: 'smooth' });
    }
}
