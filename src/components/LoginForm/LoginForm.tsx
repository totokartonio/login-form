import styles from "./LoginForm.module.css";
import { useState } from "react";
import type { FormErrors, FormData } from "../../types";
import Input from "../Input";
import { validateForm } from "../../utils/validate";

const LoginForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors = validateForm(formData);
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((value) => !!value);
    if (hasErrors) return;

    console.log("Submitted: ", formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        label="Email"
        id="email"
        type="email"
        name="email"
        placeholder="example@yourmail.com"
        autoComplete="username"
        aria-required
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <Input
        label="Password"
        id="password"
        type="password"
        name="password"
        autoComplete="current-password"
        aria-required
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export { LoginForm };
