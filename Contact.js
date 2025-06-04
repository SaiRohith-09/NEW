document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-form");
    const successModal = document.getElementById("successModal");
    const closeModal = document.querySelector(".close-modal");
    const modalCloseBtn = document.getElementById("modalCloseBtn");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); 
        

        successModal.style.display = "flex";


        contactForm.reset();
    });

    closeModal.addEventListener("click", function () {
        successModal.style.display = "none";
    });

    modalCloseBtn.addEventListener("click", function () {
        successModal.style.display = "none";
    });

  
    window.addEventListener("click", function (event) {
        if (event.target === successModal) {
            successModal.style.display = "none";
        }
    });
});
