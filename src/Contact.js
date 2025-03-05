import React from 'react';
import './Contact.scss';

const Campaigns = () => {
  return (
    <div className="campaign-container">
      <div className="hero-banner">
        <h1>Campanhas Conscientes</h1>
        <p>Nem todas as marcas abordam o Dia Internacional da Mulher de maneira consciente, mas há exemplos positivos de campanhas que alinham seus produtos ou serviços a causas reais.</p>
      </div>
      
      <div className="campaign-section">
        <h2>Marketing com Propósito</h2>
        <div className="campaign-cards">
          <div className="campaign-card">
            <div className="card-icon">🌸</div>
            <h3>Produtos que Apoiam Causas</h3>
            <p>Marcas que promovem produtos específicos (como coleções cápsula) destinando parte dos lucros para ONGs que apoiam mulheres vítimas de violência.</p>
            <div className="example">
              <strong>Exemplo:</strong> Uma marca de cosméticos que cria uma linha especial e reverte parte das vendas ao Instituto Maria da Penha.
            </div>
          </div>
          
          <div className="campaign-card">
            <div className="card-icon">💪</div>
            <h3>Histórias de Mulheres Reais</h3>
            <p>Campanhas que trazem vídeos ou depoimentos de mulheres inspiradoras — empreendedoras, cientistas, artistas — reforçando o impacto delas na sociedade.</p>
            <div className="example">
              <strong>Exemplo:</strong> A Nike lançou campanhas focadas em mulheres atletas que quebraram barreiras no esporte.
            </div>
          </div>
          
          <div className="campaign-card">
            <div className="card-icon">⚠️</div>
            <h3>Rejeição ao 'Pinkwashing'</h3>
            <p>Hoje há uma crítica crescente a marcas que apenas trocam suas redes sociais para o rosa sem tomar ações concretas. Muitas campanhas agora tentam ir além de gestos simbólicos.</p>
          </div>
        </div>
      </div>
      
      <div className="movement-section">
        <h2>Campanhas Recentes e Impactantes</h2>
        <div className="movement-cards">
          <div className="movement-card">
            <h3>#MeToo (2017)</h3>
            <p>Movimento global que expôs casos de assédio sexual, iniciando uma enorme conversa sobre violência de gênero.</p>
            <a href="#" className="learn-more">Saiba mais</a>
          </div>
          
          <div className="movement-card">
            <h3>#ElaDecide</h3>
            <p>Focado nos direitos reprodutivos e de autonomia corporal das mulheres.</p>
            <a href="#" className="learn-more">Saiba mais</a>
          </div>
          
          <div className="movement-card">
            <h3>#ChegaDeFiuFiu</h3>
            <p>Uma campanha brasileira contra o assédio sexual em espaços públicos.</p>
            <a href="#" className="learn-more">Saiba mais</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
