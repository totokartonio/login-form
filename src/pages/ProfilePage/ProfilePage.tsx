import type { User } from "../../types";
import Card from "../../components/Card";
import styles from "./ProfilePage.module.css";

type Props = {
  user: User;
  onLogout: () => void;
};

const ProfilePage = ({ user, onLogout }: Props) => {
  return (
    <Card
      variant="left"
      title={
        <span className={styles.heading}>
          <span className={styles.greeting}>Welcome, </span>
          <span
            className={styles.email}
            title={user.email}
            aria-label={`Signed in as ${user.email}`}
          >
            {user.email}
          </span>
        </span>
      }
    >
      <div className={styles.buttonContainer}>
        <button
          type="button"
          onClick={onLogout}
          className={styles.logOutButton}
        >
          Logout
        </button>
      </div>
    </Card>
  );
};

export { ProfilePage };
