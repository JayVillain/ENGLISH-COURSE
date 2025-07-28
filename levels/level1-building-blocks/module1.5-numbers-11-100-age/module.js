// JavaScript for Module 1.5: Angka (11-100) & Umur

function checkQuiz1() {
    const input = document.getElementById('q1-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q1-feedback');

    if (input === 'fifteen') {
        feedback.textContent = "Benar! Angka 15 dieja 'fifteen'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Coba periksa ejaan angka 15.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz2() {
    const input = document.getElementById('q2-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q2-feedback');

    if (input === 'forty') {
        feedback.textContent = "Benar! Angka 40 dieja 'forty'. Perhatikan tidak ada 'u' setelah 'o'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Ingat ejaan khusus untuk 'forty'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz3() {
    const input = document.getElementById('q3-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q3-feedback');

    const correctAnswers = [
        "i am twenty-eight years old.",
        "i'm twenty-eight years old."
    ];

    if (correctAnswers.includes(input)) {
        feedback.textContent = "Benar! 'I am twenty-eight years old.' adalah cara menyatakan umur yang lengkap.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Gunakan 'I am [angka] years old.'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz4() {
    const input = document.getElementById('q4-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q4-feedback');

    if (input === 'how old are you?') {
        feedback.textContent = "Benar! 'How old are you?' adalah pertanyaan yang tepat.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Coba lagi, bagaimana Anda menanyakan umur seseorang?";
        feedback.className = 'feedback incorrect';
    }
}