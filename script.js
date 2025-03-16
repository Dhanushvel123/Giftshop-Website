$(document).ready(function () {
    $("#menuToggle").click(function () {
        $("#navbarMenu").toggleClass("active");

        let navbarToggler = $("#menuToggle");

        if ($("#navbarMenu").hasClass("active")) {
            navbarToggler.html("✖"); // Close (X)
        } else {
            navbarToggler.html("☰"); // Menu (Hamburger)
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
