// Using function to create object

function createUser(name, id, noOfProjects) {
    let user = {};
    user.name = name;
    user.id = id;
    user.noOfProjects = noOfProjects;

    user.getProjects = function () {
        return user.noOfProjects;
    }
    user.changeName = function (newName) {
        let prevName = user.name;
        user.name = newName;
        return prevName;
    }
    user.incrementProject = function () {
        user.noOfProjects += 1;
        return noOfProjects;
    }
    user.decrementProject = function () {
        user.noOfProjects -= 1;
        return noOfProjects;
    }
    return user;
}

let user1 = createUser('Ashwini', 1307, 8);
let user2 = createUser('Vandana', 1213, 7);


// Using Object.create (prototypal pattern)

let userMethods = {
    getProjects: function () {
        return this.noOfProjects;
    },
    changeName: function (newName) {
        let prevName = this.name;
        this.name = newName;
        return prevName;
    },
    incrementProject: function () {
        this.noOfProjects += 1;
        return noOfProjects;
    },
    decrementProject: function () {
        this.noOfProjects -= 1;
        return noOfProjects;
    },
};

function createUser(name, id, noOfProjects) {
    let user = Object.create(userMethods);
    user.name = name;
    user.id = id;
    user.noOfProjects = noOfProjects;

    return user;
}

let user1 = createUser('Ashwini', 1307, 8);
let user2 = createUser('Vandana', 1213, 7);

// Using Pseudoclassical Way

function CreateUser(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
}

createUser.prototype = {
    getProjects: function () {
        return this.noOfProjects;
    },
    changeName: function (newName) {
        let prevName = this.name;
        this.name = newName;
        return prevName;
    },
    incrementProject: function () {
        this.noOfProjects += 1;
        return noOfProjects;
    },
    decrementProject: function () {
        this.noOfProjects -= 1;
        return noOfProjects;
    },
}

let user1 = new CreateUser('Ashwini', 1307, 8);
let user2 = new CreateUser('Vandana', 1213, 7);

// Using Class

class User {
    constructor(name, id, noOfProjects) {
        this.name = name;
        this.id = id;
        this.noOfProjects = noOfProjects;

    }
    getProjects() {
        return this.noOfProjects;
    }
    changeName(newName) {
        let prevName = this.name;
        this.name = newName;
        return prevName;
    }
    incrementProject() {
        this.noOfProjects += 1;
        return noOfProjects;
    }
    decrementProject() {
        this.noOfProjects -= 1;
        return noOfProjects;
    }
}

let user1 = new CreateUser('Ashwini', 1307, 8);
let user2 = new CreateUser('Vandana', 1213, 7);




