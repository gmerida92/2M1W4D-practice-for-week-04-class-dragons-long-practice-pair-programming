class Dragon {
  constructor(name, color){
    this.name = name;
    this.color = color;
  }

  static getDragons(...dragons){
    return dragons.map(dragons => dragons.name);
  }

  breathesFire(){
    return `${this.name} breathes fire everywhere! BURNINATE!!!!`
  }
}

// const puff = new Dragon("Puff", "green");
// console.log(puff);
// console.log(puff.breathesFire());

// const toothless = new Dragon("Toothless", "black");

// const ralgathorTheDestroyer = new Dragon("Ralgathor the Destroyer of Worlds", "red");
// console.log(ralgathorTheDestroyer.breathesFire());

// const TROGDOR = new Dragon("TROGDOR!!!!", "green")
// console.log(TROGDOR.breathesFire());
// console.log(Dragon.getDragons(puff, toothless, ralgathorTheDestroyer, TROGDOR));
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
