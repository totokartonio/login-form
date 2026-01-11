import { useState } from "react";
import type { User } from "./types";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const handleLoginSuccess = (userData: User) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn && user ? (
        <ProfilePage user={user} onLogout={handleLogout} />
      ) : (
        <LoginPage onSuccess={handleLoginSuccess} />
      )}
    </>
  );
}

export default App;
