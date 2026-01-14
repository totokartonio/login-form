import styles from "./Card.module.css";

type Props = {
  children: React.ReactNode;
  title: React.ReactNode;
  variant: "right" | "left";
};

const Card = ({ children, title, variant }: Props) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.title} ${styles[variant]}`}>{title}</div>
      <div className={`${styles.content} ${styles[variant]}`}>{children}</div>
    </div>
  );
};

export { Card };
