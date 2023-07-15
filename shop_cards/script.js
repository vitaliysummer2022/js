const cardWrap = document.querySelector('.card-wrap');

for (let i = 0; i < data.length; i++) {
    console.log(i);
    cardWrap.innerHTML += `
    <a href="#" class="card">
        <img src="${data[i].img}">
        <h3>${data[i].model}</h3>
        <div class="info">
            <b>${data[i].price}</b>
            <ul>
                <li>Цвет: <i>${data[i].color}</i></li>
                <li>Отзывы: <i>${data[i].reviews}</i></li>
            </ul>
        </div>
    </a>`;
}