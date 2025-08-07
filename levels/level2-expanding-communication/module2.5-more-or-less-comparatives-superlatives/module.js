// JavaScript for Module 2.5: Lebih atau Kurang (Comparative & Superlative)

function checkQuiz1() {
    const input = document.getElementById('q1-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q1-feedback');

    if (input === 'more interesting') {
        feedback.textContent = "Benar! 'Interesting' memiliki 3 suku kata, jadi kita gunakan 'more interesting'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. 'Interesting' adalah kata sifat panjang, jadi gunakan 'more'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz2() {
    const input = document.getElementById('q2-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q2-feedback');

    if (input === 'the highest') {
        feedback.textContent = "Benar! 'Highest' adalah bentuk superlative dari 'high' (satu suku kata).";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Ini adalah perbandingan dari banyak hal (di dunia), jadi gunakan superlative.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz3() {
    const input = document.getElementById('q3-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q3-feedback');

    if (input === 'the worst') {
        feedback.textContent = "Benar! 'The worst' adalah bentuk superlative tidak beraturan dari 'bad'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Ingatlah kata sifat tidak beraturan. Superlative dari 'bad' adalah 'the worst'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz4() {
    const input = document.getElementById('q4-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q4-feedback');

    if (input === 'more friendly' || input === 'friendlier') {
        feedback.textContent = "Benar! 'Friendly' bisa menggunakan 'more friendly' atau 'friendlier'. Keduanya benar!";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Kata sifat yang berakhiran '-y' seringkali bisa menggunakan kedua bentuk. Jawaban yang paling umum adalah 'more friendly' atau 'friendlier'.";
        feedback.className = 'feedback incorrect';
    }
}