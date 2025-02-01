// Képek közötti navigációt kezelő függvény
function scrollGallery(direction) {
    const imageContainer = document.querySelector('.image-container');
    const images = Array.from(imageContainer.children).filter(child => child.tagName === 'IMG');
    const containerWidth = imageContainer.offsetWidth;

    // Egy kép szélessége (minden kép ugyanolyan széles)
    const imageWidth = images[0].offsetWidth;

    // Aktuális pozíció kiszámítása
    let currentScroll = imageContainer.scrollLeft;

    // Új pozíció kiszámítása
    let newScroll;
    if (direction === 'left') {
        if (currentScroll === 0) {
            // Ha az első képen vagyunk, ugrik az utolsóra
            newScroll = (images.length - 1) * imageWidth;
        } else {
            newScroll = currentScroll - imageWidth;
        }
    } else if (direction === 'right') {
        if (currentScroll >= (images.length - 1) * imageWidth) {
            // Ha az utolsó képen vagyunk, visszaugrik az elsőre
            newScroll = 0;
        } else {
            newScroll = currentScroll + imageWidth;
        }
    }

    // Középre helyezés
    imageContainer.scroll({
        left: newScroll,
        behavior: 'smooth'
    });

    // Várakozás a sima görgetés befejeződésére, majd középre igazítjuk
    setTimeout(() => {
        centerCurrentImage();
    }, 500); // Az időtartamot a scroll sebességétől függően kell igazítani
}

// Aktuális kép középre helyezése
function centerCurrentImage() {
    const imageContainer = document.querySelector('.image-container');
    const images = Array.from(imageContainer.children).filter(child => child.tagName === 'IMG');
    const containerWidth = imageContainer.offsetWidth;

    // Aktuális pozíció kiszámítása
    let currentScroll = imageContainer.scrollLeft;

    // Egy kép szélessége (minden kép ugyanolyan széles)
    const imageWidth = images[0].offsetWidth;

    // Aktuális kép indexe
    const currentIndex = Math.round(currentScroll / imageWidth);

    // Új pozíció kiszámítása, hogy a kép középre kerüljön
    const newScroll = currentIndex * imageWidth + (containerWidth - imageWidth) / 2;

    // Középre helyezés
    imageContainer.scrollTo({
        left: newScroll,
        behavior: 'auto'
    });
}
