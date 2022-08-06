const calyxes = document.querySelectorAll('.calyx');

let rotation = 137.5;

for (const calyx of calyxes) {
    calyx.style.transform = 'rotate(' + rotation + 'deg)';
    rotation += 137.5;
}
