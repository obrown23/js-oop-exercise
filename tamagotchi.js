console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchis{
    constructor(){
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }
    cry(){
        this.foodInTummy = this.foodInTummy - 1;
        console.log (WAHH!!!!);
        console.log (foodInTummy);l

    }
}

//create new Tamagotchis
const newTamagotchis1 = Tamagotchis1();
const newTamagotchis2 = Tamagotchis2();

//test out your Tamagotchies below via console.logs
console.log(newTamagotchis1);
console.log(newTamagotchis2);