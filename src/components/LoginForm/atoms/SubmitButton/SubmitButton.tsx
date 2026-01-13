import styles from "./SubmitButton.module.css";

type Props = {
  isLoading: boolean;
};

const SubmitButton = ({ isLoading }: Props) => {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={styles.submitButton}
      aria-busy={isLoading}
    >
      {isLoading ? (
        <svg width={20} height={20} viewBox="0 0 50 50" aria-hidden="true">
          <circle cx="25" cy="25" r="20" className={styles.spinner} />
        </svg>
      ) : (
        "Login"
      )}
    </button>
  );
};

export { SubmitButton };
