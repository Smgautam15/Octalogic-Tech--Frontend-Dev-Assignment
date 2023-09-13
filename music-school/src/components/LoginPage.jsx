import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    
  };

  return (
    <div className='form-contener'>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
       <div className='form-details'>
        <div className='form-label'> 
        <label>email</label>
        </div>
        <div className='form-input'>
          <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        </div> 
        <div className='form-details'>
        <div className='form-label'> 
          <label>Password</label>
          </div>
          <div className='form-input'>
            <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
       
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
