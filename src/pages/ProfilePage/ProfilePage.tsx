import Card from "../../components/Card";
import styles from "./ProfilePage.module.css";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "@tanstack/react-router";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const handleClick = () => {
    setUser(null);
    navigate({ to: "/login" });
  };

  if (!user) {
    return null;
  }

  return (
    <Card
      variant="left"
      title={
        <h1 className={styles.heading}>
          <span className={styles.greeting}>Welcome, </span>
          <span
            className={styles.email}
            title={user.email}
            aria-label={`Signed in as ${user.email}`}
          >
            {user.email}
          </span>
        </h1>
      }
    >
      <div className={styles.buttonContainer}>
        <button
          type="button"
          onClick={handleClick}
          className={styles.logOutButton}
        >
          Logout
        </button>
      </div>
    </Card>
  );
};

export { ProfilePage };
