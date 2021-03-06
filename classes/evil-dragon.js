const Dragon = require("./dragon")

class EvilDragon extends Dragon{
    constructor(name, color, evilDoings, nemesis){
        super(name, color);
        this.evilDoings = evilDoings;
        this.nemesis = nemesis;
    }

    dontInviteThemOverForDinner(){
        this.evilDoings.forEach(evilDoing => console.log(`${this.name} will ${evilDoing}`));
    }

    burnsNemesis(){
        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
    }

}

const TROGDOR = new EvilDragon("TROGDOOOR!!!", "green", ["burninate the countryside", "burninate the peasants", "burninate all the people's thatched roof cottages"], "the peasants");

TROGDOR.dontInviteThemOverForDinner();
console.log(TROGDOR.burnsNemesis());

try {
    module.exports = EvilDragon;
  } catch {
    module.exports = null;
  }
