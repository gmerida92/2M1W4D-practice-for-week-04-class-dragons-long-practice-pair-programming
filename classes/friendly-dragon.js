const Dragon = require("./dragon")

class FriendlyDragon extends Dragon {
    constructor(name, color, lifeGoals, friend){
        super(name, color);
        this.lifeGoals = lifeGoals;
        this.friend = friend;
    }

    hasLifeGoals() {
      this.lifeGoals.forEach(lifeGoal => {
        console.log(`${this.name} likes to ${lifeGoal}`);
      });
    }

    helpsPeople() {
      return `${this.name} helps their friend ${this.friend}`;
    }
}

// const bill = new FriendlyDragon("Bill the Extrodinarius", "Purple", ["Be the Best", "Do taxes", "Lose 25 lbs"], "Ted");
// bill.hasLifeGoals();
// bill.helpsPeople();
// console.log(bill.breathesFire());

try {
    module.exports = FriendlyDragon;
  } catch {
    module.exports = null;
  }
