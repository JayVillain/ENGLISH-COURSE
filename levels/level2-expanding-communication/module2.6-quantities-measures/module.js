// JavaScript for Module 2.6: Kuantitas dan Ukuran (Quantifiers)

function checkQuiz1() {
    const input = document.getElementById('q1-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q1-feedback');

    if (input === 'many') {
        feedback.textContent = "Benar! 'Friends' adalah countable noun, jadi kita gunakan 'many'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. 'Friends' adalah kata benda yang bisa dihitung. Gunakan 'many'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz2() {
    const input = document.getElementById('q2-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q2-feedback');

    if (input === 'some') {
        feedback.textContent = "Benar! Kalimat positif menggunakan 'some' untuk 'groceries' (countable).";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Ini adalah kalimat positif, jadi gunakan 'some'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz3() {
    const input = document.getElementById('q3-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q3-feedback');

    if (input === 'much') {
        feedback.textContent = "Benar! 'Time' adalah uncountable noun, jadi kita gunakan 'much'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. 'Time' adalah kata benda tak terhitung. Gunakan 'much'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz4() {
    const input = document.getElementById('q4-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q4-feedback');

    if (input === 'a little') {
        feedback.textContent = "Benar! 'Salt' adalah uncountable noun, jadi kita gunakan 'a little'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. 'Salt' adalah kata benda tak terhitung. Gunakan 'a little'.";
        feedback.className = 'feedback incorrect';
    }
}