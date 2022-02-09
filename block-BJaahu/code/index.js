let title = "Where is the capital of Jordan";
let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
let correctAnswerIndex = 1;

function isAnswerCorrect(index){
    return index === correctAnswerIndex;
}
function getCorrectAnswer(){
    return options[correctAnswerIndex];
}

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
