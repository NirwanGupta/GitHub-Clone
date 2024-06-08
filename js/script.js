document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const searchBar = document.getElementById('searchBar');
    const toggleButton = document.getElementById('toggleButton');
    const dashboardText = document.getElementById("dashboardText");
    const menubar = document.getElementById("hidden-menubar");
    const menubarToggle = document.getElementById("toggle-menubar");
    const closeButton = document.getElementById("closeButton");

    const overlay = document.createElement("div");
    overlay.classList.add("dark-overlay");
    document.body.appendChild(overlay);


    window.toggleSearchBar = function() {
        event.stopPropagation();
        navbar.classList.toggle('visible');
        document.body.classList.add("lock-scroll");
    };

    window.activeMenubar = function() {
        event.stopPropagation();
        menubar.classList.toggle("menubar-active");
        document.body.classList.add("lock-scroll");
    }

    document.addEventListener('click', (event) => {
        if (!searchBar.contains(event.target) && !toggleButton.contains(event.target)) {
            navbar.classList.remove('visible');
            document.body.classList.remove("lock-scroll");
        }
        if(!menubar.contains(event.target) && !menubarToggle.contains(event.target)) {
            menubar.classList.remove("menubar-active");
            document.body.classList.remove("lock-scroll");
        }
    });

    closeButton.addEventListener('click', (event) => {
        menubar.classList.remove("menubar-active");
        document.body.classList.remove("lock-scroll");
    })
    
    navbar.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    function updateDashboardText() {
        if (window.innerWidth < 340) {
            dashboardText.textContent = 'dashb...';
        } else {
            dashboardText.textContent = 'dashboard';
        }
    }

    // Initial call to set the correct text
    updateDashboardText();

    // Update text on window resize
    window.addEventListener('resize', updateDashboardText);
});
