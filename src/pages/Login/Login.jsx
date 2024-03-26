import React, { useState } from "react";

const LoginPage = ({ onclose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    onclose();
  };

  return (
    <div className="vielas__loginpage">
      <h2>Bem vindo</h2>
      <input
        type="text"
        placeholder="Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>

      <p>Esqueceu a senha? </p>
    </div>
  );
};
