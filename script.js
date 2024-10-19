const links = document.querySelectorAll('.home');

links.forEach(home => {
    home.addEventListener('click', function() {
        links.forEach(l => l.classList.remove('active')); // Remove active class from all links
        this.classList.add('active'); // Add active class to the clicked link
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.list a');

    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(l => l.classList.remove('active')); // Remove active class from all links
            this.classList.add('active'); // Add active class to the clicked link
        });
    });

    // Animation on scroll for header profile
    const headerProfile = document.querySelector('.Home-profile');
    const aboutParagraph = document.querySelector('.story');
    const serviceHeading = document.querySelector('.service-animation')
    const serviceHeading1 = document.querySelector('.service-animation1')
    const serviceHeading2 = document.querySelector('.service-animation2')
    const serviceHeading3 = document.querySelector('.service-animation3')
    const footers = document.querySelector('.footers p')

    function handleScroll() {
        const headerPosition = headerProfile.getBoundingClientRect().top;
        const aboutPosition = aboutParagraph.getBoundingClientRect().top;
        const servicePosition = serviceHeading.getBoundingClientRect().top;
        const servicePosition1 = serviceHeading.getBoundingClientRect().top;
        const servicePosition2 = serviceHeading.getBoundingClientRect().top;
        const servicePosition3 = serviceHeading.getBoundingClientRect().top;
        const footersPosition = footers.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (headerPosition < screenPosition) {
            headerProfile.classList.add('visible');
        }
        
        if (aboutPosition < screenPosition) {
            aboutParagraph.classList.add('visible');
        }
        
        if (servicePosition < screenPosition) {
            serviceHeading.classList.add('visible');
        }
        if (servicePosition < screenPosition) {
            serviceHeading1.classList.add('visible');
        }
        if (servicePosition < screenPosition) {
            serviceHeading2.classList.add('visible');
        }
        if (servicePosition < screenPosition) {
            serviceHeading3.classList.add('visible');
        }
        if (servicePosition < screenPosition) {
            footers.classList.add('visible');
        }
    }

    document.addEventListener('scroll', handleScroll);
});
