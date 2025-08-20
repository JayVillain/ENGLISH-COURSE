// JavaScript for Modul 3.5: Jika...Maka... (Conditional Sentences Type 1)

function checkQuiz1() {
    const input1 = document.getElementById('q1-input-1').value.trim().toLowerCase();
    const input2 = document.getElementById('q1-input-2').value.trim().toLowerCase();
    const feedback = document.getElementById('q1-feedback');

    if (input1 === 'is' && input2 === 'will go') {
        feedback.textContent = "Benar! 'If it is sunny tomorrow, we will go to the beach.' Gunakan Present Simple di klausa 'if'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Ingat struktur Conditional Type 1: If + Present Simple, will + Verb 1.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz2() {
    const input1 = document.getElementById('q2-input-1').value.trim().toLowerCase();
    const input2 = document.getElementById('q2-input-2').value.trim().toLowerCase();
    const feedback = document.getElementById('q2-feedback');

    if (input1 === 'will not pass' && input2 === 'study') {
        feedback.textContent = "Benar! 'You will not pass the exam unless you study hard.' 'Unless' sama dengan 'if not'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Bagian pertama butuh 'will not' dan bagian 'unless' butuh Present Simple.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz3() {
    const input1 = document.getElementById('q3-input-1').value.trim().toLowerCase();
    const input2 = document.getElementById('q3-input-2').value.trim().toLowerCase();
    const feedback = document.getElementById('q3-feedback');

    if (input1 === 'calls' && input2 === 'will tell') {
        feedback.textContent = "Benar! 'If she calls me, I will tell her the news.' Gunakan Present Simple untuk 'she'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Ingat, 'If' + Present Simple, 'will' + Verb 1. Untuk 'she', gunakan 'calls'.";
        feedback.className = 'feedback incorrect';
    }
}