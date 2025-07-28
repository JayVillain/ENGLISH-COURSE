// JavaScript for Module 1.1: The Verb 'To Be'

function checkQuiz1() {
    const input = document.getElementById('q1-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q1-feedback');

    if (input === 'is') {
        feedback.textContent = "Benar! 'She is a teacher.'";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Ingat, untuk 'She' kita menggunakan 'is'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz2() {
    const input = document.getElementById('q2-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q2-feedback');

    if (input === 'are') {
        feedback.textContent = "Benar! 'We are friends.'";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Untuk 'We' kita menggunakan 'are'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz3() {
    const input = document.getElementById('q3-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q3-feedback');

    if (input === 'am') {
        feedback.textContent = "Benar! 'I am from Indonesia.'";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Untuk 'I' kita menggunakan 'am'.";
        feedback.className = 'feedback incorrect';
    }
}