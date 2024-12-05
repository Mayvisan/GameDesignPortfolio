function toggleContent(header) {
    const arrow = header.querySelector('.arrow');
    const content = header.nextElementSibling;

    if (content.classList.contains('open')) {
        content.classList.remove('open');
        arrow.classList.remove('expanded');
    } else {
        content.classList.add('open');
        arrow.classList.add('expanded');
    }
}

function setupCarousel(mainSelector, thumbnailsSelector, prevSelector, nextSelector) {
    const mainImages = document.querySelectorAll(`${mainSelector} img`);
    const thumbnails = document.querySelectorAll(`${thumbnailsSelector} img`);
    const prevButton = document.querySelector(prevSelector);
    const nextButton = document.querySelector(nextSelector);

    let currentIndex = 0;

    function updateMainImage(index) {
        mainImages.forEach((img, i) => img.classList.toggle('active', i === index));
        thumbnails.forEach((thumb, i) => thumb.classList.toggle('active', i === index));
        currentIndex = index;
    }

    function showNextImage() {
        const nextIndex = (currentIndex + 1) % mainImages.length;
        updateMainImage(nextIndex);
    }

    function showPrevImage() {
        const prevIndex = (currentIndex - 1 + mainImages.length) % mainImages.length;
        updateMainImage(prevIndex);
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => updateMainImage(index));
    });

    prevButton.addEventListener('click', showPrevImage);
    nextButton.addEventListener('click', showNextImage);
}

// Configurar carrusel para Moebius
setupCarousel(
    '#carousel-main-moebius', 
    '#thumbnails-moebius', 
    '#prev-moebius', 
    '#next-moebius'
);

// Configurar carrusel para Master
setupCarousel(
    '#carousel-main-master', 
    '#thumbnails-master', 
    '#prev-master', 
    '#next-master'
);

// Configurar carrusel para The Tale Of The Broken Spell
setupCarousel(
    '#carousel-main-spell', 
    '#thumbnails-spell', 
    '#prev-spell', 
    '#next-spell'
);

let currentIndex = 0;

function updateMainImage(index) {
    mainImages.forEach((img, i) => img.classList.toggle('active', i === index));
    thumbnails.forEach((thumb, i) => thumb.classList.toggle('active', i === index));
    currentIndex = index;
}

function showNextImage() {
    const nextIndex = (currentIndex + 1) % mainImages.length;
    updateMainImage(nextIndex);
}

function showPrevImage() {
    const prevIndex = (currentIndex - 1 + mainImages.length) % mainImages.length;
    updateMainImage(prevIndex);
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => updateMainImage(index));
});

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);
