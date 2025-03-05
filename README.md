O projeto "Dia Internacional da Mulher" é uma aplicação web desenvolvida com React, que visa conscientizar sobre a importância do Dia Internacional da Mulher, destacando a luta histórica das mulheres por direitos iguais e melhores condições de trabalho. A aplicação é composta por várias páginas que fornecem informações detalhadas sobre a história, estatísticas, campanhas e canais de denúncia relacionados ao tema.

Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma:

public/: Contém arquivos públicos como o favicon, o arquivo HTML principal (index.html), ícones e o manifesto da aplicação.
src/: Contém todos os arquivos de código-fonte da aplicação, incluindo componentes React, arquivos de estilo SCSS e o ponto de entrada principal (index.js).
Principais Arquivos e Componentes
src/index.js: Ponto de entrada principal da aplicação. Renderiza o componente App dentro do elemento root no DOM.
src/App.js: Componente principal que configura o roteamento da aplicação usando react-router-dom. Define as rotas para as páginas Home, About, Statistics e Campaigns.
src/Home.js: Componente que representa a página inicial da aplicação. Inclui uma seção hero com um botão para explorar estatísticas e várias seções informativas sobre a história, estatísticas, canais de denúncia e leis e direitos das mulheres.
src/About.js: Componente que fornece informações detalhadas sobre o Dia Internacional da Mulher, incluindo uma linha do tempo com eventos históricos importantes.
src/Statistics.js: Componente que exibe estatísticas sobre a violência contra mulheres no Brasil, utilizando gráficos de barras e de pizza para visualização dos dados.
src/Contact.js: Componente que apresenta campanhas conscientes relacionadas ao Dia Internacional da Mulher, destacando exemplos positivos de marketing com propósito e movimentos impactantes.
Estilos
Os estilos da aplicação são definidos em arquivos SCSS, que são importados nos respectivos componentes. Cada componente possui seu próprio arquivo de estilo, garantindo uma separação clara das responsabilidades e facilitando a manutenção do código.

src/Home.scss: Define os estilos para o componente Home, incluindo a seção hero, as seções informativas e a responsividade para diferentes tamanhos de tela.
src/About.scss: Define os estilos para o componente About, incluindo a linha do tempo e as seções informativas.
src/Statistics.scss: Define os estilos para o componente Statistics, incluindo a disposição dos gráficos e as seções informativas.
src/Contact.scss: Define os estilos para o componente Contact, incluindo as campanhas e movimentos destacados.
Funcionalidades
Roteamento: A aplicação utiliza react-router-dom para gerenciar a navegação entre as diferentes páginas.
Responsividade: Os estilos são definidos com media queries para garantir que a aplicação seja responsiva e funcione bem em diferentes dispositivos e tamanhos de tela.
Gráficos: O componente Statistics utiliza a biblioteca react-chartjs-2 para renderizar gráficos de barras e de pizza, visualizando dados sobre a violência contra mulheres.
Scripts Disponíveis
No arquivo package.json, estão definidos scripts para iniciar a aplicação em modo de desenvolvimento, construir a aplicação para produção, executar testes e ejetar a configuração do Create React App.

Conclusão
O projeto "Dia Internacional da Mulher" é uma aplicação web bem estruturada e estilizada, que utiliza React para fornecer uma experiência interativa e informativa sobre a importância do Dia Internacional da Mulher. A aplicação destaca a história, estatísticas, campanhas e canais de denúncia, promovendo a conscientização e a luta pela igualdade de gênero.
