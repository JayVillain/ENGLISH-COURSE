// JavaScript for Module 2.4: Merencanakan Masa Depan (Future Simple - 'Will' & 'Be Going To')

function checkQuiz1() {
    const input = document.getElementById('q1-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q1-feedback');

    const correctAnswers = ["is going to sleep", "is gonna sleep"]; // 'gonna' informal
    if (correctAnswers.includes(input)) {
        feedback.textContent = "Benar! Ada bukti visual (menguap) bahwa bayi akan tidur, jadi 'is going to sleep' tepat.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Ada bukti yang jelas, gunakan 'be going to'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz2() {
    const input = document.getElementById('q2-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q2-feedback');

    if (input === 'will pass') {
        feedback.textContent = "Benar! 'Will pass' tepat karena ini adalah opini atau prediksi tanpa bukti kuat.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Ini adalah opini pribadi, jadi gunakan 'will'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz3() {
    const input = document.getElementById('q3-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q3-feedback');

    const correctAnswers = ["are going to see", "are gonna see"];
    if (correctAnswers.includes(input)) {
        feedback.textContent = "Benar! 'Are going to see' tepat karena ini adalah rencana dengan tiket (bukti).";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Ada tiket, yang menunjukkan rencana. Gunakan 'be going to'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz4() {
    const input = document.getElementById('q4-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q4-feedback');

    if (input === 'will lend') {
        feedback.textContent = "Benar! 'Will lend' tepat karena ini adalah penawaran atau keputusan spontan.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Ini adalah keputusan spontan untuk membantu. Gunakan 'will'.";
        feedback.className = 'feedback incorrect';
    }
}