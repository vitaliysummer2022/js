const track = new Audio();
track.volume = 0.75;
const playBtn = document.querySelector('#play-btn');
let i = -1;

playBtn.onclick = () => {
    if (track.src === '') {
        createTrack();
        return;
    }
    if (playBtn.textContent === 'Play') {
        playBtn.textContent = 'Pause';
        track.play();
    } else {
        playBtn.textContent = 'Play';
        track.pause();
    }
}

document.querySelector('#next-btn').onclick = createTrack;
document.querySelector('input').oninput = e => {
    track.volume = e.target.value / 100;
}

function createTrack() {
    (i !== data.length - 1) ? i++ : i = 0;
    track.src = `./${data[i].path}`;
    track.play();
    playBtn.textContent = 'Pause';
    track.onended = createTrack;
    document.querySelector('b').textContent = data[i].song;
    document.querySelector('i').textContent = data[i].singer;
    document.querySelector('span').textContent = `${i + 1}/${data.length}`;
}