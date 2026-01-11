import styles from "./LoginForm.module.css";
import { useState } from "react";
import type { FormErrors, FormData } from "../../types";
import Input from "../Input";
import { validateForm } from "../../utils/validate";
import { mockAuth } from "../../utils/mockAuth";

const LoginForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors = validateForm(formData);
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((value) => !!value);
    if (hasErrors) return;

    setIsLoading(true);

    try {
      const response = await mockAuth(formData.email, formData.password);
      console.log("Login successful!", response);
    } catch (error) {
      console.log(error);
      setErrors((prev) => ({
        ...prev,
        submit: error instanceof Error ? error.message : "Login failed",
      }));
    } finally {
      setIsLoading(false);
    }
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
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Login"}
      </button>
      {errors.submit && <div role="alert">{errors.submit}</div>}
    </form>
  );
};

export { LoginForm };
