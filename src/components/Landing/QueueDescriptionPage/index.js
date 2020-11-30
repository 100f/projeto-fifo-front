import React from 'react';

import QueueGlowyItem from '../../QueueGlowyItem';

import './styles.css';

const QueueDescriptionPage = () => (
  <div className="queue-description-page-container">
    <div>
      <QueueGlowyItem 
        name="Mariana Mendanha" 
        backgroundColor="#0A263A" 
        contentColor="#536775"
      />
      <QueueGlowyItem 
        name="Lucas Lopes" 
        backgroundColor="#677885" 
        contentColor="white"
      />
      <QueueGlowyItem 
        name="Você" 
        backgroundColor="#FE551A" 
        contentColor="white"
      />
      <QueueGlowyItem 
        name="Caio Enrique" 
        backgroundColor="#677885" 
        contentColor="white"
      />
      <QueueGlowyItem 
        name="Jéssica Ferreira" 
        backgroundColor="#677885" 
        contentColor="white"
      />
      <QueueGlowyItem 
        name="Manoel Dalmo" 
        backgroundColor="#677885" 
        contentColor="white"
      />
      <QueueGlowyItem 
        name="Raphael Fleury" 
        backgroundColor="#677885" 
        contentColor="white"
      />
      <QueueGlowyItem 
        name="Victor Nascimento" 
        backgroundColor="#677885" 
        contentColor="white"
      />
      <QueueGlowyItem 
        name="Fcamara" 
        backgroundColor="#0A263A" 
        contentColor="#536775"
      />
    </div>
    <div>
      <h2>Entre na fila dos seus jogos favoritos...<br/> Sem sair do lugar</h2>
      <p>Escolha o jogo, convide o(s) outros players e pronto. Só levante quando for sua vez de jogar (Não se preocupe, o sistema não esquece de avisar) </p>
    </div>
  </div>
);

export default QueueDescriptionPage;