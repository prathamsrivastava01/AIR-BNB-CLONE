(() => {
  "use strict";
  //Hiii

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    // Submit validation
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false,
    );
  });
})();
