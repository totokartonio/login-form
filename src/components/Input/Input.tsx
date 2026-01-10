import styles from "./Input.module.css";

type Props = {
  label: string;
  id: string;
  type: "email" | "password" | "text";
  name: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  label,
  id,
  type,
  name,
  placeholder,
  autoComplete,
  required,
  value,
  onChange,
}: Props) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export { Input };
