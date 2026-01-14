import LoginForm from "../../components/LoginForm";
import Card from "../../components/Card";
import styles from "./LoginPage.module.css";
import { Link } from "@tanstack/react-router";

const LoginPage = () => {
  return (
    <Card title={<h1>Login</h1>} variant="right">
      <LoginForm />
      <Link to="/reset-password" className={styles.resetPassword}>
        Forgot your password?
      </Link>
    </Card>
  );
};

export { LoginPage };
