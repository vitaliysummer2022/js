const words = [
    ['lamp', 'лампа'],
    ['table', 'стол'],
    ['chair', 'стул']
];
let counter = 0;
let correct = 0;
createWord();

function createWord() {
    const wrap = document.querySelector('div');
    wrap.innerHTML = `
        <i>${counter + 1}/${words.length}</i>
        <img src="img/${words[counter][0]}.svg">
        <b>${words[counter][1]}</b>`;
    wrap.className = '';
}

document.querySelector('form').addEventListener('submit', (e) => {
    const input = document.querySelector('input');
    const btn = document.querySelector('button');
    e.preventDefault();

    console.log(counter, words.length);

    if (counter === words.length) {
        alert(`Количество правильных ответов: ${correct}`);
        return;
    }

    if (btn.classList.contains('check-btn')) {
        checkWord(input.value.toLowerCase().trim());
        btn.textContent = 'Далее';
        btn.classList.remove('check-btn');
        counter++;
    } else {
        btn.textContent = 'Проверить';
        btn.classList.add('check-btn');
        input.value = '';
        createWord();
    }
});

function checkWord(word) {
    const wrap = document.querySelector('div');

    if (word === words[counter][0]) {
        wrap.classList.add('correct');
        correct++;
    } else {
        wrap.classList.add('incorrect');
    }
}