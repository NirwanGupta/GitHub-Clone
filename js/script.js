document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const suggestions = document.getElementById("suggestions");
    const searchBar = document.getElementById('searchBar');
    const toggleButton = document.getElementById('toggleButton');

    const dashboardText = document.getElementById("dashboardText");

    const menubar = document.getElementById("hidden-menubar");
    const menubarToggle = document.getElementById("toggle-menubar");
    const closeButton = document.getElementById("closeButton");
    
    const moreRepos = document.getElementById("hide-repo");
    const horizontalLine = document.getElementById("horizontal-line");
    const showMoreText = document.getElementById("show-more-repo");
    const leftContainerRepositories = document.getElementById("left-container-repositories");
    const leftSection = document.getElementById("left-section");

    const singlePosts = document.getElementsByClassName("single-post");


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

    window.showMoreRepo = function() {
        event.stopPropagation();
        moreRepos.classList.add("show-more-repository");
        horizontalLine.classList.add("hide-these");
        showMoreText.classList.add("hide-these");
        leftContainerRepositories.classList.add("increase-height");
        leftSection.classList.add("increase-height-upper-div");
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
            singlePosts.style.fontSize = '0.8rem';
        } else {
            dashboardText.textContent = 'dashboard';
        }
    }
    updateDashboardText();
    window.addEventListener('resize', updateDashboardText);
});
