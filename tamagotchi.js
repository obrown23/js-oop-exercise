console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchis{
    constructor(name,creatureType)
    {
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
        this.name = name;
        this.creatureType = creatureType;
    }
    cry(){
        this.foodInTummy = this.foodInTummy - 1;
        console.log ("WAHH!!!!");
        console.log (this.name + thisfoodInTummy);
        

    }
}

//create new Tamagotchis
const newTamagotchis1 = Tamagotchis(){
    cry()
} 
const newTamagotchis2 = Tamagotchis();


//test out your Tamagotchies below via console.logs
console.log(newTamagotchis1);
console.log(newTamagotchis2);