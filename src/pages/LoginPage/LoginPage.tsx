import LoginForm from "../../components/LoginForm";
import Card from "../../components/Card";
import styles from "./LoginPage.module.css";
import type { User } from "../../types";

type Props = {
  onSuccess: (user: User) => void;
  onReset: () => void;
};

const LoginPage = ({ onSuccess, onReset }: Props) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onReset();
  };
  return (
    <Card title="Login" variant="right">
      <LoginForm onSuccess={onSuccess} />
      <a href="#" className={styles.resetPassword} onClick={handleClick}>
        Forgot your password?
      </a>
    </Card>
  );
};

export { LoginPage };
