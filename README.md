## [Link do Projeto Aqui](https://andreailton.github.io/Cardapio-Tailwind-Responsivo/)  
[Clique Aqui](https://andreailton.github.io/Cardapio-Tailwind-Responsivo/)

---

# Cardápio Dev

Este é um projeto de um cardápio online para um restaurante fictício, desenvolvido utilizando HTML, CSS (Tailwind), JavaScript, e algumas bibliotecas externas como Font Awesome e Toastify.js. O cardápio contém opções de hambúrgueres, bebidas, e permite que o usuário adicione itens ao carrinho de compras e finalize o pedido.

## Visão Geral

Este projeto simula um site de restaurante onde os usuários podem visualizar o cardápio, adicionar produtos ao carrinho e finalizar uma compra. Ele utiliza JavaScript para gerenciar o carrinho e exibir um modal com os itens selecionados.

## Funcionalidades

- **Visualização de Cardápio**: Os itens do menu são exibidos com descrição e preço.
- **Carrinho de Compras**: O usuário pode adicionar itens ao carrinho e visualizar o total acumulado.
- **Modal de Carrinho**: Um modal exibe os itens adicionados ao carrinho, permite modificar a quantidade e finalizar o pedido.
- **Notificações Toast**: Feedback visual ao adicionar itens ao carrinho com a biblioteca Toastify.js.
- **Interatividade**: Efeitos visuais usando Tailwind CSS para hover e transições de escala e rotação nas imagens dos produtos.

## Uso

1. Navegue pela página e explore os hambúrgueres e bebidas disponíveis.
2. Clique no ícone de carrinho em cada item para adicioná-lo ao seu carrinho de compras.
3. Clique em "Veja Meu Carrinho" no rodapé para visualizar os itens no carrinho e finalizar o pedido.
4. Insira o endereço de entrega no modal de carrinho e clique em "Finalizar".

## Tecnologias Utilizadas

1. **HTML5**: Para estruturação do conteúdo.
2. **CSS3 (Tailwind CSS)**: Framework CSS utilitário para estilização rápida e responsiva.
3. **JavaScript**: Manipulação do DOM, adição de itens ao carrinho, cálculo de total e controle do modal.
4. **Font Awesome**: Para ícones (como o ícone de carrinho de compras).
5. **Toastify.js**: Para exibir notificações quando um item é adicionado ao carrinho.

## Conceitos Utilizados

1. **Manipulação do DOM**: O código faz uso de métodos como `document.querySelector()` e `innerHTML` para adicionar itens ao carrinho e exibir o modal.
2. **Eventos de DOM**: Eventos de clique (`addEventListener`) são usados para capturar as interações do usuário ao adicionar itens ao carrinho e abrir o modal.
3. **Efeitos Visuais com Tailwind CSS**: O projeto utiliza classes utilitárias do Tailwind para criar transições suaves, como efeitos de hover e escalonamento de imagens.
4. **Interação com Modal**: O modal do carrinho de compras é exibido dinamicamente com a manipulação de classes de Tailwind, controlando sua visibilidade.
5. **Notificações com Toastify.js**: Para melhorar a experiência do usuário, o projeto utiliza notificações não intrusivas quando ações importantes ocorrem, como a adição de itens ao carrinho.
