// JavaScript for Module 0.2: Kata-kata Pertama & Sapaan

function checkGreetingQuiz() {
    const input = document.getElementById('q1-greeting-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q1-greeting-feedback');

    if (input.includes('good morning')) {
        feedback.textContent = "Benar! 'Good morning' adalah salam yang tepat untuk pagi hari.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Coba lagi! Ingat, salam khusus untuk pagi hari.";
        feedback.className = 'feedback incorrect';
    }
}

function checkPolitenessQuiz() {
    const input = document.getElementById('q2-politeness-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q2-politeness-feedback');

    if (input.includes('thank you') || input.includes('thanks')) {
        feedback.textContent = "Tepat! Mengucapkan 'Thank you' atau 'Thanks' sangat penting.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Belum tepat. Pikirkan bagaimana cara mengucapkan terima kasih.";
        feedback.className = 'feedback incorrect';
    }
}

function checkNumberQuiz() {
    const input = document.getElementById('q3-number-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q3-number-feedback');

    if (input === 'seven') {
        feedback.textContent = "Benar! Angka 7 dieja 'seven'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Coba periksa kembali ejaan angka 7.";
        feedback.className = 'feedback incorrect';
    }
}

// Anda bisa menambahkan fungsi-fungsi lain di sini nanti
// Misalnya, untuk melacak progres modul atau memuat data kuis dari JSON