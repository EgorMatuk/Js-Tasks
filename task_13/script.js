let form = document.querySelector('.main-form');
let inputs = document.getElementsByTagName('input');

//Регулярные выражения для полей()
let nameRegular = /^[а-яА-Яa-zA-Z\-]+$/g;
let urlRegular = /(http|https):\/\/([\w.]+\/?)\S*/g;
let emailRegular = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/g;

//Кнопка SUBMIT(событие при клике)
form.addEventListener('submit', function(event){
    for(let i = 0; i!=inputs.length; ++i){
        if(inputs[i].value == '' || inputs[i].classList.contains('error')) {
            inputs[i].classList.add('error');
            event.preventDefault(); 
            alert('Проверьте валидность данных!');
            break;
        } 
    }
});

//Добавляем событие(при изменении значения) каждому элементу внутри формы
form.addEventListener('change',function(event){
    switch(event.target.id){
        case 'creator-name' : 
        !isValid(nameRegular, event.target.value)? (alert('Введите имя разработчиков НОРМАЛЬНО!(ЛЮБЫЕ БЕЗ ЦИФР)'), event.target.classList.add('error')) : event.target.classList.remove('error');
        break;

        case 'name' : 
        !isValid(nameRegular, event.target.value)? (alert('Введите НАЗВАНИЕ САЙТА НОРМАЛЬНО'), event.target.classList.add('error')) : event.target.classList.remove('error');
        break;

        case 'url' : 
        !isValid(urlRegular, event.target.value)? (alert('ВВЕДИ НОРМАЛЬНО URL'), event.target.classList.add('error')) : event.target.classList.remove('error');
        break;

        case 'email' : 
        !isValid(emailRegular, event.target.value)? (alert('ВВЕДИ НОРМАЛЬНО Email!!!!'), event.target.classList.add('error')) : event.target.classList.remove('error');
        break;
    }
});

//Функция проверки на валидность(в зависимости от введенный параметров(регулярное выражения, и лбой строчный элемент))
function isValid(regular, element){
    return element.match(regular) != null;
};