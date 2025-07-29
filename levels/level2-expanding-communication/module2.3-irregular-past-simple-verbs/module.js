// JavaScript for Module 2.3: Masa Lalu Tidak Beraturan (Past Simple - Irregular Verbs)

function checkQuiz1() {
    const input = document.getElementById('q1-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q1-feedback');

    if (input === 'went') {
        feedback.textContent = "Benar! 'Went' adalah bentuk Past Simple dari 'go'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Bentuk Past Simple dari 'go' adalah 'went'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz2() {
    const input = document.getElementById('q2-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q2-feedback');

    if (input === 'ate') {
        feedback.textContent = "Benar! 'Ate' adalah bentuk Past Simple dari 'eat'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Bentuk Past Simple dari 'eat' adalah 'ate'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz3() {
    const input = document.getElementById('q3-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q3-feedback');

    if (input === 'had') {
        feedback.textContent = "Benar! 'Had' adalah bentuk Past Simple dari 'have'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Bentuk Past Simple dari 'have' adalah 'had'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz4() {
    const input = document.getElementById('q4-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q4-feedback');

    if (input === 'saw') {
        feedback.textContent = "Benar! 'Saw' adalah bentuk Past Simple dari 'see'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Bentuk Past Simple dari 'see' adalah 'saw'.";
        feedback.className = 'feedback incorrect';
    }
}