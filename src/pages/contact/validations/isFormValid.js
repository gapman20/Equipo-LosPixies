import {
  validateName,
  validateLastName,
  validateEmail,
  validatePhone,
  validateMessage
} from "./validators.js";

const isFormValid = (formData) => {
  const result = {
    isValid: true,
    errors: [],
  };

  const nameResult = validateName(formData.name);
  if (!nameResult.isValid) {
    result.isValid = false;
    result.errors.push(...nameResult.errors);
  }

  const lastNameResult = validateLastName(formData.lastName);
  if (!lastNameResult.isValid) {
    result.isValid = false;
    result.errors.push(...lastNameResult.errors);
  }

  const emailResult = validateEmail(formData.email);
  if (!emailResult.isValid) {
    result.isValid = false;
    result.errors.push(...emailResult.errors);
  }

  const phoneResult = validatePhone(formData.phone);
  if (!phoneResult.isValid) {
    result.isValid = false;
    result.errors.push(...phoneResult.errors);
  }

  const messageResult = validateMessage(formData.message);
  if (!messageResult.isValid) {
    result.isValid = false;
    result.errors.push(...messageResult.errors);
  }

  return result;
};

export { isFormValid };
