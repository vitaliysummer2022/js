const img = ['hare.jpg', 'wolf.jpg', 'grinch.jpg'];
const cards = img.concat(img).sort(() => Math.random() - 0.5);

// const img = ['hare.jpg', 'grinch.jpg'];
// const cards = ['hare.jpg', 'hare.jpg', 'grinch.jpg', 'grinch.jpg'];
let attempts = 3;

createCards();
document.querySelector('ul').addEventListener('click', e => {
    if (!e.target.classList.contains('hidden')) {
        return;
    }
    if (document.querySelectorAll('.opened').length < 2) {
        e.target.className = 'opened';
    }
    if (document.querySelectorAll('.opened').length === 2) {
        checkCards();
    }
});

function checkCards() {
    const pairs = document.querySelectorAll('.opened');
    const info = document.querySelectorAll('b');
    if (pairs[0].style.backgroundImage === pairs[1].style.backgroundImage) {
        pairs.forEach(el => el.className = 'guessed');
        info[1].textContent = `${document.querySelectorAll('.guessed').length / 2} / ${img.length}`;
        if (document.querySelectorAll('.hidden').length === 0) {
            showAllCards('Поздравляем! Вы выиграли!');
        }
    } else {
        attempts--;
        info[0].textContent = attempts;
        if (attempts === 0) {
            showAllCards('Вы проиграли. Попробуйте ещё раз!');
        } else {
            setTimeout(() => pairs.forEach(el => el.className = 'hidden'), 1000);
        }
    }
}

function showAllCards(text) {
    alert(text);
    document.querySelectorAll('li').forEach(el => el.className = 'opened');
}

function createCards() {
    document.querySelector('div').innerHTML = `
        <span>Попытки: <b>${attempts}</b></span>
        <span>Прогресс: <b>0 / ${img.length}</b></span>`;
    for (let el of cards) {
        document.querySelector('ul').insertAdjacentHTML('beforeend', `
        <li class="hidden" style="background-image:url(img/${el})"></li>`);
    }
}