document.addEventListener('DOMContentLoaded', () => {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const closeSidebarToggle = document.querySelector('.close-sidebar-toggle');
    const body = document.body; // Kita akan menambahkan kelas ke body untuk mengontrol overlay
    const overlay = document.querySelector('.overlay'); // Ambil elemen overlay

    // --- Sidebar Toggle Functionality ---
    const openSidebar = () => {
        body.classList.add('sidebar-open');
    };

    const closeSidebar = () => {
        body.classList.remove('sidebar-open');
    };

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', openSidebar);
    }

    if (closeSidebarToggle) {
        closeSidebarToggle.addEventListener('click', closeSidebar);
    }

    if (overlay) {
        overlay.addEventListener('click', closeSidebar); // Tutup sidebar saat overlay diklik
    }

    // --- Highlight Active Nav Item Functionality ---
    const highlightActiveNavItem = () => {
        const currentPath = window.location.pathname;
        const navItems = document.querySelectorAll('.side-nav .nav-item');

        navItems.forEach(item => {
            item.classList.remove('active'); // Hapus 'active' dari semua item

            let itemHref = item.getAttribute('href');
            if (!itemHref || itemHref === '#' || itemHref === '') return; // Lewati link kosong atau placeholder

            // Dapatkan path relatif dari item.href
            const relativeItemPath = new URL(itemHref, window.location.origin).pathname;

            // Cek apakah currentPath cocok dengan itemHref atau merupakan bagian dari itu
            // Gunakan endsWith untuk lebih fleksibel, atau perbandingan penuh jika path sangat spesifik
            if (currentPath.endsWith(relativeItemPath) || (currentPath.endsWith('/') && relativeItemPath.endsWith('/index.html') && currentPath.slice(0, -1) === relativeItemPath.slice(0, -1))) {
                item.classList.add('active');

                // Jika item aktif adalah modul, pastikan level induknya juga aktif
                let parentModuleList = item.closest('.module-list');
                if (parentModuleList) {
                    let parentLevelItem = parentModuleList.previousElementSibling; // Ini adalah <a> dari level
                    if (parentLevelItem && parentLevelItem.classList.contains('nav-item')) {
                        parentLevelItem.classList.add('active');
                    }
                }
            } else if (currentPath === '/' && itemHref === 'index.html') { // Handle root index.html specifically
                item.classList.add('active');
            }
        });
    };

    highlightActiveNavItem();
    window.addEventListener('hashchange', highlightActiveNavItem);

    // --- Progress Bar (Placeholder) ---
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');
    if (progressBar && progressText) {
        const currentProgress = 0; // Anda bisa mengambil ini dari localStorage atau API
        progressBar.style.width = `${currentProgress}%`;
        progressText.textContent = `${currentProgress}% Complete`;
    }
});