//Coffee Maker
class Coffee {
  constructor(type, cream, sugar){
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile(){
    return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
  }

  creams(){
    if(this.cream > 1){
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars(){
    if(this.sugar > 1){
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}

//Write the code that makes a black coffee. Then write the code that outputs the coffee's profile.
var blackCoffee = new Coffee("black", 1, 1)
console.log(blackCoffee.coffeeProfile())

//Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.
var hotAmericano = new Coffee("americano", 1, 2)
console.log(hotAmericano.coffeeProfile())

//Latte Maker

//Write a Latte class that takes a flavor, a milk type and a number of shots.

class Latte {
  constructor(shots, flavor, milkType){
    this.shots = shots.toLowerCase()
    this.flavor = flavor.toLowerCase()
    this.milkType = milkType.toLowerCase()
  }
  latteProfile(){
    return `A ${this.shots} shot ${this.flavor} latte ${this.noMilkType()}`
  }
  noMilkType(){
    if(this.milkType === "" || this.milkType === " "){
      return ""
    } else{
      return `with ${this.milkType}.`
    }
  }
}

// Write a method for your Latte class that outputs the latte's profile.
//
// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
var regularLatte = new Latte("single", "regular", "")
console.log(regularLatte.latteProfile())
// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
var hazelnutLatte = new Latte("double", "hazelnut", "almond milk")
console.log(hazelnutLatte.latteProfile())
// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
class Cylinder{
  constructor(radius, height){
    this.radius = radius
    this.height = height
    this.pi = Math.PI
  }
  calculateVolume(){
    return this.pi*this.radius*this.radius*this.height
  }
}

// Write the code that creates three unique cylinder objects
var cylinder1 = new Cylinder(5, 10)
console.log(cylinder1.calculateVolume().toFixed(4))

var cylinder2 = new Cylinder(7,12)
console.log(cylinder2.calculateVolume().toFixed(4))

var cylinder3 = new Cylinder(10,13)
console.log(cylinder3.calculateVolume().toFixed(4))
