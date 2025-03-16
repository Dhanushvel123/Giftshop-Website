document.addEventListener("DOMContentLoaded", function () {
    let navbarToggler = document.querySelector(".navbar-toggler");
    let navbarCollapse = document.querySelector(".navbar-collapse");

    navbarToggler.addEventListener("click", function () {
        if (navbarCollapse.classList.contains("show")) {
            // If the navbar is open, close it
            navbarCollapse.classList.remove("show");
            navbarToggler.innerHTML = "<span class='navbar-toggler-icon'></span>";
        } else {
            // If the navbar is closed, open it
            navbarCollapse.classList.add("hide");
            navbarToggler.innerHTML = "&#10006;"; // Cross icon
        }
    });

    // Close the navbar when clicking outside (optional for better UX)
    document.addEventListener("click", function (event) {
        if (!navbarToggler.contains(event.target) && !navbarCollapse.contains(event.target)) {
            navbarCollapse.classList.remove("show");
            navbarToggler.innerHTML = "<span class='navbar-toggler-icon'></span>";
        }
    });
});



$(document).ready(function () {
    $("#loginForm").submit(function (event) {
        event.preventDefault();

        // Hide the login modal properly
        $("#loginModal").modal("hide");

        // Ensure transition effect is smooth
        setTimeout(function () {
            $("#successModal").modal("show");
        }, 500);
    });

    // Ensure modals reset when closed
    $("#successModal").on("hidden.bs.modal", function () {
        $("#loginForm")[0].reset();
    });
});
$(document).ready(function(){
    // Auto-slide every 4 seconds
    $('#testimonialCarousel').carousel({
        interval: 4000,
        ride: 'carousel'
    });
});

function reloadscreen() {
    location.reload(); // Reloads the current page
}

    // Smooth transition effect
    $('.carousel').on('slide.bs.carousel', function () {
        $('.carousel-item').addClass('fade-out');
        setTimeout(() => {
            $('.carousel-item').removeClass('fade-out');
        }, 3000);
    });