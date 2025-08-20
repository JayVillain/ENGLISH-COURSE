// JavaScript for Modul 3.4: Nasihat & Kewajiban (Modal Verbs: Should, Must, Have To)

function checkQuiz1() {
    const input = document.getElementById('q1-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q1-feedback');

    if (input === 'should') {
        feedback.textContent = "Benar! 'Should' tepat untuk memberikan nasihat atau rekomendasi.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Pikirkan modal verb yang menunjukkan nasihat.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz2() {
    const input = document.getElementById('q2-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q2-feedback');

    if (input === 'must' || input === 'have to') {
        feedback.textContent = "Benar! 'Must' atau 'have to' bisa digunakan untuk kewajiban kuat/aturan seperti ini.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Gunakan 'must' atau 'have to' untuk kewajiban yang kuat.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz3() {
    const input = document.getElementById('q3-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q3-feedback');

    if (input === 'should') {
        feedback.textContent = "Benar! 'Should' adalah modal verb yang tepat untuk memberikan rekomendasi.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Gunakan 'should' untuk saran atau rekomendasi.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz4() {
    const input = document.getElementById('q4-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q4-feedback');

    if (input === 'must' || input === 'have to') {
        feedback.textContent = "Benar! 'Must' atau 'have to' tepat untuk kewajiban yang didasari hukum atau peraturan.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Kewajiban yang datang dari luar diri sendiri biasanya menggunakan 'have to' atau 'must'.";
        feedback.className = 'feedback incorrect';
    }
}