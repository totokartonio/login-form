import styles from "./LoginForm.module.css";
import { useState } from "react";
import type { FormErrors, FormData } from "../../types";
import Input from "../Input";
import { validateField, validateForm } from "../../utils/validate";
import { mockAuth } from "../../utils/mockAuth";
import ShowPasswordButton from "./atoms/ShowPasswordButton";
import SubmitButton from "../SubmitButton";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, useRouter } from "@tanstack/react-router";

const LoginForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const navigate = useNavigate();
  const router = useRouter();
  const { setUser } = useAuth();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newError = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: newError }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isLoading) return;

    const newErrors = validateForm(formData);
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((value) => !!value);
    if (hasErrors) return;

    setIsLoading(true);

    try {
      const response = await mockAuth(formData.email, formData.password);
      setUser({ ...response.user, token: response.token });
      await router.invalidate();
      await navigate({ to: "/profile" });
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
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {errors.submit && (
        <div role="alert" className={styles.formError}>
          {errors.submit}
        </div>
      )}
      <Input
        label="Email"
        id="email"
        type="email"
        name="email"
        placeholder="example@yourmail.com"
        autoComplete="username"
        required
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email}
        disabled={isLoading}
      />
      <Input
        label="Password"
        id="password"
        type={!showPassword ? "password" : "text"}
        name="password"
        autoComplete="current-password"
        required
        value={formData.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.password}
        disabled={isLoading}
        rightSlot={
          <ShowPasswordButton
            onClick={() => setShowPassword(!showPassword)}
            showPassword={showPassword}
          />
        }
      />

      <SubmitButton isLoading={isLoading} text={"Login"} />
    </form>
  );
};

export { LoginForm };
