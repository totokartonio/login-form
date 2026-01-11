import type { User } from "../../types";

type Props = {
  user: User;
  onLogout: () => void;
};

const ProfilePage = ({ user, onLogout }: Props) => {
  return (
    <>
      <h1>Welcome, {user.email}</h1>
      <button onClick={onLogout}>Logout</button>
    </>
  );
};

export { ProfilePage };
