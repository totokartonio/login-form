import LoginForm from "../../components/LoginForm";
import styles from "./LoginPage.module.css";
import type { User } from "../../types";

type Props = {
  onSuccess: (user: User) => void;
};

const LoginPage = ({ onSuccess }: Props) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Login</h1>
      <LoginForm onSuccess={onSuccess} className={styles.content} />
    </div>
  );
};

export { LoginPage };
