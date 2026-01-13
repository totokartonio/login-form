import ResetPasswordForm from "../../components/ResetPasswordForm";
import Card from "../../components/Card";

type Props = {
  onBack: () => void;
};

const ResetPasswordPage = ({ onBack }: Props) => {
  return (
    <Card title="Reset your password" variant="right">
      <ResetPasswordForm onReset={onBack} />
    </Card>
  );
};

export { ResetPasswordPage };
