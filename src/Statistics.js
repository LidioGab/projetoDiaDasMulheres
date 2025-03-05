import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './Statistics.scss';

const dataBar = {
  labels: ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'],
  datasets: [
    {
      label: 'Vítimas Negras',
      data: [35, 55, 25, 45, 30],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
    {
      label: 'Vítimas Brancas',
      data: [20, 30, 15, 40, 25],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
    {
      label: 'Vítimas de 18-44 anos',
      data: [45, 60, 35, 70, 40],
      backgroundColor: 'rgba(153, 102, 255, 0.5)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    },
  ],
};

const optionsBar = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Número de casos (por 100 mil)',
        font: {
          size: 14
        }
      }
    },
    x: {
      title: {
        display: true,
        text: 'Regiões do Brasil',
        font: {
          size: 14
        }
      }
    }
  },
  plugins: {
    legend: {
      position: 'top',
      labels: {
        boxWidth: 12,
        padding: 15,
        font: {
          size: 10
        }
      }
    },
    title: {
      display: true,
      text: 'Casos de Violência por Região',
      font: {
        size: 16
      }
    }
  }
};

const dataPie = {
  labels: ['Feminicídio', 'Violência Doméstica', 'Assédio Sexual', 'Outros'],
  datasets: [
    {
      data: [25, 45, 20, 10],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const optionsPie = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      align: 'start',
      labels: {
        boxWidth: 12,
        font: {
          size: 10
        }
      }
    },
    title: {
      display: true,
      text: 'Tipos de Violência Contra Mulheres (%)',
      font: {
        size: 16
      }
    }
  }
};

const Statistics = () => {
  return (
    <div className="statistics-container">
      <h1>A Violência Contra Mulheres em Dados</h1>
      <h2>Os números refletem uma realidade alarmante e ajudam a embasar políticas públicas e ações de combate.</h2>
      <div className="statistics-grid">
        <div className="section">
          <h3>Feminicídio</h3>
          <p>Em 2023, foram registrados 1.437 casos de feminicídio no Brasil — uma mulher assassinada a cada 6 horas.</p>
          <p>Fonte: Fórum Brasileiro de Segurança Pública</p>
        </div>
        <div className="section">
          <h3>Violência Doméstica</h3>
          <p>Cerca de 30% das mulheres brasileiras relataram ter sofrido algum tipo de violência doméstica no último ano.</p>
          <p>Fonte: Datafolha</p>
        </div>
        <div className="section">
          <h3>Subnotificação</h3>
          <p>Estima-se que apenas 10% das vítimas de violência doméstica denunciem seus agressores, devido ao medo, vergonha ou falta de apoio.</p>
          <p>Fonte: Instituto Patrícia Galvão</p>
        </div>
      </div>
      <div className="charts-container">
        <div className="chart-box">
          <h3>Índices de Violência por Região</h3>
          <div className="chart-wrapper">
            <Bar data={dataBar} options={optionsBar} />
          </div>
        </div>
        <div className="chart-box">
          <h3>Tipos de Violência</h3>
          <div className="chart-wrapper">
            <Pie data={dataPie} options={optionsPie} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
