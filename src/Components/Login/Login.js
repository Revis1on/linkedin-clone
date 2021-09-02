import React, { useState } from "react";
import "./Login.css";
import { auth } from "../../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const loginToApp = (e) => {
    e.preventDefault();
  };
  const register = () => {};

  return (
    <div className="login">
      <img src="https://logosdownload.com/logo/LinkedIn-logo-big.png" alt="" />

      <form>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name (required if registering)" type="text" />
        <input placeholder="Profile pic Url (optional)" type="text" />
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" />
        <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
