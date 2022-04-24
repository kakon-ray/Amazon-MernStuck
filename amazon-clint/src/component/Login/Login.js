import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassord, setError] = useState("");

  let navigate = useNavigate();
  let location = useLocation();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePassWordBlur = (e) => {
    setPassword(e.target.value);
  };
  let from = location.state?.from?.pathname || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onBlur={handleEmailBlur}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onBlur={handlePassWordBlur}
              required
            />
          </div>

          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p className="option">
          New to Ema-John?{" "}
          <Link className="form-link" to="/signup">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
