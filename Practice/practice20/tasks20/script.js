class Car {
    constructor(model, weight, amountFuelUsed, distanceTraveled) { 
        this._model = model; 
        this._weight = weight; 
        this._amountFuelUsed = amountFuelUsed; 
        this._distanceTraveled = distanceTraveled; 
    }

    get model(){
        return this._model;
    }
    set model(value){
        if(value.length > 3){
            this._model = value;
        }else{
            console.log("Мелкое значение!");
            return;
        }
    }


    get weight(){
        return this._weight;
    }
    set weight(value){
        if(value){
            this._weight = value;
        }else{
            console.log("Мелкое значение!");
            return;
        }
    }



    get distanceTraveled(){
        return this._amountFuelUsed;
    }
    set distanceTraveled(value){
        if(value){
            this._amountFuelUsed = value;
        }else{
            console.log("Мелкое значение!");
            return 0;
        }
    }




    get amountFuelUsed(){
        return this._distanceTraveled;
    }
    set amountFuelUsed(value){
        if(value){
            this._distanceTraveled = value;
        }else{
            console.log("Мелкое значение!");
            return 0;
        }
    }



    getFuelConsumption() { 
        console.log(this.amountFuelUsed/this.distanceTraveled);
    }
}



//Class SECOND
class CustomString{
    reverse(string){
        return Array.from(string).reverse().join('');
    }
    capFirstWord(string){
        return string[0].toUpperCase() + string.slice(1)
    }
    capAllWords(string){
        return string.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
    }
}
 let second = new CustomString();
 console.log(second.reverse('Egor'));

  