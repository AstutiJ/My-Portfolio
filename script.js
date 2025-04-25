// Example: Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Smooth scroll effect
        });
    });
});

// You can add more JavaScript here later for other features
// Example: A simple alert when the page loads (just for testing)
// window.onload = function() {
//     alert("Portfolio loaded!");
// };