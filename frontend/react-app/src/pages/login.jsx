import React, { useState } from "react";
import { sendOTP } from "../api/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendOTP = async () => {
    try {
      const res = await sendOTP(email);
      setMessage("OTP sent successfully ✅");
      console.log(res);
    } catch (error) {
      setMessage("Failed to send OTP ❌");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: "10px", width: "250px" }}
      />

      <br /><br />

      <button onClick={handleSendOTP}>
        Send OTP
      </button>

      <p>{message}</p>
    </div>
  );
};

export default Login;
