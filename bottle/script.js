const bottle = document.querySelector('.bottle');
const action = document.querySelector('.action');
const sideArr = [0, 90, 180, 270];
const actionArr = ['Song', 'Poem', 'Dance', 'Secret', 'Joke'];

bottle.addEventListener('click', () => {
    bottle.classList.add('bottle-turn');
    bottle.disabled = true;
    bottle.style.transform = `translate(-50%, -50%) rotate(${getRandom(sideArr)}deg)`;
    action.style.display = 'none';
    getResult();
});

function getResult() {
    setTimeout(() => {
        bottle.classList.remove('bottle-turn');
        bottle.disabled = false;
        action.style.display = 'block';
        action.textContent = getRandom(actionArr);
    }, 1000);
}

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}