import React from 'react';

import LoginFuncionario from '../../../components/Login/LoginFuncionario';

import FifoLogo from '../../../assets/images/illustrations/Group 226.png';

import './styles.css';

const LoginFuncionarioPage = () => (
    <div id="login-page-container">
        <img src={FifoLogo} alt="Fifo Logo"/>
        <LoginFuncionario />
    </div>
);

export default LoginFuncionarioPage;