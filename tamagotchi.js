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
        console.log ("WAHH!!!!" + this.name + this.foodInTummy);
    }
    puke(){
        this.foodInTummy = this.foodInTummy - 1;
        console.log(this.foodInTummy + "WAHH!!")
    }
    yawn(){
        this.restedness = this.restedness - 1;
        console.log (this.name + this.restedness);
    }

}

//create new Tamagotchis
const newTamagotchis1 = new Tamagotchis('EastAtlantaTodd', 'Velociraptor');
const newTamagotchis2 = new Tamagotchis('DecaturDutchessDrea', 'Dragon');
const newTamagotchis3 = new Tamagotchis('CaliTriggaTramaine', 'Flamingo');
const newTamagotchis4 = new Tamagotchis('BankheadBranden', 'Parrot');
//test out your Tamagotchies below via console.logs
console.log(newTamagotchis1.cry());
console.log(newTamagotchis2.cry());
console.log(newTamagotchis3.puke());
console.log(newTamagotchis4.yawn());
console.log(player.feedTamagotchi(newTamagotchis1));
console.log(player.feedTamagotchi(newTamagotchis2));
console.log(player.feedTamagotchi(newTamagotchis3));
console.log(player.feedTamagotchi(newTamagotchis4));