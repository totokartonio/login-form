import { useState } from "react";
import type { User } from "./types";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

function App() {
  const [selectedPage, setSelectedPage] = useState<
    "LoginPage" | "ProfilePage" | "ResetPasswordPage"
  >("LoginPage");
  const [user, setUser] = useState<User | null>(null);

  const handleLoginSuccess = (userData: User) => {
    setUser(userData);
    setSelectedPage("ProfilePage");
  };

  const handleLogout = () => {
    setUser(null);
    setSelectedPage("LoginPage");
  };

  const goToResetPassword = () => setSelectedPage("ResetPasswordPage");
  const backToLogin = () => setSelectedPage("LoginPage");

  const renderPage = () => {
    if (selectedPage === "ProfilePage" && user)
      return <ProfilePage user={user} onLogout={handleLogout} />;
    if (selectedPage === "ResetPasswordPage")
      return <ResetPasswordPage onBack={backToLogin} />;

    return (
      <LoginPage onSuccess={handleLoginSuccess} onReset={goToResetPassword} />
    );
  };

  return <div className="layout">{renderPage()}</div>;
}

export default App;
