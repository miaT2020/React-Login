import { useState } from "react";
import { login } from "./login";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // async function handleSubmit() {
  //   console.log("submit");
  //   setErrorMsg("");
  //   setIsLoading(true);
  //   try {
  //     await login({ email, name, password });
  //     setIsLoading(false);
  //   } catch (error) {
  //     setErrorMsg(error);
  //   }
  // }
  const disableLogin = isLoading || !email || !password || password.length < 6;

  const handleLogin = async () => {
    setErrorMsg("");
    setIsLoading(true);
    try {
      await login({ email, password });
      setIsLoading(false);
      alert("sucessful");
    } catch (error) {
      setErrorMsg(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      {errorMsg && <span> {errorMsg.message} </span>}
      <div className="email-input">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div className="password-input">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <button disabled={disableLogin} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default App;
