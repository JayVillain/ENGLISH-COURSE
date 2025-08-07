// JavaScript for Module 2.7: Kepemilikan (Possessive Adjectives & Nouns)

function checkQuiz1() {
    const input = document.getElementById('q1-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q1-feedback');

    if (input === 'my') {
        feedback.textContent = "Benar! 'My' adalah kata sifat kepemilikan untuk subjek 'I'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Pikirkan kata sifat kepemilikan untuk 'I'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz2() {
    const input = document.getElementById('q2-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q2-feedback');

    if (input === 'our') {
        feedback.textContent = "Benar! 'Our' adalah kata sifat kepemilikan untuk subjek 'We'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Pikirkan kata sifat kepemilikan untuk 'We'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz3() {
    const input = document.getElementById('q3-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q3-feedback');

    if (input === "sarah's") {
        feedback.textContent = "Benar! Tambahkan apostrof dan 's' untuk menunjukkan kepemilikan.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Gunakan apostrof dan 's' ('s) untuk menyatakan kepemilikan.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz4() {
    const input = document.getElementById('q4-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q4-feedback');

    if (input === 'his') {
        feedback.textContent = "Benar! 'His' adalah kata sifat kepemilikan untuk subjek 'He'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Pikirkan kata sifat kepemilikan untuk 'He'.";
        feedback.className = 'feedback incorrect';
    }
}