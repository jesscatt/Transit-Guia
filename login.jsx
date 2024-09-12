import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [cpf, setCpf] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de autenticação ou enviar os dados para o backend.
    console.log('CPF:', cpf);
    console.log('Data de Nascimento:', birthDate);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>

        <div className="input-group">
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="Digite seu CPF"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="birthDate">Data de Nascimento:</label>
          <input
            type="date"
            id="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-button">Entrar</button>
      </form>
    </div>
  );
};

export default Login;

