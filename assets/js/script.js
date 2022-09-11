const body          = document.querySelector('body');
dropdownToggles     = document.querySelectorAll('.dropdown-toggle');
submenuCollapse     = document.querySelectorAll('.sidebar-nav-item.has-submenu > .sidebar-nav-link');
tabLinks            = document.querySelectorAll('.tabs .tab-link');
tabPans             = document.querySelectorAll('.tabs .tab-pane');
sidebarOverlay      = document.querySelector('.sidebar-overlay');
toggleSidebarButton = document.querySelector('.btn-toggle-sidebar');

// DROPDOWN MENU
dropdownToggles.forEach(item => {
    let dropdownMenu = item.nextElementSibling;
    item.addEventListener('click', (e) => {
        e.preventDefault()
        dropdownMenu.classList.toggle('show')
    });
});

// SIDEBAR SUBMENU
submenuCollapse.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault()
        this.classList.toggle("active");
        let submenu = item.nextElementSibling;
        if (submenu.style.maxHeight) {
            submenu.style.maxHeight = null;
        } else {
            submenu.style.maxHeight = `${submenu.scrollHeight}px`;
        }
    });
});

// Toggle between tabs
tabLinks.forEach((button) => {
    button.addEventListener('click', () => {
        const tab = document.getElementById(button.getAttribute('data-tab-id'));

        tabLinks.forEach((link) => {
            if (link !== button && link.classList.contains('active')) {
                link.classList.remove('active')
            }
        });

        tabPans.forEach((pane) => {
            if (pane !== tab && pane.classList.contains('show')) {
                pane.classList.remove('show');
            }
        });

        button.classList.add('active');
        tab.classList.add('show');
    });
});


// Toggle Sidebar
toggleSidebarButton.addEventListener('click', () => {
    body.classList.toggle('sidebar-active');
    toggleSidebarButton.classList.toggle('open');
});

sidebarOverlay.addEventListener('click', () => {
    body.classList.toggle('sidebar-active');
    toggleSidebarButton.classList.toggle('open');
});
