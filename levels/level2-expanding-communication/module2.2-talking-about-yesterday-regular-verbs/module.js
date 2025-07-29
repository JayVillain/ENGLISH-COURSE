// JavaScript for Module 2.2: Berbicara Tentang Kemarin (Past Simple - Regular Verbs)

function checkQuiz1() {
    const input = document.getElementById('q1-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q1-feedback');

    if (input === 'watched') {
        feedback.textContent = "Benar! 'Watched' adalah bentuk Past Simple dari 'watch'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Ingat, tambahkan '-ed' untuk kata kerja beraturan.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz2() {
    const input = document.getElementById('q2-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q2-feedback');

    if (input === 'lived') {
        feedback.textContent = "Benar! 'Lived' adalah bentuk Past Simple dari 'live'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Kata kerja berakhiran 'e', tambahkan hanya '-d'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz3() {
    const input = document.getElementById('q3-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q3-feedback');

    if (input === 'studied') {
        feedback.textContent = "Benar! 'Studied' adalah bentuk Past Simple dari 'study'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Kata kerja berakhiran konsonan + 'y', ubah 'y' menjadi 'i' lalu '-ed'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz4() {
    const input = document.getElementById('q4-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q4-feedback');

    if (input === 'stopped') {
        feedback.textContent = "Benar! 'Stopped' adalah bentuk Past Simple dari 'stop'. Gandakan 'p' karena ini Vokal+Konsonan.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Untuk kata kerja satu suku kata dengan pola VK, gandakan konsonan terakhir.";
        feedback.className = 'feedback incorrect';
    }
}