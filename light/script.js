let count = new Date().getDay();
showData();
changeDates();

function showData() {
    document.querySelector('h3').textContent = data[count].day;
    document.querySelectorAll('li')[0].textContent = data[count].time[0]; 
    document.querySelectorAll('li')[1].textContent = data[count].time[1]; 
}

function changeDates() {
    document.querySelectorAll('.info button').forEach((el, index) => {
        el.addEventListener('click', () => {
            (index === 0) ? count-- : count++;

            if (count === 7) {
                count = 0;
            } else if (count < 0) {
                count = 6;
            }

            showData();
        });
    });
}