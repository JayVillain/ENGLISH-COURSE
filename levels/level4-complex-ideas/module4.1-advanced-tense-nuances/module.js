// JavaScript for Modul 4.1: Penggunaan Tenses Lanjutan & Perbedaan Nuansa

function checkQuiz1() {
    const input = document.getElementById('q1-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q1-feedback');

    if (input === 'have not seen' || input === 'haven\'t seen') {
        feedback.textContent = "Benar! 'Have not seen' tepat karena menggunakan 'since' untuk durasi yang masih berlangsung.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Kata 'since' menandakan Present Perfect Simple. Gunakan 'have not seen'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz2() {
    const input = document.getElementById('q2-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q2-feedback');

    if (input === 'has been studying') {
        feedback.textContent = "Benar! 'Has been studying' tepat karena menekankan proses yang masih berlangsung hingga sekarang.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Karena dia 'lelah sekarang', proses 'belajar' ditekankan. Gunakan Present Perfect Continuous.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz3() {
    const input = document.getElementById('q3-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q3-feedback');

    if (input === 'visited') {
        feedback.textContent = "Benar! 'Visited' tepat karena ada waktu spesifik di masa lalu ('last summer').";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Kata 'last summer' membuat tensesnya Past Simple.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz4() {
    const input = document.getElementById('q4-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q4-feedback');

    if (input === 'have finished') {
        feedback.textContent = "Benar! 'Have finished' tepat karena fokusnya pada hasil tindakan (buku sudah selesai).";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Gunakan Present Perfect Simple karena fokusnya pada hasil.";
        feedback.className = 'feedback incorrect';
    }
}