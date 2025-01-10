(function() {
    function initializeSlider() {
        let slideIndex = 0;
        showSlides();

        function showSlides() {
            let slides = document.getElementsByClassName("slide");
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { 
                slideIndex = 1;
            }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 3000); // Change image every 3 seconds
        }

        function changeSlide(n) {
            let slides = document.getElementsByClassName("slide");
            slideIndex += n;
            if (slideIndex >= slides.length) { 
                slideIndex = 0;
            }
            if (slideIndex < 0) { 
                slideIndex = slides.length - 1;
            }
            showSlides();
        }
    }

    // Call the function when the DOM content is fully loaded
    document.addEventListener("DOMContentLoaded", initializeSlider);
})();
