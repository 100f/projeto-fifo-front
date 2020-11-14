import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import './styles.css';

const CadastroVisitante = () => {
  const [values, setValues] = useState({ name: '' });

  const onChange = event => {
    const { value, name } = event.target;
    setValues({
        ...values,
        [name]: value,
    })
  } 
  return (
    <div className="container" id="page-cadastro-visitante">
      <h1 className="title">
        CADASTRO (VISITANTE)
      </h1>
      <form>
        <div className="input__cadastro">
          <label htmlFor="name">Nome</label>
          <input type="password" name="name" placeholder="Digite seu nome*" value={values.name} onChange={onChange} required/>
        </div>
        
        <Button type="submit" variant="contained" className="botao-cadastro">Registrar</Button>

      </form>
    </div>
  )
};

export default CadastroVisitante;