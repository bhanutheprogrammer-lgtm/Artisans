function highlightActiveNav() {
  const links = document.querySelectorAll('nav a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}

function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

const MOCK_PRODUCTS = [
  {
    id: 1,
    title: "Handwoven Wooden Sculpture",
    description: "Crafted from reclaimed wood with intricate hand-carved details, inspired by traditional forest motifs.",
    image_url: "https://images.unsplash.com/photo-1687916141639-845fdae624e3?w=600&auto=format&fit=crop&q=60",
    category: "Woodwork",
    tags: ["wood", "sculpture", "handmade", "rustic", "decor"],
    price: "$85",
    artisan: "Kofi Mensah",
    region: "Accra, Ghana",
    ai_generated: true
  },
  {
    id: 2,
    title: "Terracotta Clay Pottery Set",
    description: "Elegant hand-thrown clay pots featuring traditional glazing techniques passed down for generations.",
    image_url: "https://plus.unsplash.com/premium_photo-1661380954234-13d98a83577c?w=600&auto=format&fit=crop&q=60",
    category: "Pottery",
    tags: ["pottery", "clay", "handmade", "kitchen", "traditional"],
    price: "$45",
    artisan: "Maria Delgado",
    region: "Oaxaca, Mexico",
    ai_generated: true
  },
  {
    id: 3,
    title: "Handloom Textile Wall Art",
    description: "Colorful fabrics woven with care using traditional handloom techniques, perfect as a statement wall piece.",
    image_url: "https://images.unsplash.com/photo-1627296345489-faf81a8f15ae?w=600&auto=format&fit=crop&q=60",
    category: "Textiles",
    tags: ["textile", "weaving", "wall-art", "colorful", "handloom"],
    price: "$60",
    artisan: "Priya Sharma",
    region: "Jaipur, India",
    ai_generated: true
  }
];

function fetchProducts() {
  return Promise.resolve(MOCK_PRODUCTS);
}

function fetchProductById(id) {
  const product = MOCK_PRODUCTS.find(p => p.id === Number(id));
  return Promise.resolve(product || null);
}

function fakeGenerateListing() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        title: "Hand-Carved Wooden Bowl",
        description: "A beautifully hand-carved wooden bowl, finished with natural oils to highlight the grain.",
        category: "Home Decor",
        tags: ["wood", "bowl", "handmade", "kitchen", "natural"],
        suggested_price_range: "$30-$45"
      });
    }, 1500);
  });
}

function renderProductCard(product) {
  return `
    <a class="card fade-in-up" href="product.html?id=${product.id}">
      <img src="${product.image_url}" alt="${product.title}">
      ${product.ai_generated ? '<span class="badge">AI Tagged ✨</span>' : ''}
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <p class="price">${product.price}</p>
    </a>
  `;
}

document.addEventListener('DOMContentLoaded', highlightActiveNav);