let form = document.querySelector('.main-form');
let submitButton = document.querySelector('.public-form');

//Регулярные выражения для полей
let nameRegular = /^[a-zA-Z\-]+$/g;
let urlRegular = /(http|https):\/\/([\w.]+\/?)\S*/g;
let emailRegular = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/g;

//Кнопка SUBMIT(событие при клике)


form.addEventListener('change',function(event){
    switch(event.target.id){
        case 'creator-name' : 
        !isValid(nameRegular, event.target.value)? (alert('Введите НАРМЛЬНО РАЗРАБОВ'), event.target.classList.add('error')) : event.target.classList.remove('error');
        break;

        case 'name' : 
        !isValid(nameRegular, event.target.value)? (alert('Введите НАЗВАНИЕ САЙТА НОРМАЛЬНО АЛОООО'), event.target.classList.add('error')) : event.target.classList.remove('error');
        break;

        case 'url' : 
        !isValid(urlRegular, event.target.value)? (alert('ЧЕЕЕЛ ВВЕДИ НОРМАЛЬНО URL'), event.target.classList.add('error')) : event.target.classList.remove('error');
        break;

        case 'email' : 
        !isValid(emailRegular, event.target.value)? (alert('ЧЕЕЕЛ ВВЕДИ НОРМАЛЬНО Email!!!!'), event.target.classList.add('error')) : event.target.classList.remove('error');
        break;
    }
});

function isValid(regular, element){
    return element.match(regular) != null;
}