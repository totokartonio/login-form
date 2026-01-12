import styles from "./LoginForm.module.css";
import { useState } from "react";
import type { FormErrors, FormData, User } from "../../types";
import Input from "../Input";
import { validateField, validateForm } from "../../utils/validate";
import { mockAuth } from "../../utils/mockAuth";

type Props = {
  onSuccess: (user: User) => void;
};

const LoginForm = ({ onSuccess }: Props) => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newError = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: newError }));
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
      onSuccess({ ...response.user, token: response.token });
    } catch (error) {
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
        onBlur={handleBlur}
        error={errors.email}
      />
      <Input
        label="Password"
        id="password"
        type={!showPassword ? "password" : "text"}
        name="password"
        autoComplete="current-password"
        aria-required
        value={formData.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.password}
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        aria-label={showPassword ? "Hide password" : "Show password"}
        aria-pressed={showPassword}
      >
        {!showPassword ? "Show" : "Hide"}
      </button>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Login"}
      </button>
      {errors.submit && <div role="alert">{errors.submit}</div>}
    </form>
  );
};

export { LoginForm };
