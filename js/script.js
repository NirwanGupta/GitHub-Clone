document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const searchBar = document.getElementById('searchBar');
    const toggleButton = document.getElementById('toggleButton');

    // Define the function to toggle the search bar visibility
    window.toggleSearchBar = function() {
        event.stopPropagation();
        navbar.classList.toggle('visible');
    };

    document.addEventListener('click', (event) => {
        if (!searchBar.contains(event.target) && !toggleButton.contains(event.target)) {
            navbar.classList.remove('visible');
        }
    });

    navbar.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});
