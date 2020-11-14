import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import './styles.css';

const CadastroFuncionario = () => {
  const [values, setValues] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const handleRegistration = event => {
    event.preventDefault();

    if(values.password !== values.confirmPassword){
      alert('As senhas digitadas não correspondem!');
    }
  }

  const onChange = event => {
    const { value, name } = event.target;
    setValues({
        ...values,
        [name]: value,
    })
  } 
  return (
    <div className="container" id="page-cadastro-funcionario">
      <h1 className="title">
        CADASTRO (FUNCIONÁRIO)
      </h1>
      <form onSubmit={handleRegistration}>
        <div className="input__cadastro">
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" placeholder="Digite seu nome*" value={values.name} onChange={onChange} required/>
        </div>
        <div className="input__cadastro">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" placeholder="Digite seu e-mail*" value={values.email} onChange={onChange} required/>
        </div>

        <div className="input__cadastro">
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" placeholder="Digite sua senha*" value={values.password} onChange={onChange} required/>
        </div>

        <div className="input__cadastro">
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input type="password" name="confirmPassword" placeholder="Digite sua senha novamente*" value={values.confirmPassword} onChange={onChange}/>
        </div>
        
        <Button type="submit" variant="contained" className="botao-cadastro">Registrar</Button>

      </form>
    </div>
  )
};

export default CadastroFuncionario;