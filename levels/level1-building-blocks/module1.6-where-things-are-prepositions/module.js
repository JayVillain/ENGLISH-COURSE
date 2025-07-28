// JavaScript for Module 1.6: Di Mana Lokasi (Prepositions of Place)

function checkQuiz1() {
    const input = document.getElementById('q1-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q1-feedback');

    if (input === 'on') {
        feedback.textContent = "Benar! 'On' digunakan untuk menunjukkan di atas permukaan.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Pikirkan preposisi untuk permukaan.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz2() {
    const input = document.getElementById('q2-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q2-feedback');

    if (input === 'in') {
        feedback.textContent = "Benar! 'In' digunakan untuk di dalam kota atau area tertutup.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Untuk di dalam kota, gunakan 'in'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz3() {
    const input = document.getElementById('q3-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q3-feedback');

    if (input === 'at') {
        feedback.textContent = "Benar! 'At' digunakan untuk titik spesifik seperti 'home'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Untuk 'home' kita menggunakan 'at'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz4() {
    const input = document.getElementById('q4-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q4-feedback');

    if (input === 'under') {
        feedback.textContent = "Benar! 'Under' berarti di bawah.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Kata yang berarti di bawah adalah 'under'.";
        feedback.className = 'feedback incorrect';
    }
}