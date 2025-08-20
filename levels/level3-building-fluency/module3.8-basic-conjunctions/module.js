// JavaScript for Modul 3.8: Menggunakan Kata Penghubung Dasar (Conjunctions)

function checkQuiz1() {
    const input = document.getElementById('q1-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q1-feedback');

    if (input === 'for') {
        feedback.textContent = "Benar! 'For' menunjukkan alasan. 'I am tired, for I worked all day.'";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. 'So' menunjukkan hasil, 'for' menunjukkan alasan.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz2() {
    const input = document.getElementById('q2-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q2-feedback');

    if (input === 'but') {
        feedback.textContent = "Benar! 'But' digunakan untuk menunjukkan kontras.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Pikirkan kata yang menunjukkan ide yang berlawanan.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz3() {
    const input = document.getElementById('q3-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q3-feedback');

    if (input === 'so') {
        feedback.textContent = "Benar! 'So' digunakan untuk menunjukkan hasil dari suatu tindakan.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. 'For' menunjukkan alasan, 'so' menunjukkan hasil.";
        feedback.className = 'feedback incorrect';
    }
}

function checkQuiz4() {
    const input = document.getElementById('q4-input').value.trim().toLowerCase();
    const feedback = document.getElementById('q4-feedback');

    if (input === 'and' || input === 'yet') {
        feedback.textContent = "Benar! 'And' atau 'yet' bisa digunakan di sini. 'And' menunjukkan tambahan, 'yet' menunjukkan kontras yang mengejutkan.";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = "Salah. Coba gunakan 'and' untuk menambahkan ide atau 'yet' untuk kontras.";
        feedback.className = 'feedback incorrect';
    }
}