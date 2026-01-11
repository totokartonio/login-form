import type { FormData, FormErrors } from "../types";
import { ERRORS } from "../data";

const validateEmail = (email: string): string | undefined => {
  if (!email) {
    return ERRORS.emailRequired;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return ERRORS.emailInvalid;
  }

  return undefined;
};

const validatePassword = (password: string): string | undefined => {
  if (!password) return ERRORS.passwordRequired;

  return undefined;
};

const validateForm = (formData: FormData): FormErrors => {
  return {
    email: validateEmail(formData.email),
    password: validatePassword(formData.password),
  };
};

const validateField = (
  name: keyof FormData,
  value: string
): string | undefined => {
  if (name === "email") return validateEmail(value);
  if (name === "password") return validatePassword(value);
  return undefined;
};

export { validateForm, validateField };
