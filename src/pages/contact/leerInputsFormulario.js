// leerInputsFormulario.js
const leerInputsFormulario = (formElement) => {
  return {
    name: formElement.querySelector('input[placeholder="Nombre"]').value.trim(),
    lastName: formElement.querySelector('input[placeholder="Apellido"]').value.trim(),
    email: formElement.querySelector('input[placeholder="Correo electrónico"]').value.trim(),
    phone: formElement.querySelector('input[placeholder="Teléfono"]').value.trim(),
    message: formElement.querySelector("textarea").value.trim(),
  };
};

export { leerInputsFormulario };
