import styles from "./Input.module.css";

type Props = {
  label: string;
  id: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ label, id, error, ...inputProps }: Props) => {
  const errorId = error ? `${id}-error` : undefined;
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        aria-invalid={!!error}
        aria-describedby={errorId}
        {...inputProps}
      />
      {error && (
        <div id={errorId} role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export { Input };
