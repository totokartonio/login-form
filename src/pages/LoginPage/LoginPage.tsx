import LoginForm from "../../components/LoginForm";
import type { User } from "../../types";

type Props = {
  onSuccess: (user: User) => void;
};

const LoginPage = ({ onSuccess }: Props) => {
  return (
    <>
      <h1>Login</h1>
      <LoginForm onSuccess={onSuccess} />
    </>
  );
};

export { LoginPage };
