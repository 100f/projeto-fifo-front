import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';

import FifoLogo from '../../../assets/images/illustrations/Group 226.png';

import './styles.css';

import api from '../../../services/api';

const CadastroFuncionario = () => {
  const [values, setValues] = useState({ name: '', email: '', password: '' });
  const history = useHistory();
  const { setLoggedUser, setToken } = useAuth();

  const onChange = event => {
    const { value, name } = event.target;
    setValues({
        ...values,
        [name]: value,
    })
  }; 

  const handleRegistration = async () => {
    const response = await api.post('usuarios', { 
      ativo: true,
      email: values.email,
      nome: values.name
    });
    
    setLoggedUser(response.data);
    setToken('d9hgr8gbf08as021uy0okfjfvasdfty4');

    history.push('home');
  };

  return (
    <div id="page-cadastro-funcionario">
      <header>
        <img src={FifoLogo} alt="Fifo Logo"/> 
      </header>
      <div>
        <h1 className="page-cadastro-funcionario-title">
          Criando uma conta
        </h1>
        <form onSubmit={handleRegistration}>
          <div className="input__cadastro">
            <label htmlFor="name">nome</label>
            <input 
              type="text" 
              name="name" 
              value={values.name} 
              onChange={onChange} 
              required
            />
          </div>
          <div className="input__cadastro">
            <label htmlFor="email">e-mail</label>
            <input 
              type="email" 
              name="email" 
              value={values.email} 
              onChange={onChange} 
              required
            />
          </div>

          <div className="input__cadastro">
            <label htmlFor="password">senha</label>
            <input 
              type="password" 
              name="password" 
              value={values.password} 
              onChange={onChange} 
              required
            />
          </div>   
          <button type="submit" className="botao-cadastro">confirmar</button>
        </form>
      </div>    
    </div>
  )
};

export default CadastroFuncionario;