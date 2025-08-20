// JavaScript for Modul 3.3: Kemungkinan & Probabilitas (Modal Verbs: Can, Could, May, Might)

function checkQuiz1() {
    const input = document.getElementById('q1-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q1-feedback');

    if (input === 'may' || input === 'might') {
        feedback.textContent = "Benar! 'May' atau 'might' digunakan untuk kemungkinan yang tidak pasti.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Pikirkan modal verb yang menunjukkan kemungkinan.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz2() {
    const input = document.getElementById('q2-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q2-feedback');

    if (input === 'could') {
        feedback.textContent = "Benar! 'Could' digunakan untuk kemampuan di masa lalu.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Karena ini di masa lalu ('when I was a child'), gunakan 'could'.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz3() {
    const input = document.getElementById('q3-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q3-feedback');

    if (input === 'could' || input === 'may') {
        feedback.textContent = "Benar! 'Could' atau 'may' adalah cara yang sopan untuk meminta izin.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Gunakan 'could' atau 'may' untuk permintaan yang sopan.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz4() {
    const input = document.getElementById('q4-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q4-feedback');

    if (input === 'can') {
        feedback.textContent = "Benar! 'Can' digunakan untuk mengekspresikan kemampuan di masa sekarang.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. 'Can' adalah modal verb yang tepat untuk menyatakan kemampuan saat ini.";
        feedback.className = 'feedback incorrect';
    }
}