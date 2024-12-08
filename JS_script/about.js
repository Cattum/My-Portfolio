$(document).ready(function () {
    const $window = $(window);

    // Apply parallax scrolling effect for each section with data-type="background"
    $('section').each(function () {
        var $bgobj = $(this); // Reference to the current section
        var speed = $bgobj.data('speed');

        $(window).scroll(function () {
            // Scroll the background at the speed specified in data-speed
            var yPos = -($window.scrollTop() / speed);
            var coords = '50% ' + yPos + 'px';
            $bgobj.css({
                backgroundPosition: coords
            });
        });
    });

    // Use Intersection Observer to detect when sections are visible
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
            else{
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});










