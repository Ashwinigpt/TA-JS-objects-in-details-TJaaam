// - Pseudoclassical Pattern

function CreateAnimal(location, numberOfLegs) {
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
}

createAnimal.prototype = {
    eat: function () {
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation: function (newLocation) {
        this.location = newLocation;
        return this.location;
    },
    summary: function () {
        return `I live in ${this.location} and I have ${this.numberOfLegs}`
    },
};



function createDog(location, numberOfLegs, name, color){
    animal.name = name;
    animal.color = color;
}

createDog.prototype = {
    bark: function(){
        alert (`I am ${this.name} and I can bark 🐶`);
    },
    changeName: function(newName){
        this.name = newName;
        return this.name; 
    },
    changeColor: function(newColor){
        this.color = this.newColor;
        return this.color; 
    },
    summary: function(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    },
};



function createCat(location, numberOfLegs, name, colorOfEyes){
    animal.name = name;
    animal.colorOfEyes = colorOfEyes;
}

createCat.prototype = {
    meow: function(){
        alert (`I am ${this.name} and I can do mewo meow 😹`);
    },
    changeName: function(newName){
        this.name = newName;
        return this.name; 
    },
    changeColorOfEyes: function(newColor){
        this.color = this.newColor;
        return this.color; 
    },
    summary: function(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    },
};