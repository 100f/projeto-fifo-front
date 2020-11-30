import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

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
			setLoggedUser({ name: 'Funcionário', password: values.password, id: 16 });
			history.push('/home');
		}
		else {
			alert('Login/Senha inválido(s)!');
		}
	}

	return (
		<div className="container">
			<div className="login">
				<h3 className="login__titulo">Oi de novo!</h3>
				<span>Que bom te ver por aqui!</span>
				<form onSubmit={handleLogin}>
					<div className="login__formulario">
						<label htmlFor="email">e-mail</label>
						<input 
							id="email" 
							type="email" 
							name="email" 
							onChange={onChange} 
							value={values.email} 
							required
						/>
					</div>
					<div className="login__formulario">
						<label htmlFor="password">senha</label>
						<input 
							id="password" 
							type="password" 
							name="password" 
							onChange={onChange} 
							value={values.password} 
							required
						/>
					</div>
					<span>Esqueceu sua senha?</span>
					<button type="submit" className="botao-login">partiu Fifo</button>
				</form>
				<Link className="login-register-link" to="/cadastro/funcionario">
					Não tem conta? <strong>Registre-se</strong>
				</Link>
			</div>
		</div>
	);
};

export default LoginFuncionario;