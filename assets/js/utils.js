// File Utils.js
// Berisi fungsi-fungsi bantu yang dapat digunakan di berbagai modul.

// Contoh: Fungsi untuk mengacak array (berguna untuk pertanyaan kuis)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

// Contoh: Fungsi untuk membersihkan input teks
function cleanInput(text) {
    return text.trim().toLowerCase();
}

// Anda bisa menambahkan fungsi-fungsi umum lainnya di sini.