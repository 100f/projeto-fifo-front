import React, { useState } from 'react';
import './style.css';
import { Button } from '@material-ui/core'

const LoginVisitante = () => {

    const [values, setValues] = useState(initialState);

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

    return (
        <div className="container">
            <div className="login">
                <h1 className="login__titulo">ÁREA DE LOGIN</h1>
                <form>
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