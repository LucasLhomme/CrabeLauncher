import { useState } from "react";
import "./App.css";

// Composant for the login screen
function LoginPage({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="login-box">
      <button type="button" onClick={onLogin}>
        Login with Microsoft
      </button>
    </div>
  );
}

// Composant for the landing screen once logged in
function LandingPage({ onLogout }: { onLogout: () => void }) {
  return (
    <div className="landing-box">
      <p>You are logged in!</p>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    // Implement Microsoft login logic here
    setIsLoggedIn(true);
  }

  function handleLogout() {
    // Implement Microsoft logout logic here
    setIsLoggedIn(false);
  }

  return (
    <>
      <main className="container">
        <h1>CrabeLauncher</h1>

        {isLoggedIn ? (
          <LandingPage onLogout={handleLogout} />
        ) : (
          <LoginPage onLogin={handleLogin} />
        )}
      </main>

      <footer>
        <p className="disclaimer">
          CrabeLauncher is not affiliated with Mojang.
        </p>
      </footer>
    </>
  );
}

export default App;