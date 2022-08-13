const counterText = document.querySelector('.counter-wrap b');
const counterBtn = document.querySelectorAll('.counter-wrap button');
let counter = 1;

counterBtn.forEach((el, index) => {
    el.addEventListener('click', () => {
        if (index === 0 && counter > 1) {
            counter--;
        } else if (index === 1 && counter < 5) {
            counter++;
        }
        counterText.textContent = counter;
        setDisabled(counter);
    });
});

function setDisabled(counter) {
    if (counter === 1) {
        counterBtn[0].disabled = true;
    } else if (counter === 5) {
        counterBtn[1].disabled = true;
    } else {
        counterBtn[0].disabled = false;
        counterBtn[1].disabled = false;
    }
}