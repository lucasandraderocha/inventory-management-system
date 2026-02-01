# 🛡️ RPG Inventory Manager (Redux Core)

![Project Status](https://img.shields.io/badge/status-complete-green)
![Tech Stack](https://img.shields.io/badge/tech-JavaScript%20%7C%20Redux%20%7C%20HTML%2FCSS-blue)

## 📖 Sobre o Projeto

O **RPG Inventory Manager** é uma aplicação de gerenciamento de estado complexa que simula a mecânica de inventário e loja de um jogo de RPG. 

O objetivo principal deste projeto não foi apenas criar uma interface, mas sim demonstrar o domínio profundo do **Redux (Core/Legacy)** e do fluxo unidirecional de dados em **JavaScript Vanilla**, sem a abstração de frameworks como React ou Redux Toolkit.

O sistema lida com regras de negócio interdependentes, onde ações de compra e venda são validadas contra múltiplos estados (saldo de ouro e capacidade de peso da mochila).

## 🚀 Funcionalidades & Regras de Negócio

### 🏪 A Loja (Shop)
- **Listagem de Itens:** Exibição de produtos com atributos (preço, peso, tipo).
- **Sistema de Filtros:** Filtragem global via Redux por categoria (Armas, Armaduras, Poções).
- **Validação de Compra:** O usuário só pode adquirir itens se tiver saldo suficiente.

### 🎒 O Inventário (Backpack)
- **Gerenciamento de Capacidade:** Implementação de lógica de peso (`currentWeight` vs `maxCapacity`). A compra é bloqueada se o item exceder o limite.
- **Feedback Visual:** Alertas de UI quando a mochila está próxima da lotação (>90%).
- **Remoção de Itens:** Possibilidade de vender itens (recuperando parte do ouro) ou descartá-los.

### 💾 Persistência e UX
- **Tratamento de Erros:** Feedback visual para o usuário quando uma ação é bloqueada (ex: "Ouro insuficiente").
- **Local Storage:** O estado do inventário persiste mesmo após recarregar a página (F5).

## 🛠️ Tecnologias e Arquitetura

O projeto foi construído seguindo os princípios da arquitetura Flux/Redux, com estrita separação de responsabilidades:

- **JavaScript (ES6+):** Lógica pura e manipulação de DOM.
- **Redux (Standalone):** Gerenciamento de estado global previsível.
- **CSS3:** Estilização responsiva.

### Estrutura de Pastas
A organização do código reflete uma estrutura escalável, separando a lógica de negócio (Store) da camada de apresentação (UI).

```text
/src
 ├── store/
 │   ├── actions/      # Action Creators (Intenções de mudança)
 │   ├── reducers/     # Lógica pura de atualização de estado (Imutabilidade)
 │   ├── types/       # Constantes para Action Types (Evita magic strings)
 │   └── index/        # Configuração da Store e CombineReducers
 ├── styles
 │   ├── token/
 │   │   ├── radius.css
 │   │   ├── spacing.css
 │   │   ├── colours.css
 │   │   └── typography.css
 │   ├── style.css
 │   └── token.css
 ├── ui/
 │   ├── render/       # Funções puras de renderização do DOM
 │   └── events/      # Event Listeners e Disparos de Actions
 ├── data.js             # Mock Data (Itens da loja)
 └── index.js            # Ponto de entrada da aplicação
```
 🧠 Aprendizados Chave
Este desafio técnico focou em reforçar conceitos fundamentais de Engenharia de Software Frontend:

Imutabilidade Rigorosa: Manipulação de Arrays e Objetos sem mutação direta (map, filter, spread operator).

Redux "Under the Hood": Compreensão de como dispatch, subscribe e reducers funcionam nativamente.

Complex State Logic: Gerenciamento de estados derivados e validações cruzadas (ex: Ouro vs Peso).

Arquitetura: Organização de código visando manutenibilidade e escalabilidade.

🏁 Como Rodar o Projeto
Clone este repositório:

```bash
Bash
git clone [https://github.com/SEU-USUARIO/rpg-inventory-redux.git](https://github.com/SEU-USUARIO/rpg-inventory-redux.git)
Navegue até a pasta do projeto.
```
Abra o arquivo index.html no seu navegador (ou use a extensão "Live Server" do VSCode).

Desenvolvido por [Seu Nome] - [Link para seu LinkedIn]