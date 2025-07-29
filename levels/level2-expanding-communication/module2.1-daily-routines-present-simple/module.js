// JavaScript for Module 2.1: Rutinitas Harian Anda (Present Simple Tense)

function checkQuiz1() {
    const input = document.getElementById('q1-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q1-feedback');

    if (input === 'drink') {
        feedback.textContent = "Benar! 'I drink water every morning.' Untuk 'I', kata kerja tidak berubah.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Ingat, untuk subjek 'I', kata kerja Present Simple menggunakan bentuk dasar.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz2() {
    const input = document.getElementById('q2-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q2-feedback');

    if (input === 'goes') {
        feedback.textContent = "Benar! 'She goes to school by bus.' Untuk 'She', kata kerja 'go' menjadi 'goes'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Untuk subjek orang ketiga tunggal (She), tambahkan -s atau -es.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz3() {
    const input = document.getElementById('q3-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q3-feedback');

    if (input === 'watch') {
        feedback.textContent = "Benar! 'They watch TV in the evening.' Untuk 'They', kata kerja tidak berubah.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Untuk subjek 'They', kata kerja Present Simple menggunakan bentuk dasar.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz4() {
    const input = document.getElementById('q4-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q4-feedback');

    if (input === 'studies') {
        feedback.textContent = "Benar! 'He studies English every day.' Untuk 'He', 'study' menjadi 'studies'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Ingat aturan penambahan -s/-es untuk kata kerja berakhiran konsonan + y.";
        feedback.className = 'feedback incorrect';
    }
}