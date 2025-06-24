// Datos de productos
const products = [
    {
        id: 1,
        name: "Leche Entera 1L",
        brand: "La Vaquita",
        price: 1.20,
        image:"https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        badge: null
    },
    {
        id: 2,
        name: "Arroz Extra 5kg",
        brand: "Oro del Campo",
        price: 3.50,
        image: "https://i.ibb.co/qMFjDjSV/b689b755-arroz-extra-5-kg.webp",
        badge: "Oferta"
    },
    {
        id: 3,
        name: "Manzanas Rojas",
        brand: "Origen: Chile",
        price: 2.80,
        unit: "kg",
        image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        badge: null
    },
    {
        id: 5,
        name: "Pan Integral",
        brand: "Panadería Moderna",
        price: 1.80,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        badge: null
    },
    {
        id: 6,
        name: "Café Molido 500g",
        brand: "Café del Monte",
        price: 5.60,
        image: "https://i.ibb.co/fdNH2G24/CAFE-MOLIDO-LAMINADO-483224-a.webp",
        badge: "Nuevo"
    },
    {
        id: 8,
        name: "Atún en Lata",
        brand: "Mar Azul",
        price: 1.90,
        image: "https://i.ibb.co/dCjrWW0/354-Atun-en-aceite-de-Girasol-80-g.jpg",
        badge: "2x$3.50"
    },
    {
        id: 9,
        name: "Yogur Natural",
        brand: "Lácteos Sanos",
        price: 0.90,
        image: "https://i.ibb.co/fGL43SMh/16251-G.jpg",
        badge: null
    },
    {
        id: 11,
        name: "Aceite de Oliva 1L",
        brand: "Oliva Premium",
        price: 8.60,
        image: "https://i.ibb.co/YFKGvn83/00120903200127-3-600x600.jpg",
        badge: null
    },
    {
        id: 12,
        name: "Cereal Integral",
        brand: "NutriGran",
        price: 3.20,
        image: "https://i.ibb.co/jvD7K24D/011602-1.png",
        badge: "Saludable"
    },
    {
        id: 16,
        name: "Detergente Líquido",
        brand: "Limpieza Total",
        price: 4.80,
        image: "https://i.ibb.co/MySdxJr5/deja-l-quido-floral-botella-paquete.jpg",
        badge: null
    },
    {
        id: 18,
        name: "Filete de Salmón",
        brand: "Origen: Noruega",
        price: 9.90,
        unit: "kg",
        image: "https://i.ibb.co/dwwt9cRK/Salmon-empaque.webp",
        badge: "Fresco"
    },
    {
        id: 20,
        name: "Papel Higiénico 12rollos",
        brand: "Suave Plus",
        price: 5.30,
        image: "https://i.ibb.co/YTQdNV9T/100226333-PAPEL-HIGIENICO-ELITE-PREMIUM-MEGAROLLO-PAQUETE.webp",
        badge: "Oferta"
    }
];

// Datos de ofertas especiales
const specialOffers = [
    {
        id: 21,
        name: "Atún en Lata (Pack x6)",
        brand: "Mar Azul",
        price: 5.70,
        originalPrice: 11.40,
        image: "https://i.ibb.co/nMPLy9xG/Pack-6-atun-en-aceite-de-oliva-precio-especial.jpg",
        badge: "50% OFF"
    },
    {
        id: 22,
        name: "Yogur Natural (Pack x2)",
        brand: "Lácteos Sanos",
        price: 0.90,
        originalPrice: 1.80,
        image: "https://i.ibb.co/fGL43SMh/16251-G.jpg",
        badge: "2x1"
    },
    {
        id: 23,
        name: "Cereal Integral 1kg",
        brand: "NutriGran",
        price: 4.48,
        originalPrice: 6.40,
        image: "https://i.ibb.co/jvD7K24D/011602-1.png",
        badge: "30% OFF"
    }
    
];

// Variables globales
let cart = [];
let cartCount = 0;

// Función para renderizar productos
function renderProducts() {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        let badge = '';
        if (product.badge) {
            badge = `<div class="product-badge">${product.badge}</div>`;
        }
        
        const priceDisplay = product.unit ? `${product.price.toFixed(2)}/${product.unit}` : `$${product.price.toFixed(2)}`;
        
        productCard.innerHTML = `
            ${badge}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-brand">${product.brand}</p>
                <p class="product-price">$${priceDisplay}</p>
                <div class="product-actions">
                    <button class="btn btn-primary btn-add-to-cart" data-id="${product.id}">Añadir al carrito</button>
                </div>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });

    // Agregar event listeners a los botones
    document.querySelectorAll('.btn-add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Función para renderizar ofertas especiales
function renderSpecialOffers() {
    const offersContainer = document.getElementById('offers-container');
    offersContainer.innerHTML = '';

    specialOffers.forEach(offer => {
        const offerSlide = document.createElement('div');
        offerSlide.className = 'offer-slide';
        
        offerSlide.innerHTML = `
            <div class="product-card">
                <div class="product-badge">${offer.badge}</div>
                <div class="product-image">
                    <img src="${offer.image}" alt="${offer.name}">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${offer.name}</h3>
                    <p class="product-brand">${offer.brand}</p>
                    <p class="product-price">
                        <span style="text-decoration: line-through; color: #777; font-size: 14px;">$${offer.originalPrice.toFixed(2)}</span> 
                        $${offer.price.toFixed(2)}
                    </p>
                    <div class="product-actions">
                        <button class="btn btn-primary btn-add-to-cart" data-id="${offer.id}">Añadir al carrito</button>
                    </div>
                </div>
            </div>
        `;
        
        offersContainer.appendChild(offerSlide);
    });

    // Agregar event listeners a los botones de ofertas
    document.querySelectorAll('.offer-slide .btn-add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Función para agregar producto al carrito
function addToCart(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    let product;
    
    // Buscar el producto en productos normales
    product = products.find(p => p.id === productId);
    
    // Si no se encuentra, buscar en ofertas especiales
    if (!product) {
        product = specialOffers.find(p => p.id === productId);
    }
    
    if (product) {
        // Verificar si el producto ya está en el carrito
        const existingItem = cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        cartCount += 1;
        updateCartCount();
        
        // Mostrar notificación
        showNotification(`${product.name} añadido al carrito`);
    }
}

// Función para actualizar el contador del carrito
function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    cartCountElement.textContent = cartCount;
}

// Función para mostrar notificación
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = '#3498db'; // Cambiado a azul
    notification.style.color = 'white';
    notification.style.padding = '15px 25px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 3px 10px rgba(0,0,0,0.2)';
    notification.style.zIndex = '1000';
    notification.style.animation = 'fadeIn 0.5s, fadeOut 0.5s 2.5s';
    
    document.body.appendChild(notification);
    
    // Eliminar la notificación después de 3 segundos
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Contador regresivo para ofertas
function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    let hours = 24;
    let minutes = 59;
    let seconds = 32;
    
    const timer = setInterval(() => {
        seconds--;
        
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        
        if (minutes < 0) {
            minutes = 59;
            hours--;
        }
        
        if (hours < 0) {
            clearInterval(timer);
            countdownElement.textContent = "Ofertas finalizadas";
            return;
        }
        
        countdownElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderSpecialOffers();
    startCountdown();
});
// Scroll suave para los enlaces del menú
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        } else {
            // Para enlaces que no son anclas
            window.location.href = targetId;
        }
    });
});