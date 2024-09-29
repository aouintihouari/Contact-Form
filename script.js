document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const errors = [];
    document.querySelectorAll(".error-message").forEach((el) => {
      el.textContent = "";
      el.classList.remove("active");
    });

    const firstName = document.getElementById("first-name");
    const firstNameError = document.getElementById("first-name-error");
    if (firstName.value.trim().length < 2) {
      errors.push("First name must be at least 2 characters long.");
      firstNameError.classList.add("active");
      firstNameError.textContent = "First name must be at least 2 characters.";
    }

    const lastName = document.getElementById("last-name");
    const lastNameError = document.getElementById("last-name-error");
    if (lastName.value.trim().length < 2) {
      errors.push("Last name must be at least 2 characters long.");
      lastNameError.classList.add("active");
      lastNameError.textContent = "Last name must be at least 2 characters.";
    }

    const email = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      errors.push("Please enter a valid email address.");
      emailError.classList.add("active");
      emailError.textContent = "Please enter a valid email address.";
    }

    const message = document.getElementById("message");
    const messageError = document.getElementById("message-error");
    if (message.value.trim().length < 20) {
      errors.push("Message must be at least 20 characters long.");
      messageError.classList.add("active");
      messageError.textContent = "Message must be at least 20 characters.";
    }

    const queryTypeError = document.getElementById("query-type-error");
    const queryType = document.querySelector('input[name="query"]:checked');
    if (!queryType) {
      errors.push("Please select a query type.");
      queryTypeError.classList.add("active");
      queryTypeError.textContent = "Please select a query type.";
    }

    const consent = document.getElementById("consent");
    const consentError = document.getElementById("consent-error");
    if (!consent.checked) {
      errors.push("You must agree to the consent.");
      consentError.classList.add("active");
      consentError.textContent = "You must agree to the consent.";
    }

    if (errors.length === 0) {
      form.submit();
    }
  });
});
