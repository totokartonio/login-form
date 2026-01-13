import Eye from "../../../../assets/icons/eye.svg?react";
import EyeOff from "../../../../assets/icons/eye-off.svg?react";
import styles from "./ShowPasswordButton.module.css";

type Props = {
  showPassword: boolean;
  onClick: () => void;
};

const ShowPasswordButton = ({ showPassword, onClick }: Props) => {
  return (
    <button
      type="button"
      aria-label={showPassword ? "Hide password" : "Show password"}
      aria-pressed={showPassword}
      onClick={onClick}
      className={styles.button}
    >
      {!showPassword ? (
        <Eye aria-hidden="true" />
      ) : (
        <EyeOff aria-hidden="true" />
      )}
    </button>
  );
};

export { ShowPasswordButton };
