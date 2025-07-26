const toggleBtn = document.getElementById('toggleBtn');
const closeBtn = document.getElementById('closeBtn');
const mySidebar = document.getElementById('mySidebar');
const mainContent = document.getElementById('mainContent');
const overlay = document.getElementById('overlay');

// Fungsi untuk membuka sidebar
function openSidebar() {
    mySidebar.style.width = '250px';
    overlay.classList.add('active'); // Aktifkan overlay
    
    // Hanya geser konten utama di layar desktop (lebar > 768px)
    if (window.innerWidth > 768) {
        mainContent.classList.add('sidebar-open');
        toggleBtn.classList.add('sidebar-open-btn'); // Geser tombol
    }
    mySidebar.classList.add('open'); // Menambahkan kelas 'open' untuk mobile
}

// Fungsi untuk menutup sidebar
function closeSidebar() {
    mySidebar.style.width = '0';
    overlay.classList.remove('active'); // Nonaktifkan overlay
    
    // Kembalikan posisi konten utama dan tombol toggle
    mainContent.classList.remove('sidebar-open');
    toggleBtn.classList.remove('sidebar-open-btn');
    mySidebar.classList.remove('open'); // Hapus kelas 'open'
}

// Event Listener untuk tombol toggle
toggleBtn.addEventListener('click', () => {
    // Jika sidebar sedang terbuka (lebar tidak 0), maka tutup
    if (mySidebar.style.width === '250px' || mySidebar.classList.contains('open')) {
        closeSidebar();
    } else { // Jika sidebar tertutup, maka buka
        openSidebar();
    }
});

// Event Listener untuk tombol tutup di dalam sidebar
closeBtn.addEventListener('click', closeSidebar);

// Event Listener untuk klik di luar sidebar (pada overlay)
overlay.addEventListener('click', closeSidebar);

// Tutup sidebar jika ukuran layar berubah dan sidebar terbuka di mobile
window.addEventListener('resize', () => {
    if (window.innerWidth < 768 && (mySidebar.style.width === '250px' || mySidebar.classList.contains('open'))) {
        closeSidebar();
    }
});