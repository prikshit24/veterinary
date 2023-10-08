"use client";
import Link from "next/link";
import React, { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const [error, setError] = useState({
    forName: "",
    forEmail: "",
    forMobile: "",
    forPass: "",
    forCPass: "",
  });

  return (
    <div className={`authPage`}>
      <form className={`formcontainer`}>
        <h3>Signup</h3>
        <input
          className={`formInput`}
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          autocomplete="on"
        />
        <input
          className={`formInput`}
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          autocomplete="on"
        />
        <input
          className={`formInput`}
          type="number"
          value={mobile}
          onChange={(e) => {
            setMobile(e.target.value);
          }}
          autocomplete="on"
        />
        <input
          className={`formInput`}
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          autocomplete="on"
        />
        <input
          className={`formInput`}
          type="password"
          value={cPassword}
          onChange={(e) => {
            setCPassword(e.target.value);
          }}
          autocomplete="on"
        />
        <button
          className={`bgPrimary textWhite`}
          onClick={() => alert("Signup")}
        >
          Submit
        </button>
        <h5 className={`textBlack`}>
          Already have an account?{" "}
          <Link className={`textBlack`} href={"/login"}>
            Login
          </Link>
        </h5>
      </form>
    </div>
  );
}

export default Signup;
