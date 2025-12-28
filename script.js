// Pizza data
const pizzas = [
  {
    id: 1,
    name: "Mussarela",
    description: "Molho, mussarela, orégano",
    priceP: 33,
    priceM: 39,
    image:
      "https://th.bing.com/th/id/OIP.5j6DRQbHqHFZrKda75vI3wHaD3?w=307&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    id: 2,
    name: "Mixta",
    description: "Molho, mussarela, presunto, tomate, orégano",
    priceP: 35,
    priceM: 43,
    image:
      "https://th.bing.com/th/id/OIP.fdhkuUO1y0blx1ya0NdQpwHaEO?w=313&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    id: 3,
    name: "Calabresa",
    description: "Molho, mussarela, calabresa, cebola, orégano",
    priceP: 37,
    priceM: 45,
    image:
      "https://th.bing.com/th/id/OIP.dTbiXT3P6bb072pXBfjMsAHaFO?w=274&h=194&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    id: 4,
    name: "Margharita Pizza",
    description: "Molho, mussarela, tomate, manjericão",
    priceP: 34,
    priceM: 40,
    image:
      "https://th.bing.com/th/id/OIP.kJJWQqX2CuGncnTLRlMlRQHaEK?w=302&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    id: 5,
    name: "Quatro Queijos",
    description: "Molho, mussarela, parmesão, provolone, catupiri",
    priceP: 40,
    priceM: 48,
    image:
      "https://th.bing.com/th/id/OIP.a95-Na1VaBgxiCgdC5k4LwHaEK?w=328&h=184&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    id: 6,
    name: "Portuguesa",
    description: "Molho, mussarela, presunto, calabresa, ovos cozinho, tomate, pimentão, cebola, orégano",
    priceP: 41,
    priceM: 50,
    image:
      "https://th.bing.com/th/id/OIP.TkQqC1C1B--Wl7tnP5j7vAHaFO?w=255&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    id: 7,
    name: "Frango c/ Requeijão",
    description: "Molho, mussarela, frango desfiado, requeijão, azeitona, milho, orégano",
    priceP: 39,
    priceM: 47,
    image:
      "https://th.bing.com/th/id/OIP.h1ofyaM_9iBZ3y_XyT1ySAHaE8?w=270&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    id: 8,
    name: "Moda da Casa",
    description: "Molho, mussarela, presunto, baycon, calabresa, milho, orégano",
    priceP: 44,
    priceM: 51,
    image:
      "https://th.bing.com/th/id/R.346b4fe302e0a8277603fc884032078b?rik=Gjb049Wk%2b6ZMYg&riu=http%3a%2f%2fpizzanobre.com.br%2fimg%2ftradicional-14.jpg&ehk=RPOYZqmIs76BsoOKkIdi1azdMxb1d2VZWWBCSGrTXIE%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 9,
    name: "Light",
    description: "Molho, mussarela, peito de Peru, tomate seco, palmito, champignon, orégano",
    priceP: 46,
    priceM: 53,
    image:
      "https://th.bing.com/th/id/OIP.GJ7E94-Fz4RQxd96ACjv2AHaEj?w=308&h=190&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    id: 10,
    name: "Caipira",
    description: "Molho, mussarela, frango desfiado, baycon, milho, azeitona, orégano",
    priceP: 43,
    priceM: 50,
    image:
      "https://th.bing.com/th/id/OIP.40QcRBTDPt89grbOzHGL_wHaEK?w=282&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
  },
]

// Cart state
let cart = []

// DOM elements
const cartButton = document.getElementById("cartButton")
const cartSidebar = document.getElementById("cartSidebar")
const cartOverlay = document.getElementById("cartOverlay")
const closeCart = document.getElementById("closeCart")
const pizzaGrid = document.getElementById("pizzaGrid")
const cartItems = document.getElementById("cartItems")
const cartBadge = document.getElementById("cartBadge")
const cartDescription = document.getElementById("cartDescription")
const cartFooter = document.getElementById("cartFooter")
const totalPrice = document.getElementById("totalPrice")
const checkoutButton = document.getElementById("checkoutButton") // Assuming a checkout button exists
const checkoutModal = document.getElementById("checkoutModal") // Assuming a checkout modal exists
const closeCheckoutModalButton = document.getElementById("closeCheckoutModal") // Assuming a close button for the checkout modal exists
const checkoutForm = document.getElementById("checkoutForm") // Assuming a checkout form exists
const modalTotalPrice = document.getElementById("modalTotalPrice") // Assuming a total price element in the checkout modal exists

// Initialize
function init() {
  renderPizzas()
  setupEventListeners()
}

// Render pizzas
function renderPizzas() {
  pizzaGrid.innerHTML = pizzas
    .map(
      (pizza) => `
        <div class="pizza-card">
            <div class="pizza-image">
                <img src="${pizza.image}" 
                     alt="${pizza.name} - ${pizza.description}">
            </div>
            <div class="pizza-content">
                <h4 class="pizza-title">${pizza.name}</h4>
                <p class="pizza-description">${pizza.description}</p>
                <div class="pizza-prices">
                    <span>P: R$ ${pizza.priceP.toFixed(2)}</span>
                    <span>M: R$ ${pizza.priceM.toFixed(2)}</span>
                </div>
                <div class="pizza-buttons">
                    <button class="add-button add-button-p" onclick="addToCart(${pizza.id}, 'P')">
                        Adicionar P
                    </button>
                    <button class="add-button add-button-m" onclick="addToCart(${pizza.id}, 'M')">
                        Adicionar M
                    </button>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

// Setup event listeners
function setupEventListeners() {
  cartButton.addEventListener("click", openCart)
  closeCart.addEventListener("click", closeCartSidebar)
  cartOverlay.addEventListener("click", closeCartSidebar)
}

// Add to cart
function addToCart(pizzaId, size) {
  const pizza = pizzas.find((p) => p.id === pizzaId)
  const existingItem = cart.find((item) => item.id === pizzaId && item.size === size)

  if (existingItem) {
    existingItem.quantity++
  } else {
    cart.push({
      ...pizza,
      size,
      quantity: 1,
    })
  }

  updateCart()
  openCart()
}

// Update quantity
function updateQuantity(pizzaId, size, change) {
  const item = cart.find((item) => item.id === pizzaId && item.size === size)
  if (item) {
    item.quantity += change
    if (item.quantity <= 0) {
      removeFromCart(pizzaId, size)
    } else {
      updateCart()
    }
  }
}

// Remove from cart
function removeFromCart(pizzaId, size) {
  cart = cart.filter((item) => !(item.id === pizzaId && item.size === size))
  updateCart()
}

// Update cart display
function updateCart() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const total = cart.reduce((sum, item) => {
    const price = item.size === "P" ? item.priceP : item.priceM
    return sum + price * item.quantity
  }, 0)

  // Update badge
  if (totalItems > 0) {
    cartBadge.style.display = "flex"
    cartBadge.textContent = totalItems
  } else {
    cartBadge.style.display = "none"
  }

  // Update description
  cartDescription.textContent = totalItems === 0 ? "Seu carrinho está vazio" : `${totalItems} item(s) no carrinho`

  // Update cart items
  if (cart.length === 0) {
    cartItems.innerHTML = `
            <div class="empty-cart">
                <svg class="icon-large" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <p>Adicione pizzas ao seu carrinho</p>
            </div>
        `
    cartFooter.style.display = "none"
  } else {
    cartItems.innerHTML = cart
      .map((item) => {
        const price = item.size === "P" ? item.priceP : item.priceM
        const itemTotal = price * item.quantity
        return `
                <div class="cart-item">
                    <div class="cart-item-header">
                        <div>
                            <h4 class="cart-item-title">${item.name}</h4>
                            <span class="size-badge">${item.size}</span>
                        </div>
                        <button class="remove-button" onclick="removeFromCart(${item.id}, '${item.size}')">
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="cart-item-controls">
                        <div class="quantity-controls">
                            <button class="quantity-button" onclick="updateQuantity(${item.id}, '${item.size}', -1)">
                                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </button>
                            <span class="quantity-display">${item.quantity}</span>
                            <button class="quantity-button" onclick="updateQuantity(${item.id}, '${item.size}', 1)">
                                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </button>
                        </div>
                        <span class="item-price">R$ ${itemTotal.toFixed(2)}</span>
                    </div>
                </div>
            `
      })
      .join("")
    cartFooter.style.display = "block"
    totalPrice.textContent = `R$ ${total.toFixed(2)}`
  }
}

// Open cart
function openCart() {
  cartSidebar.classList.add("active")
  cartOverlay.classList.add("active")
  document.body.style.overflow = "hidden"
}

// Close cart
function closeCartSidebar() {
  cartSidebar.classList.remove("active")
  cartOverlay.classList.remove("active")
  document.body.style.overflow = ""
}

// Open checkout modal
function openCheckoutModal() {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio!")
    return
  }

  // Calculate total
  const total = cart.reduce((sum, item) => {
    const price = item.size === "P" ? item.priceP : item.priceM
    return sum + price * item.quantity
  }, 0)

  // Update modal total
  modalTotalPrice.textContent = `R$ ${total.toFixed(2)}`

  // Open modal
  checkoutModal.classList.add("active")
  document.body.style.overflow = "hidden"
}

// Close checkout modal
function closeCheckoutModal() {
  checkoutModal.classList.remove("active")
  document.body.style.overflow = ""
}

// Submit order with customer details
function submitOrder(event) {
  event.preventDefault()

  // Get form data
  const name = document.getElementById("customerName").value
  const phone = document.getElementById("customerPhone").value
  const address = document.getElementById("customerAddress").value
  const complement = document.getElementById("customerComplement").value
  const notes = document.getElementById("customerNotes").value

  // Build order message
  let message = "🍕 *Novo Pedido - Oficina do Sabor*\n\n"

  // Customer details
  message += "*Dados do Cliente:*\n"
  message += `Nome: ${name}\n`
  message += `WhatsApp: ${phone}\n`
  message += `Endereço: ${address}\n`
  if (complement) {
    message += `Complemento: ${complement}\n`
  }
  message += "\n"

  // Order items
  message += "*Pedido:*\n"
  cart.forEach((item) => {
    const price = item.size === "P" ? item.priceP : item.priceM
    message += `• ${item.quantity}x ${item.name} (${item.size})\n`
    message += `  R$ ${price.toFixed(2)} cada\n`
    message += `  Subtotal: R$ ${(price * item.quantity).toFixed(2)}\n\n`
  })

  // Total
  const total = cart.reduce((sum, item) => {
    const price = item.size === "P" ? item.priceP : item.priceM
    return sum + price * item.quantity
  }, 0)

  message += `*Total: R$ ${total.toFixed(2)}*\n\n`

  // Observations
  if (notes) {
    message += `*Observações:*\n${notes}`
  }

  // Encode message for URL
  const encodedMessage = encodeURIComponent(message)

  // Replace with your WhatsApp number (format: 5511999999999)
  const whatsappNumber = "5511999999999"
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

  // Open WhatsApp
  window.open(whatsappURL, "_blank")

  // Close modal
  closeCheckoutModal()

  // Close cart
  closeCartSidebar()

  // Clear cart after sending
  cart = []
  updateCart()

  // Clear form
  document.getElementById("checkoutForm").reset()

  // Show success message
  alert("Pedido enviado! Aguarde a confirmação no WhatsApp.")
}

// Initialize on load
init()
