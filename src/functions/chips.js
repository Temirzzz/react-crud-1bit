export function chips() {
    let chips = document.createElement('div');
    chips.classList.add('chips');
    let message = document.createTextNode("Заполните поля!");
    chips.appendChild(message);
    let chiepsField = document.querySelector('.chieps-field');
    chiepsField.appendChild(chips);

    setTimeout(() => {
        chips.remove();
    }, 3000)
}