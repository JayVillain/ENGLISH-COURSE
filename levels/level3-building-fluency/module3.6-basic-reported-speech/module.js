// JavaScript for Modul 3.6: Melaporkan Percakapan (Reported Speech)

function checkQuiz1() {
    const input = document.getElementById('q1-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q1-feedback');

    const correctAnswers = ["she said that she was happy.", "she said she was happy."];
    if (correctAnswers.includes(input)) {
        feedback.textContent = "Benar! 'She said that she was happy.' tenses mundur dari Simple Present menjadi Simple Past.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Ingat, 'I' menjadi 'she' dan 'am' menjadi 'was'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz2() {
    const input = document.getElementById('q2-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q2-feedback');

    const correctAnswers = ["he said that he lived in jakarta.", "he said he lived in jakarta."];
    if (correctAnswers.includes(input)) {
        feedback.textContent = "Benar! 'He said that he lived in Jakarta.' Simple Present menjadi Simple Past.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Perhatikan perubahan tenses dari 'live' menjadi 'lived'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz3() {
    const input = document.getElementById('q3-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q3-feedback');

    const correctAnswers = ["they said that they would go to the party.", "they said they would go to the party."];
    if (correctAnswers.includes(input)) {
        feedback.textContent = "Benar! 'They said that they would go to the party.' 'Will' berubah menjadi 'would'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. 'Will' mundur menjadi 'would'.";
        feedback.className = 'feedback incorrect';
    }
}