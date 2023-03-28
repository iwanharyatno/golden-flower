const PHI = (1 + Math.sqrt(5)) / 2;
const PHI_ANGLE = 360 / (PHI + 1);

let rotationDegree = PHI_ANGLE;

const increaseButton = document.getElementById('increase-petals');
const decreaseButton = document.getElementById('decrease-petals');
const petalsInput = document.getElementById('petals');
const flower = document.getElementById('flower');

petalsInput.addEventListener('change', renderPetals);

increaseButton.addEventListener('click', function() {
    petalsInput.value = parseInt(petalsInput.value) + 1;
    renderPetals();
});

decreaseButton.addEventListener('click', function() {
    petalsInput.value = parseInt(petalsInput.value) - 1;
    renderPetals();
});

function renderPetals() {
    let petals = parseInt(petalsInput.value);
    rotationDegree = PHI_ANGLE;
    flower.innerHTML = '';

    for (let i = 0; i < petals; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.transform = 'rotate(' + rotationDegree + 'deg)';
        flower.appendChild(petal);
        rotationDegree += PHI_ANGLE;
    }
}

renderPetals();
