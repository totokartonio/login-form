import ResetPasswordForm from "../../components/ResetPasswordForm";
import Card from "../../components/Card";

const ResetPasswordPage = () => {
  return (
    <Card title={<h1>Reset your password</h1>} variant="right">
      <ResetPasswordForm />
    </Card>
  );
};

export { ResetPasswordPage };
