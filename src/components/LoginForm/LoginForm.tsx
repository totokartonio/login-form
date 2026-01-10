import styles from "./LoginForm.module.css";
import { useState } from "react";
import type { FormData } from "../../type";
import Input from "../Input";

const LoginForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
        required
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        label="Password"
        id="password"
        type="password"
        name="password"
        autoComplete="current-password"
        required
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export { LoginForm };
