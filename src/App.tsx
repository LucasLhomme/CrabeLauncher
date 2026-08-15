import { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function LoginMicrosoft() {
    // Implement Microsoft login logic here
    setIsLoggedIn(true);
  }
  //temp function or logout in the future
  function LogoutMicrosoft() {
    // Implement Microsoft logout logic here
    setIsLoggedIn(false);
  }

  return (
    <main className="container">
      <h1>CrabeLauncher</h1>
      <p>CrabeLauncher is not affiliated with Mojang.</p>

      {isLoggedIn ? (
        <>
          <p>You are logged in!</p>
            <button type="button" onClick={LogoutMicrosoft}>
              Logout
            </button>
        </> ) : (
        <button type="button" onClick={LoginMicrosoft}>
          Login with Microsoft
        </button>
      )}
      </main>
  );
}

export default App;
