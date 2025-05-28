import { isFormValid } from "./isFormValid.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = {
      name: form.querySelector('input[placeholder="Nombre"]').value,
      lastName: form.querySelector('input[placeholder="Apellido"]').value,
      email: form.querySelector('input[placeholder="Correo electrónico"]').value,
      phone: form.querySelector('input[placeholder="Teléfono"]').value,
      message: form.querySelector("textarea").value,
    };

    const validationResult = isFormValid(formData);

    if (!validationResult.isValid) {
      alert("Errores en el formulario:\n\n" + validationResult.errors.join("\n"));
    } else {
      alert("Formulario enviado correctamente.");
      form.reset();
    }
  });
});
