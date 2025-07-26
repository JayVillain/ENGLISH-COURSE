// JavaScript Global untuk English Mastery Course
// Fungsi-fungsi umum, seperti pelacakan progres, navigasi dinamis, dll. akan ditempatkan di sini.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Main JavaScript loaded. Course dashboard ready.');

    // Fungsi untuk menandai item navigasi yang aktif di sidebar
    const highlightActiveNavItem = () => {
        const path = window.location.pathname;
        const navItems = document.querySelectorAll('.side-nav .nav-item');

        navItems.forEach(item => {
            item.classList.remove('active'); // Hapus 'active' dari semua
            let itemHref = item.getAttribute('href');

            // Handle root index.html separately if needed
            if (path.endsWith('/') || path.endsWith('/index.html')) {
                // If it's the root dashboard
                if (itemHref === 'index.html' || itemHref === './index.html' || itemHref === '../index.html' || itemHref === '../../index.html') {
                    if (path.endsWith('english-mastery-course/') || path.endsWith('english-mastery-course/index.html')) {
                        item.classList.add('active');
                    }
                } else if (path.includes(itemHref) && itemHref !== '#') { // For other actual links
                    item.classList.add('active');
                }
            } else if (itemHref !== '#' && path.includes(itemHref)) {
                 item.classList.add('active');
            }
        });
    };

    highlightActiveNavItem();

    // Opsional: Anda bisa memanggil fungsi ini lagi jika navigasi dilakukan secara SPA (Single Page Application) tanpa reload penuh.
    // window.addEventListener('popstate', highlightActiveNavItem);
});