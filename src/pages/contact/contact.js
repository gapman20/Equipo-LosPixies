import { leerInputsFormulario } from "./leerInputsFormulario.js";
import { isFormValid } from "./validations/isFormValid.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = leerInputsFormulario(form);
    const validation = isFormValid(formData);

    if (validation.isValid) {
      alert("Formulario enviado correctamente.");
      form.reset();
    } else {
      alert("Errores:\n\n" + validation.errors.join("\n"));
    }
  });
});
