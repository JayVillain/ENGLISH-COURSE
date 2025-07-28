// JavaScript for Module 1.3: Kata Benda & Kata Sandang (Nouns & Articles)

function checkQuiz1() {
    const input = document.getElementById('q1-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q1-feedback');

    if (input === 'an') {
        feedback.textContent = "Benar! 'An old car.' karena 'old' diawali bunyi vokal.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Ingat aturan 'a' dan 'an' berdasarkan bunyi huruf pertama setelahnya.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz2() {
    const input = document.getElementById('q2-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q2-feedback');

    if (input === 'children') {
        feedback.textContent = "Benar! Bentuk jamak tidak beraturan dari 'child' adalah 'children'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. 'Child' adalah kata benda tidak beraturan. Coba lagi.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz3() {
    const input = document.getElementById('q3-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q3-feedback');

    if (input === 'the') {
        feedback.textContent = "Benar! 'The sun is bright today.' karena 'sun' adalah benda unik di dunia.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Pikirkan apakah 'sun' itu spesifik atau umum.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz4() {
    const input = document.getElementById('q4-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q4-feedback');

    if (input === 'a') {
        feedback.textContent = "Benar! 'A university student.' karena 'university' diawali bunyi konsonan /yu/.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Ingat, aturan 'a'/'an' berdasarkan BUNYI, bukan huruf pertama.";
        feedback.className = 'feedback incorrect';
    }
}