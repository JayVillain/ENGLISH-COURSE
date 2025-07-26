document.addEventListener('DOMContentLoaded', () => {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const appContainer = document.querySelector('.app-container');
    const mainContentArea = document.querySelector('.main-content-area'); // Ambil elemen main content area
    const sideNav = document.querySelector('.side-nav'); // Ambil elemen side nav

    // --- Sidebar Toggle Functionality ---
    if (sidebarToggle && appContainer && mainContentArea) {
        const toggleSidebar = () => {
            appContainer.classList.toggle('collapsed');
            // Untuk mobile, tambahkan/hapus overlay jika sidebar terbuka
            if (window.innerWidth <= 992) { // Sesuaikan breakpoint dengan media query CSS Anda
                if (appContainer.classList.contains('collapsed')) {
                    // Jika collapsed (sidebar terbuka di mobile), atur posisi fixed dan tampilkan
                    sideNav.style.transform = 'translateX(0%)';
                    mainContentArea.classList.add('overlay-active'); // Tambahkan overlay
                } else {
                    // Jika tidak collapsed (sidebar tertutup di mobile), sembunyikan
                    sideNav.style.transform = 'translateX(-100%)';
                    mainContentArea.classList.remove('overlay-active'); // Hapus overlay
                }
            }
        };

        sidebarToggle.addEventListener('click', toggleSidebar);

        // Close sidebar if overlay is clicked (mobile view)
        mainContentArea.addEventListener('click', (event) => {
            if (window.innerWidth <= 992 && appContainer.classList.contains('collapsed') && event.target === mainContentArea) {
                toggleSidebar(); // Close sidebar if click is on the overlay
            }
        });

        // Adjust sidebar state on window resize (from desktop to mobile and vice versa)
        window.addEventListener('resize', () => {
            if (window.innerWidth > 992) {
                // On desktop, ensure sidebar is open by default and remove mobile specific styles
                appContainer.classList.remove('collapsed');
                sideNav.style.transform = 'translateX(0%)';
                mainContentArea.classList.remove('overlay-active');
            } else {
                // On mobile, ensure sidebar is hidden by default unless manually opened
                if (!appContainer.classList.contains('collapsed')) { // If it's not explicitly opened
                    sideNav.style.transform = 'translateX(-100%)'; // Hide it
                    mainContentArea.classList.remove('overlay-active');
                }
            }
        });

        // Initial state check on load for mobile
        if (window.innerWidth <= 992) {
            appContainer.classList.add('collapsed'); // Start collapsed on mobile
            sideNav.style.transform = 'translateX(-100%)';
        }
    }


    // --- Highlight Active Nav Item Functionality ---
    const highlightActiveNavItem = () => {
        const currentPath = window.location.pathname;
        const navItems = document.querySelectorAll('.side-nav .nav-item');

        navItems.forEach(item => {
            item.classList.remove('active'); // Hapus 'active' dari semua

            let itemHref = item.getAttribute('href');
            if (!itemHref || itemHref === '#') return; // Lewati link kosong atau placeholder

            // Dapatkan path relatif dari item.href (misalnya: "levels/level0-absolute-beginner/index.html")
            const relativeItemPath = itemHref.startsWith('/') ? itemHref : new URL(itemHref, window.location.origin).pathname;

            // Cek apakah currentPath mengandung itemHref
            // Ini menangani kasus:
            // - index.html (root)
            // - levelX/index.html
            // - levelX/moduleY/index.html
            if (currentPath === relativeItemPath || (currentPath.endsWith('/') && relativeItemPath.endsWith('/index.html') && currentPath === relativeItemPath.slice(0, -1))) {
                item.classList.add('active');

                // Jika item aktif adalah modul, pastikan level induknya juga aktif
                let parentModuleList = item.closest('.module-list');
                if (parentModuleList) {
                    // Cari <a> element yang merupakan parent dari .module-list ini
                    // Ini akan menjadi link Level-nya
                    let parentLevelItem = parentModuleList.previousElementSibling;
                    if (parentLevelItem && parentLevelItem.classList.contains('nav-item')) { // Pastikan itu nav-item
                        parentLevelItem.classList.add('active');
                    }
                }
            }
        });
    };

    // Panggil fungsi saat DOMContentLoaded dan setiap kali hash berubah (jika ada)
    highlightActiveNavItem();
    window.addEventListener('hashchange', highlightActiveNavItem);

    // Contoh untuk progress bar (bisa dihapus jika tidak digunakan atau diimplementasikan secara dinamis)
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');
    if (progressBar && progressText) {
        const currentProgress = 0; // Anda bisa mengambil ini dari localStorage atau API
        progressBar.style.width = `${currentProgress}%`;
        progressText.textContent = `${currentProgress}% Complete`;
    }
});