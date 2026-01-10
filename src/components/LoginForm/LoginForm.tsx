import styles from "./LoginForm.module.css";
import Input from "../Input";

const LoginForm = () => {
  return (
    <form className={styles.form}>
      <Input
        label="Email"
        id="email"
        type="email"
        name="email"
        placeholder="example@yourmail.com"
        autoComplete="username"
        required
      />
      <Input
        label="Password"
        id="password"
        type="password"
        name="password"
        autoComplete="current-password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export { LoginForm };
