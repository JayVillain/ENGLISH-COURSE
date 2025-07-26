// Dapatkan elemen-elemen yang dibutuhkan dari DOM
const toggleBtn = document.getElementById('toggleBtn');
const closeBtn = document.getElementById('closeBtn'); // Tombol tutup di dalam sidebar
const mySidebar = document.getElementById('mySidebar');
const mainContent = document.getElementById('mainContent');

// Fungsi untuk membuka sidebar
function openSidebar() {
    mySidebar.style.width = '250px'; // Set lebar sidebar
    mainContent.style.marginLeft = '250px'; // Geser konten utama
    toggleBtn.style.left = '270px'; // Geser tombol toggle ke kanan
}

// Fungsi untuk menutup sidebar
function closeSidebar() {
    mySidebar.style.width = '0'; // Set lebar sidebar menjadi 0
    mainContent.style.marginLeft = '0'; // Kembalikan posisi konten utama
    toggleBtn.style.left = '20px'; // Kembalikan posisi tombol toggle
}

// Event Listener untuk tombol toggle (klik membuka/menutup)
toggleBtn.addEventListener('click', () => {
    // Jika sidebar sedang terbuka (lebar tidak 0), maka tutup
    if (mySidebar.style.width === '250px') {
        closeSidebar();
    } else { // Jika sidebar tertutup (lebar 0), maka buka
        openSidebar();
    }
});

// Event Listener untuk tombol tutup di dalam sidebar (klik menutup)
closeBtn.addEventListener('click', closeSidebar);

// Opsional: Tutup sidebar jika ukuran layar berubah dan sidebar terbuka
window.addEventListener('resize', () => {
    if (window.innerWidth < 768 && mySidebar.style.width === '250px') {
        closeSidebar();
    }
});