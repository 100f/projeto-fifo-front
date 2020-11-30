import React from 'react';
import { useHistory } from 'react-router-dom';

import OverviewPage from '../../components/Landing/OverviewPage';
import QueueDescriptionPage from '../../components/Landing/QueueDescriptionPage';
import AboutMatchesPage from '../../components/Landing/AboutMatchesPage';
import AboutRewardsPage from '../../components/Landing/AboutRewardsPage';
import LoginButton from '../../components/LoginButton';

import FifoLogo from '../../assets/images/illustrations/Group 215.png';
import FifoNegativeLogo from '../../assets/images/illustrations/Group 226.png';
import FCamaraLogo from '../../assets/images/illustrations/grupo-fcamara-laranja 1.png';
import FCamaraNegativeLogo from '../../assets/images/illustrations/grupo-fcamara-negativo.png';
import Squad5Logo from '../../assets/images/illustrations/Logo Squad5.png';

import './styles.css';

const Landing = () => {
  const history = useHistory();

  return (
    <div id="landing-page-container">
      <header>
        <div>
          <img src={FifoLogo} alt="Fifo Logo"/> 
          <img src={FCamaraLogo} alt="FCamara Logo"/> 
        </div>
        <div>
          <span className="landing-page-register-button" onClick={() => history.push('/cadastro/funcionario')}>Cadastrar</span>
          <LoginButton onClick={() => history.push('/login/funcionario')}/>
        </div>
      </header>
      <OverviewPage />
      <QueueDescriptionPage />
      <AboutMatchesPage />
      <AboutRewardsPage />
      <footer>
        <div> 
          <span>um serviço:</span>
          <img src={FifoNegativeLogo} alt="Fifo Logo" />
        </div>
        <img src={FCamaraNegativeLogo} alt="Logo FCamara com cores invertidas" />
        <div> 
          <span>desenvolvido por:</span>
          <img src={Squad5Logo} alt="Logo do Squad 5" />
        </div>
        <LoginButton onClick={() => history.push('/login/funcionario')}/>
      </footer>
    </div>
  )
};

export default Landing;