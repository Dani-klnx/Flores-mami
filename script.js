function createBouquet() {
    const bouquet = document.getElementById('bouquet');
    const totalFlowers = 5;

    const angles = [-20, -10, 0, 10, 20];
    const offsets = [-40, -20, 0, 20, 40];

    for (let i = 0; i < totalFlowers; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';

        // Guardamos los valores originales para la animación en CSS
        flower.style.setProperty('--angle', `${angles[i]}deg`);
        flower.style.setProperty('--offset', `${offsets[i]}px`);

        // Aplicamos la posición inicial
        flower.style.transform = `translateX(${offsets[i]}px) rotate(${angles[i]}deg)`;

        flower.innerHTML = `
            <div class="petals-container">
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal image_a14684.png"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="center"></div>
            </div>
            <div class="stem"></div>
        `;

        if (i === 0 || i === 4) flower.querySelector('.stem').style.height = '280px';

        bouquet.appendChild(flower);
    }
}

function openLetter() {
    document.getElementById('letterOverlay').style.display = 'block';
}

function closeLetter() {
    document.getElementById('letterOverlay').style.display = 'none';
}

window.onload = createBouquet;