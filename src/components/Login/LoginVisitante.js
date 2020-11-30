import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '@material-ui/core'

import './style.css';

const LoginVisitante = () => {
    const [values, setValues] = useState(initialState);
    const history = useHistory();
    
    function initialState() {
        return {
            nome: '',
            token: ''
        }
    }

    function onChange(event) {
        const { value, name } = event.target;
        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleLogin = e => {
        e.preventDefault();

        if(values.name === 'Visitante' && values.token === '123'){
            history.push('/home');
        }
        else {
            alert('Login/Token inválido(s)!');
        }
    }
    return (
        <div className="container">
            <div className="login">
                <h1 className="login__titulo">ÁREA DE LOGIN</h1>
                <form onSubmit={handleLogin}>
                    <div className="login__formulario">
                        <label htmlFor="nome">Nome</label>
                        <input id="nome" type="text" name="nome" placeholder="Digite seu nome" onChange={onChange} value={values.nome} required/>
                    </div>
                    <div className="login__formulario">
                        <label htmlFor="token">Token</label>
                        <input id="token" type="text" name="token" placeholder="Digite o token recebido" value={values.token} required/>
                    </div>

                    <Button type="submit" variant="contained" className="botao-login">Entrar</Button>

                </form>
            </div>
        </div>
    );
};

export default LoginVisitante;