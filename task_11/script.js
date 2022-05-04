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
    var newImg = document.querySelector('#switcher img');

    document.querySelector('body').style.backgroundColor != "black"? (
        newImg.src = "./images/moon.svg",
        document.querySelector('body').style.backgroundColor = "black",
        document.querySelector('table').style.color = "white",
        document.querySelector('#switcher').style.color = "white",
        newImg.style.backgroundColor = "white"
    ) : (
        newImg.src = "./images/sun.svg",
        document.querySelector('body').style.backgroundColor = "white",
        document.querySelector('table').style.color = "black",
        document.querySelector('#switcher').style.color = "black"
    );

}