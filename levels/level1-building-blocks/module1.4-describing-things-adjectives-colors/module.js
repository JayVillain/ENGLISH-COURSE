// JavaScript for Module 1.4: Mendeskripsikan Sesuatu (Adjectives & Colors)

function checkQuiz1() {
    const input = document.getElementById('q1-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q1-feedback');

    if (input === 'big' || input === 'small' || input === 'new' || input === 'old') {
        feedback.textContent = `Benar! '${input}' adalah kata sifat yang tepat untuk mendeskripsikan rumah.`;
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Coba gunakan kata sifat dasar seperti 'big', 'small', 'new', atau 'old'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz2() {
    const input1 = document.getElementById('q2-input-1').value.trim().toLowerCase();
    const input2 = document.getElementById('q2-input-2').value.trim().toLowerCase();
    const feedback = document.getElementById('q2-feedback');

    if (input1 === 'sky' && input2 === 'blue') {
        feedback.textContent = "Benar! 'The sky is blue.'";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Coba lagi, perhatikan kata benda dan warnanya.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz3() {
    const input = document.getElementById('q3-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q3-feedback');

    // Menerima beberapa variasi jawaban karena spasi mungkin berbeda
    const correctAnswers = [
        "it is a red apple.",
        "it's a red apple."
    ];

    if (correctAnswers.includes(input)) {
        feedback.textContent = "Benar! 'It is a red apple.'";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Ingat, kata sifat datang sebelum kata benda, dan awali dengan 'It is a/an'.";
        feedback.className = 'feedback incorrect';
    }
}