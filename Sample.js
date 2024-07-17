document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const formSteps = document.querySelectorAll('.form-step');
    const nextButtons = document.querySelectorAll('.next-btn');
    const prevButtons = document.querySelectorAll('.prev-btn');

    let currentStep = 1;

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const step = parseInt(item.getAttribute('data-step'));
            setActiveStep(step);
        });
    });

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep < formSteps.length) {
                currentStep++;
                setActiveStep(currentStep);
            }
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                setActiveStep(currentStep);
            }
        });
    });

    function setActiveStep(step) {
        currentStep = step;
        formSteps.forEach((step, index) => {
            if (index + 1 === currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
        navItems.forEach((item, index) => {
            if (index + 1 === currentStep) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
});
