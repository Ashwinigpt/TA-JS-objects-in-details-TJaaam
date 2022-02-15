class Person{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat(){
        return `${this.name} can eat!`;
    }
    sleep(){
        return `${this.name} can sleep!`;
    }
    walk(){
        return `${this.name} can walk!`;
    }
}

class Player extends Person{
    constructor(name, age, gender, sportsName){
        super(name, age, gender);
        this.sportsName = sportsName;
    }
    play(){
        return `${this.name} can play!`;
    }
}

class Teacher extends Person{
    constructor(name, age, gender, instituteName){
        super(name, age, gender);
        this.instituteName = instituteName;
    }
    teach(){
        return `${this.name} can teach!`;
    }
}

class Artist extends Person{
    constructor(name, age, gender, kind){
        super(name, age, gender);
        this.kind = kind;
    }
    createArt(){
        return `${this.name} can create Art!`;
    }
}

class Cricketer extends Player{
    constructor(name, age, gender, sportsName, teamName){
        super(name, age, gender, sportsName);
        this.teamName = teamName;
    }
    playCricket(){
        return `${this.name} can play cricket!`;
    }
}