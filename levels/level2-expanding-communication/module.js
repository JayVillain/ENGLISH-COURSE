// JavaScript for Module 1.2: Memperkenalkan Diri & Orang Lain

function checkQuiz1() {
    const input = document.getElementById('q1-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q1-feedback');

    if (input === "i'm" || input === "i am") {
        feedback.textContent = "Benar! 'Hello, I'm Sarah.' atau 'Hello, I am Sarah.'";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Coba gunakan 'I'm' atau 'I am'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz2() {
    const input = document.getElementById('q2-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q2-feedback');

    if (input === 'name') {
        feedback.textContent = "Benar! 'My name is John.'";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Kata yang tepat adalah 'name'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz3() {
    const input = document.getElementById('q3-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q3-feedback');

    if (input === 'this') {
        feedback.textContent = "Benar! 'John, this is my friend, Maria.'";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Untuk memperkenalkan orang lain, gunakan 'this'.";
        feedback.className = 'feedback incorrect';
    }
}