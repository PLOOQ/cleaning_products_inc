// Initialize EmailJS user ID
(function () {
  // https://dashboard.emailjs.com/admin/integration
  emailjs.init("user_P87oshGpbh5hihVWz4cTD");
})();

// Initialize DOM elements
const user_name = document.getElementById("name");
const user_email = document.getElementById("email");
const user_content = document.getElementById("content");

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;

      // Check if all the fields have been filled out
      if (
        user_name.value.length != 0 &&
        user_email.value.length != 0 &&
        user_content.value.length != 0
      ) {
        // these IDs from the previous steps
        emailjs.sendForm("contact_service", "contact_form", this).then(
          function () {
            // Clear all the fields
            user_name.value = "";
            user_email.value = "";
            user_content.value = "";

            // Alert for success
            alert("SUCCESS!");
          },
          function (error) {
            alert("FAILED...", error);
          }
        );
      } else {
        alert("Please fill out every element of the form");
      }
    });
};
