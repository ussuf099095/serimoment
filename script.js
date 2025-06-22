document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => loader.style.display = "none", 800);

  // Produk
const products = [
  {
    name: "Leker Holland",
    description: "Leker lembut rasa original Belanda",
    price: "65.000",
    image: "assets/lekker-holland.jpeg",
    badge: "best seller",
    category: "Bolu",
    badge: "Best Seller"
  
  },
  {
    name: "Bolu Coklat",
    description: "Bolu kukus lembut dengan rasa coklat khas",
    price: "210.000",
    badge: "Best Seller",
    image: "assets/Bolu-Coklat.jpeg"
  },
  {
    name: "Bingka Bakar",
    description: "Bingka panggang dengan tekstur yang sempurna dan rasa yang enak",
    price: "50.000",
    badge: "Best Seller",
    image: "assets/bingka-bakar.jpeg"
  },
  {
    name: "Bolu Original",
    description: "Bolu kukus lembut dengan rasa ori nikmat",
    price: "115.000",
    badge: "Best Seller",
    image: "assets/bolu-ori.jpeg"
  },
  {
    name: "Kue Lapis Hula-Hula",
    description: "Setiap lapisannya sangat lezat, dengan teskstur yang lembut dan cocok di lidah",
    price: "50.000",
    image: "assets/kue-lapis.jpeg"
  },
  {
    name: "Bolu Red Velvet",
    description: "Bagi kalian yang suka rasa red velvet harus coba bolu ini!",
    price: "150.000",
    image: "assets/bolu-red.jpeg"
  },
  {
    name: "Pudding Regal",
    description: "Renyah, lembut, manis dan bikin nagih! Coba dan rasakan kelezatannya sekarang",
    price: "50.000",
    badge: "Best Seller",
    image: "assets/gantiregal.jpeg"
  },
  {
    name: "Bolu Kopi",
    description: "Lembut, dicampur rasa kopi, dan bikin happy! Pesan Sekarang",
    price: "130.000",
    image: "assets/gantikopi.jpeg"
  },
  {
    name: "Bolu Pisang",
    description: "Lembutnya tekstur berpadu dengan rasa pisang yang enak",
    price: "135.000",
    image: "assets/gantipisang.jpeg"
  },
  {
    name: "Bolu Kentang",
    description: "Dibuat dari kentang pilihan yang memberikan rasa gurih alami dan tekstur yang super empuk",
    price: "135.000",
    badge: "Best Seller",
    image: "assets/kentang.jpeg"
  },
  {
    name: "Bolu Agar-Agar",
    description: "Lembut dan unik dengan rasa agar disetiap gigitan. Bikin nagih!",
    price: "125.000",
    image: "assets/agar.jpeg"
  },
  {
    name: "Bolu Pandan",
    description: "Aroma pandan yang harum berpaduu dengan tekstur bolu super lembut. Wajib dicoba!",
    price: "130.000",
    badge: "Best Seller",
    image: "assets/pandan.jpeg"
  },
  {
    name: "Brownies",
    description: "COklatnya enak, teksturnya fudgy. Brownies ini bikin mood langsung naik!",
    price: "70.000",
    image: "assets/brown.jpeg"
  },
  {
    name: "Bolu Zebra",
    description: "Corak cantik, rasa mantap! Bolu klasik yang juara di hati",
    price: "130.000",
    image: "assets/zebra.jpeg"
  },
  {
    name: "Bolu Tapai",
    description: "",
    price: "130.000",
    image: "assets/tapai.jpeg"
  },
  {
    name: "Bolu Mini",
    description: "Kecil-kecil tapi rasa tetap juara!",
    price: "45.000-48.000",
    image: "assets/mini.jpeg"
  },
  {
    name: "Bingka Bakar Nyiur Anum",
    description: "BIngka bakar dengan rasa khas kelapa yang enak!",
    price: "50.000",
    badge: "Best Seller",
    image: "assets/nyiur.jpeg"
  },
  {
    name: "Pudding Lumut Mentega",
    description: "Pudding cantik bertekstur lembut dengan rasa yang lezat",
    price: "50.000",
    image: "assets/pudding-tapai.jpeg"
  },
  {
    name: "Bingka Kukus Gulmer Durian",
    description: "Manisnya gula merah, wangi durian, dan kelembutan bingka kukus dalam satu sajian nikmat",
    price: "40.000",
    image: "assets/kukus.jpeg",
    badge: "Best Seller"
  },
    {
    name: "Bubur Kacang Hijau",
    description: "Leker lembut rasa original Belanda",
    price: "15.000",
    image: "assets/burjo.jpeg",
    badge: "best seller"
  
  },
  {
    name: "Kolak Pisang",
    description: "Bolu kukus lembut dengan rasa coklat khas",
    price: "15.000",
    badge: "Best Seller",
    image: "assets/kolakpisangori.jpeg"
  },
  {
    name: "Lumpur Surga",
    description: "Bingka panggang dengan tekstur yang sempurna dan rasa yang enak",
    price: "35.000",
    badge: "Best Seller",
    image: "assets/lmsurga1.jpeg"
  },
  // kada tahu harganya masih 
  {
    name: "Kolak Pisang Durian",
    description: "Bolu kukus lembut dengan rasa ori nikmat",
    price: "15.000",
    badge: "Best Seller",
    image: "assets/kolakpisang.jpeg"
  },
  {
    name: "Puding Gulmer",
    description: "Setiap lapisannya sangat lezat, dengan teskstur yang lembut dan cocok di lidah",
    price: "35.000",
    image: "assets/pudinggulmer.jpeg"
  },
  {
    name: "Bingka Gulmer",
    description: "Bagi kalian yang suka rasa red velvet harus coba bolu ini!",
    price: "35.000",
    image: "assets/gulmer.jpeg"
  },
  {
    name: "Kikicak",
    description: "Renyah, lembut, manis dan bikin nagih! Coba dan rasakan kelezatannya sekarang",
    price: "15.000",
    badge: "Best Seller",
    image: "assets/kikicak.jpeg"
  },
  {
    name: "Iwak Kering Telang Tenggiri Masak Asam",
    description: "Lembut, dicampur rasa kopi, dan bikin happy! Pesan Sekarang",
    price: "35.000",
    image: "assets/iwaktelang.jpeg"
  },
  {
    name: "Bubur Rendang Sagu",
    description: "Lembutnya tekstur berpadu dengan rasa pisang yang enak",
    price: "15.000",
    image: "assets/rendangsagu.jpeg"
  },
  {
    name: "Osengan Hintalu Wadi",
    description: "Dibuat dari kentang pilihan yang memberikan rasa gurih alami dan tekstur yang super empuk",
    price: "35.000",
    badge: "Best Seller",
    image: "assets/osengan.jpeg"
  },
  {
    name: "Puding Amparan Tatak",
    description: "Lembut dan unik dengan rasa agar disetiap gigitan. Bikin nagih!",
    price: "35.000",
    image: "assets/puddingatak.jpeg"
  },
  {
    name: "Amparan Tatak",
    description: "Aroma pandan yang harum berpaduu dengan tekstur bolu super lembut. Wajib dicoba!",
    price: "35.000",
    badge: "Best Seller",
    image: "assets/atak.jpeg"
  },
  {
    name: "Putri Selat",
    description: "COklatnya enak, teksturnya fudgy. Brownies ini bikin mood langsung naik!",
    price: "35.000",
    image: "assets/putriselat.jpeg"
  },
  {
    name: "Bubur Beayak",
    description: "Corak cantik, rasa mantap! Bolu klasik yang juara di hati",
    price: "15.000",
    image: "assets/ayak.jpeg"
  },
  //harganya 
  {
    name: "Puding Tapai",
    description: "",
    price: "35.000",
    image: "assets/pudingtapai.jpeg"
  },
  {
    name: "Bolu Kelapa",
    description: "Kecil-kecil tapi rasa tetap juara!",
    price: "130.000",
    image: "assets/kelapabolu.jpeg"
  },
  {
    name: "Lempeng",
    description: "BIngka bakar dengan rasa khas kelapa yang enak!",
    price: "15.000",
    badge: "Best Seller",
    image: "assets/lempeng.jpeg"
  },
  {
    name: "Bingka Tapai Kukus",
    description: "Pudding cantik bertekstur lembut dengan rasa yang lezat",
    price: "35.000",
    image: "assets/tapaikukus.jpeg"
  },
  {
    name: "Bolu Ubi Ungu",
    description: "Manisnya gula merah, wangi durian, dan kelembutan bingka kukus dalam satu sajian nikmat",
    price: "135.000",
    image: "assets/ungu.jpeg",
    badge: "Best Seller"
  },
  {
      name: "Bubur Gunting",
    description: "Kecil-kecil tapi rasa tetap juara!",
    price: "15.000",
    image: "assets/burting.jpeg"
  }
];

  const container = document.getElementById("product-list");
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  const popupTitle = document.getElementById("popup-title");
  const popupDesc = document.getElementById("popup-desc");
  const popupPrice = document.getElementById("popup-price");
  const searchInput = document.getElementById("searchInput");
  const toast = document.getElementById("toast");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function updateCartIcon() {
    document.getElementById("cart-count").textContent = cart.length;
  }

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2500);
  }

  function addToCart(product) {
    cart.push(product);
    saveCart();
    updateCartIcon();
    renderCartItems();
    showToast("Ditambahkan ke keranjang 🍰");
  }

  function renderCartItems() {
    const cartList = document.getElementById("cart-items");
    const totalPrice = document.getElementById("cart-total");
    cartList.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div style="flex:1;">
          <strong>${item.name}</strong><br>
          Rp ${item.price}
        </div>
        <button onclick="removeFromCart(${index})" style="border:none;background:none;color:#e91e63;">✕</button>
      `;
      cartList.appendChild(li);
      total += parseInt(item.price.replace(/\D/g, ""));
    });

    totalPrice.textContent = `Rp ${total.toLocaleString("id-ID")}`;
  }

  window.removeFromCart = function(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartIcon();
    renderCartItems();
  };

  document.getElementById("clear-cart").addEventListener("click", () => {
    cart = [];
    saveCart();
    updateCartIcon();
    renderCartItems();
    showToast("Keranjang dikosongkan 🗑️");
  });

  document.getElementById("checkout-btn").addEventListener("click", () => {
    let message = "Halo kak, saya ingin memesan:\n\n";
    cart.forEach((item, i) => {
      message += `${i + 1}. ${item.name} - Rp ${item.price}\n`;
    });
    message += `\nTotal: ${document.getElementById("cart-total").textContent}\n\nTerima kasih 😊`;
    const encoded = encodeURIComponent(message);
    document.getElementById("checkout-btn").href = `https://wa.me/6285348176001?text=${encoded}`;
  });

  const cartSidebar = document.getElementById("cart-sidebar");
  document.getElementById("cart-icon").addEventListener("click", () => {
    cartSidebar.classList.add("active");
  });
  document.getElementById("close-cart").addEventListener("click", () => {
    cartSidebar.classList.remove("active");
  });

  function displayProducts(data) {
    container.innerHTML = "";
    data.forEach(product => {
      const card = document.createElement("div");
      card.className = "product";
      card.innerHTML = `
        <div class="badge">${product.badge || ""}</div>
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">Rp ${product.price}</p>
        <button class="add-to-cart">+ Tambah ke Keranjang</button>
      `;
      card.querySelector(".add-to-cart").addEventListener("click", e => {
        e.stopPropagation();
        addToCart(product);
      });
      card.addEventListener("click", () => showPopup(product));
      container.appendChild(card);
    });
  }

  function showPopup(product) {
    popupImg.src = product.image;
    popupTitle.textContent = product.name;
    popupDesc.textContent = product.description;
    popupPrice.textContent = `Rp ${product.price}`;

    const msg = `Halo, saya ingin memesan ${product.name} dari SERI MOMENT`;
    document.getElementById("wa-order-btn").href = `https://wa.me/6285348176001?text=${encodeURIComponent(msg)}`;
    document.getElementById("popup-order").href = `https://wa.me/6285348176001?text=Halo kak, saya ingin pesan *${product.name}* ya 😊`;

    popup.style.display = "flex";
  }

  document.querySelector(".close-popup").addEventListener("click", () => {
    popup.style.display = "none";
  });

  window.addEventListener("click", e => {
    if (e.target === popup) popup.style.display = "none";
  });

  searchInput.addEventListener("input", e => {
    const keyword = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
    displayProducts(filtered);
  });

  // === Filter Kategori Otomatis ===
  const filterContainer = document.getElementById("categoryFilter");
  const categories = ["Semua", ...new Set(products.map(p => p.category).filter(Boolean))];
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "filter-btn";
    btn.textContent = cat;
    btn.dataset.category = cat.toLowerCase();
    filterContainer.appendChild(btn);

    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filtered = cat === "Semua"
        ? products
        : products.filter(p => (p.category || "").toLowerCase() === cat.toLowerCase());
      displayProducts(filtered);
    });
  });
  filterContainer.querySelector(".filter-btn").classList.add("active");

  // === Dark Mode ===
  const darkToggle = document.getElementById("dark-toggle");
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    darkToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  });

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    darkToggle.textContent = "☀️";
  }

  // === Hero Slider ===
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  if (slides.length > 0) {
    slides[currentSlide].classList.add("active");
    setInterval(() => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }, 4000);
  }

  // === Testimoni Slider ===
  let testiSlide = 0;
  const testiSlides = document.querySelectorAll(".testimonial-slide");
  const dots = document.querySelectorAll(".dot");

  function showTestimonial(index) {
    testiSlides.forEach((slide, i) => {
      slide.classList.remove("active");
      dots[i].classList.remove("active");
    });
    testiSlides[index].classList.add("active");
    dots[index].classList.add("active");
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      testiSlide = index;
      showTestimonial(index);
    });
  });

  setInterval(() => {
    testiSlide = (testiSlide + 1) % testiSlides.length;
    showTestimonial(testiSlide);
  }, 6000);

  // === Scroll Reveal ===
  if (window.ScrollReveal) {
    ScrollReveal().reveal('.product', { origin: 'bottom', distance: '40px', duration: 600, interval: 100 });
    ScrollReveal().reveal('.logo', { delay: 200, origin: 'top', distance: '20px' });
    ScrollReveal().reveal('.tagline', { delay: 400, origin: 'bottom', distance: '20px' });
    ScrollReveal().reveal('.search-bar', { delay: 600, origin: 'bottom', distance: '20px' });
    ScrollReveal().reveal('.testimoni h2', { origin: 'top', distance: '20px', duration: 500 });
    ScrollReveal().reveal('.testimonial', { origin: 'bottom', distance: '20px', duration: 500, interval: 200 });
  }

  // Init
  updateCartIcon();
  renderCartItems();
  displayProducts(products);
});