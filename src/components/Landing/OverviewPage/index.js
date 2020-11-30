import React from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as GameControlIllustration } from '../../../assets/images/illustrations/undraw_gaming_6oy3.svg';

import LoginButton from '../../LoginButton';

import './styles.css';

const OverviewPage = () => {
  const history = useHistory();
  return (
    <div className="overview-page-container">
      <h1>Nada mais de anotar nomes no caderninho</h1>
      <GameControlIllustration className="game-control-illustration"/>
      <div className="overview-page-info">
        <p>
          Organizando sua fila de maneira divertida e intuitiva,<br/>
          diminuindo o tempo de espera e estimulando jogos <br/>
          em grupo e competições saudáveis. Conheça o Fifo.
        </p>
        <div>
          <span onClick={() => history.push('cadastro/funcionario')}>Cadastrar</span>
          <LoginButton onClick={() => history.push('login/funcionario')}/>
        </div>
      </div>
    </div>
  )
};

export default OverviewPage;