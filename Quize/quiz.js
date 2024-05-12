let currentQuestionIndex = 0;
let questions = [];

document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file.type === "application/json") {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                questions = JSON.parse(e.target.result);
                currentQuestionIndex = 0;
                displayQuestion();
            } catch (error) {
                alert('Fehler beim Lesen der JSON-Datei: ' + error);
            }
        };
        reader.readAsText(file);
    } else {
        alert('Bitte laden Sie eine JSON-Datei hoch.');
    }
});

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        document.getElementById('question').textContent = question.text;
        const answers = document.getElementById('answers');
        answers.innerHTML = '';
        question.options.forEach((option, index) => {
            const li = document.createElement('li');
            li.textContent = option;
            li.onclick = () => checkAnswer(index);
            answers.appendChild(li);
        });
    } else {
        document.getElementById('quiz-container').innerHTML = '<div>Quiz beendet! <button onclick="resetQuiz()">Quiz neustarten</button></div>';
    }
}

function checkAnswer(selectedIndex) {
    const correctAnswerIndex = questions[currentQuestionIndex].answerIndex;
    if (selectedIndex === correctAnswerIndex) {
        alert('Richtig!');
        currentQuestionIndex++;
        displayQuestion();
    } else {
        alert('Falsch, versuche es noch einmal.');
        displayQuestion(); // Zeigt die gleiche Frage erneut an
    }
}

function nextQuestion() {
    displayQuestion();
}

function resetQuiz() {
    currentQuestionIndex = 0;
    displayQuestion();
}

function loadUploadedQuestions() {
    document.getElementById('file-input').click();
}
