const PHI = (1 + Math.sqrt(5)) / 2;
const PHI_ANGLE = 360 / (PHI + 1);

let rotationDegree = PHI_ANGLE;

const increaseButton = document.getElementById('increase-calyxes');
const decreaseButton = document.getElementById('decrease-calyxes');
const calyxesInput = document.getElementById('calyxes');
const flower = document.getElementById('flower');

calyxesInput.addEventListener('change', renderCalyxes);

increaseButton.addEventListener('click', function() {
    calyxesInput.value = parseInt(calyxesInput.value) + 1;
    renderCalyxes();
});

decreaseButton.addEventListener('click', function() {
    calyxesInput.value = parseInt(calyxesInput.value) + 1;
    renderCalyxes();
});

function renderCalyxes() {
    let calyxes = parseInt(calyxesInput.value);
    rotationDegree = PHI_ANGLE;
    flower.innerHTML = '';

    for (let i = 0; i < calyxes; i++) {
        const calyx = document.createElement('div');
        calyx.classList.add('calyx');
        calyx.style.transform = 'rotate(' + rotationDegree + 'deg)';
        flower.appendChild(calyx);
        rotationDegree += PHI_ANGLE;
    }
}

renderCalyxes();
