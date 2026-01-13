import type { User } from "../../types";
import styles from "./ProfilePage.module.css";

type Props = {
  user: User;
  onLogout: () => void;
};

const ProfilePage = ({ user, onLogout }: Props) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>
        <span className={styles.greeting}>Welcome, </span>
        <span
          className={styles.email}
          title={user.email}
          aria-label={`Signed in as ${user.email}`}
        >
          {user.email}
        </span>
      </h1>
      <div className={styles.content}>
        <button
          type="button"
          onClick={onLogout}
          className={styles.logOutButton}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export { ProfilePage };
