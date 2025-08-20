// JavaScript for Modul 4.3: Kalimat Relatif (Relative Clauses)

function checkQuiz1() {
    const input = document.getElementById('q1-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q1-feedback');

    const correctAnswers = ["who", "that"];
    if (correctAnswers.includes(input)) {
        feedback.textContent = "Benar! 'Who' atau 'that' digunakan untuk merujuk pada orang.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Pikirkan kata ganti relatif untuk orang.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz2() {
    const input = document.getElementById('q2-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q2-feedback');

    const correctAnswers = ["which", "that"];
    if (correctAnswers.includes(input)) {
        feedback.textContent = "Benar! 'Which' atau 'that' digunakan untuk merujuk pada benda.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Pikirkan kata ganti relatif untuk benda.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz3() {
    const input = document.getElementById('q3-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q3-feedback');

    if (input === 'where') {
        feedback.textContent = "Benar! 'Where' digunakan untuk merujuk pada tempat.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Pikirkan kata ganti relatif yang merujuk pada tempat.";
        feedback.className = 'feedback incorrect';
    }
}