// JavaScript for Modul 4.2: Kalimat Pasif (Passive Voice)

function checkQuiz1() {
    const input = document.getElementById('q1-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q1-feedback');

    const correctAnswers = ["the room is cleaned by john every day.", "the room is cleaned every day by john."];
    if (correctAnswers.includes(input)) {
        feedback.textContent = "Benar! 'The room is cleaned by John every day.'";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Ingat struktur Passive Voice: Subjek + to be (is) + Verb 3 + by pelaku.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz2() {
    const input = document.getElementById('q2-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q2-feedback');

    if (input === 'the story was read by the teacher.' || input === 'the story was read by the teacher') {
        feedback.textContent = "Benar! 'The story was read by the teacher.'";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Gunakan 'was' karena tenses aslinya Past Simple, dan Verb 3 dari 'read' adalah 'read'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz3() {
    const input = document.getElementById('q3-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q3-feedback');

    if (input === 'a new house will be built by them.' || input === 'a new house will be built.') {
        feedback.textContent = "Benar! 'A new house will be built.' adalah kalimat pasif yang tepat.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Ingat struktur Passive Voice Future Simple: Subjek + will be + Verb 3.";
        feedback.className = 'feedback incorrect';
    }
}