import styles from "./SubmitButton.module.css";

type Props = {
  isLoading: boolean;
  text: string;
};

const SubmitButton = ({ isLoading, text }: Props) => {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={styles.submitButton}
      aria-busy={isLoading}
      aria-label={isLoading ? "Loading" : text}
    >
      {isLoading ? (
        <svg width={20} height={20} viewBox="0 0 50 50" aria-hidden="true">
          <circle cx="25" cy="25" r="20" className={styles.spinner} />
        </svg>
      ) : (
        text
      )}
    </button>
  );
};

export { SubmitButton };
