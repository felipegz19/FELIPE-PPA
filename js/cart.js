const cart = {
    items: [],
    total: 0,
 
    addItem(item) {
       this.items.push(item);
       this.total += item.price;
       this.updateCart();
    },
 
    removeItem(index) {
       this.total -= this.items[index].price;
       this.items.splice(index, 1);
       this.updateCart();
    },
 
    updateCart() {
       const cartItems = document.getElementById('cart-items');
       const cartTotal = document.getElementById('cart-total');
 
       cartItems.innerHTML = '';
       this.items.forEach((item, index) => {
          const li = document.createElement('li');
          li.innerHTML = `
             ${item.name} - $${item.price.toFixed(2)}
             <button onclick="cart.removeItem(${index})">Remove</button>
          `;
          cartItems.appendChild(li);
       });
 
       cartTotal.innerText = this.total.toFixed(2);
    },
 };
 
 function toggleCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.classList.toggle('open');
 }
 
 // Agrega los productos desde el HTML al carrito
 document.querySelectorAll('.protien .read_more').forEach((button, index) => {
    button.addEventListener('click', () => {
       const product = {
          name: `Protein ${index + 1}`,
          price: 400,
       };
       cart.addItem(product);
    });
 });
 