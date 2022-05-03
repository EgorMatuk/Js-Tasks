function ChangeColor(Element) {
    var onlyFirstImg = document.querySelector('.card-image img').src ="./images/cat1.jpg";
    var catName = document.querySelector('.card-image span');
    var aboutCat = document.querySelector('.card-content p');
    var changeImg = document.querySelector('.card-image img');
	Element.innerHTML === 'cat2'? (changeImg.src ="./images/cat2.jpg", catName.innerHTML = "Cat2", aboutCat.innerHTML = "I am a beautiful cat №2") : onlyFirstImg;
    Element.innerHTML === 'cat3'? (changeImg.src ="./images/cat3.jpg", catName.innerHTML = "Cat3", aboutCat.innerHTML = "I am a beautiful cat №3") : onlyFirstImg;
}