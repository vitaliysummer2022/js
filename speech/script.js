const words = [
    ['lamp', 'лампа'],
    ['table', 'стол'],
    ['chair', 'стул']
];

createWords();
function createWords() {
    for (let el of words) {
        document.querySelector('.swiper-wrapper').innerHTML += `
        <div class="swiper-slide">
            <img src="img/${el[0]}.svg">
            <b>${el[0]}</b>
            <i>${el[1]}</i>
        </div>`;
    }
}

document.querySelector('.speech-btn').addEventListener('click', () => {
    const word = document.querySelector('.swiper-slide-active b').textContent;

    const speech = new SpeechSynthesisUtterance(word);
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
});


//SwiperJS Library
const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});