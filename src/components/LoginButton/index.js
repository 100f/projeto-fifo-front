import React from 'react';

import './styles.css';

const LoginButton = ({ 
  backgroundColor = '#FE551A', 
  color = 'white', 
  text = 'Login', 
  onClick 
}) => {
  return (
    <div onClick={onClick} className="landing-login-button-container" style={{ backgroundColor }}>
      <span style={{ color }}>{text}</span>
    </div>
  )
};

export default LoginButton