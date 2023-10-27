import React, { useState } from 'react';
import './login.page.css';
import MatrixRain from '../../components/matrix.component';

function LoginPage() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(username)) {
      setError('E-mail ou senha incorreto.');
      return;
    }

    console.log('Username:', username);
    console.log('Password:', password);

    setUsername('');
    setPassword('');
    setError('');
  };

  return (  
    <div className='tela-login'>
      <MatrixRain />
      <div className='login-fundo'/> 
      <div className="login-container">
        <h2 className='login-name'>BET HACKER</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}
          <div>
            <label className='login-label'></label>
            <input
              placeholder='E-mail'
              type="text"
              value={username}
              onChange={handleUsernameChange}
              className="form-input"
            />
          </div>
          <div>
            <label className='login-label'></label>
            <input
              placeholder='Senha'
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="form-input"
            />
          </div>
          <button className='login-button' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
