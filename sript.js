
document.addEventListener('DOMContentLoaded', function() {

    const clothingData = [{
        "id": "C001",
        "name": "boho-Printed",
        "price": 19.99,
        "image": "./image/boho-Printed.jpg"
      },
      {
        "id": "C002",
        "name": "Boho",
        "price": 12.9,
       "image": "./image/Boho.jpg"
      },
      {
        "id": "C003",
        "name": "off-shoulder",
       "price": 30.99,
       "image": "./image/off-shoulder.jpg"
      },
      {
        "id": "C004",
        "name": "polka",
       "price": 21.99,
      "image": "./image/polka.jpg"
      },
      {
        "id": "C005",
        "name": "ponders",
        "price": 15.99,
     "image": "./image/ponders.jpg"
      },
      {
        "id": "C005",
        "name": "bohemian",
         "price": 79.99,
         "image": "./image/bohemian.jpg"
      },

  ];
  const container = document.getElementById('clothing-cards');
    const cartContainer = document.querySelector('.cart-container tbody');  
    const emptyCartMessage = document.querySelector('.empty-cart-message'); 
    let totalPrice = 0;
    let totalItems = 0;
 function toggleCartVisibility() {
      if (totalItems === 0) {
          document.getElementById('cart').style.display = 'none';
          emptyCartMessage.style.display = 'block';
        } else {
          document.getElementById('cart').style.display = 'block';
          emptyCartMessage.style.display = 'none';
        }
    }
clothingData.forEach(clothing => {
        const card = document.createElement('div');
        card.classList.add('product-card');
  
        card.innerHTML = `
            <div class="product-tumb">
                <img src="${clothing.image}" alt="${clothing.name}">
            </div>
            <div class="product-details">
                <h4><a href="">${clothing.name}</a></h4>
                
                <div class="product-bottom-details">
                    <div class="product-price"><small>$${clothing.price.toFixed(2)}</small></div>
                    <div class="product-links">
                        <button class="add-to-cart-btn" data-id="${clothing.id}" data-name="${clothing.name}" data-price="${clothing.price.toFixed(2)}">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
container.appendChild(card);
    });
  function addToCart(id, name, price) {
        const cartItem = document.createElement('tr');
            cartItem.classList.add('cart-item');
            cartItem.dataset.id = id;
            cartItem.innerHTML = `
            <td>${name}</td>
            <td>$${price}</td>
          
            <td>$${price}</td>
            
        `;
            cartContainer.appendChild(cartItem);
            
              
      
        totalPrice += parseFloat(price);
        totalItems++;
        updateTotal();
        updateAverage();
        toggleCartVisibility();
    }
  function updateTotal() {
        document.querySelector('.total strong').textContent = `Total: $${totalPrice.toFixed(2)}`;
    }
   function updateAverage() {
        const averagePrice = totalItems ? totalPrice / totalItems : 0;
        document.querySelector('.average strong').textContent = `Average Price: $${averagePrice.toFixed(2)}`;
    }
  container.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-to-cart-btn')) {
            const id = event.target.dataset.id;
            const name = event.target.dataset.name;
            const price = event.target.dataset.price;
            addToCart(id, name, price);
        }
    });
  function clearCart() {
      cartContainer.innerHTML = ''; 
      totalPrice = 0;
      totalItems = 0; 
      updateTotal();
      updateAverage();
      toggleCartVisibility();
      
    }
  
    document.querySelector('.clear-btn').addEventListener('click', clearCart);
  
 
toggleCartVisibility();
  });