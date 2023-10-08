"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  validateEmail,
  validatePassword,
} from "../helpers/validations/FormValidation";
import styles from './login.module.css'
import PasswordField from "../components/PasswordField/PasswordField";
import { useRouter } from 'next/navigation';

const adminUser = {
  email: "admin@yopmail.com",
  password: "Password@1"
}

function Login() {
  const { push } = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const [errors, setErrors] = useState({
    forEmail: "",
    forPassword: "",
  });

  const onLoginPress = (e) => {
    e.preventDefault();
    const emailErr = validateEmail(email);
    const passErr = validatePassword(password);

    if (emailErr) {
      setErrors((prevErrorTxt) => ({
        ...prevErrorTxt,
        forEmail: "Please enter valid email",
      }));
    }
    if (passErr) {
      setErrors((prevErrorTxt) => ({
        ...prevErrorTxt,
        forPassword: "Please enter valid password",
      }));
    }

    if (!emailErr && !passErr) {
      if (adminUser.email !== email || adminUser.password !== password) {
        alert("Invalid Credentials!!")
      } else {
        localStorage.setItem('email', email);
        push("/dashboard");
      }
    }
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    setErrors({ ...errors, forPassword: '' });
  }

  return (
    <div className={`authPage`}>
      <form className={`formcontainer`}>
        <div className={styles.logoContainer}>
          <img src='./logo.png' style={{ height: 50, width: 60 }} />
          <div className={styles.logoText}>
            <h3>Pet Lovers</h3>
            <h5>we care for your pet</h5>
          </div>
        </div>

        <h2>Login</h2>
        <input
          className={`formInput`}
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors({ ...errors, forEmail: '' });
          }}
        />
        {errors.forEmail && <p className={`textErr`}>{errors.forEmail}</p>}
        <PasswordField password={password} onChange={(e) => onPasswordChange(e)} showPass={showPass} setShowPass={setShowPass} />
        {errors.forPassword && <p className={`textErr`}>{errors.forPassword}</p>}
        <button
          className={`bgPrimary textWhite`}
          onClick={(e) => onLoginPress(e)}
        >
          Login
        </button>
        <h5 className={`textBlack`}>
          <Link className={`textBlack`} href={"/"}>
            Go to home page
          </Link>
        </h5>
      </form>
    </div>
  );
}

export default Login;
