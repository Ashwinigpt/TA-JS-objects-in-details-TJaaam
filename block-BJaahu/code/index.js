// Prototypal Pattern 

let questionMethods = {
    isAnswerCorrect: function(index){
        return index === this.correctAnswerIndex;
    },
    getCorrectAnswer: function(){
        return this.options[this.correctAnswerIndex];
    },
};


function createQuestion(title, options, correctAnswerIndex){
    let question = Object.create(questionMethods);
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;

    return question;
}

let firstQuestion = createQuestion(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion = createQuestion(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );

//Pseudoclassical Pattern

function CreateQuestion(title, options, correctAnswerIndex){
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
}

createQuestion.prototype = {
    isAnswerCorrect: function(index){
        return index === this.correctAnswerIndex;
    },
    getCorrectAnswer: function(){
        return this.options[this.correctAnswerIndex];
    },
};

let firstQuestion = new CreateQuestion(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
);
let secondQuestion = new CreateQuestion(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
);

// Class Pattern

class Question {
    constructor(title, options, correctAnswerIndex){
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
}
    isAnswerCorrect(index){
        return index === this.correctAnswerIndex;
    },
    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex];
    },

}

let firstQuestion = new CreateQuestion(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
);
let secondQuestion = new CreateQuestion(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
);