document.addEventListener("DOMContentLoaded", function() {

    
    const cards = document.querySelectorAll('.card-animation');

    const revealCards = () => {
        cards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (cardTop < windowHeight - 50) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, index * 150);

            }
        });
    };

    window.addEventListener('scroll', revealCards);
    revealCards();

    const form = document.getElementById('bookingForm');
    const nameInput = document.getElementById('userName');
    const emailInput = document.getElementById('userEmail');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const successBanner = document.getElementById('formSuccess');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let isValid = true;

        if (nameInput.ariaValueMax.trim().length<3) {
            nameError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }

        if (isValid) {
            successBanner.textContent = 'Thank you, ${nameInput.value}! Your service guide request has been received.';
            successBanner.style.display = 'block';
            form.reset();
        }
    });

});