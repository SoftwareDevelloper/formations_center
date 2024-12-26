import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../Api'
import '../Login/Login.css'
import avatar from '../Login/avatar.png'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    try {
      const response = await login({ email, password });
      console.log('Response received:', response);
      if (!response || !response.token) {
        throw new Error('Invalid response structure');
      }
      alert('Logged in successfully!');
      localStorage.setItem('token', response.token);
      navigate('/');
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };
  
  
  
         

  return (
    <div className="login-container">
    <div className="login-form">
      <div className="avatar">
        <img src={avatar} alt="User Avatar" />
      </div>
      <form onSubmit={handleLogin}>
     
        <input
          type="email"
          className='input'
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input
          type="password"
          className='input'
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="Mot de passe"
        />
        {error && (<p className="text-red-500 text-sm mb-4">{error}</p>)}
        <div className="remember-me">
          <input className='input1' type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe" >enregistrer le mot de passe</label>
        </div>
        
        <button className='login' type="submit" onClick={handleLogin}>Se connecter</button>
       
      </form>
    </div>
  </div>
  )
}

export default Login;
