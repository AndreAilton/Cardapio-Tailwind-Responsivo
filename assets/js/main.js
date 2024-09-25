const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartCount = document.getElementById("cart-count")

const modalContainer = document.getElementById("cart-modal")
const modalItems = document.getElementById("cart-items")
const modalTotal = document.getElementById("cart-total")
const modalCheckout = document.getElementById("checkout-btn")
const modalClose = document.getElementById("close-modal-btn")
const modalAdress = document.getElementById("address")
const modalWarning = document.getElementById("adress-warning")

let cart = [];

cartBtn.addEventListener("click", event => {
    modalContainer.classList.add("show");

})

modalContainer.addEventListener("click", event => {
    if(event.target === modalContainer){
        modalContainer.classList.remove('show');
    }
})

modalClose.addEventListener("click", event =>{
    modalContainer.classList.remove('show');
})

menu.addEventListener("click", event => {
    let parentButton = event.target.closest(".add-to-cart-btn") //closest Verifica Se a classe esta com o elemento pai ou presente e retorna
    if(parentButton){
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))
        addToCart(name, price)
        updateModal();
    }
})

function addToCart(name, price) {

    Toastify({
        text: "Item Adicionado ao Carrinho",
        duration: 2000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#006400",
        },
      }).showToast();

    const existingItem = cart.find(item => item.name === name)
    if(existingItem){
        existingItem.quantity+=1

    } else {
    cart.push({name,price,quantity:1,})
    }
}

function updateModal(){
    modalItems.innerHTML = "";
    let total = 0;
    
    if (cart.length === 0) {
        modalItems.innerHTML = "<p>Seu carrinho está vazio</p>"; // Mensagem de carrinho vazio
        cartCount.innerHTML = 0;
        modalTotal.innerHTML = "R$ 0,00";
        return;
    }

    cart.forEach(item => {
        const cartElement = document.createElement("div")
        cartElement.classList.add("flex","justify-between", "mb-4", "flex-col")
        cartElement.innerHTML = `
        
            <div class="flex items-center justify-between">
                <div>
                    <p class="font-bold">${item.name}</p>
                    <p class="font-medium">Qtd: ${item.price.toFixed(2)}</p>
                    <p class="font-medium mt-2">R$ ${item.quantity}</p>
                </div>
                <div>
                    <button class="remove-from-cart-btn" data-name="${item.name}">
                        Remover
                    </button>
                </div>
            </div>   
        `
        total += item.price * item.quantity;
        modalItems.appendChild(cartElement)
        cartCount.innerHTML = cart.length;
        console.log(cart.length)
        modalTotal.innerHTML = total.toLocaleString("pt-BR", {
            style:"currency",
            currency: "BRL"
        })
    })
}


modalItems.addEventListener("click", event =>{
    if(event.target.classList.contains("remove-from-cart-btn")){
        const name = event.target.getAttribute("data-name")
        removeItem(name)
        updateModal()

        
        Toastify({
            text: "Item Removido do Carrinho",
            duration: 2000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#ef4444",
            },
          }).showToast();
          
    }
    })

function removeItem(name){
    const index = cart.findIndex(item => item.name === name);
    if(index !== -1){
        const item = cart[index];
        if(item.quantity >1) {
            item.quantity -=1;

        } else {

            cart.splice(index,1)
        }

    }
}

modalAdress.addEventListener("input", event => {
    let inputValue = event.target.value;

    if (inputValue !== ""){
        modalWarning.classList.add("hidden")
        modalAdress.classList.remove("border-red-500")
    }

})

modalCheckout.addEventListener("click", event => {
    const isOpen = checkRestaurantOpen();
    if(!isOpen){
        Toastify({
            text: "Ops o Restaurante está fechado",
            duration: 2000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#ef4444",
            },
          }).showToast();


        return;
    }

    if(cart.length === 0 ) return;
    if(modalAdress.value === ""){
        modalWarning.classList.remove("hidden")
        modalAdress.classList.add("border-red-500")
        return;
    }

    const cartItems = cart.map(item => {
        return (`${item.name} Quantidade: ${item.quantity} Preço: R$${item.price} | \n`)
    }).join("")

    const message = encodeURIComponent(cartItems)
    const phone = "16993356039"

    window.open(`https://wa.me/${phone}?text=${message}Endereço: ${modalAdress.value}`, "_blank")

    cart = []
    updateModal()
    modalContainer.style.display = "none"
})

function checkRestaurantOpen(){
    const data = new Date();
    const hora = data.getHours();
    return hora >=18 && hora < 22;
}

const spanItem = document.getElementById("date-span")
const isOpen = checkRestaurantOpen();

if(isOpen){
    spanItem.classList.remove("bg-red-500")
    spanItem.classList.add("bg-green-600")
} else {
    spanItem.classList.remove("bg-green-600")
    spanItem.classList.add("bg-red-500")
}