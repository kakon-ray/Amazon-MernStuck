import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmal] = useState("");
  const [password, setPassword] = useState("");
  const [conformPass, setConformPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState("");

  const navigate = useNavigate();
  // this is react firebase hook
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmail = (e) => {
    setEmal(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const conformPassword = (e) => {
    setConformPassword(e.target.value);
  };

  // usgin create user
  const createUser = (event) => {
    event.preventDefault();
    if (password !== conformPass) {
      setErrorPassword("Password do not match");
      return;
    }
    setErrorPassword("");
    if (password.length < 6) {
      setPasswordLength("Password more then 6 Char");
      return;
    }
    setPasswordLength("");
    createUserWithEmailAndPassword(email, password).then((result) => {
      console.log("User Created");
    });
  };
  if (user) {
    navigate("/");
  }

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={createUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" onBlur={handleEmail} name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">
              {passwordLength ? (
                <p style={{ color: "red" }}>{passwordLength}</p>
              ) : (
                "Password"
              )}
            </label>
            <input
              type="password"
              onBlur={handlePassword}
              name="password"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">
              {!errorPassword ? (
                "Confirm Password"
              ) : (
                <p style={{ color: "red" }}>{errorPassword}</p>
              )}
            </label>
            <input
              type="password"
              onBlur={conformPassword}
              name="confirm-password"
            />
          </div>

          <input className="form-submit" type="submit" />
        </form>
        <p className="option">
          Already Have an account?{" "}
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
