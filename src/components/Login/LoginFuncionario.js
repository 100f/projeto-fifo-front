import React, { useState } from 'react';
import { Button, Grid, Link } from '@material-ui/core'

import { useHistory } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

import './style.css';

const LoginFuncionario = () => {
    const [values, setValues] = useState(initialState);
    const { setLoggedUser, setToken } = useAuth();
    const history = useHistory();

    function initialState() {
        return {
            email: '',
            password: ''
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

        if(values.email === 'funcionario@fcamara.com.br' && values.password === '123'){
            setToken('CgP1O988xZ2E2cBab30RMHrHDcEfxjBYZgeFONTm4lVK0');
            setLoggedUser({ name: 'Funcionário', password: values.password });
            history.push('/home');
        }
        else {
            alert('Login/Senha inválido(s)!');
        }
    }

    return (
        <div className="container">
            <div className="login">
                <h1 className="login__titulo">ÁREA DE LOGIN</h1>
                <form onSubmit={handleLogin}>
                    <div className="login__formulario">
                        <label htmlFor="email">E-mail</label>
                        <input id="email" type="email" name="email" placeholder="Digite seu e-mail" onChange={onChange} value={values.email} required/>
                    </div>
                    <div className="login__formulario">
                        <label htmlFor="password">Senha</label>
                        <input id="password" type="password" name="password" placeholder="Digite sua senha" onChange={onChange} value={values.password} required/>
                    </div>

                    <Button type="submit" variant="contained" className="botao-login">Entrar</Button>

                    <Grid container className="mais-opcoes">
                        <Grid item xs>
                            <Link href="#" variant="body2" className="opcao">
                                ESQUECI MINHA SENHA
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2" className="opcao">
                                QUERO ME CADASTRAR
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    );
};

export default LoginFuncionario;