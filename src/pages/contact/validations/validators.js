const validateName = (name) => {
  const result = {
    isValid: true,
    errors: [],
  };

  if (!name || name.trim().length < 3) {
    result.isValid = false;
    result.errors.push("El nombre debe tener al menos 3 caracteres.");
  }

  return result;
};

const validateLastName = (lastName) => {
  const result = {
    isValid: true,
    errors: [],
  };

  if (!lastName || lastName.trim().length < 3) {
    result.isValid = false;
    result.errors.push("El apellido debe tener al menos 3 caracteres.");
  }

  return result;
};

const validateEmail = (email) => {
  const result = {
    isValid: true,
    errors: [],
  };

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email)) {
    result.isValid = false;
    result.errors.push("El correo electrónico no es válido.");
  }

  return result;
};

const validatePhone = (phone) => {
  const result = {
    isValid: true,
    errors: [],
  };

  if (!/^\d{7,}$/.test(phone)) {
    result.isValid = false;
    result.errors.push("El teléfono debe tener al menos 7 dígitos numéricos.");
  }

  return result;
};

const validateMessage = (message) => {
  const result = {
    isValid: true,
    errors: [],
  };

  if (!message || message.trim().length < 5) {
    result.isValid = false;
    result.errors.push("El mensaje debe tener al menos 5 caracteres.");
  }

  return result;
};

export {
  validateName,
  validateLastName,
  validateEmail,
  validatePhone,
  validateMessage,
};
