// JavaScript for Module 0.1: Pengantar & Mengenal Bunyi Bahasa Inggris

// Fungsi untuk kuis Alfabet
function checkAlphabetQuiz() {
    const input = document.getElementById('q1-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q1-feedback');

    if (input === 'a') {
        feedback.textContent = "Benar! Huruf 'A' memang dilafalkan seperti 'ei'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Coba lagi! Ingat, seperti bunyi 'ei' pada kata 'day'.";
        feedback.className = 'feedback incorrect';
    }
}

// Fungsi untuk kuis Vokal
function checkVowelQuiz() {
    const select = document.getElementById('q2-select').value;
    const feedback = document.getElementById('q2-feedback');

    if (select === 'E') {
        feedback.textContent = "Tepat! Vokal 'E' panjang berbunyi seperti 'i' pada kata 'tree'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Belum tepat. Coba pikirkan vokal yang berbunyi 'i' panjang.";
        feedback.className = 'feedback incorrect';
    }
}

// Fungsi untuk kuis Konsonan
function checkConsonantQuiz() {
    const input = document.getElementById('q3-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q3-feedback');

    if (input === 'c') {
        feedback.textContent = "Benar! Huruf 'C' bisa berbunyi keras (/k/) seperti 'cat' dan lembut (/s/) seperti 'city'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Konsonan ini memiliki dua bunyi umum, keras dan lembut. Coba pikirkan huruf 'C' atau 'G'.";
        feedback.className = 'feedback incorrect';
    }
}

// Anda bisa menambahkan fungsi-fungsi lain di sini nanti
// Misalnya, untuk melacak progres modul atau memuat data kuis dari JSON