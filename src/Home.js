import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  const navigate = useNavigate();

  const goToStatistics = () => {
    navigate('/statistics');
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>8 de Março: Um Retrato da Violência Contra Mulheres</h1>
        <p>O Dia Internacional da Mulher vai além de homenagens. É um marco de luta contra a desigualdade de gênero e a violência. Conheça os dados e entenda a realidade.</p>
        <button onClick={goToStatistics}>Explorar Estatísticas</button>
      </div>
      <div className="sections-container">
        <div className="sections">
          <div className="section">
            <div className="section-icon-wrapper">
              <div className="section-icon">📚</div>
            </div>
            <h2>História</h2>
            <p>O Dia Internacional da Mulher tem suas raízes no movimento operário do início do século XX. Em 1910, Clara Zetkin propôs a criação de um dia dedicado às mulheres durante a Conferência Internacional de Mulheres Socialistas.</p>
          </div>
          <div className="section">
            <div className="section-icon-wrapper">
              <div className="section-icon">📊</div>
            </div>
            <h2>Estatísticas</h2>
            <p>As estatísticas mostram que, apesar dos avanços, as mulheres ainda enfrentam desigualdades significativas em várias áreas, incluindo o mercado de trabalho, educação e saúde.</p>
          </div>
          <div className="section">
            <div className="section-icon-wrapper">
              <div className="section-icon">📞</div>
            </div>
            <h2>Canais de Denúncia</h2>
            <p>Disque 180 - Central de Atendimento à Mulher: atendimento 24h, gratuito e sigiloso. Delegacias da Mulher, aplicativo Direitos Humanos BR e outros canais de apoio às vítimas de violência.</p>
          </div>
          <div className="section">
            <div className="section-icon-wrapper">
              <div className="section-icon">⚖️</div>
            </div>
            <h2>Leis e Direitos</h2>
            <p>Lei Maria da Penha, Lei do Feminicídio e outras conquistas legislativas que protegem as mulheres. Conheça seus direitos e os mecanismos legais de proteção disponíveis.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
