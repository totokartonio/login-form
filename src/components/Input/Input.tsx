import styles from "./Input.module.css";

type Props = {
  label: string;
  id: string;
  error?: string;
  rightSlot?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ label, id, error, rightSlot, ...inputProps }: Props) => {
  const errorId = error ? `${id}-error` : undefined;
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={styles.inputField}>
        <input
          id={id}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : ""}
          className={`${styles.input} ${error ? styles.invalidInput : ""} ${
            rightSlot ? styles.hasRightSlot : ""
          }`}
          {...inputProps}
        />
        {rightSlot && <div className={styles.rightSlot}>{rightSlot}</div>}
      </div>
      {error && (
        <div id={errorId} role="alert" className={styles.errorMessage}>
          {error}
        </div>
      )}
    </div>
  );
};

export { Input };
