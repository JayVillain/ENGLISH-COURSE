// JavaScript for Module 3.2: Pengandaian (Conditional Sentences)

function checkQuiz1() {
    const input1 = document.getElementById('q1-input-1').value.trim().toLowerCase();
    const input2 = document.getElementById('q1-input-2').value.trim().toLowerCase();
    const feedback = document.getElementById('q1-feedback');

    if (input1 === 'rains' && input2 === 'will stay') {
        feedback.textContent = "Benar! 'If it rains, we will stay at home.' adalah Conditional Type 1.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Ingat struktur 'If' + Present Simple, 'will' + Verb 1.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz2() {
    const input1 = document.getElementById('q2-input-1').value.trim().toLowerCase();
    const input2 = document.getElementById('q2-input-2').value.trim().toLowerCase();
    const feedback = document.getElementById('q2-feedback');

    if (input1 === 'were' && input2 === 'would apologize') {
        feedback.textContent = "Benar! 'If I were you, I would apologize.' adalah Conditional Type 2 untuk nasihat.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Ingat struktur 'If' + Past Simple, 'would' + Verb 1. Gunakan 'were' untuk situasi ini.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz3() {
    const input = document.getElementById('q3-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q3-feedback');

    if (input === 'gets') {
        feedback.textContent = "Benar! 'She will buy a new phone if she gets a bonus.' Gunakan Present Simple untuk bagian 'if'.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. 'If' + Present Simple. Untuk 'she', gunakan 'gets'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz4() {
    const input1 = document.getElementById('q4-input-1').value.trim().toLowerCase();
    const input2 = document.getElementById('q4-input-2').value.trim().toLowerCase();
    const feedback = document.getElementById('q4-feedback');

    const correctAnswers = ['had', 'would travel'];
    if (input1 === correctAnswers[0] && input2 === correctAnswers[1]) {
        feedback.textContent = "Benar! 'If I had a million dollars, I would travel around the world.' Ini adalah situasi imajiner.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Gunakan Past Simple untuk 'if' dan 'would' + Verb 1 untuk hasilnya.";
        feedback.className = 'feedback incorrect';
    }
}