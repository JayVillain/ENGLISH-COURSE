// JavaScript for Module 0.3: Pertanyaan & Respons Paling Sederhana

function checkQuiz1() {
    const input = document.getElementById('q1-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q1-feedback');

    if (input === 'what is that?') {
        feedback.textContent = "Tepat! 'What is that?' digunakan untuk benda yang jauh.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Ingat, benda itu jauh dari Anda.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz2() {
    const input = document.getElementById('q2-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q2-feedback');

    if (input === 'it is an apple.' || input === 'it\'s an apple.') {
        feedback.textContent = "Benar! 'It is an apple' adalah jawaban yang tepat. Ingat 'an' untuk kata yang diawali vokal.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Belum tepat. Pastikan Anda menggunakan 'an' dan format kalimat yang benar.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz3() {
    const input = document.getElementById('q3-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q3-feedback');

    if (input === 'who is this?') {
        feedback.textContent = "Benar! 'Who is this?' adalah cara yang tepat untuk menanyakan siapa seseorang di foto.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Ingat, Anda menanyakan orang di foto (dekat dengan Anda secara konseptual).";
        feedback.className = 'feedback incorrect';
    }
}