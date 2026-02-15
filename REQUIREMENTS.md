
# 🛡️ Desafio Técnico: O "Inventory Management System" (IMS)

### 📋 Contexto do Cenário

Nossa empresa está desenvolvendo um Web Game de RPG. O time de Backend já modelou os itens e o time de Design já entregou os protótipos de baixa fidelidade.

Sua responsabilidade como Front-end Junior é criar o **Core do Gerenciamento de Inventário**. Precisamos que o jogador consiga comprar itens da loja, gerenciar o peso da mochila e gastar seu ouro.

**Atenção:** O Tech Lead (eu) quer ver como você estrutura seus arquivos. Nada de colocar tudo em um arquivo só.

---

### ⚙️ Requisitos Funcionais (Regras de Negócio)

1. **A Loja (Shop):**
    
    - Exibir uma lista de itens disponíveis (eu fornecerei o JSON abaixo).
        
    - O jogador só pode comprar um item se tiver **Ouro (Gold)** suficiente.
        
2. **O Inventário (Backpack):**
    
    - O jogador começa com uma mochila vazia e uma capacidade máxima de **Peso (Capacity)**.
        
    - Cada item tem um peso. O jogador **NÃO** pode comprar um item se isso exceder a capacidade máxima da mochila.
        
    - O jogador pode remover itens da mochila (vendê-los de volta por 50% do valor original ou apenas descartá-los - você decide a regra, mas documente-a).
        
3. **Painel de Status (HUD):**
    
    - Deve mostrar o **Ouro Atual**.
        
    - Deve mostrar o **Peso Atual / Capacidade Máxima** (ex: `15/50 kg`).
        
    - Se o peso estiver acima de 90%, mostrar um alerta visual (vermelho) na UI.
        
4. **Filtros de Loja:**
    
    - O usuário deve poder filtrar a loja por categoria: `Arma`, `Poção`, `Armadura`. O Redux deve saber qual filtro está ativo.
        

---

### 💻 Requisitos Técnicos (Constraint Checklist)

- **Tecnologia:** Javascript Vanilla (ES6+), HTML5, CSS3.
    
- **Build Tool:** Vite (para bundling e dev server).
    
- **State Management:** Redux (Core/Legacy - `createStore`, `combineReducers`). **Não use Redux Toolkit ainda**, quero ver você sofrendo com o boilerplate para entender o valor dele depois.
    
- **Estrutura de Arquivos (Obrigatória):** Quero ver a separação de responsabilidades. Sugestão:

```Plaintext
/src
  /store
    actions.js
    reducers.js
    types.js (ou constants.js)
    index.js (store creation)
  /ui
    render.js (funções de manipulação do DOM)
    events.js (listeners)
  index.js (entry point)
  data.js (mock data)
```

- **Imutabilidade:** É proibido usar `push`, `splice` ou reatribuição direta no reducer.
    

---

### 🔥 O "Senior Twist" (Onde vou te avaliar de verdade)

Um Junior comum faz o código funcionar. Um Junior promissor pensa em **UX e Robustez**.

1. **Feedback de Erro:** Se o usuário tentar comprar algo sem ouro ou sem espaço, a UI não pode simplesmente "não fazer nada". Precisa haver um feedback (um `alert`, um `toast`, ou uma mensagem de erro no estado).
    
    - _Dica:_ Talvez você precise de uma propriedade `error: string | null` no seu estado global.
        
2. **Persistência (Bônus):**
    
    - Use `localStorage`. Se eu der F5 na página, meu ouro e meus itens devem continuar lá.
        

---

### 📦 Dados Iniciais (Mock Data)

Crie um arquivo `data.js` com isso:

```js
export const SHOP_ITEMS = [
  { id: 1, name: 'Espada de Ferro', type: 'weapon', price: 150, weight: 5, icon: '⚔️' },
  { id: 2, name: 'Poção de Cura', type: 'potion', price: 50, weight: 0.5, icon: '🧪' },
  { id: 3, name: 'Escudo de Madeira', type: 'armor', price: 100, weight: 4, icon: '🛡️' },
  { id: 4, name: 'Armadura de Couro', type: 'armor', price: 250, weight: 8, icon: '🧥' },
  { id: 5, name: 'Machado de Guerra', type: 'weapon', price: 300, weight: 10, icon: '🪓' },
  { id: 6, name: 'Elixir de Mana', type: 'potion', price: 80, weight: 0.5, icon: '⚗️' },
];

export const INITIAL_PLAYER_STATS = {
  gold: 500,
  capacity: 20, // Kg
  inventory: []
};
```