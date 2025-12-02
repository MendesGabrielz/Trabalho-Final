# AstroLink 

AstroLink é uma plataforma fictícia que simula o ambiente de uma agência espacial moderna, reunindo informações sobre missões, programas de astronautas, inovações, notícias, políticas e até uma loja inspirada na exploração espacial. Este repositório contém o código-fonte do site, front-end puro (HTML, CSS, JS), com diversas páginas temáticas, navegação responsiva, formulários, carrosséis, animações e integração básica com o localStorage para autenticação.

---

##  Documentação dos Arquivos

### pinegrow.json e pinegrow_*.json

Arquivos de configuração do **Pinegrow**, um editor de páginas web. Eles armazenam informações sobre:
Páginas abertas recentemente
Tamanhos de visualização
Classes CSS usadas recentemente
Estado do design provider

**Exemplo de uso:**

json
{
  "files": {},
  "open-pages": ["index.html"],
  "urls": {
    "index.html": {
      "open-with-wrapper": false,
      "open-page-views": [{"w":414,"h":896}]
    }
  },
  "recent-classes": ["container-logos-footer","container-blocos-secao-um"],
  "active-design-provider":"plainhtml"
}



Esses arquivos NÃO afetam o funcionamento final do site, apenas a experiência no editor Pinegrow.

---

### settings.json

Configuração do Live Server (VSCode):

json
{ "liveServer.settings.port": 5502 }



Define a porta padrão para rodar o servidor local. Útil para desenvolvimento.

---

### fonts.json

Lista de famílias tipográficas ativas (Google Fonts e fontes do sistema):

Permite controle e escolha das fontes para títulos, textos, menus.
Exemplo de famílias: "Exo 2", "Raleway", "Cinzel Decorative", "EB Garamond", "Arial", "Montserrat", etc.

**Uso**: Suporte a temas visuais modernos e coesos.

---

### style.css (principal)

Define o layout, tipografia e animações do site principal. Principais pontos:
Flexbox para alinhamento de seções
Grid para depoimentos
Efeitos hover (aumentar, destacar)
Classes para títulos, blocos informativos, containers de textos, conquistas, depoimentos
Animações de entrada (@keyframes subir-e-aparecer)

**Exemplo**:
css
.container-titulos { display: flex; justify-content: center; }
.textinhos-bloco:hover { background-color: white; color: rgba(0, 0, 0, 0.877); transform: scale(1.08); }



---

### style.css (páginas de políticas/login)

Cria uma experiência visual moderna e consistente para páginas de políticas, login/cadastro, usando:
Fontes importadas
Cores sóbrias (preto, branco, cinza)
Responsividade para dispositivos móveis
Containers, grids, alinhamentos de texto

---

### header-footer.css

CSS compartilhado para cabeçalho e rodapé:

Define o menu superior, sidebar responsiva, logotipos, links animados
Rodapé com links para políticas e redes sociais
Vários ajustes de responsividade e acessibilidade

---

### mobile.css

Ajustes específicos para telas pequenas (até 768px):

Reduz tamanhos de textos, margens, paddings
Reorganiza elementos em colunas
Otimiza blocos e grids para leitura e navegação mobile

---

### FAQ.css

Estilização para seção de perguntas frequentes:

Acordeão animado (abre/fecha perguntas)
Temas escuros com fontes modernas
Destaque para perguntas e respostas

---

### label.css

Estilos para formulários de contato:

Cores neutras e fundo semitransparente
Espaçamento e bordas arredondadas
Mensagens de erro/sucesso visíveis

---

### login.css e sigin.css

Estilos para telas de **login** e **cadastro**:

Inputs grandes, botões arredondados, campos com transição e foco destacado
Fundo com imagens e sobreposição escura
Layout centralizado para melhor usabilidade

---

### carousel.css

Estilização para carrosséis de missões e galeria:

Integração visual com Swiper.js
Progress bar, botões circulares, responsividade
Slides de texto/imagem com títulos grandes

---

### pag2.css, pag3.css, vendas.css, Pafina-noticias.css

Cada arquivo estiliza uma página temática:

**pag2.css:** Missões espaciais, grid de relatos, carrossel, animações de entrada, mapa espacial.
**pag3.css:** Programa de astronautas, galeria, cards, curiosidades.
**vendas.css:** Loja, grid de produtos, filtros de cor/modelo de foguete, tendências.
**Pafina-noticias.css:** Página de notícias, responsividade, imagens de eventos.

---

### index.html (principal)

Página Home do projeto:

Apresenta missão, visão, destaques, conquistas, depoimentos.
Navegação global, menu sidebar, responsividade.
Rodapé com links úteis e redes sociais.

---

### index.html, index1.html, index2.html (Políticas, Termos)

Cada página detalha:
**index.html**: Política de Privacidade
**index1.html**: Termos de Uso
**index2.html**: Política de Troca de Produto

Todas têm layout semelhante, conteúdo bem estruturado, e reforçam o compromisso de transparência e segurança (mesmo que fictícios).

---

### Pagina-noticIAS.html

Seção de notícias e FAQ:

Últimas notícias, eventos, entrevistas, formulário de contato, perguntas frequentes (FAQ).
Design responsivo, integração com scripts de validação e navegação.

---

### sigin.html e login.html

Páginas de cadastro e login de usuários:

Inputs para email/senha, validação de senha mínima, mensagens de feedback.
Botões sociais para login alternativo (não funcionais, apenas visuais).
Scripts para registro e autenticação via localStorage.

---

### pag2.html, pag3.html, vendas.html

Páginas "Missões", "Astronautas", "Loja" respectivamente:

Cada uma com carrossel, grid de depoimentos, mapas, galerias ou produtos.
Altamente ilustrativas, com imagens, vídeos e animações.

---

### global.js

Script global para navegação:

Controla menu lateral (sidebar), exibe mensagem de boas-vindas com nome do usuário logado.
Função de logout remove usuário do localStorage, recarrega página.
Esconde o botão “Sair” se não estiver logado.

js
function showWelcome() {
  const area = document.getElementById('welcome');
  if (!area) return;
  const user = localStorage.getItem('email');
  if (user) {
    area.innerHTML = `Bem-vindo,<strong> ${user}</strong>`;
  } else {
    area.innerHTML = `Bem-vindo, <a href="../login/login.html" style="font-weight: bold;">Usuário</a>`;
  }
  // Gerencia botão "Sair"
}



---

### Pagina-noticias.js

Similar ao global.js, mas adaptado para a página de notícias:

Inicializa menu lateral, mensagem de boas-vindas.
Substitui o nome por "Usuário" se não houver login.

---

### label.js

Validação de formulário de contato:

Checa tamanho de nome, assunto, telefone numérico, formato de email, comprimento da mensagem.
Exibe mensagens de erro ou sucesso.

js
function validate(){
  var name = document.getElementById("name").value;
  // ...
  if(name.length < 5){
    text = "Insira um nome válido";
    error_message.innerHTML = text;
    return false;
  }
  // ...
}



---

### login.js e sigin.js

Scripts para autenticação:

**login.js:** Valida senha, consulta email no localStorage, redireciona ao logar.
**sigin.js:** Cria cadastro, guarda email/senha no localStorage, checa tamanho mínimo da senha.

---

### carousel.js

Inicializa carrossel Swiper.js nas páginas de missões e galeria.

js
var swiper = new Swiper(".mySwiper", {
  pagination: { el: ".swiper-pagination", type: "progressbar" },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});



---

### solarsystem-dynamic.js

Gera estrelas e cinturão de asteroides no mapa espacial usando JavaScript:

Adiciona centenas de pontos/brilhos via box-shadow
Cria efeito visual de estrelas e asteroides em órbita

---

### solarsystem.css

Estiliza o sistema solar animado:

Orbitas reais proporcionais, planetas giram ao redor do Sol
Efeitos de sombra e gradiente
Responsividade e animações CSS puras

---

##  Estrutura Geral do Projeto

mermaid
flowchart TD
    Home["index.html (Home)"]
    Missao["pag2.html (Missões)"]
    Programas["pag3.html (Astronautas)"]
    Loja["vendas.html (Loja)"]
    Inovacao["inovacao/index.html (Inovações)"]
    Noticias["FAQ/Pagina-noticIAS.html (Notícias/FAQ)"]
    Login["login/login.html (Login)"]
    Sigin["login/sigin.html (Cadastro)"]
    Politicas["login/index.html (Privacidade)"]
    Termos["login/index1.html (Termos)"]
    Troca["login/index2.html (Troca)"]

    Home -->|Menu/Links| Missao
    Home -->|Menu/Links| Programas
    Home -->|Menu/Links| Loja
    Home -->|Menu/Links| Inovacao
    Home -->|Menu/Links| Noticias
    Home -->|Menu/Links| Login
    Login --> Sigin
    Home --> Politicas
    Home --> Termos
    Home --> Troca



---

##  Destaques e Funcionalidades

**Totalmente responsivo**: Usabilidade garantida em desktop, tablet e smartphones.
**Navegação por sidebar**: Menus expansíveis, animações fluídas.
**Formulários validados**: Feedback instantâneo para erros e sucesso.
**Carrossel interativo**: Missões e galerias com Swiper.js.
**Sistema Solar animado**: Visualização educativa e dinâmica.
**Autenticação local**: Cadastro e login simulados usando localStorage.

---

card
{
  "title": "Dica de uso",
  "content": "Navegue pelas páginas para conhecer missões, programas e produtos fictícios de uma agência espacial inovadora!"
}



---

##  README (em Português Brasileiro)

markdown
# AstroLink 

Bem-vindo ao repositório do AstroLink, uma plataforma fictícia que simula a experiência de uma agência espacial! Explore missões, astronautas, inovações, notícias e muito mais — tudo de forma interativa, responsiva e com uma interface moderna, feita apenas com HTML, CSS e JavaScript.

## Funcionalidades

- Página inicial com missão, visão, destaques e depoimentos
- Páginas de missões espaciais, galeria de astronautas, loja virtual e centro de inovações
- Login e cadastro com validação e armazenamento local
- FAQ e formulário de contato com mensagens interativas
- Carrosséis visuais para missões e galeria de imagens
- Sistema solar animado por CSS e JS
- Totalmente responsivo para desktop e dispositivos móveis

## Estrutura do Projeto

- `index.html`: Página inicial
- `pag2.html`: Missões espaciais
- `pag3.html`: Programa de astronautas
- `vendas.html`: Loja AstroLink
- `inovacao/index.html`: Centros de inovação
- `FAQ/Pagina-noticIAS.html`: Notícias e FAQ
- `login/login.html`, `login/sigin.html`: Login e cadastro
- `login/index.html`, `login/index1.html`, `login/index2.html`: Políticas e termos

## Como utilizar

1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` no seu navegador.
3. Navegue pelas diferentes páginas e descubra todas as seções disponíveis.

## Observações

- Este projeto é totalmente fictício, feito para fins educacionais e de portfólio.
- Não há backend, bancos de dados ou APIs reais.
- Os dados de login/cadastro são armazenados apenas no seu navegador, via `localStorage`.

---



---

## Observações Finais

O código é modular e extensível, permitindo fácil adição de novos temas, páginas ou funcionalidades.
Imagens, vídeos e textos são fictícios, criados para ilustrar um cenário de agência espacial moderna.

Se tiver dúvidas ou sugestões, sinta-se à vontade para abrir um issue ou enviar um pull request!

---

card
{
  "title": "Experiência fictícia e educativa",
  "content": "AstroLink é ideal para mostrar habilidades de front-end, design responsivo e UX moderno — use como inspiração!"
}
