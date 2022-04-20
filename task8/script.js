function HashStorageFunc(){
    let cars = {a:"Yeep", b:"sdsdsd"};

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
        let valueArray = [];
        for (const key in cars) {
            valueArray.push(cars[key]);
        }
        return valueArray;
    }
}


$(document).ready(function(){
    let hash = new HashStorageFunc();
    // hash.addValue("c","FEEEE");
    // console.log(hash.getValue("c"));
    // console.log(hash.getAllValue());
    
    $('.addVal-click').click(function(){
       
    });

    $('.addVal-click').click(function(){
       
    });

    $('.addVal-click').click(function(){
       
    });

    $('.addVal-click').click(function(){
       
    });
});

