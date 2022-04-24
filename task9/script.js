function Laptop(name, model, sersNum, expYear, ram, rom, weight){
    this.name = name;
    this.model = model;
    this.sersNum = sersNum;
    this.expYear = expYear;
    this.ram = ram;
    this.rom = rom;
    this.weight = weight;

    this.isDvD = false;
    this.isWebCam = true;

    this.RamRomShow = function(){
        return "ОЗУ: " + this.ram + " ПЗУ: " + this.rom;
    }

    this.ShowMoreInfo = function(){
        return "Название: " + this.name + " Модель: " + this.model;
    }

}



function Ultrabook(name, model, sersNum, expYear, ram, rom, weight){
    Laptop.call(this ,name, model, sersNum, expYear, ram, rom, weight);
    this.ShowNWY = function(){
        return "Название: " + this.name + " Модель: " + this.model + " Вес: " + this.weight;
    }
}

var newLaptop = new Laptop("GT-try", "ML-13", 121323, 12, "8Гб", "12Гб", 13);

var newUltrabook = new Ultrabook("GT-set", "YET-13", 121323, 12, "8Гб", "12Гб", 13);

console.log(newUltrabook.ShowNWY());
