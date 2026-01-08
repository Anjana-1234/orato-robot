import { useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/auth";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    await axios.post(`${API}/signup`, {
      fullName,
      email,
      password,
    });

    alert("Account created successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Full Name" onChange={e => setFullName(e.target.value)} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <input type="password" placeholder="Confirm Password" onChange={e => setConfirmPassword(e.target.value)} />
      <button type="submit">Sign Up</button>
    </form>
  );
}
