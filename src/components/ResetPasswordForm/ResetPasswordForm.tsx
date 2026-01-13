import styles from "./ResetPasswordForm.module.css";
import { useState } from "react";
import type { FormErrors, FormData } from "../../types";
import Input from "../Input";
import { validateField } from "../../utils/validate";
import { mockReset } from "../../utils/mockReset";
import SubmitButton from "../SubmitButton";

type Props = {
  onReset: () => void;
};

const ResetPasswordForm = ({ onReset }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setErrors((prev) => ({ ...prev, email: undefined }));
    setEmail(event.target.value);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newError = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: newError }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailError = validateField("email", email);
    const newErrors = { ...errors, email: emailError, submit: undefined };
    setErrors(newErrors);

    if (emailError) return;

    setIsLoading(true);

    try {
      const { message } = await mockReset(email);
      setErrors({});
      setSuccessMessage(message);
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        submit:
          error instanceof Error ? error.message : "Password reset failed",
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {successMessage && (
        <div role="status" className={styles.formSuccess}>
          {successMessage}
        </div>
      )}
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
        aria-required
        value={email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email}
        disabled={isLoading || !!successMessage}
      />
      {!successMessage ? (
        <SubmitButton
          isLoading={isLoading}
          text={"Send password reset email"}
        />
      ) : (
        <button type="button" onClick={onReset} className={styles.backButton}>
          Back to login
        </button>
      )}
    </form>
  );
};

export { ResetPasswordForm };
