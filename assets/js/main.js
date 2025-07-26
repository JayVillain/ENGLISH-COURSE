document.addEventListener('DOMContentLoaded', () => {
    // --- Highlight Active Nav Item Functionality ---
    const highlightActiveNavItem = () => {
        const currentPath = window.location.pathname;
        const navItems = document.querySelectorAll('.side-nav .nav-item');

        navItems.forEach(item => {
            item.classList.remove('active'); // Hapus 'active' dari semua item

            let itemHref = item.getAttribute('href');
            if (!itemHref || itemHref === '#') return; // Lewati link kosong atau placeholder

            // Dapatkan path relatif dari item.href (misalnya: "/levels/level0-absolute-beginner/index.html")
            const relativeItemPath = new URL(itemHref, window.location.origin).pathname;

            // Cek apakah currentPath cocok dengan itemHref atau merupakan bagian dari itu
            // Ini menangani kasus:
            // - index.html (root)
            // - levelX/index.html
            // - levelX/moduleY/index.html
            if (currentPath === relativeItemPath || currentPath.startsWith(relativeItemPath) && relativeItemPath !== '/') {
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

    // Panggil fungsi saat DOMContentLoaded dan setiap kali hash berubah (jika ada)
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