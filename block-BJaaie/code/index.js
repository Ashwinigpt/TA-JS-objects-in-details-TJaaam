// - Pseudoclassical Pattern

function CreateAnimal(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
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
    this.name = name;
    this.color = color;
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
    this.name = name;
    this.colorOfEyes = colorOfEyes;
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

// - Class Pattern

class Animal {
    constructor(location, numberOfLegs){
        this.location = location;
        this.numberOfLegs = numberOfLegs;
    }
    eat() {
        console.log(`I live in ${this.location} and I can eat`);
    }
    changeLocation(newLocation) {
        this.location = newLocation;
        return this.location;
    }
    summary() {
        return `I live in ${this.location} and I have ${this.numberOfLegs}`
    }
}

class Dog {
    constructor(location, numberOfLegs, name, color){
        this.name = name;
        this.color = color;
    }
    bark(){
        alert (`I am ${this.name} and I can bark 🐶`);
    }
    changeName(newName){
        this.name = newName;
        return this.name; 
    }
    changeColor(newColor){
        this.color = this.newColor;
        return this.color; 
    }
    summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}

class Cat{
    constructor(location, numberOfLegs, name, color){
        this.name = name;
        this.colorOfEyes = colorOfEyes;
    }
    meow(){
        alert (`I am ${this.name} and I can do mewo meow 😹`);
    }
    changeName(newName){
        this.name = newName;
        return this.name; 
    }
    changeColorOfEyes(newColor){
        this.color = this.newColor;
        return this.color; 
    }
    summary(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }
}