function ChangeColor(Element) {
    var onlyFirstImg = document.querySelector('.card-image img').src ="./images/cat1.jpg";
    var catName = document.querySelector('.card-image span');
    var aboutCat = document.querySelector('.card-content p');
    var changeImg = document.querySelector('.card-image img');
	Element.innerHTML === 'cat2'? (changeImg.src ="./images/cat2.jpg", catName.innerHTML = "Cat2", aboutCat.innerHTML = "I am a beautiful cat №2") : onlyFirstImg;
    Element.innerHTML === 'cat3'? (changeImg.src ="./images/cat3.jpg", catName.innerHTML = "Cat3", aboutCat.innerHTML = "I am a beautiful cat №3") : onlyFirstImg;
}

function addCat(){
    var name = prompt("Введите имя котика:");
    var country = prompt("Страна:");
    var bthDate = prompt("Год рождения:");

    document.querySelector('#cat-info').insertAdjacentHTML("beforeend",`
        <tr>
            <td>${name}</td>
            <td>${country}</td>
            <td>${bthDate}</td>
        </tr>
    `);
}

function darkTheme(){
    document.querySelector('body').classList.toggle('darkTheme');
    document.querySelector('.card').classList.toggle('dark-cont');
    var icon = document.querySelector('#switcher img');
    document.querySelector('body').classList.contains('darkTheme') ? (icon.src = "./images/moon.svg", icon.style.backgroundColor = "white" ) : icon.src = "./images/sun.svg";
}