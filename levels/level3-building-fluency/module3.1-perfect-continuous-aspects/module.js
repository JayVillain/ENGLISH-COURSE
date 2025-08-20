// JavaScript for Module 3.1: Pengalaman & Tindakan Berlanjut (Present Perfect & Present Continuous)

function checkQuiz1() {
    const input = document.getElementById('q1-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q1-feedback');

    const correctAnswers = ["has visited", "has visited paris"];
    if (correctAnswers.includes(input)) {
        feedback.textContent = "Benar! 'Has visited' digunakan untuk pengalaman hidup, waktu tidak spesifik.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Gunakan 'has' + Verb 3 untuk pengalaman (She).";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz2() {
    const input = document.getElementById('q2-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q2-feedback');

    const correctAnswers = ["have lived", "have been living"]; // Keduanya bisa diterima
    if (correctAnswers.includes(input)) {
        feedback.textContent = "Benar! 'Have lived' atau 'have been living' keduanya benar untuk durasi yang masih berlangsung.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Untuk durasi yang masih berlangsung, gunakan 'have/has lived' atau 'have/has been living'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz3() {
    const input = document.getElementById('q3-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q3-feedback');

    const correctAnswers = ["is raining", "is currently raining"];
    if (correctAnswers.includes(input)) {
        feedback.textContent = "Benar! 'Is raining' digunakan untuk tindakan yang sedang terjadi sekarang.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. 'Look!' menunjukkan tindakan sedang berlangsung sekarang. Gunakan Present Continuous.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz4() {
    const input = document.getElementById('q4-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q4-feedback');

    const correctAnswers = ["has studied", "has been studying"]; // Keduanya bisa diterima
    if (correctAnswers.includes(input)) {
        feedback.textContent = "Benar! 'Has studied' atau 'has been studying' keduanya benar untuk tindakan yang dimulai di masa lalu dan berlanjut.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Gunakan Present Perfect karena ada titik awal waktu ('since 2020').";
        feedback.className = 'feedback incorrect';
    }
}