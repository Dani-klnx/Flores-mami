function createBouquet() {
    const bouquet = document.getElementById('bouquet');

    // --- 5 Yellow Flowers (original) ---
    const totalFlowers = 5;
    const angles = [-20, -10, 0, 10, 20];
    const offsets = [-40, -20, 0, 20, 40];

    for (let i = 0; i < totalFlowers; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.setProperty('--angle', `${angles[i]}deg`);
        flower.style.setProperty('--offset', `${offsets[i]}px`);
        flower.style.transform = `translateX(${offsets[i]}px) rotate(${angles[i]}deg)`;
        flower.innerHTML = `
            <div class="petals-container">
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="center"></div>
            </div>
            <div class="stem"></div>
        `;
        if (i === 0 || i === 4) flower.querySelector('.stem').style.height = '280px';
        bouquet.appendChild(flower);
    }

    // --- 5 Purple Carnation Flowers (new) ---
    const carnationAngles  = [-25, -12, 2, 14, 26];
    const carnationOffsets = [-55, -28, 5, 32, 58];
    // Carnations sit a bit lower than the yellow flowers
    const carnationBottoms = [30, 20, 25, 20, 30];

    for (let i = 0; i < 5; i++) {
        const carnation = document.createElement('div');
        carnation.className = 'flower carnation';
        carnation.style.setProperty('--angle',  `${carnationAngles[i]}deg`);
        carnation.style.setProperty('--offset', `${carnationOffsets[i]}px`);
        carnation.style.transform = `translateX(${carnationOffsets[i]}px) rotate(${carnationAngles[i]}deg)`;
        carnation.style.bottom = `${carnationBottoms[i]}px`;

        // Each carnation head has 12 ruffled petals arranged in two rings
        let petalsHTML = '';
        for (let p = 0; p < 12; p++) {
            petalsHTML += `<div class="carnation-petal cp-${p}"></div>`;
        }

        carnation.innerHTML = `
            <div class="carnation-head">
                ${petalsHTML}
                <div class="carnation-center"></div>
            </div>
            <div class="stem carnation-stem"></div>
        `;

        if (i === 0 || i === 4) carnation.querySelector('.carnation-stem').style.height = '260px';
        bouquet.appendChild(carnation);
    }
}

function openLetter() {
    document.getElementById('letterOverlay').style.display = 'block';
}

function closeLetter() {
    document.getElementById('letterOverlay').style.display = 'none';
}

window.onload = createBouquet;