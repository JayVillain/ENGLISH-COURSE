// JavaScript for Modul 3.7: Ekspresi Opini & Persetujuan/Ketidaksetujuan

function checkQuiz1() {
    const input = document.getElementById('q1-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q1-feedback');

    const correctAnswers = ["i don't agree.", "i'm afraid i don't agree.", "i don't think so."];
    if (correctAnswers.includes(input)) {
        feedback.textContent = "Benar! Ungkapan ini adalah cara yang sopan untuk tidak setuju.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Coba gunakan frasa untuk menyatakan ketidaksetujuan secara sopan.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz2() {
    const input = document.getElementById('q2-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q2-feedback');

    const correctAnswers = ["agree", "think so", "couldn't agree more"];
    if (correctAnswers.includes(input)) {
        feedback.textContent = "Benar! 'I agree.' atau 'I couldn't agree more' adalah cara yang tepat.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Coba gunakan frasa untuk menyatakan persetujuan.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz3() {
    const input = document.getElementById('q3-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q3-feedback');

    const correctAnswers = ["it seems", "it seems to me"];
    if (correctAnswers.includes(input)) {
        feedback.textContent = "Benar! 'It seems to me that...' adalah frasa yang bagus untuk opini yang halus.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Pikirkan frasa yang lebih halus untuk mengekspresikan opini.";
        feedback.className = 'feedback incorrect';
    }
}