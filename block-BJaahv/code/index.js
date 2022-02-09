// Using function to create object

function incrementProject(value = 1) {
    this.score = this.score + value;
    return this.score;
};
function decrementProject(value = 1){
    this.score = this.score - value;
    return this.score;
};
function changeName(name){
    this.name = name;
    return this.name;
};
function getProjects() {
    this.score = this.score + value;
    return this.score;
};
// Using Object.create (prototypal pattern)

let userMethods = {
    incrementProject: function(value = 1) {
        this.score = this.score + value;
        return this.score;
    },
    decrementProject: function (value = 1){
        this.score = this.score - value;
        return this.score;
    },
    changeName: function (name){
        this.name = name;
        return this.name;
    },
};

function createUser(name, score = 0){
    let user = Object.create(userMethods);
    user.name = name;
    user.score = score;
    return user;
}

// Using Pseudoclassical Way

function CreateUser(name, score = 0){
    this.name = name;
    this.score = score;
}

createUser.prototype = {
    incrementProject: function(value = 1) {
        this.score = this.score + value;
        return this.score;
    },
    decrementProject: function (value = 1){
        this.score = this.score - value;
        return this.score;
    },
    changeName: function (name){
        this.name = name;
        return this.name;
    },
}

let user1 = new User('Ashwini', 8);
let user2 = new User('Vandana');

// Using Class

class User {
    constructor (name, score){
        this.name = name;
        this.score = score;
    }
    incrementProject(value = 1) {
        this.score = this.score + value;
        return this.score;
    };
    decrementProject(value = 1){
        this.score = this.score - value;
        return this.score;
    };
    changeName(name){
        this.name = name;
        return this.name;
    };
}

let user1 = new User('Ashwini', 8);
let user2 = new User('Vandana');




