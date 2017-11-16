// function autoMobile(wheels){
//     this.wheels = wheels
//     this.setColor = () => {
//         this.color = color
//     }
//     this.getColor = () => {
//         return this.color
//     }
//     this.gasPedal = () => {
//         return "Vroom"
//     }
// }

// // Automobile.prototype.gasPedal = () => {
// //     return 'Vroom'
// // }

// function sedan(make,model,year){
//     this.make = make
//     this.model = model
//     this.year = year
//     this.doors = 4
// }
// // let car = new autoMobile(4)
// // console.log(car.gasPedal())

// sedan.prototype = new autoMobile(4)

// // let genesis = new sedan('Hyundai', 'Genesis', 2018)

// // console.dir(genesis.wheel)

// // let camry = new sedan('Toyota','Camry',year = null)

// function Camry(make, model, year = null){
//     this.make = make
//     this.model = model
//     this.year = year
//     this.door = 4
// }

// Camry.prototype = new sedan("Toyota", "Camry")
// let camry = new Camry()
// camry.year = 2020
// console.dir(camry)



class Automobile{
    constructor(wheels){
        this.wheels = wheels
    }
    setColor(color){
        this.color = color
    }
    getColor(){
        return this.color
    }
    gasPedal(){
        return 'Vroom'
    }
}


class Motorcycle extends Automobile{
    constructor(make, model, year){
        super(2)
        this.make = make
        this.mode = model
        this.year = year
    }
}

let moped = new Motorcycle("Vespa", "Hornet", 1988)
console.log(moped)