function HashStorageFunc(){
    let cars = {
        Маргарита:["Напиток БОМБА!","images/drinksImages/Margarita.jpg"], 
        CocaCola:["Короче, делается из жука какого то...","images/drinksImages/CocaCola.jpg"], 
    };

    this.addValue = function(key, value){
        cars[key] = value;
    }
    this.getValue = function(key){
        return cars[key];
    }
    this.deleteValue = function(key){
       delete(cars[key]); 
    }
    this.getKey = function(){
        let keyArray = [];
        for (const key in cars) {
           keyArray.push(key);
        }
        return keyArray;
    }

    //метод на вывод всего содержимого(в моем случае фотки машин)
    this.getAllValue = function(){
        return cars;
    }
}


$(document).ready(function(){
    
    let drinkStorage  = new HashStorageFunc();
    
    
    //Вывод информации обо всех объектах
    $('.getAllValue-click').click(function(){
        $('.drinks-container').empty();
        let object = drinkStorage.getAllValue();
        for (const key in object) {
            $('.drinks-container').append(`
                <div class = "drink-item">
                    <h2>${key}</h2>
                    <img src = "${object[key][1]}" alt = "НЕТ(">
                    <p>${object[key][0]}</p>
                </div>
            `);
        }
    });



    //Удаление объекта
    $('.deleteValue-click').click(function(){
        $('.drinks-container').empty();
        $('.drinks-container').append(`
            <input class = "delete-input" type="text" placeholder="Название">
            <button type="button" class="deleteItem">Удалить Напиток</button>
        `);
        $('.deleteItem').click(function(){
            drinkStorage.deleteValue($('.delete-input').val());
            $('.drinks-container').empty();
        });
        alert('Удаление прошло успешно)');
    });


    //Вывод информации об объекте
    $('.getInfo-click').click(function(){
        $('.drinks-container').empty();
        $('.drinks-container').append(`
            <input class = "aboutItem-input" type="text" placeholder="Название">
            <button type="button" class="aboutItem">Получить информацию</button>
        `);
            $('.aboutItem').click(function(){
                let info = drinkStorage.getValue($('.aboutItem-input').val());
                if(info){
                    $('.drinks-container').empty();
                    $('.drinks-container').append(`<p>${info[0]}</p>`);
                }else{
                    alert('Напиток не найден(');
                }
            });   
    });



    //Добавление объекта
    //на самом деле тут костыль(я еще не разобрался как добавить картинку через выбор файла), поэтому здесь надо вводить url картинки вручную, и тогда она добавится.
    $('.addVal-click').click(function(){
        $('.drinks-container').empty();
        $('.drinks-container').append(`
            <input class = "key-input" type="text" placeholder="Название">
            <input class = "about-input" type="text" placeholder="Описание">
            <input class = "image-input"  type="text" placeholder="Ссылка на фотографию(url)">
            <button type="button" class="addItem">Добавить напиток</button>
        `);
        let paramArray = [];
        $('.addItem').click(function(){
            paramArray.push( $('.about-input').val());
            paramArray.push( $('.image-input').val());
            drinkStorage.addValue($('.key-input').val(), paramArray);
        });
    });
});

