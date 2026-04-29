// Sample products
const products = [
    { name: "Apple iPhone 14", price: "$799", image: "https://via.placeholder.com/200x150?text=iPhone+14" },
    { name: "Samsung Galaxy S23", price: "$699", image: "https://via.placeholder.com/200x150?text=Galaxy+S23" },
    { name: "Sony Headphones", price: "$199", image: "https://via.placeholder.com/200x150?text=Sony+Headphones" },
    { name: "Laptop", price: "$1099", image: "https://via.placeholder.com/200x150?text=Laptop" },
    { name: "Smart Watch", price: "$249", image: "https://via.placeholder.com/200x150?text=Smart+Watch" }
];

// Deals products (can be different)
const deals = [
    { name: "Bluetooth Speaker", price: "$49", image: "https://via.placeholder.com/200x150?text=Speaker" },
    { name: "Fitness Band", price: "$99", image: "https://via.placeholder.com/200x150?text=Fitness+Band" },
    { name: "Tablet", price: "$299", image: "https://via.placeholder.com/200x150?text=Tablet" },
];

// Function to render products
function renderProducts(array, gridId) {
    const grid = document.getElementById(gridId);
    grid.innerHTML = "";
    array.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button onclick="addToCart('${product.name}')">Add to Cart</button>
        `;
        grid.appendChild(card);
    });
}

// Initial rendering
renderProducts(products, "product-grid");
renderProducts(deals, "deals-grid");

// Add to cart function
function addToCart(name) {
    alert(`${name} added to cart!`);
}

// Search Functionality
document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.querySelector('.search-bar input').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    renderProducts(filtered, "product-grid");
});
