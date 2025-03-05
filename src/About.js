import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="about-container">
      <h1>Sobre o Dia Internacional da Mulher</h1>
      <p>Uma data que simboliza a luta histórica das mulheres por direitos iguais e melhores condições de trabalho.</p>
      
      <div className="about-section">
        <h2>O que é o Dia Internacional da Mulher?</h2>
        <p>O Dia Internacional da Mulher é comemorado em 8 de março e é uma data que simboliza a luta histórica das mulheres por direitos iguais e melhores condições de trabalho. A data foi oficializada pela ONU em 1975, mas suas origens remontam ao início do século XX.</p>
        <p>Hoje, a data serve como momento de reflexão sobre as desigualdades enfrentadas pelas mulheres e celebração das conquistas alcançadas ao longo dos anos na luta pela igualdade de gênero.</p>
      </div>
      
      <h2>Linha do Tempo</h2>
      <div className="timeline">
        <div className="timeline-item">
          <h3>1910</h3>
          <p>Na II Conferência Internacional de Mulheres Socialistas na Dinamarca, Clara Zetkin propõe a criação de um dia internacional dedicado às mulheres.</p>
        </div>
        <div className="timeline-item">
          <h3>1911</h3>
          <p>Em 25 de março, o incêndio na fábrica Triangle Shirtwaist Company em Nova York mata 146 trabalhadores, em sua maioria mulheres imigrantes. O evento chamou atenção para as condições precárias de trabalho.</p>
        </div>
        <div className="timeline-item">
          <h3>1917</h3>
          <p>Na Rússia, manifestações de mulheres exigindo "pão e paz" marcaram o início da Revolução Russa. A data escolhida foi 8 de março (23 de fevereiro no calendário juliano usado na época).</p>
        </div>
        <div className="timeline-item">
          <h3>1975</h3>
          <p>A ONU oficializa o Dia Internacional da Mulher em 8 de março, fazendo com que a data fosse reconhecida mundialmente.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
