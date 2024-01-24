var currentQuestion = 1;

function checkAnswer(questionNumber) {
    var userInput = document.getElementById('answer' + questionNumber).value.toLowerCase();
    var resultDiv = document.getElementById('result');
    var nextButton = document.getElementById('nextButton');
    var quizHeading = document.getElementById('quiz-heading');

    switch (questionNumber) {
        case 1:
            if (userInput === 'paris') {
                resultDiv.innerHTML = 'Correct!';
            } else {
                resultDiv.innerHTML = 'Incorrect. The correct answer is Paris.';
            }
            break;
        case 2:
            if (userInput === 'blue whale') {
                resultDiv.innerHTML = 'Correct!';
            } else {
                resultDiv.innerHTML = 'Incorrect. The correct answer is Blue Whale.';
            }
            break;
        case 3:
            if (userInput === 'mars') {
                resultDiv.innerHTML = 'Correct!';
            } else {
                resultDiv.innerHTML = 'Incorrect. The correct answer is Mars.';
            }
            break;
        case 4:
            if (userInput === 'tokyo') {
                resultDiv.innerHTML = 'Correct!';
            } else {
                resultDiv.innerHTML = 'Incorrect. The correct answer is Tokyo.';
            }
            break;
        case 5:
            if (userInput === '7') {
                resultDiv.innerHTML = 'Correct!';
            } else {
                resultDiv.innerHTML = 'Incorrect. The correct answer is 7.';
            }
            nextButton.innerHTML = 'Finish';
            break;
        default:
            resultDiv.innerHTML = 'Invalid question.';
    }

    resultDiv.style.display = 'block';
    nextButton.style.display = 'block';
    quizHeading.style.display = 'none';
}

function nextQuestion() {
    var currentQuestionDiv = document.getElementById('question' + currentQuestion);
    currentQuestionDiv.style.display = 'none';

    currentQuestion++;
    var nextQuestionDiv = document.getElementById('question' + currentQuestion);
    if (nextQuestionDiv) {
        nextQuestionDiv.style.display = 'block';
    } else {
        document.getElementById('result').innerHTML = '<h3>Quiz completed!</h3>';
        document.getElementById('nextButton').style.display = 'none';
    }

    var resultDiv = document.getElementById('result');
    var nextButton = document.getElementById('nextButton');
    resultDiv.style.display = 'none';
    nextButton.style.display = 'none';
}
document.getElementById('question1').style.display = 'block';