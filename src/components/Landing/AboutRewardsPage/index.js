import React from 'react';

import BadgesIllustration from '../../../assets/images/illustrations/Group 225.png';

import './styles.css';

const AboutRewardsPage = () => (
  <div className="about-rewards-page-container">
    <img src={BadgesIllustration} alt="Ícones de Recompensa" />
    <div>
      <h2>Ganhe "recompensas" por jogar</h2>
      <p>Aqui, não importa se você ganha ou perde. Receba reconhecimento pelo seu empenho!</p>
    </div>
  </div>
);

export default AboutRewardsPage;