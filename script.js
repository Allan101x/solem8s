// ========== LOOKBOOK DATA ==========
const lookbookItems = [
    {
        id: 101,
        name: "Urban Street Vibe",
        category: "jordan",
        image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2015%2F05%2Fa-closer-look-at-the-carhartt-wip-x-vans-2015-spring-summer-hickory-stripe-collection-11.jpg?q=75&w=800&cbr=1&fit=max",
        productId: 1,
        description: "Classic Chicago colorway paired with cargo pants for that authentic streetwear feel."
    },
    {
        id: 102,
        name: "Athleisure Comfort",
        category: "running",
        image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/3ff1e3f5a9914f489a1ba8260b31b994_9366/HQ4199_HM51.jpg",
        productId: 7,
        description: "Performance meets style. Perfect for the gym-to-street transition."
    },
    {
        id: 103,
        name: "Street Style Master",
        category: "lifestyle",
        image: "https://media.hypedc.com/cdn-cgi/image/fit=scale-down,f=auto,w=3706/blogpost/bt1u0/nb%20550_s%203x4-9.jpg",
        productId: 4,
        description: "Clean and simple. The New Balance 550 completes any casual outfit."
    },
    {
        id: 104,
        name: "Retro Basketball",
        category: "jordan",
        image: "https://5.imimg.com/data5/SELLER/Default/2023/4/300067091/IV/CT/WJ/183498268/whatsapp-image-2023-04-11-at-5-34-29-pm-2-.jpeg",
        productId: 2,
        description: "White Cement 4s with distressed denim for that vintage hoops aesthetic."
    },
    {
        id: 105,
        name: "Monochrome Runner",
        category: "running",
        image: "https://cdn.clothbase.com/uploads/7d547461-84ee-4280-b55e-90a58f0a1ed9/image.jpg",
        productId: 6,
        description: "Sleek all-black look. Performance runners never looked this good."
    },
    {
        id: 106,
        name: "Casual Day Out",
        category: "lifestyle",
        image: "https://sneakernews.com/wp-content/uploads/2015/12/nike-air-max-90-ultra-infrared-coming-soon-04.jpg",
        productId: 3,
        description: "Air Max 90 Infrareds with relaxed fit. Everyday comfort with iconic style."
    },
    {
        id: 107,
        name: "High Top Culture",
        category: "jordan",
        image: "https://i.pinimg.com/474x/94/c2/3c/94c23cd8d0f161ecb6951bff351ba018.jpg",
        productId: 8,
        description: "Bred Toe lows with joggers. Clean, simple, iconic."
    },
    {
        id: 108,
        name: "Tech Wear",
        category: "running",
        image: "https://irace.vn/wp-content/uploads/2021/03/ultraboost21.jpg",
        productId: 7,
        description: "Future-forward style with technical fabrics. Ultraboost completes the look."
    },
    {
        id: 109,
        name: "Streetwear Essential",
        category: "lifestyle",
        image: "https://cdn.sweatthestyle.com/wp-content/uploads/2013/12/AdrianneHo_AirMax90_31.jpg",
        productId: 3,
        description: "Air Max 90s with oversized fit. A streetwear staple."
    }
];

let currentLookbookFilter = 'all';
let currentLookbookItem = null;
let selectedLookbookSize = null;

// ========== PRODUCT DATA ==========
const products = [
    {
        id: 1,
        name: "Air Jordan 1 Retro High OG 'Chicago'",
        price: 180,
        category: "jordan",
        image: "https://cdn.shopify.com/s/files/1/0852/0048/files/air-jordan-1-retro-high-og-varsity-red-chicago-bulls_1024x1024.jpg?8660115602724953530",
        rating: 5,
        reviews: 128
    },
    {
        id: 2,
        name: "Air Jordan 4 Retro 'White Cement'",
        price: 210,
        category: "jordan",
        image: "https://i.ebayimg.com/images/g/QMkAAeSw4YVoM1Ni/s-l1600.webp",
        rating: 5,
        reviews: 96
    },
    {
        id: 3,
        name: "Nike Air Max 90 'Infrared'",
        price: 120,
        category: "lifestyle",
        image: "https://sneakernews.com/wp-content/uploads/2021/01/Nike-Air-Max-90-Infrared-CU9978-103-4.jpg",
        rating: 4,
        reviews: 84
    },
    {
        id: 4,
        name: "New Balance 550 'Grey'",
        price: 110,
        category: "lifestyle",
        image: "https://justfreshkicks.com/wp-content/uploads/2024/04/New-Balance-550-Golf-White-Green-MG550WG.jpeg",
        rating: 4,
        reviews: 67
    },
    {
        id: 5,
        name: "Air Jordan 11 Retro 'Concord'",
        price: 225,
        category: "jordan",
        image: "https://es.kicksmaniac.com/zdjecia/2019/03/14/303/26/Q8644air_jordan_1039-mini.jpg",
        rating: 5,
        reviews: 156
    },
    {
        id: 6,
        name: "Nike Zoom Fly 5 'Ekiden'",
        price: 160,
        category: "running",
        image: "https://shopwithus.co.in/cdn/shop/files/DSC_3678.jpg?v=1704968335",
        rating: 4,
        reviews: 43
    },
    {
        id: 7,
        name: "Adidas Ultraboost Light",
        price: 190,
        category: "running",
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/c9045494c79b4daca8ad306c22565cdf_9366/Ultraboost_Light_23_Shoes_Black_HP6443.jpg",
        rating: 5,
        reviews: 112
    },
    {
        id: 8,
        name: "Air Jordan 1 Low 'Bred Toe'",
        price: 110,
        category: "jordan",
        image: "https://cdn.sanity.io/images/d6wcctii/production/228a2ace2cf77e3e74820bd49789686586feb45e-1070x760.png",
        rating: 4,
        reviews: 89
    }
];

// Cart State - Initialize from localStorage
let cart = [];

// ========== WISHLIST STATE ==========
let wishlist = [];
let wishlistSelectedSizes = {};

// Available Sizes
const availableSizes = [38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45];

// Selected Sizes State
let selectedSizes = {};
let selectedSizesHome = {};

// Current Filter
let currentFilter = 'all';

// ========== GOOGLE SHEETS CONFIGURATION ==========
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzInKx3lH6BoI2clueeGAxa7kMdZTVr6Rla2NibdYrWDLAAbdSMMRoZJ2XCt8aLKOgM/exec';

// ========== LOOKBOOK FUNCTIONS ==========

// Open lookbook
function openLookbook() {
    const modal = document.getElementById('lookbook-modal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    renderLookbook();
}

// Close lookbook
function closeLookbook() {
    const modal = document.getElementById('lookbook-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

// Render lookbook grid
function renderLookbook() {
    const grid = document.getElementById('lookbook-grid');
    if (!grid) return;

    const filtered = currentLookbookFilter === 'all'
        ? lookbookItems
        : lookbookItems.filter(item => item.category === currentLookbookFilter);

    grid.innerHTML = filtered.map(item => `
        <div class="lookbook-item relative group cursor-pointer rounded-2xl overflow-hidden" onclick="openLookbookDetail(${item.id})">
            <img src="${item.image}" alt="${item.name}" class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="lookbook-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                    <span class="text-orange-500 text-sm font-semibold uppercase tracking-wider">${item.category}</span>
                    <h3 class="text-white text-xl font-bold">${item.name}</h3>
                </div>
            </div>
            <div class="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                ${item.category}
            </div>
        </div>
    `).join('');

    lucide.createIcons();
}

// Filter lookbook
function filterLookbook(category) {
    currentLookbookFilter = category;

    // Update filter buttons
    document.querySelectorAll('.lookbook-filter').forEach(btn => {
        const filter = btn.dataset.filter;
        if (filter === category) {
            btn.classList.add('bg-orange-500', 'text-white');
            btn.classList.remove('bg-gray-800', 'text-gray-300');
        } else {
            btn.classList.remove('bg-orange-500', 'text-white');
            btn.classList.add('bg-gray-800', 'text-gray-300');
        }
    });

    renderLookbook();
}

// Open lookbook detail
function openLookbookDetail(itemId) {
    const item = lookbookItems.find(i => i.id === itemId);
    if (!item) return;

    currentLookbookItem = item;
    selectedLookbookSize = null;

    // Find the product to get price
    const product = products.find(p => p.id === item.productId);
    const price = product ? product.price : 0;

    // Set detail content
    document.getElementById('lookbook-detail-image').src = item.image;
    document.getElementById('lookbook-detail-image').alt = item.name;
    document.getElementById('lookbook-detail-name').textContent = item.name;
    document.getElementById('lookbook-detail-category').textContent = item.category.toUpperCase();
    document.getElementById('lookbook-detail-description').textContent = item.description;
    document.getElementById('lookbook-detail-price').textContent = `$${price}`;

    // Set style tip based on category
    const styleTips = {
        'jordan': 'Pair with distressed denim and a vintage tee for that retro hoops aesthetic.',
        'running': 'Perfect with techwear joggers and a performance hoodie.',
        'lifestyle': 'Style with relaxed fit jeans and an oversized sweater for casual comfort.'
    };
    document.getElementById('lookbook-style-tip').textContent = styleTips[item.category] || 'Pair with cargo pants or joggers for the perfect streetwear look.';

    // Render size selector
    renderLookbookSizeSelector();

    // Hide error message
    document.getElementById('lookbook-size-error').classList.add('hidden');

    // Show modal
    const modal = document.getElementById('lookbook-detail-modal');
    const content = document.getElementById('lookbook-detail-content');
    modal.classList.remove('hidden');

    setTimeout(() => {
        content.classList.remove('scale-95', 'opacity-0');
        content.classList.add('scale-100', 'opacity-100');
    }, 10);

    document.body.style.overflow = 'hidden';
}

// Render size selector for lookbook
function renderLookbookSizeSelector() {
    const container = document.getElementById('lookbook-size-selector');
    if (!container) return;

    container.innerHTML = availableSizes.map(size => `
        <button onclick="selectLookbookSize(${size})" 
            class="lookbook-size-btn w-full py-3 rounded-lg border border-gray-600 text-sm font-medium text-gray-300 hover:border-orange-500 hover:bg-gray-700 transition-all"
            data-size="${size}">
            ${size}
        </button>
    `).join('');

    lucide.createIcons();
}

// Select lookbook size
function selectLookbookSize(size) {
    selectedLookbookSize = size;

    // Update UI
    document.querySelectorAll('.lookbook-size-btn').forEach(btn => {
        const btnSize = parseFloat(btn.dataset.size);
        if (btnSize === size) {
            btn.classList.add('bg-orange-500', 'border-orange-500', 'text-white');
            btn.classList.remove('hover:border-orange-500', 'hover:bg-gray-700');
        } else {
            btn.classList.remove('bg-orange-500', 'border-orange-500', 'text-white');
            btn.classList.add('hover:border-orange-500', 'hover:bg-gray-700');
        }
    });

    // Hide error message if visible
    document.getElementById('lookbook-size-error').classList.add('hidden');
}

// Add lookbook item to cart
function addLookbookItemToCart() {
    if (!currentLookbookItem) return;

    // Check if size is selected
    if (!selectedLookbookSize) {
        document.getElementById('lookbook-size-error').classList.remove('hidden');
        showToast('Please select a size first!');
        return;
    }

    // Find the product
    const product = products.find(p => p.id === currentLookbookItem.productId);
    if (!product) return;

    // Add to cart
    const existingItem = cart.find(item =>
        item.id === product.id && item.size === selectedLookbookSize
    );

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            size: selectedLookbookSize,
            quantity: 1
        });
    }

    saveCartToStorage();
    updateCartUI();

    // Visual feedback
    const btn = document.getElementById('lookbook-add-to-cart-btn');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<i data-lucide="check" class="w-5 h-5"></i> Added!';
    btn.classList.add('bg-green-600');

    setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.classList.remove('bg-green-600');
        lucide.createIcons();
    }, 1500);

    showToast('Added to cart!', 'success');

    // Optionally show cart
    setTimeout(() => {
        if (window.innerWidth > 768) {
            toggleCart();
        }
    }, 500);

    // Close detail modal
    setTimeout(() => {
        closeLookbookDetail();
    }, 800);
}

// Close lookbook detail
function closeLookbookDetail() {
    const modal = document.getElementById('lookbook-detail-modal');
    const content = document.getElementById('lookbook-detail-content');

    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');

    setTimeout(() => {
        modal.classList.add('hidden');
        // Reset state
        currentLookbookItem = null;
        selectedLookbookSize = null;
    }, 300);

    document.body.style.overflow = '';
}

// ========== LOCALSTORAGE FUNCTIONS ==========

// Load cart from localStorage when page loads
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('solemates_cart');
    if (savedCart) {
        try {
            const parsed = JSON.parse(savedCart);
            if (Array.isArray(parsed) && parsed.every(item =>
                item.id && item.name && item.price && item.size !== undefined
            )) {
                cart = parsed;
            } else {
                localStorage.removeItem('solemates_cart');
                cart = [];
            }
        } catch (e) {
            console.error('Failed to load cart:', e);
            cart = [];
        }
    }
    updateCartUI();
}

// Save cart to localStorage
function saveCartToStorage() {
    try {
        const cartString = JSON.stringify(cart);
        if (cartString.length > 4.5 * 1024 * 1024) {
            showToast('Cart is too large. Please checkout or remove some items.');
            return;
        }
        localStorage.setItem('solemates_cart', cartString);
    } catch (e) {
        if (e.name === 'QuotaExceededError') {
            showToast('Cart storage full. Please checkout or clear your cart.');
        } else {
            console.error('Failed to save cart:', e);
        }
    }
}

// ========== CUSTOM CLEAR CART MODAL ==========

function openClearCartModal() {
    const modal = document.getElementById('clear-cart-modal');
    const modalContent = document.getElementById('clear-cart-modal-content');

    updateClearCartSummary();
    modal.classList.remove('hidden');

    setTimeout(() => {
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
    }, 10);

    document.body.style.overflow = 'hidden';
}

function closeClearCartModal() {
    const modal = document.getElementById('clear-cart-modal');
    const modalContent = document.getElementById('clear-cart-modal-content');

    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');

    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);

    document.body.style.overflow = '';
}

function updateClearCartSummary() {
    const summary = document.getElementById('clear-cart-summary');

    if (cart.length === 0) {
        summary.innerHTML = '<p class="text-gray-400 text-center py-2">Your cart is already empty</p>';
        return;
    }

    let totalItems = 0;
    let totalPrice = 0;

    const itemsHTML = cart.map((item, index) => {
        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;

        return `
            <div class="clear-cart-item flex items-center gap-3 py-2 ${index < cart.length - 1 ? 'border-b border-gray-700' : ''}" style="animation-delay: ${index * 0.05}s">
                <img src="${item.image}" alt="${item.name}" class="w-10 h-10 object-cover rounded-lg">
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-white truncate">${item.name}</p>
                    <p class="text-xs text-gray-400">Size: EU ${item.size} × ${item.quantity}</p>
                </div>
                <p class="text-sm font-bold text-white">$${item.price * item.quantity}</p>
            </div>
        `;
    }).join('');

    summary.innerHTML = `
        ${itemsHTML}
        <div class="flex justify-between items-center pt-3 mt-2 border-t border-gray-700 font-bold">
            <span class="text-white">Total (${totalItems} items)</span>
            <span class="text-red-500">$${totalPrice.toFixed(2)}</span>
        </div>
    `;

    lucide.createIcons();
}

// ========== RETURNS MODAL FUNCTIONS ==========

function openReturnsModal() {
    const modal = document.getElementById('returns-modal');
    const modalContent = document.getElementById('returns-modal-content');

    modal.classList.remove('hidden');

    setTimeout(() => {
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
    }, 10);

    document.body.style.overflow = 'hidden';
}

function closeReturnsModal() {
    const modal = document.getElementById('returns-modal');
    const modalContent = document.getElementById('returns-modal-content');

    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');

    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);

    document.body.style.overflow = '';
}

function showReturnsFAQ() {
    closeReturnsModal();
    setTimeout(() => {
        showToast('Full FAQ available at help.solemates.com/returns', 'success');
    }, 300);
}

function confirmClearCart() {
    if (cart.length === 0) {
        closeClearCartModal();
        showToast('Cart is already empty');
        return;
    }

    cart = [];
    saveCartToStorage();
    updateCartUI();
    closeClearCartModal();
    showToast('Cart cleared successfully', 'success');

    if (window.innerWidth <= 768) {
        toggleCart();
    }
}

function clearCart() {
    if (cart.length === 0) {
        showToast('Cart is already empty');
        return;
    }
    openClearCartModal();
}

// ========== COLLECTION MODAL FUNCTIONS ==========

function openCollectionModal() {
    const modal = document.getElementById('collection-modal');
    const overlay = document.getElementById('collection-overlay');

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    setTimeout(() => {
        modal.classList.add('open');
        overlay.classList.remove('opacity-0');
    }, 10);

    renderCollection();
    document.body.style.overflow = 'hidden';
}

function closeCollectionModal() {
    const modal = document.getElementById('collection-modal');
    const overlay = document.getElementById('collection-overlay');

    modal.classList.remove('open');
    overlay.classList.add('opacity-0');

    setTimeout(() => {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }, 300);

    document.body.style.overflow = '';
}

function renderCollection() {
    const grid = document.getElementById('collection-grid');
    grid.innerHTML = '';

    products.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'shoe-card bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-700 flex flex-col';
        card.style.animation = `fadeIn 0.5s ease-in ${index * 0.05}s both`;

        card.innerHTML = `
            <div class="relative overflow-hidden group">
                <img src="${product.image}" alt="${product.name}" class="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110">
                ${product.price > 400 ? '<span class="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">HYPE</span>' : ''}
                <button onclick="toggleWishlist(event,${product.id})" data-wishlist-id="${product.id}"
                    class="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-all z-10">
                    <svg class="w-5 h-5" viewBox="0 0 24 24"
                        fill="${wishlist.some(w => w.id === product.id) ? '#ef4444' : 'none'}"
                        stroke="${wishlist.some(w => w.id === product.id) ? '#ef4444' : 'white'}"
                        stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                </button>
                <div class="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                    ${product.category}
                </div>
            </div>
            
            <div class="p-4 flex flex-col flex-1">
                <div class="flex items-center gap-1 mb-1">
                    ${renderStars(product.rating)}
                    <span class="text-xs text-gray-400 ml-1">(${product.reviews})</span>
                </div>
                
                <h3 class="font-bold text-sm mb-1 line-clamp-2 text-white leading-tight">${product.name}</h3>
                <p class="text-gray-400 text-xs mb-3 capitalize">${product.category}</p>
                
                <div class="mb-3">
                    <p class="text-xs text-gray-400 mb-2">Select Size (EU)</p>
                    <div class="flex gap-1 overflow-x-auto size-selector pb-1" id="size-selector-${product.id}">
                        ${availableSizes.map(size => `
                            <button onclick="selectSize(${product.id}, ${size})" 
                                class="size-btn flex-shrink-0 w-9 h-9 rounded-lg border border-gray-600 text-xs font-medium text-gray-300 hover:border-orange-500 ${selectedSizes[product.id] === size ? 'bg-orange-500 border-orange-500 text-white' : 'bg-gray-700'}"
                                data-size="${size}">
                                ${size}
                            </button>
                        `).join('')}
                    </div>
                </div>
                
                <div class="flex justify-between items-center mt-auto pt-2 border-t border-gray-700">
                    <span class="text-xl font-bold text-white">$${product.price}</span>
                    <button onclick="addToCartFromCollection(event, ${product.id})" class="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors flex items-center gap-1 text-sm font-medium">
                        <i data-lucide="shopping-bag" class="w-4 h-4"></i>
                        Add
                    </button>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });

    lucide.createIcons();
}

function selectSize(productId, size) {
    selectedSizes[productId] = size;

    const container = document.getElementById(`size-selector-${productId}`);
    if (container) {
        const buttons = container.querySelectorAll('.size-btn');
        buttons.forEach(btn => {
            const btnSize = parseFloat(btn.dataset.size);
            if (btnSize === size) {
                btn.classList.add('bg-orange-500', 'border-orange-500', 'text-white');
                btn.classList.remove('bg-gray-700', 'border-gray-600', 'text-gray-300');
            } else {
                btn.classList.remove('bg-orange-500', 'border-orange-500', 'text-white');
                btn.classList.add('bg-gray-700', 'border-gray-600', 'text-gray-300');
            }
        });
    }
}

// ========== ABOUT MODAL FUNCTIONS ==========

function openAboutModal() {
    const modal = document.getElementById('about-modal');
    const overlay = document.getElementById('about-overlay');

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    setTimeout(() => {
        modal.classList.add('open');
        overlay.classList.remove('opacity-0');
    }, 10);

    document.body.style.overflow = 'hidden';
}

function closeAboutModal() {
    const modal = document.getElementById('about-modal');
    const overlay = document.getElementById('about-overlay');

    modal.classList.remove('open');
    overlay.classList.add('opacity-0');

    setTimeout(() => {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }, 300);

    document.body.style.overflow = '';
}

// ========== SIZE GUIDE FUNCTIONS ==========

function openSizeGuide() {
    const modal = document.getElementById('size-guide-modal');
    const content = document.getElementById('size-guide-content');

    modal.classList.remove('hidden');

    setTimeout(() => {
        content.classList.remove('scale-95', 'opacity-0');
        content.classList.add('scale-100', 'opacity-100');
    }, 10);

    document.body.style.overflow = 'hidden';
}

function closeSizeGuide() {
    const modal = document.getElementById('size-guide-modal');
    const content = document.getElementById('size-guide-content');

    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');

    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);

    document.body.style.overflow = '';
}

// ========== PRIVACY POLICY FUNCTIONS ==========

function openPrivacy() {
    const modal = document.getElementById('privacy-modal');
    const content = document.getElementById('privacy-content');

    modal.classList.remove('hidden');

    setTimeout(() => {
        content.classList.remove('scale-95', 'opacity-0');
        content.classList.add('scale-100', 'opacity-100');
    }, 10);

    document.body.style.overflow = 'hidden';
}

function closePrivacy() {
    const modal = document.getElementById('privacy-modal');
    const content = document.getElementById('privacy-content');

    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');

    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);

    document.body.style.overflow = '';
}

// ========== TERMS & CONDITIONS FUNCTIONS ==========

function openTerms() {
    const modal = document.getElementById('terms-modal');
    const content = document.getElementById('terms-content');

    modal.classList.remove('hidden');

    setTimeout(() => {
        content.classList.remove('scale-95', 'opacity-0');
        content.classList.add('scale-100', 'opacity-100');
    }, 10);

    document.body.style.overflow = 'hidden';
}

function closeTerms() {
    const modal = document.getElementById('terms-modal');
    const content = document.getElementById('terms-content');

    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');

    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);

    document.body.style.overflow = '';
}

// ========== SUBSCRIBE PAGE FUNCTIONS ==========

function openSubscribePage() {
    const page = document.getElementById('subscribe-page');
    page.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    generateDiscountCode();
    resetSubscribeForm();
}

function closeSubscribePage() {
    const page = document.getElementById('subscribe-page');
    page.classList.add('hidden');
    document.body.style.overflow = '';
}

// ========== SUBSCRIBE PAGE FUNCTIONS ==========

function openSubscribePage() {
    const page = document.getElementById('subscribe-page');
    page.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    generateDiscountCode();
    resetSubscribeForm();
}

function closeSubscribePage() {
    const page = document.getElementById('subscribe-page');
    page.classList.add('hidden');
    document.body.style.overflow = '';
}

function generateDiscountCode() {
    const codes = ['WELCOME10', 'SOLE10', 'FRESH10', 'SNEAK10', 'DROP10', 'KICK10'];
    const randomCode = codes[Math.floor(Math.random() * codes.length)];
    const randomNum = Math.floor(Math.random() * 100);
    // Make it shorter by removing SOLE prefix and keeping code under 10 chars
    return `${randomCode}${randomNum}`.substring(0, 8);
}

function resetSubscribeForm() {
    const form = document.getElementById('subscribe-page-form');
    const success = document.getElementById('subscribe-page-success');
    const submitBtn = document.getElementById('subscribe-submit-btn');

    form.reset();
    success.classList.add('hidden');
    form.classList.remove('hidden');
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Join SoleMates Family <i data-lucide="arrow-right" class="w-5 h-5"></i>';
}

// ========== CART FUNCTIONS ==========

function addToCartFromCollection(e, productId) {
    const selectedSize = selectedSizes[productId];

    if (!selectedSize) {
        showToast('Please select a size first!');
        return;
    }

    const product = products.find(p => p.id === productId);

    if (product) {
        const existingItem = cart.find(item =>
            item.id === productId && item.size === selectedSize
        );

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                size: selectedSize,
                quantity: 1
            });
        }

        saveCartToStorage();
        updateCartUI();

        const btn = e?.currentTarget;
        if (btn) {
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i> Added';
            btn.classList.add('bg-green-600');
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.classList.remove('bg-green-600');
                lucide.createIcons();
            }, 1000);
        }

        if (window.innerWidth > 768) {
            setTimeout(() => toggleCart(), 500);
        }
    }
}

function selectSizeHome(productId, size) {
    selectedSizesHome[productId] = size;

    const container = document.getElementById(`size-selector-home-${productId}`);
    if (container) {
        const buttons = container.querySelectorAll('.size-btn-home');
        buttons.forEach(btn => {
            const btnSize = parseFloat(btn.dataset.size);
            if (btnSize === size) {
                btn.classList.add('bg-orange-500', 'border-orange-500', 'text-white');
                btn.classList.remove('bg-gray-700', 'border-gray-600', 'text-gray-300');
            } else {
                btn.classList.remove('bg-orange-500', 'border-orange-500', 'text-white');
                btn.classList.add('bg-gray-700', 'border-gray-600', 'text-gray-300');
            }
        });
    }
}

function addToCartHome(productId) {
    const selectedSize = selectedSizesHome[productId];

    if (!selectedSize) {
        showToast('Please select a size first!');
        return;
    }

    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item =>
            item.id === productId && item.size === selectedSize
        );

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                size: selectedSize,
                quantity: 1
            });
        }

        saveCartToStorage();
        updateCartUI();

        const btn = event?.target?.closest('button');
        if (btn) {
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i> Added';
            btn.classList.add('bg-green-600');
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.classList.remove('bg-green-600');
                lucide.createIcons();
            }, 1000);
        }
    }
}

function removeFromCart(productId, size) {
    const productName = cart.find(item => item.id === productId && item.size === size)?.name;
    cart = cart.filter(item => !(item.id === productId && item.size === size));

    saveCartToStorage();
    updateCartUI();

    if (productName) {
        showToast(`${productName} removed from cart`);
    }
}

function updateQuantity(productId, change, size) {
    const item = cart.find(item => item.id === productId && item.size === size);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId, size);
        } else {
            saveCartToStorage();
            updateCartUI();
        }
    }
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartBadge = document.getElementById('cart-badge');
    const mobileCartCount = document.getElementById('mobile-cart-count');
    const cartTotal = document.getElementById('cart-total');
    const floatingCartCount = document.getElementById('floating-cart-count');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (totalItems > 0) {
        cartBadge.classList.remove('hidden');
        cartBadge.textContent = totalItems;
        mobileCartCount.textContent = totalItems;
        cartTotal.textContent = `$${totalPrice.toFixed(2)}`;

        if (floatingCartCount) {
            floatingCartCount.textContent = totalItems;
            floatingCartCount.classList.remove('hidden');
        }

    } else {
        cartBadge.classList.add('hidden');
        mobileCartCount.textContent = '0';
        cartTotal.textContent = '$0.00';

        if (floatingCartCount) {
            floatingCartCount.textContent = '0';
        }
    }

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="text-center text-gray-400 mt-10">
                <i data-lucide="shopping-bag" class="w-16 h-16 mx-auto mb-4 opacity-30"></i>
                <p>Your cart is empty</p>
                <button onclick="toggleCart(); document.getElementById('collection').scrollIntoView({behavior: 'smooth'})" class="mt-4 text-orange-500 font-medium hover:underline">
                    Start Shopping
                </button>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="flex gap-4 bg-gray-800 p-4 rounded-xl border border-gray-700">
                <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-lg">
                <div class="flex-1">
                    <h4 class="font-semibold text-sm line-clamp-2 mb-1 text-white">${item.name}</h4>
                    <p class="text-xs text-gray-400">Size: EU ${item.size}</p>
                    <p class="text-orange-500 font-bold">$${item.price}</p>
                    <div class="flex items-center gap-3 mt-2">
                        <button onclick="updateQuantity(${item.id}, -1, ${item.size})" class="w-6 h-6 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center text-xs hover:bg-gray-600 text-white">-</button>
                        <span class="text-sm font-medium text-white">${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1, ${item.size})" class="w-6 h-6 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center text-xs hover:bg-gray-600 text-white">+</button>
                    </div>
                    
                </div>
                <button onclick="removeFromCart(${item.id}, ${item.size})" class="text-gray-400 hover:text-red-500">
                    <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
            </div>
        `).join('');
    }

    lucide.createIcons();
}

// ========== ORDER STATUS MESSAGE ==========

function openOrderStatus() {
    // Create modal container
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4';
    modal.id = 'temp-order-modal';

    // Add backdrop
    const backdrop = document.createElement('div');
    backdrop.className = 'absolute inset-0 bg-black/80 backdrop-blur-sm';
    backdrop.onclick = () => modal.remove();

    // Add content
    const content = document.createElement('div');
    content.className = 'relative bg-gray-900 rounded-3xl max-w-md w-full border border-gray-800 shadow-2xl p-8 transform transition-all duration-300 scale-95 opacity-0';
    content.id = 'temp-order-content';

    content.innerHTML = `
        <div class="text-center">
            <!-- Icon -->
            <div class="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i data-lucide="message-circle" class="w-10 h-10 text-orange-500"></i>
            </div>
            
            <!-- Title -->
            <h3 class="text-2xl font-bold text-white mb-3">Order Status</h3>
            
            <!-- Message -->
            <p class="text-gray-400 mb-6">
                For the fastest and most accurate order updates, please check your WhatsApp messages or contact us directly!
            </p>
            
            <!-- Contact Info -->
            <div class="bg-gray-800/50 rounded-xl p-4 mb-4">
                <div class="flex items-center justify-center gap-3 text-gray-300 mb-2">
                    <i data-lucide="phone" class="w-4 h-4 text-orange-500"></i>
                    <span class="font-medium">+263 773 184 147</span>
                </div>
                <div class="flex items-center justify-center gap-3 text-gray-300">
                    <i data-lucide="mail" class="w-4 h-4 text-orange-500"></i>
                    <span class="font-medium">allantmush@gmail.com</span>
                </div>
            </div>
            
            <!-- WhatsApp Button -->
            <a href="https://wa.me/263773184147" 
               target="_blank"
               class="block w-full bg-green-500 text-white py-4 rounded-full font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2 mb-3">
                <i data-lucide="message-circle" class="w-5 h-5"></i>
                Message on WhatsApp
            </a>
            
            <!-- Close Button -->
            <button onclick="document.getElementById('temp-order-modal').remove()" 
                    class="w-full bg-gray-800 text-white py-3 rounded-full hover:bg-gray-700 transition-colors">
                Close
            </button>
            
            <!-- Note -->
            <p class="text-xs text-gray-600 mt-4">
                We'll respond within 24 hours
            </p>
        </div>
    `;

    modal.appendChild(backdrop);
    modal.appendChild(content);
    document.body.appendChild(modal);

    // Trigger animation
    setTimeout(() => {
        document.getElementById('temp-order-content').classList.remove('scale-95', 'opacity-0');
        document.getElementById('temp-order-content').classList.add('scale-100', 'opacity-100');
    }, 10);

    // Initialize icons
    lucide.createIcons();
}

// ========== SHIPPING INFO MODAL ==========

function openShippingInfo() {
    // Create modal container
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-[100] flex items-center justify-center p-4';
    modal.id = 'temp-shipping-modal';

    // Add backdrop
    const backdrop = document.createElement('div');
    backdrop.className = 'absolute inset-0 bg-black/80 backdrop-blur-sm';
    backdrop.onclick = () => modal.remove();

    // Add content - with max height and scrolling
    const content = document.createElement('div');
    content.className = 'relative bg-gray-900 rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-gray-800 shadow-2xl p-8 transform transition-all duration-300 scale-95 opacity-0';
    content.id = 'temp-shipping-content';

    content.innerHTML = `
        <div class="text-center">
            <!-- Close Button at Top (visible) -->
            <div class="flex justify-end mb-2 sticky top-0 bg-gray-900 z-10">
                <button onclick="document.getElementById('temp-shipping-modal').remove()" 
                        class="w-10 h-10 bg-gray-800 hover:bg-red-500 rounded-full flex items-center justify-center transition-colors">
                    <i data-lucide="x" class="w-5 h-5 text-white"></i>
                </button>
            </div>
            
            <!-- Icon -->
            <div class="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i data-lucide="truck" class="w-10 h-10 text-orange-500"></i>
            </div>
            
            <!-- Title -->
            <h3 class="text-2xl font-bold text-white mb-3">Shipping Information</h3>
            
            <!-- Message -->
            <p class="text-gray-400 mb-6">
                Fast and reliable shipping to get your sneakers to your doorstep!
            </p>
            
            <!-- Shipping Options -->
            <div class="space-y-4 mb-6 text-left">
                <!-- Standard Shipping -->
                <div class="bg-gray-800/30 rounded-xl p-4 border border-gray-700">
                    <div class="flex justify-between items-center mb-2">
                        <div class="flex items-center gap-2">
                            <i data-lucide="package" class="w-5 h-5 text-orange-500"></i>
                            <h4 class="text-white font-semibold">Standard Shipping</h4>
                        </div>
                        <span class="text-green-500 font-bold">FREE</span>
                    </div>
                    <p class="text-sm text-gray-400">Delivery in 5-7 business days</p>
                    <p class="text-xs text-gray-500 mt-1">On orders over $150</p>
                </div>
                
                <!-- Express Shipping -->
                <div class="bg-gray-800/30 rounded-xl p-4 border border-gray-700">
                    <div class="flex justify-between items-center mb-2">
                        <div class="flex items-center gap-2">
                            <i data-lucide="zap" class="w-5 h-5 text-orange-500"></i>
                            <h4 class="text-white font-semibold">Express Shipping</h4>
                        </div>
                        <span class="text-white font-bold">$15</span>
                    </div>
                    <p class="text-sm text-gray-400">Delivery in 2-3 business days</p>
                </div>
                
                <!-- Next Day Delivery -->
                <div class="bg-gray-800/30 rounded-xl p-4 border border-gray-700">
                    <div class="flex justify-between items-center mb-2">
                        <div class="flex items-center gap-2">
                            <i data-lucide="rocket" class="w-5 h-5 text-orange-500"></i>
                            <h4 class="text-white font-semibold">Next Day Delivery</h4>
                        </div>
                        <span class="text-white font-bold">$25</span>
                    </div>
                    <p class="text-sm text-gray-400">Order before 2PM for next day delivery</p>
                </div>
            </div>
            
            <!-- Shipping Locations -->
            <div class="bg-gray-800/50 rounded-xl p-4 mb-4">
                <h4 class="text-white font-semibold mb-3 flex items-center gap-2">
                    <i data-lucide="globe" class="w-4 h-4 text-orange-500"></i>
                    We Ship To:
                </h4>
                <div class="grid grid-cols-2 gap-2 text-sm">
                    <div class="flex items-center gap-2 text-gray-400">
                        <i data-lucide="check" class="w-4 h-4 text-green-500"></i>
                        Zimbabwe
                    </div>
                    <div class="flex items-center gap-2 text-gray-400">
                        <i data-lucide="check" class="w-4 h-4 text-green-500"></i>
                        South Africa
                    </div>
                    <div class="flex items-center gap-2 text-gray-400">
                        <i data-lucide="check" class="w-4 h-4 text-green-500"></i>
                        Botswana
                    </div>
                    <div class="flex items-center gap-2 text-gray-400">
                        <i data-lucide="check" class="w-4 h-4 text-green-500"></i>
                        Zambia
                    </div>
                    <div class="flex items-center gap-2 text-gray-400">
                        <i data-lucide="check" class="w-4 h-4 text-green-500"></i>
                        Mozambique
                    </div>
                    <div class="flex items-center gap-2 text-gray-400">
                        <i data-lucide="check" class="w-4 h-4 text-green-500"></i>
                        Namibia
                    </div>
                </div>
            </div>
            
            <!-- Important Notes -->
            <div class="bg-orange-500/10 rounded-xl p-4 mb-4 border border-orange-500/20">
                <h4 class="text-orange-500 font-semibold mb-2 flex items-center gap-2">
                    <i data-lucide="info" class="w-4 h-4"></i>
                    Important Notes:
                </h4>
                <ul class="text-xs text-gray-400 space-y-1 text-left">
                    <li class="flex items-start gap-2">
                        <span class="text-orange-500">•</span>
                        Free shipping applies to orders over $150
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="text-orange-500">•</span>
                        Tracking number provided via WhatsApp/email
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="text-orange-500">•</span>
                        Signature may be required for delivery
                    </li>
                </ul>
            </div>
            
            <!-- Contact for International -->
            <div class="text-center mb-6">
                <p class="text-sm text-gray-400">
                    For international shipping outside Africa,
                    <button onclick="openContactUs(); modal.remove();" class="text-orange-500 hover:underline">contact us</button>
                </p>
            </div>
            
            <!-- Close Button at Bottom (extra) -->
            <button onclick="document.getElementById('temp-shipping-modal').remove()" 
                    class="w-full bg-orange-500 text-white py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors mb-2">
                Close
            </button>
            
            <!-- Hint -->
            <p class="text-xs text-gray-600">
                Click outside or press ESC to close
            </p>
        </div>
    `;

    modal.appendChild(backdrop);
    modal.appendChild(content);
    document.body.appendChild(modal);

    // Trigger animation
    setTimeout(() => {
        document.getElementById('temp-shipping-content').classList.remove('scale-95', 'opacity-0');
        document.getElementById('temp-shipping-content').classList.add('scale-100', 'opacity-100');
    }, 10);

    // Initialize icons
    lucide.createIcons();
}

// ========== CONTACT US MODAL ==========

function openContactUs() {
    // Create modal container
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4';
    modal.id = 'temp-contact-modal';

    // Add backdrop
    const backdrop = document.createElement('div');
    backdrop.className = 'absolute inset-0 bg-black/80 backdrop-blur-sm';
    backdrop.onclick = () => modal.remove();

    // Add content
    const content = document.createElement('div');
    content.className = 'relative bg-gray-900 rounded-3xl max-w-md w-full border border-gray-800 shadow-2xl p-8 transform transition-all duration-300 scale-95 opacity-0';
    content.id = 'temp-contact-content';

    content.innerHTML = `
        <div class="text-center">
            <!-- Icon -->
            <div class="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i data-lucide="headphones" class="w-10 h-10 text-orange-500"></i>
            </div>
            
            <!-- Title -->
            <h3 class="text-2xl font-bold text-white mb-3">Contact Us</h3>
            
            <!-- Message -->
            <p class="text-gray-400 mb-6">
                We're here to help! Reach out to us anytime via WhatsApp, email, or phone.
            </p>
            
            <!-- Contact Options -->
            <div class="space-y-3 mb-6">
                <!-- WhatsApp -->
                <a href="https://wa.me/263773184147" 
                   target="_blank"
                   class="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors group">
                    <div class="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <i data-lucide="message-circle" class="w-6 h-6 text-green-500"></i>
                    </div>
                    <div class="flex-1 text-left">
                        <p class="text-white font-semibold">WhatsApp</p>
                        <p class="text-sm text-gray-400">+263 773 184 147</p>
                    </div>
                    <i data-lucide="arrow-right" class="w-5 h-5 text-gray-500 group-hover:text-orange-500 transition-colors"></i>
                </a>
                
                <!-- Email -->
                <a href="mailto:allantmush@gmail.com" 
                   class="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors group">
                    <div class="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <i data-lucide="mail" class="w-6 h-6 text-orange-500"></i>
                    </div>
                    <div class="flex-1 text-left">
                        <p class="text-white font-semibold">Email</p>
                        <p class="text-sm text-gray-400">allantmush@gmail.com</p>
                    </div>
                    <i data-lucide="arrow-right" class="w-5 h-5 text-gray-500 group-hover:text-orange-500 transition-colors"></i>
                </a>
                
                <!-- Phone -->
                <a href="tel:+263773184147" 
                   class="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors group">
                    <div class="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <i data-lucide="phone" class="w-6 h-6 text-blue-500"></i>
                    </div>
                    <div class="flex-1 text-left">
                        <p class="text-white font-semibold">Phone</p>
                        <p class="text-sm text-gray-400">+263 773 184 147</p>
                    </div>
                    <i data-lucide="arrow-right" class="w-5 h-5 text-gray-500 group-hover:text-orange-500 transition-colors"></i>
                </a>
            </div>
            
            <!-- Business Hours -->
            <div class="bg-gray-800/30 rounded-xl p-4 mb-4">
                <h4 class="text-white font-semibold mb-2 flex items-center gap-2">
                    <i data-lucide="clock" class="w-4 h-4 text-orange-500"></i>
                    Business Hours
                </h4>
                <div class="text-sm text-gray-400 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                </div>
            </div>
            
            <!-- Close Button -->
            <button onclick="document.getElementById('temp-contact-modal').remove()" 
                    class="w-full bg-gray-800 text-white py-3 rounded-full hover:bg-gray-700 transition-colors">
                Close
            </button>
            
            <!-- Note -->
            <p class="text-xs text-gray-600 mt-4">
                We typically respond within 1-2 hours during business hours
            </p>
        </div>
    `;

    modal.appendChild(backdrop);
    modal.appendChild(content);
    document.body.appendChild(modal);

    // Trigger animation
    setTimeout(() => {
        document.getElementById('temp-contact-content').classList.remove('scale-95', 'opacity-0');
        document.getElementById('temp-contact-content').classList.add('scale-100', 'opacity-100');
    }, 10);

    // Initialize icons
    lucide.createIcons();
}

// ========== MOBILE MENU FUNCTIONS ==========

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('slide-in-left');
}

// ========== CART TOGGLE ==========

function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');

    sidebar.classList.toggle('open');

    if (sidebar.classList.contains('open')) {
        overlay.classList.remove('hidden');
        setTimeout(() => overlay.classList.remove('opacity-0'), 10);
        document.body.style.overflow = 'hidden';
    } else {
        overlay.classList.add('opacity-0');
        setTimeout(() => overlay.classList.add('hidden'), 300);
        document.body.style.overflow = '';
    }
}

// ========== PRODUCT FILTERING ==========

function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    const filteredProducts = currentFilter === 'all'
        ? products
        : products.filter(p => p.category === currentFilter);

    filteredProducts.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'shoe-card bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-700';
        card.style.animation = `fadeIn 0.5s ease-in ${index * 0.1}s both`;

        card.innerHTML = `
            <div class="relative overflow-hidden group">
                <div onclick="openProductGallery(${product.id})" class="cursor-pointer">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110">
                </div>
                ${product.category === 'jordan' ? '<span class="absolute top-4 left-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">HOT</span>' : ''}
                <button onclick="toggleWishlist(event,${product.id})" data-wishlist-id="${product.id}"
                    class="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-all z-10">
                    <svg class="w-5 h-5" viewBox="0 0 24 24"
                        fill="${wishlist.some(w => w.id === product.id) ? '#ef4444' : 'none'}"
                        stroke="${wishlist.some(w => w.id === product.id) ? '#ef4444' : 'white'}"
                        stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                </button>
                <div class="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                    ${product.category}
                </div>
            </div>
            
            <div class="p-5">
                <div class="flex items-center gap-1 mb-2">
                    ${renderStars(product.rating)}
                    <span class="text-xs text-gray-400 ml-1">(${product.reviews})</span>
                </div>
                
                <h3 class="font-bold text-base mb-1 line-clamp-1 text-white">${product.name}</h3>
                <p class="text-gray-400 text-xs mb-3 capitalize">${product.category} Collection</p>
                
                <div class="mb-3">
                    <div class="flex justify-between items-center mb-1">
                        <p class="text-xs text-gray-500">Select Size (EU)</p>
                        <button onclick="openSizeGuide()" class="text-xs text-orange-500 hover:text-orange-400 flex items-center gap-1">
                            <i data-lucide="ruler" class="w-3 h-3"></i>
                            Size Guide?
                        </button>
                    </div>
                    <div class="flex gap-1 overflow-x-auto size-selector pb-1" id="size-selector-home-${product.id}">
                        ${[38, 39, 40, 41, 42, 43, 44, 45].map(size => `
                            <button onclick="selectSizeHome(${product.id}, ${size})" 
                                class="size-btn-home flex-shrink-0 w-8 h-8 rounded border border-gray-600 text-xs font-medium text-gray-300 hover:border-orange-500 bg-gray-700"
                                data-size="${size}">
                                ${size}
                            </button>
                        `).join('')}
                    </div>
                </div>
                
                <div class="flex justify-between items-center pt-2 border-t border-gray-700">
                    <span class="text-xl font-bold text-white">$${product.price}</span>
                    <button onclick="addToCartHome(${product.id})" class="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors flex items-center gap-1 text-sm font-medium">
                        <i data-lucide="shopping-bag" class="w-4 h-4"></i>
                        Add
                    </button>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });

    lucide.createIcons();
}

function filterProducts(category) {
    currentFilter = category;

    document.querySelectorAll('.filter-btn').forEach(btn => {
        const btnCategory = btn.getAttribute('data-category');
        if (btnCategory === category) {
            btn.classList.add('bg-orange-500', 'text-white', 'border-orange-500');
            btn.classList.remove('text-gray-300', 'border-gray-600');
        } else {
            btn.classList.remove('bg-orange-500', 'text-white', 'border-orange-500');
            btn.classList.add('text-gray-300', 'border-gray-600');
        }
    });

    renderProducts();
}

function filterAndScroll(category) {
    currentFilter = category;

    document.querySelectorAll('.filter-btn').forEach(btn => {
        const btnCategory = btn.getAttribute('data-category');
        if (btnCategory === category) {
            btn.classList.add('bg-orange-500', 'text-white', 'border-orange-500');
            btn.classList.remove('text-gray-300', 'border-gray-600');
        } else {
            btn.classList.remove('bg-orange-500', 'text-white', 'border-orange-500');
            btn.classList.add('text-gray-300', 'border-gray-600');
        }
    });

    renderProducts();

    setTimeout(() => {
        const productsSection = document.getElementById('new-arrivals');
        if (productsSection) {
            productsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, 100);
}

// ========== NEWSLETTER FUNCTIONS ==========

function saveToLocalBackup(email, name = '', source = 'homepage', preferences = []) {
    let subscribers = JSON.parse(localStorage.getItem('subscribers')) || [];
    subscribers.push({
        email,
        name: name || 'Not provided',
        date: new Date().toISOString(),
        source: source,
        preferences: preferences
    });
    localStorage.setItem('subscribers', JSON.stringify(subscribers));
    console.log('✅ Saved to localStorage backup');
}

async function handleSubscribe(e) {
    e.preventDefault();

    const email = e.target.querySelector('input[type="email"]').value;
    const button = e.target.querySelector('button[type="submit"]');
    const message = document.getElementById('subscribe-message');

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast('Please enter a valid email', 'error');
        return;
    }

    const originalHTML = button.innerHTML;
    button.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i>';
    button.disabled = true;
    lucide.createIcons();

    try {
        saveToLocalBackup(email, 'Homepage Subscriber', 'homepage-newsletter');

        await fetch(GOOGLE_SHEETS_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                name: 'Homepage Subscriber',
                source: 'Homepage Newsletter',
                timestamp: new Date().toISOString()
            })
        });

        message.innerHTML = '✓ Thanks for subscribing! Check your inbox.';
        showToast('Subscribed! Check your email', 'success');

    } catch (error) {
        console.error('Subscription error:', error);
        message.innerHTML = '✓ Thanks for subscribing! (Saved locally)';
        showToast('Subscribed (Offline Mode)', 'success');
    }

    message.classList.remove('hidden');
    e.target.reset();

    button.innerHTML = originalHTML;
    button.disabled = false;
    lucide.createIcons();

    setTimeout(() => {
        message.classList.add('hidden');
    }, 5000);
}

async function handlePageSubscribe(e) {
    e.preventDefault();

    const email = document.getElementById('subscribe-email').value;
    const name = document.getElementById('subscribe-name').value;
    const form = document.getElementById('subscribe-page-form');
    const success = document.getElementById('subscribe-page-success');
    const submitBtn = document.getElementById('subscribe-submit-btn');

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast('Please enter a valid email', 'error');
        return;
    }

    const preferences = getSelectedPreferences();
    const discountCode = generateDiscountCode();

    const originalHTML = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Subscribing...';
    lucide.createIcons();

    try {
        saveToLocalBackup(email, name || 'Anonymous', 'subscribe-page', preferences);

        await fetch(GOOGLE_SHEETS_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                name: name || 'Anonymous',
                preferences: preferences.join(', '),
                discountCode: discountCode,
                source: 'Subscribe Page',
                timestamp: new Date().toISOString()
            })
        });

        form.classList.add('hidden');
        success.classList.remove('hidden');
        document.getElementById('discount-code').textContent = discountCode;
        showToast('Successfully subscribed!', 'success');

    } catch (error) {
        console.error('Subscription error:', error);
        form.classList.add('hidden');
        success.classList.remove('hidden');
        document.getElementById('discount-code').textContent = discountCode;
        showToast('Subscribed (Offline Mode)', 'success');
    }
}

function getSelectedPreferences() {
    const checkboxes = document.querySelectorAll('#subscribe-page-form input[type="checkbox"]:checked');
    const preferences = [];
    checkboxes.forEach(cb => {
        const label = cb.parentElement?.querySelector('span');
        if (label) {
            preferences.push(label.textContent.trim());
        }
    });
    return preferences;
}

function copyDiscountCode() {
    const codeElement = document.getElementById('discount-code');
    if (!codeElement) return;

    // Get the text and ensure we have the full code with SOLE prefix
    const code = 'SOLE' + codeElement.textContent;

    // Copy to clipboard
    navigator.clipboard.writeText(code).then(() => {
        showToast('Discount code copied!', 'success');
    }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = code;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Discount code copied!', 'success');
    });
}

// ========== UTILITY FUNCTIONS ==========

function renderStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '<i data-lucide="star" class="w-4 h-4 fill-yellow-400 text-yellow-400"></i>';
        } else {
            stars += '<i data-lucide="star" class="w-4 h-4 text-gray-300"></i>';
        }
    }
    return stars;
}

function showToast(message, type = 'error') {
    const toast = document.createElement('div');
    toast.className = `fixed bottom-24 right-5 ${type === 'error' ? 'bg-red-500' : 'bg-green-500'} text-white px-4 py-2 rounded-xl shadow-lg z-50 transition-opacity duration-300`;
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// ========== WHATSAPP CHECKOUT ==========

function checkoutToWhatsApp() {
    if (cart.length === 0) {
        showToast('Your cart is empty! Add some items first.');
        return;
    }

    const phoneNumber = '263773184147';

    let message = '*🛒 SOLEMATES ORDER* 🛒\n\n';
    message += 'Hello! I would like to place an order:\n\n';
    message += '━━━━━━━━━━━━━━━━━━━━\n';

    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        message += `\n*${index + 1}. ${item.name}*\n`;
        if (item.size) {
            message += `   Size: EU ${item.size}\n`;
        }
        message += `   Price: $${item.price}\n`;
        message += `   Qty: ${item.quantity}\n`;
        message += `   Subtotal: $${item.price * item.quantity}\n`;
    });

    message += '\n━━━━━━━━━━━━━━━━━━━━\n';
    message += `\n*TOTAL: $${total}*\n\n`;
    message += 'Please confirm my order. Thank you! 🙏';

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
    showToast('Order sent to WhatsApp!', 'success');
}

// ========== VIEW SUBSCRIBERS (DEBUGGING) ==========

function viewSubscribers() {
    const subscribers = JSON.parse(localStorage.getItem('subscribers')) || [];
    console.log('📧 SUBSCRIBERS:', subscribers);
    console.table(subscribers.map(s => ({
        Email: s.email,
        Name: s.name,
        Date: new Date(s.date).toLocaleDateString(),
        Source: s.source
    })));
    return subscribers;
}

function exportSubscribersToCSV() {
    const subscribers = JSON.parse(localStorage.getItem('subscribers')) || [];
    if (subscribers.length === 0) {
        showToast('No subscribers to export', 'error');
        return;
    }

    let csv = 'Email,Name,Date,Source,Preferences\n';

    subscribers.forEach(sub => {
        const preferences = Array.isArray(sub.preferences) ? sub.preferences.join(';') : (sub.preferences || '');
        csv += `"${sub.email}","${sub.name || ''}","${sub.date}","${sub.source || ''}","${preferences}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `solemates-subscribers-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);

    showToast('Subscribers exported!', 'success');
}

// ========== NAVBAR SCROLL EFFECT ==========

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md');
    } else {
        navbar.classList.remove('shadow-md');
    }
});

// ========== INITIALIZATION ==========

document.addEventListener('DOMContentLoaded', () => {
    loadCartFromStorage();
    loadWishlist();
    renderProducts();
    lucide.createIcons();
    setupEventListeners();
    console.log('📊 Google Sheets URL configured:', GOOGLE_SHEETS_URL !== 'YOUR_GOOGLE_SCRIPT_URL_HERE' ? '✅ Yes' : '❌ No');
});

function setupEventListeners() {
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('mobile-menu').classList.add('hidden');
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const sidebar = document.getElementById('cart-sidebar');
            if (sidebar.classList.contains('open')) {
                toggleCart();
            }

            const collectionModal = document.getElementById('collection-modal');
            if (!collectionModal.classList.contains('hidden')) {
                closeCollectionModal();
            }

            const aboutModal = document.getElementById('about-modal');
            if (!aboutModal.classList.contains('hidden')) {
                closeAboutModal();
            }

            const subscribePage = document.getElementById('subscribe-page');
            if (!subscribePage.classList.contains('hidden')) {
                closeSubscribePage();
            }

            const sizeGuideModal = document.getElementById('size-guide-modal');
            if (sizeGuideModal && !sizeGuideModal.classList.contains('hidden')) {
                closeSizeGuide();
            }

            const privacyModal = document.getElementById('privacy-modal');
            if (privacyModal && !privacyModal.classList.contains('hidden')) {
                closePrivacy();
            }

            const termsModal = document.getElementById('terms-modal');
            if (termsModal && !termsModal.classList.contains('hidden')) {
                closeTerms();
            }

            const clearCartModal = document.getElementById('clear-cart-modal');
            if (clearCartModal && !clearCartModal.classList.contains('hidden')) {
                closeClearCartModal();
            }

            const returnsModal = document.getElementById('returns-modal');
            if (returnsModal && !returnsModal.classList.contains('hidden')) {
                closeReturnsModal();
            }

            const lookbookModal = document.getElementById('lookbook-modal');
            if (lookbookModal && !lookbookModal.classList.contains('hidden')) {
                closeLookbook();
            }

            const lookbookDetailModal = document.getElementById('lookbook-detail-modal');
            if (lookbookDetailModal && !lookbookDetailModal.classList.contains('hidden')) {
                closeLookbookDetail();
            }
            const productGalleryModal = document.getElementById('product-gallery-modal');
            if (productGalleryModal && !productGalleryModal.classList.contains('hidden')) {
                closeProductGallery();
            }

        }
    });

    document.getElementById('cart-overlay').addEventListener('click', toggleCart);
    document.getElementById('collection-overlay').addEventListener('click', closeCollectionModal);
    document.getElementById('about-overlay').addEventListener('click', closeAboutModal);

    const sizeGuideBackdrop = document.querySelector('#size-guide-modal .absolute');
    if (sizeGuideBackdrop) {
        sizeGuideBackdrop.addEventListener('click', closeSizeGuide);
    }

    const privacyBackdrop = document.querySelector('#privacy-modal .absolute');
    if (privacyBackdrop) {
        privacyBackdrop.addEventListener('click', closePrivacy);
    }

    const termsBackdrop = document.querySelector('#terms-modal .absolute');
    if (termsBackdrop) {
        termsBackdrop.addEventListener('click', closeTerms);
    }

    const returnsBackdrop = document.querySelector('#returns-modal .absolute');
    if (returnsBackdrop) {
        returnsBackdrop.addEventListener('click', closeReturnsModal);
    }
}

// ========== EXPORT FUNCTIONS TO GLOBAL SCOPE ==========

window.openLookbook = openLookbook;
window.closeLookbook = closeLookbook;
window.filterLookbook = filterLookbook;
window.openLookbookDetail = openLookbookDetail;
window.closeLookbookDetail = closeLookbookDetail;
window.selectLookbookSize = selectLookbookSize;
window.addLookbookItemToCart = addLookbookItemToCart;
window.openCollectionModal = openCollectionModal;
window.closeCollectionModal = closeCollectionModal;
window.openAboutModal = openAboutModal;
window.closeAboutModal = closeAboutModal;
window.openSizeGuide = openSizeGuide;
window.closeSizeGuide = closeSizeGuide;
window.openPrivacy = openPrivacy;
window.closePrivacy = closePrivacy;
window.openTerms = openTerms;
window.closeTerms = closeTerms;
window.openSubscribePage = openSubscribePage;
window.closeSubscribePage = closeSubscribePage;
window.handlePageSubscribe = handlePageSubscribe;
window.selectSize = selectSize;
window.selectSizeHome = selectSizeHome;
window.addToCartFromCollection = addToCartFromCollection;
window.addToCartHome = addToCartHome;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.toggleMobileMenu = toggleMobileMenu;
window.toggleCart = toggleCart;
window.filterProducts = filterProducts;
window.filterAndScroll = filterAndScroll;
window.handleSubscribe = handleSubscribe;
window.checkoutToWhatsApp = checkoutToWhatsApp;
window.clearCart = clearCart;
window.openClearCartModal = openClearCartModal;
window.closeClearCartModal = closeClearCartModal;
window.confirmClearCart = confirmClearCart;
window.viewSubscribers = viewSubscribers;
window.exportSubscribersToCSV = exportSubscribersToCSV;
window.openReturnsModal = openReturnsModal;
window.closeReturnsModal = closeReturnsModal;
window.showReturnsFAQ = showReturnsFAQ;
window.openOrderStatus = openOrderStatus;
window.openContactUs = openContactUs;
window.openShippingInfo = openShippingInfo;
window.copyDiscountCode = copyDiscountCode;


// ========== DEBUGGING HELPERS ==========

window.subs = () => {
    return viewSubscribers();
};

window.clearSubs = () => {
    if (confirm('Delete all subscribers?')) {
        localStorage.removeItem('subscribers');
        console.log('🗑️ All subscribers deleted');
        showToast('Subscribers cleared', 'success');
    }
};
// ============================================================
// WISHLIST FUNCTIONS
// ============================================================

function loadWishlist() {
    try {
        const saved = localStorage.getItem('solemates_wishlist');
        wishlist = saved ? JSON.parse(saved) : [];
    } catch (e) { wishlist = []; }
    updateWishlistBadge();
}

function saveWishlist() {
    localStorage.setItem('solemates_wishlist', JSON.stringify(wishlist));
}

function updateWishlistBadge() {
    const count = wishlist.length;

    const badge = document.getElementById('wishlist-badge');
    if (badge) {
        badge.textContent = count;
        count > 0 ? badge.classList.remove('hidden') : badge.classList.add('hidden');
    }

    const mobileCount = document.getElementById('mobile-wishlist-count');
    if (mobileCount) mobileCount.textContent = count;

    // Fill nav heart red when items are saved
    const heart = document.getElementById('nav-heart-icon');
    if (heart) {
        heart.setAttribute('fill', count > 0 ? '#ef4444' : 'none');
        heart.setAttribute('stroke', count > 0 ? '#ef4444' : 'currentColor');
    }
}

function toggleWishlist(e, productId) {
    e.stopPropagation();
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const idx = wishlist.findIndex(w => w.id === productId);
    if (idx === -1) {
        wishlist.push({ ...product });
        showToast('Added to wishlist ❤️', 'success');
    } else {
        wishlist.splice(idx, 1);
        showToast('Removed from wishlist', 'error');
    }

    saveWishlist();
    updateWishlistBadge();
    refreshHeartButtons();

    // Re-render grid if wishlist is open
    if (!document.getElementById('wishlist-modal').classList.contains('hidden')) {
        renderWishlistGrid();
    }
}

function refreshHeartButtons() {
    document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
        const id = parseInt(btn.dataset.wishlistId);
        const saved = wishlist.some(w => w.id === id);
        const svg = btn.querySelector('svg');
        if (svg) {
            svg.setAttribute('fill', saved ? '#ef4444' : 'none');
            svg.setAttribute('stroke', saved ? '#ef4444' : 'white');
        }
    });
}

function openWishlist() {
    wishlistSelectedSizes = {};
    document.getElementById('wishlist-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    renderWishlistGrid();
}

function closeWishlist() {
    document.getElementById('wishlist-modal').classList.add('hidden');
    document.body.style.overflow = '';
}

function renderWishlistGrid() {
    const grid = document.getElementById('wishlist-grid');
    const subtitle = document.getElementById('wishlist-subtitle');
    const addAllBtn = document.getElementById('wishlist-add-all-btn');
    if (!grid) return;

    const count = wishlist.length;
    if (subtitle) subtitle.textContent = `${count} saved item${count !== 1 ? 's' : ''}`;

    if (addAllBtn) {
        if (count > 0) {
            addAllBtn.classList.remove('hidden');
            addAllBtn.classList.add('flex');
        } else {
            addAllBtn.classList.add('hidden');
            addAllBtn.classList.remove('flex');
        }
    }

    if (count === 0) {
        grid.innerHTML = `
            <div class="text-center py-20">
                <div class="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg class="w-10 h-10 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">Your wishlist is empty</h3>
                <p class="text-gray-400 mb-6">Tap the ♡ on any sneaker to save it here</p>
                <button onclick="closeWishlist()" class="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-colors">
                    Browse Sneakers
                </button>
            </div>`;
        lucide.createIcons();
        return;
    }

    grid.innerHTML = `
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            ${wishlist.map((product, i) => `
                <div class="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-red-500/40 transition-all duration-300 flex flex-col"
                     style="animation: slideIn 0.3s ease both; animation-delay:${i * 0.05}s">

                    <!-- Image -->
                    <div class="relative group overflow-hidden">
                        <img src="${product.image}" alt="${product.name}"
                             class="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500">
                        <button onclick="wishlistRemove(event,${product.id})"
                            class="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 flex items-center justify-center hover:bg-red-500 transition-colors"
                            title="Remove from wishlist">
                            <svg class="w-5 h-5 fill-red-500" viewBox="0 0 24 24">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                            </svg>
                        </button>
                        <span class="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded capitalize">${product.category}</span>
                    </div>

                    <!-- Info -->
                    <div class="p-4 flex flex-col flex-1">
                        <div class="flex items-center gap-1 mb-1">
                            ${renderStars(product.rating)}
                            <span class="text-xs text-gray-400 ml-1">(${product.reviews})</span>
                        </div>
                        <h3 class="font-bold text-sm text-white line-clamp-2 mb-3">${product.name}</h3>

                        <!-- Size selector -->
                        <div class="mb-4">
                            <div class="flex justify-between items-center mb-2">
                                <span class="text-xs text-gray-400 font-medium">Select Size (EU)</span>
                                <button onclick="openSizeGuide()" class="text-xs text-orange-500 hover:text-orange-400 flex items-center gap-1">
                                    <i data-lucide="ruler" class="w-3 h-3"></i> Guide
                                </button>
                            </div>
                            <div class="flex flex-wrap gap-1" id="wl-sizes-${product.id}">
                                ${availableSizes.map(sz => `
                                    <button onclick="wishlistSelectSize(${product.id},${sz})"
                                        data-wl-size="${sz}"
                                        class="wl-size-btn w-9 h-8 rounded border border-gray-600 text-xs font-medium text-gray-300 bg-gray-700 hover:border-orange-500 transition-all">
                                        ${sz}
                                    </button>`).join('')}
                            </div>
                            <p id="wl-err-${product.id}" class="text-red-500 text-xs mt-1 hidden">Please select a size first</p>
                        </div>

                        <!-- Price + Add to Cart -->
                        <div class="flex items-center justify-between pt-3 border-t border-gray-700 mt-auto">
                            <span class="text-xl font-bold text-white">$${product.price}</span>
                            <button onclick="wishlistAddToCart(${product.id})"
                                id="wl-atc-${product.id}"
                                class="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors">
                                <i data-lucide="shopping-bag" class="w-4 h-4"></i>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        <p class="text-center text-xs text-gray-600 mt-5 pb-2">Select a size before adding to cart</p>`;

    lucide.createIcons();
}

function wishlistSelectSize(productId, size) {
    wishlistSelectedSizes[productId] = size;

    const container = document.getElementById(`wl-sizes-${productId}`);
    if (container) {
        container.querySelectorAll('.wl-size-btn').forEach(btn => {
            const s = parseFloat(btn.dataset.wlSize);
            if (s === size) {
                btn.classList.add('bg-orange-500', 'border-orange-500', 'text-white');
                btn.classList.remove('bg-gray-700', 'border-gray-600', 'text-gray-300');
            } else {
                btn.classList.remove('bg-orange-500', 'border-orange-500', 'text-white');
                btn.classList.add('bg-gray-700', 'border-gray-600', 'text-gray-300');
            }
        });
    }

    const err = document.getElementById(`wl-err-${productId}`);
    if (err) err.classList.add('hidden');
}

function wishlistAddToCart(productId) {
    const size = wishlistSelectedSizes[productId];

    if (!size) {
        const err = document.getElementById(`wl-err-${productId}`);
        if (err) err.classList.remove('hidden');
        // Shake the size row
        const container = document.getElementById(`wl-sizes-${productId}`);
        if (container) {
            container.classList.add('wl-shake');
            setTimeout(() => container.classList.remove('wl-shake'), 500);
        }
        showToast('Select a size first!', 'error');
        return;
    }

    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId && item.size === size);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, size, quantity: 1 });
    }

    saveCartToStorage();
    updateCartUI();

    // Button success feedback
    const btn = document.getElementById(`wl-atc-${productId}`);
    if (btn) {
        btn.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i> Added! EU ${size}`;
        btn.classList.replace('bg-orange-500', 'bg-green-600');
        btn.classList.replace('hover:bg-orange-600', 'hover:bg-green-700');
        lucide.createIcons();
        setTimeout(() => {
            btn.innerHTML = `<i data-lucide="shopping-bag" class="w-4 h-4"></i> Add to Cart`;
            btn.classList.replace('bg-green-600', 'bg-orange-500');
            btn.classList.replace('hover:bg-green-700', 'hover:bg-orange-600');
            lucide.createIcons();
        }, 2000);
    }

    showToast(`Added to cart — EU ${size} ✓`, 'success');
}

function wishlistRemove(e, productId) {
    e.stopPropagation();
    wishlist = wishlist.filter(w => w.id !== productId);
    delete wishlistSelectedSizes[productId];
    saveWishlist();
    updateWishlistBadge();
    refreshHeartButtons();
    renderWishlistGrid();
    showToast('Removed from wishlist', 'error');
}

function wishlistAddAll() {
    const missing = wishlist.filter(p => !wishlistSelectedSizes[p.id]);

    if (missing.length > 0) {
        missing.forEach(p => {
            const err = document.getElementById(`wl-err-${p.id}`);
            if (err) err.classList.remove('hidden');
            const container = document.getElementById(`wl-sizes-${p.id}`);
            if (container) {
                container.classList.add('wl-shake');
                setTimeout(() => container.classList.remove('wl-shake'), 500);
            }
        });
        showToast(`Pick sizes for ${missing.length} item${missing.length > 1 ? 's' : ''} first!`, 'error');
        return;
    }

    wishlist.forEach(product => {
        const size = wishlistSelectedSizes[product.id];
        const existing = cart.find(item => item.id === product.id && item.size === size);
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({ ...product, size, quantity: 1 });
        }
    });

    saveCartToStorage();
    updateCartUI();
    showToast(`${wishlist.length} item${wishlist.length > 1 ? 's' : ''} added to cart ✓`, 'success');

    setTimeout(() => {
        closeWishlist();
        if (window.innerWidth > 768) toggleCart();
    }, 700);
}

// Wishlist window exports
window.openWishlist = openWishlist;
window.closeWishlist = closeWishlist;
window.toggleWishlist = toggleWishlist;
window.wishlistSelectSize = wishlistSelectSize;
window.wishlistAddToCart = wishlistAddToCart;
window.wishlistRemove = wishlistRemove;
window.wishlistAddAll = wishlistAddAll;
// ============================================================
// SEARCH FUNCTIONS
// ============================================================

let sacProduct = null;    // product currently in the action modal
let sacSize = null;       // size selected in action modal

function openSearch() {
    document.getElementById('search-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        const input = document.getElementById('search-input');
        if (input) { input.value = ''; input.focus(); }
        runSearch('');
    }, 50);
    lucide.createIcons();
}

function closeSearch() {
    document.getElementById('search-modal').classList.add('hidden');
    document.body.style.overflow = '';
    const input = document.getElementById('search-input');
    if (input) input.value = '';
    document.getElementById('search-results').innerHTML = '';
    document.getElementById('search-detail').innerHTML = '';
    document.getElementById('search-detail').classList.add('hidden');
}

function runSearch(query) {
    const results = document.getElementById('search-results');
    if (!results) return;

    // Hide detail panel on new search
    document.getElementById('search-detail').classList.add('hidden');

    const q = query.trim().toLowerCase();
    const matched = q === ''
        ? products
        : products.filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q)
        );

    if (matched.length === 0) {
        results.innerHTML = `
            <div class="p-8 text-center">
                <i data-lucide="search-x" class="w-10 h-10 text-gray-600 mx-auto mb-3"></i>
                <p class="text-gray-400 text-sm">No results for "<span class="text-white font-medium">${query}</span>"</p>
            </div>`;
        lucide.createIcons();
        return;
    }

    results.innerHTML = `
        <div class="divide-y divide-gray-800">
            ${matched.map(p => `
                <div onclick="openSearchAction(${p.id})"
                    class="flex items-center gap-4 p-4 hover:bg-gray-800 cursor-pointer transition-colors group">
                    <img src="${p.image}" alt="${p.name}"
                        class="w-14 h-14 object-cover rounded-xl flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <div class="flex-1 min-w-0">
                        <p class="text-white font-semibold text-sm line-clamp-1">${p.name}</p>
                        <p class="text-gray-400 text-xs capitalize mt-0.5">${p.category}</p>
                        <div class="flex items-center gap-1 mt-1">
                            ${renderStars(p.rating)}
                            <span class="text-xs text-gray-500 ml-1">(${p.reviews})</span>
                        </div>
                    </div>
                    <div class="text-right flex-shrink-0">
                        <p class="text-white font-bold">$${p.price}</p>
                        <p class="text-orange-500 text-xs mt-1">Tap to add →</p>
                    </div>
                </div>
            `).join('')}
        </div>
        <p class="text-center text-xs text-gray-600 py-3">
            ${q === '' ? `${matched.length} products — tap any to add` : `${matched.length} result${matched.length !== 1 ? 's' : ''} for "${query}"`}
        </p>`;
    lucide.createIcons();
}

// ============================================================
// SEARCH ACTION MODAL (Add to Cart OR Wishlist)
// ============================================================

function openSearchAction(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    sacProduct = product;
    sacSize = null;

    // Populate modal
    document.getElementById('sac-image').src = product.image;
    document.getElementById('sac-image').alt = product.name;
    document.getElementById('sac-name').textContent = product.name;
    document.getElementById('sac-price').textContent = `$${product.price}`;

    // Size grid
    const grid = document.getElementById('sac-size-grid');
    grid.innerHTML = availableSizes.map(sz => `
        <button onclick="sacSelectSize(${sz})"
            data-sac-sz="${sz}"
            class="sac-sz-btn w-11 h-10 rounded-lg border border-gray-600 text-xs font-medium text-gray-300 bg-gray-800 hover:border-orange-500 transition-all">
            ${sz}
        </button>
    `).join('');

    // Wishlist heart state
    const heart = document.getElementById('sac-heart-icon');
    const isWishlisted = wishlist.some(w => w.id === productId);
    const wishlistBtn = document.getElementById('sac-wishlist-btn');
    if (heart) {
        heart.setAttribute('fill', isWishlisted ? '#ef4444' : 'none');
        heart.setAttribute('stroke', isWishlisted ? '#ef4444' : 'currentColor');
    }
    if (wishlistBtn) {
        wishlistBtn.innerHTML = `
            <svg class="w-5 h-5" id="sac-heart-icon" viewBox="0 0 24 24"
                fill="${isWishlisted ? '#ef4444' : 'none'}"
                stroke="${isWishlisted ? '#ef4444' : 'currentColor'}"
                stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            ${isWishlisted ? 'Wishlisted' : 'Wishlist'}
        `;
    }

    // Hide error
    document.getElementById('sac-size-err').classList.add('hidden');

    // Show modal with animation
    const modal = document.getElementById('search-action-modal');
    const content = document.getElementById('search-action-content');
    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            content.classList.remove('scale-95', 'opacity-0');
            content.classList.add('scale-100', 'opacity-100');
        });
    });

    lucide.createIcons();
}

function closeSearchAction() {
    const modal = document.getElementById('search-action-modal');
    const content = document.getElementById('search-action-content');
    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        modal.classList.add('hidden');
        sacProduct = null;
        sacSize = null;
    }, 200);
}

function sacSelectSize(size) {
    sacSize = size;
    document.querySelectorAll('.sac-sz-btn').forEach(btn => {
        const s = parseFloat(btn.dataset.sacSz);
        if (s === size) {
            btn.classList.add('bg-orange-500', 'border-orange-500', 'text-white');
            btn.classList.remove('bg-gray-800', 'border-gray-600', 'text-gray-300');
        } else {
            btn.classList.remove('bg-orange-500', 'border-orange-500', 'text-white');
            btn.classList.add('bg-gray-800', 'border-gray-600', 'text-gray-300');
        }
    });
    document.getElementById('sac-size-err').classList.add('hidden');
}

function sacAddToCart() {
    if (!sacProduct) return;
    if (!sacSize) {
        document.getElementById('sac-size-err').classList.remove('hidden');
        const grid = document.getElementById('sac-size-grid');
        if (grid) {
            grid.classList.add('wl-shake');
            setTimeout(() => grid.classList.remove('wl-shake'), 500);
        }
        showToast('Select a size first!', 'error');
        return;
    }

    const existing = cart.find(i => i.id === sacProduct.id && i.size === sacSize);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...sacProduct, size: sacSize, quantity: 1 });
    }

    saveCartToStorage();
    updateCartUI();
    showToast(`Added to cart — EU ${sacSize} ✓`, 'success');
    closeSearchAction();

    // Refresh heart buttons in case this product had one
    refreshHeartButtons();
}

function sacAddToWishlist() {
    if (!sacProduct) return;

    const idx = wishlist.findIndex(w => w.id === sacProduct.id);
    const wasWishlisted = idx !== -1;

    if (wasWishlisted) {
        wishlist.splice(idx, 1);
        showToast('Removed from wishlist', 'error');
    } else {
        wishlist.push({ ...sacProduct });
        showToast('Added to wishlist ❤️', 'success');
    }

    saveWishlist();
    updateWishlistBadge();
    refreshHeartButtons();
    closeSearchAction();
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
        const active = document.activeElement;
        if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) return;
        e.preventDefault();
        openSearch();
    }
    if (e.key === 'Escape') {
        const sac = document.getElementById('search-action-modal');
        if (sac && !sac.classList.contains('hidden')) { closeSearchAction(); return; }
        const sm = document.getElementById('search-modal');
        if (sm && !sm.classList.contains('hidden')) { closeSearch(); return; }
    }
});

// ========== PRODUCT GALLERY FOR ALL SHOES ==========

let currentGalleryProduct = null;
let currentGalleryIndex = 0;
let selectedGallerySize = null;

// Gallery images for each shoe (multiple angles)
const shoeGalleries = {
    1: [ // Air Jordan 1 Chicago
        "https://cdn.shopify.com/s/files/1/0852/0048/files/air-jordan-1-retro-high-og-varsity-red-chicago-bulls_1024x1024.jpg",
        "https://i0.wp.com/fashioncrib.co.za/wp-content/uploads/2024/04/1000037732.jpg?fit=900%2C900&ssl=1",
        "https://i0.wp.com/fashioncrib.co.za/wp-content/uploads/2024/04/1000037733.jpg?fit=900%2C900&ssl=1",
        "https://i0.wp.com/fashioncrib.co.za/wp-content/uploads/2024/04/1000037730.jpg?fit=900%2C900&ssl=1"
    ],
    2: [ // Air Jordan 4 White Cement
        "https://sneakerbardetroit.com/wp-content/uploads/2025/03/Air-Jordan-4-White-Cement-FV5029-100-Release-Date-2.webp",
        "https://sneakerbardetroit.com/wp-content/uploads/2025/03/Air-Jordan-4-White-Cement-FV5029-100-Release-Date.webp",
        "https://sneakerbardetroit.com/wp-content/uploads/2025/03/Air-Jordan-4-White-Cement-FV5029-100-Release-Date-1.webp",
        "https://sneakerbardetroit.com/wp-content/uploads/2025/03/Air-Jordan-4-White-Cement-FV5029-100-Release-Date-3-1068x1015.webp",
        "https://sneakerbardetroit.com/wp-content/uploads/2025/03/Air-Jordan-4-White-Cement-FV5029-100-Release-Date-4-1068x790.webp",
        "https://sneakerbardetroit.com/wp-content/uploads/2025/03/Air-Jordan-4-White-Cement-FV5029-100-Release-Date-5-1068x661.webp"

    ],
    3: [ // Nike Air Max 90 Infrared
        "https://sneakernews.com/wp-content/uploads/2021/01/Nike-Air-Max-90-Infrared-CU9978-103-4.jpg",
        "https://content.deadstock.de/media/pages/uploads/2023/10/f09a349d7f-1773228675/nike-air-max-90-infrared-3m-iu1055-100-2-1536x.webp",
        "https://content.deadstock.de/media/pages/uploads/2023/10/c76847d55c-1773228676/nike-air-max-90-infrared-3m-iu1055-100-3-1536x.webp",
        "https://content.deadstock.de/media/pages/uploads/2023/10/59a7a598e0-1773228675/nike-air-max-90-infrared-3m-iu1055-100-5-1536x.webp",
        "https://content.deadstock.de/media/pages/uploads/2023/10/7fc3286438-1773228676/nike-air-max-90-infrared-3m-iu1055-100-7-1536x.webp",
        "https://content.deadstock.de/media/pages/uploads/2023/10/46f6454dd2-1773228676/nike-air-max-90-infrared-3m-iu1055-100-8-1536x.webp",
        "https://content.deadstock.de/media/pages/uploads/2023/10/481d958996-1773228675/nike-air-max-90-infrared-3m-iu1055-100-4-1536x.webp",
        "https://content.deadstock.de/media/pages/uploads/2023/10/a9780b6fc4-1773228675/nike-air-max-90-infrared-3m-iu1055-100-6-1536x.webp"
    ],
    4: [ // New Balance 550 Grey
        "https://justfreshkicks.com/wp-content/uploads/2024/04/New-Balance-550-Golf-White-Green-MG550WG.jpeg",
        "https://i0.wp.com/fashioncrib.co.za/wp-content/uploads/2025/10/1000348522.jpg?fit=600%2C560&ssl=1",
        "https://i0.wp.com/fashioncrib.co.za/wp-content/uploads/2025/10/1000348523.jpg?fit=600%2C513&ssl=1",
        "https://i0.wp.com/fashioncrib.co.za/wp-content/uploads/2025/10/1000348524.jpg?fit=600%2C455&ssl=1"
    ],
    5: [ // Air Jordan 11 Concord
        "https://es.kicksmaniac.com/zdjecia/2019/03/14/303/26/Q8644air_jordan_1039-mini.jpg",
        "https://content.deadstock.de/media/pages/uploads/2018/12/66900213b8-1731408434/nike-air-jordan-11-retro-concorde-5-1536x.webp",
        "https://content.deadstock.de/media/pages/uploads/2018/12/44d980adfa-1731408434/nike-air-jordan-11-retro-concorde-6-1536x.webp",
        "https://content.deadstock.de/media/pages/uploads/2018/12/9764066ec7-1731408434/nike-air-jordan-11-retro-concorde-7-1536x.webp",
        "https://content.deadstock.de/media/pages/uploads/2018/12/414758dc59-1731408434/nike-air-jordan-11-retro-concorde-1-1536x.webp",
        "https://content.deadstock.de/media/pages/uploads/2018/12/d268c3cae1-1731408434/nike-air-jordan-11-retro-concorde-2-1536x.webp",
        "https://content.deadstock.de/media/pages/uploads/2018/12/885950d23f-1731408434/nike-air-jordan-11-retro-concorde-3-1536x.webp",
        "https://content.deadstock.de/media/pages/uploads/2018/12/164bc82d0d-1731408434/nike-air-jordan-11-retro-concorde-4-1536x.webp"
    ],
    6: [ // Nike Zoom Fly 5 Ekiden
        "https://shopwithus.co.in/cdn/shop/files/DSC_3678.jpg?v=1704968335",
        "https://images.soleretriever.com/sb/product-images/24067/nike-zoom-fly-5-ekiden-fq8112-331_alt_1.png?width=740&quality=75&fit=contain",
        "https://images.soleretriever.com/sb/product-images/24067/nike-zoom-fly-5-ekiden-fq8112-331_alt_3.png?width=740&quality=75&fit=contain",
        "https://images.soleretriever.com/sb/product-images/24067/nike-zoom-fly-5-ekiden-fq8112-331_alt_4.png?width=740&quality=75&fit=contain",
        "https://images.soleretriever.com/sb/product-images/24067/nike-zoom-fly-5-ekiden-fq8112-331_alt_5.png?width=740&quality=75&fit=contain",
        "https://images.soleretriever.com/sb/product-images/24067/nike-zoom-fly-5-ekiden-fq8112-331_alt_0.png?width=740&quality=75&fit=contain",
        "https://images.soleretriever.com/sb/product-images/24067/nike-zoom-fly-5-ekiden-fq8112-331_alt_2.png?width=740&quality=75&fit=contain"
    ],
    7: [ // Adidas Ultraboost Light
        "https://images.soleretriever.com/sb/product-images/21168/ULTRABOOST_LIGHT_Grey_IE1759_02_standard.png?width=740&quality=75&fit=contain",
        "https://images.soleretriever.com/sb/product-images/21168/ULTRABOOST_LIGHT_Grey_IE1759_03_standard.png?width=740&quality=75&fit=contain",
        "https://images.soleretriever.com/sb/product-images/21168/ULTRABOOST_LIGHT_Grey_IE1759_04_standard.png?width=740&quality=75&fit=contain",
        "https://images.soleretriever.com/sb/product-images/21168/ULTRABOOST_LIGHT_Grey_IE1759_05_standard.png?width=740&quality=75&fit=contain",
        "https://images.soleretriever.com/sb/product-images/21168/ULTRABOOST_LIGHT_Grey_IE1759_06_standard.png?width=740&quality=75&fit=contain",
        "https://images.soleretriever.com/sb/product-images/21168/ULTRABOOST_LIGHT_Grey_IE1759_09_standard.png?width=740&quality=75&fit=contain"
    ],
    8: [ // Air Jordan 1 Low Bred Toe
        "https://cdn.sanity.io/images/d6wcctii/production/228a2ace2cf77e3e74820bd49789686586feb45e-1070x760.png",
        "https://content.deadstock.de/media/pages/uploads/2021/07/9c0e1cf063-1731408448/nike-air-jordan-1-low-bred-toe-553558-612-dead-stock-2-1-1024x719-1536x.webp",
        "https://content.deadstock.de/media/pages/uploads/2021/07/cb325455ff-1731408448/nike-air-jordan-1-low-bred-toe-553558-612-dead-stock-3-1024x719-1536x.webp",
        "https://content.deadstock.de/media/pages/uploads/2021/07/a5f0cfd5c9-1731408448/nike-air-jordan-1-low-bred-toe-553558-612-dead-stock-4-1024x1024-1536x.webp",
        "https://content.deadstock.de/media/pages/uploads/2021/07/fdbe06aa01-1731408448/nike-air-jordan-1-low-bred-toe-553558-612-dead-stock-5-1024x719-1536x.webp",
        "https://content.deadstock.de/media/pages/uploads/2021/07/bb61eaf9d8-1731408448/nike-air-jordan-1-low-bred-toe-553558-612-dead-stock-6-1024x719-1536x.webp",
        "https://content.deadstock.de/media/pages/uploads/2021/07/0434a911f8-1731408448/nike-air-jordan-1-low-bred-toe-553558-612-dead-stock-7-1024x1024-1536x.webp",
        "https://content.deadstock.de/media/pages/uploads/2021/07/ae87f47fca-1731408448/nike-air-jordan-1-low-bred-toe-553558-612-dead-stock-8-1024x1024-1536x.webp"
    ]
};

// Product descriptions
const productDescriptions = {
    1: "The iconic Air Jordan 1 Retro High OG 'Chicago' features the classic white, black, and varsity red colorway. Premium leather upper with perforated toe box for breathability. Nike Air cushioning provides all-day comfort.",
    2: "The Air Jordan 4 Retro 'White Cement' features the classic white leather upper with grey cement print accents. Nike Air technology in the heel provides responsive cushioning.",
    3: "The Nike Air Max 90 'Infrared' features a white leather and mesh upper with infrared accents. The visible Air Max unit in the heel provides iconic cushioning and style.",
    4: "The New Balance 550 'Grey' features a premium leather upper with suede overlays. The classic basketball silhouette offers timeless style and everyday comfort.",
    5: "The Air Jordan 11 Retro 'Concord' features a patent leather upper with mesh accents. The iconic silhouette features carbon fiber shank and translucent outsole.",
    6: "The Nike Zoom Fly 5 'Ekiden' features a lightweight construction with responsive Zoom Air cushioning. Perfect for runners seeking speed and comfort.",
    7: "The Adidas Ultraboost Light features responsive Boost cushioning and a lightweight Primeknit upper. The most comfortable running shoe with sustainable materials.",
    8: "The Air Jordan 1 Low 'Bred Toe' features a black and red leather upper with white accents. The classic low-top silhouette offers versatile style."
};

function openProductGallery(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentGalleryProduct = product;
    currentGalleryIndex = 0;
    selectedGallerySize = null;

    // Set product info
    document.getElementById('gallery-product-title').textContent = product.name;
    document.getElementById('gallery-price').textContent = `$${product.price}`;
    document.getElementById('gallery-description').textContent = productDescriptions[productId] || "Premium sneaker with iconic design. Features premium materials and comfortable cushioning.";

    // Set rating stars
    const ratingContainer = document.getElementById('gallery-rating');
    ratingContainer.innerHTML = renderStars(product.rating) + `<span class="text-gray-400 text-sm ml-2">(${product.reviews} reviews)</span>`;

    // Get gallery images for this shoe
    const galleryImagesArray = shoeGalleries[productId] || [product.image, product.image, product.image];

    // Store images globally for this gallery session
    window.currentGalleryImages = galleryImagesArray;

    updateGalleryMainImage();
    renderGalleryThumbnails(galleryImagesArray);
    renderGallerySizeSelector();
    document.getElementById('gallery-size-error').classList.add('hidden');
    updateGalleryWishlistButton();

    // Show modal
    const modal = document.getElementById('product-gallery-modal');
    const content = document.getElementById('gallery-content');
    modal.classList.remove('hidden');

    setTimeout(() => {
        content.classList.remove('scale-95', 'opacity-0');
        content.classList.add('scale-100', 'opacity-100');
    }, 10);

    document.body.style.overflow = 'hidden';
    addGallerySwipeSupport();
}

function closeProductGallery() {
    const modal = document.getElementById('product-gallery-modal');
    const content = document.getElementById('gallery-content');

    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');

    setTimeout(() => {
        modal.classList.add('hidden');
        window.currentGalleryImages = null;
    }, 300);

    document.body.style.overflow = '';
}

function updateGalleryMainImage() {
    const mainImage = document.getElementById('gallery-main-image');
    const counter = document.getElementById('gallery-counter');
    const images = window.currentGalleryImages || [];

    if (images.length > 0 && images[currentGalleryIndex]) {
        mainImage.src = images[currentGalleryIndex];
        mainImage.alt = `View ${currentGalleryIndex + 1}`;
        counter.textContent = `Image ${currentGalleryIndex + 1} / ${images.length}`;
    }

    // Update active thumbnail
    document.querySelectorAll('.gallery-thumb').forEach((thumb, idx) => {
        if (idx === currentGalleryIndex) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });

    updateSwipeDots(images.length);
}

function renderGalleryThumbnails(images) {
    const container = document.getElementById('gallery-thumbnails');
    if (!container) return;

    container.innerHTML = images.map((img, index) => `
        <button onclick="setGalleryImage(${index})" 
                class="gallery-thumb relative aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-orange-500 transition-all">
            <img src="${img}" alt="Thumbnail ${index + 1}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <i data-lucide="search" class="w-4 h-4 text-white"></i>
            </div>
        </button>
    `).join('');
    lucide.createIcons();
}

function setGalleryImage(index) {
    currentGalleryIndex = index;
    updateGalleryMainImage();
}

function nextGalleryImage() {
    const images = window.currentGalleryImages || [];
    if (images.length === 0) return;
    currentGalleryIndex = (currentGalleryIndex + 1) % images.length;
    updateGalleryMainImage();
}

function prevGalleryImage() {
    const images = window.currentGalleryImages || [];
    if (images.length === 0) return;
    currentGalleryIndex = (currentGalleryIndex - 1 + images.length) % images.length;
    updateGalleryMainImage();
}

function renderGallerySizeSelector() {
    const container = document.getElementById('gallery-size-selector');
    if (!container) return;

    container.innerHTML = availableSizes.map(size => `
        <button onclick="selectGallerySize(${size})" 
                class="gallery-size-btn w-full py-3 rounded-lg border border-gray-600 text-sm font-medium text-gray-300 hover:border-orange-500 hover:bg-gray-700 transition-all"
                data-size="${size}">
            ${size}
        </button>
    `).join('');
}

function selectGallerySize(size) {
    selectedGallerySize = size;

    document.querySelectorAll('.gallery-size-btn').forEach(btn => {
        const btnSize = parseFloat(btn.dataset.size);
        if (btnSize === size) {
            btn.classList.add('bg-orange-500', 'border-orange-500', 'text-white');
            btn.classList.remove('hover:border-orange-500', 'hover:bg-gray-700');
        } else {
            btn.classList.remove('bg-orange-500', 'border-orange-500', 'text-white');
            btn.classList.add('hover:border-orange-500', 'hover:bg-gray-700');
        }
    });

    document.getElementById('gallery-size-error').classList.add('hidden');
}

function addFromGalleryToCart() {
    if (!selectedGallerySize) {
        document.getElementById('gallery-size-error').classList.remove('hidden');
        showToast('Please select a size first!');
        return;
    }

    const existingItem = cart.find(item =>
        item.id === currentGalleryProduct.id && item.size === selectedGallerySize
    );

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...currentGalleryProduct,
            size: selectedGallerySize,
            quantity: 1
        });
    }

    saveCartToStorage();
    updateCartUI();

    const btn = document.getElementById('gallery-add-to-cart');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<i data-lucide="check" class="w-5 h-5"></i> Added!';
    btn.classList.add('bg-green-600');

    setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.classList.remove('bg-green-600');
        lucide.createIcons();
    }, 1500);

    showToast(`Added to cart! Size EU ${selectedGallerySize}`, 'success');
}

function addFromGalleryToWishlist() {
    const idx = wishlist.findIndex(w => w.id === currentGalleryProduct.id);

    if (idx === -1) {
        wishlist.push({ ...currentGalleryProduct });
        showToast('Added to wishlist ❤️', 'success');
    } else {
        wishlist.splice(idx, 1);
        showToast('Removed from wishlist', 'error');
    }

    saveWishlist();
    updateWishlistBadge();
    updateGalleryWishlistButton();
    refreshHeartButtons();
}

function updateGalleryWishlistButton() {
    const isWishlisted = wishlist.some(w => w.id === currentGalleryProduct?.id);
    const btn = document.getElementById('gallery-wishlist-btn');
    if (!btn) return;

    if (isWishlisted) {
        btn.classList.add('bg-red-500/20');
        const svg = btn.querySelector('svg');
        if (svg) {
            svg.setAttribute('fill', '#ef4444');
            svg.setAttribute('stroke', '#ef4444');
        }
    } else {
        btn.classList.remove('bg-red-500/20');
        const svg = btn.querySelector('svg');
        if (svg) {
            svg.setAttribute('fill', 'none');
            svg.setAttribute('stroke', 'currentColor');
        }
    }
}

function addGallerySwipeSupport() {
    let touchStartX = 0;
    let touchEndX = 0;

    const mainImage = document.getElementById('gallery-main-image');
    if (!mainImage) return;

    const handleTouchStart = (e) => {
        touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const swipeDistance = touchEndX - touchStartX;

        if (Math.abs(swipeDistance) > 50) {
            if (swipeDistance > 0) {
                prevGalleryImage();
            } else {
                nextGalleryImage();
            }
        }
    };

    mainImage.removeEventListener('touchstart', handleTouchStart);
    mainImage.removeEventListener('touchend', handleTouchEnd);
    mainImage.addEventListener('touchstart', handleTouchStart);
    mainImage.addEventListener('touchend', handleTouchEnd);
}

function updateSwipeDots(imageCount) {
    const container = document.getElementById('gallery-swipe-dots');
    if (!container) return;

    container.innerHTML = '';
    for (let i = 0; i < imageCount; i++) {
        const dot = document.createElement('div');
        dot.className = `swipe-dot ${i === currentGalleryIndex ? 'active' : ''}`;
        container.appendChild(dot);
    }
}

// Add to window exports
window.openProductGallery = openProductGallery;
window.closeProductGallery = closeProductGallery;
window.setGalleryImage = setGalleryImage;
window.nextGalleryImage = nextGalleryImage;
window.prevGalleryImage = prevGalleryImage;
window.selectGallerySize = selectGallerySize;
window.addFromGalleryToCart = addFromGalleryToCart;
window.addFromGalleryToWishlist = addFromGalleryToWishlist;

window.openSearch = openSearch;
window.closeSearch = closeSearch;
window.runSearch = runSearch;
window.openSearchAction = openSearchAction;
window.closeSearchAction = closeSearchAction;
window.sacSelectSize = sacSelectSize;
window.sacAddToCart = sacAddToCart;
window.sacAddToWishlist = sacAddToWishlist;

// ========== ENHANCED WHATSAPP WITH INQUIRY VS ORDER OPTION ==========

// Show choice modal: Inquiry or Place Order
function showCheckoutChoice() {
    if (cart.length === 0) {
        showToast('Your cart is empty! Add some items first.');
        return;
    }

    // Create choice modal
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-[1002] flex items-center justify-center p-4';
    modal.id = 'checkout-choice-modal';

    const backdrop = document.createElement('div');
    backdrop.className = 'absolute inset-0 bg-black/80 backdrop-blur-sm';
    backdrop.onclick = () => modal.remove();

    const content = document.createElement('div');
    content.className = 'relative bg-gray-900 rounded-3xl max-w-md w-full border border-gray-800 shadow-2xl p-6 transform transition-all duration-300 scale-95 opacity-0';
    content.id = 'checkout-choice-content';

    // Calculate cart total
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    content.innerHTML = `
        <div class="text-center mb-6">
            <div class="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i data-lucide="message-circle" class="w-8 h-8 text-orange-500"></i>
            </div>
            <h3 class="text-2xl font-bold text-white">How can we help?</h3>
            <p class="text-gray-400 text-sm mt-2">
                You have ${totalItems} item${totalItems !== 1 ? 's' : ''} ($${totalPrice.toFixed(2)})
            </p>
        </div>
        
        <div class="space-y-3">
            <!-- Inquiry Button -->
            <button onclick="sendInquiryOnly()" 
                class="w-full bg-gray-800 hover:bg-gray-700 text-white py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-3 border border-gray-700">
                <i data-lucide="help-circle" class="w-5 h-5 text-orange-500"></i>
                💬 Quick Inquiry (No details needed)
            </button>
            <p class="text-xs text-gray-500 text-center -mt-1">Ask about sizing, availability, or shipping</p>
            
            <!-- Divider -->
            <div class="relative my-4">
                <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-700"></div>
                </div>
                <div class="relative flex justify-center text-xs">
                    <span class="px-2 bg-gray-900 text-gray-500">OR</span>
                </div>
            </div>
            
            <!-- Place Order Button -->
            <button onclick="showCustomerInfoModal()" 
                class="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-3">
                <i data-lucide="shopping-cart" class="w-5 h-5"></i>
                📦 Place Order (Requires details)
            </button>
            <p class="text-xs text-gray-500 text-center -mt-1">We'll need your name, phone & address</p>
        </div>
        
        <button onclick="modal.remove()" 
            class="w-full mt-6 py-2 text-gray-500 hover:text-white text-sm transition-colors">
            Cancel
        </button>
    `;

    modal.appendChild(backdrop);
    modal.appendChild(content);
    document.body.appendChild(modal);

    setTimeout(() => {
        document.getElementById('checkout-choice-content').classList.remove('scale-95', 'opacity-0');
        document.getElementById('checkout-choice-content').classList.add('scale-100', 'opacity-100');
    }, 10);

    lucide.createIcons();
}

// ========== QUICK INQUIRY (No details needed) ==========
function sendInquiryOnly() {
    if (cart.length === 0) {
        showToast('Your cart is empty! Add some items first.');
        document.getElementById('checkout-choice-modal')?.remove();
        return;
    }

    const phoneNumber = '263773184147';
    
    let message = `👋 *SOLEMATES INQUIRY*\n\n`;
    message += `Hello! I'm interested in these items:\n\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `🛒 *ITEMS IN MY CART*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━\n\n`;

    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        message += `*${index + 1}. ${item.name}*\n`;
        message += `   👟 Size: EU ${item.size}\n`;
        message += `   💰 Price: $${item.price}\n`;
        message += `   🔢 Qty: ${item.quantity}\n`;
        message += `   📊 Subtotal: $${itemTotal}\n\n`;
    });

    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `💰 *TOTAL: $${total}*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
    message += `📋 *My Questions:*\n`;
    message += `(Please reply with any questions you have)\n\n`;
    message += `🙏 Thank you! Please get back to me when possible.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Close the choice modal
    document.getElementById('checkout-choice-modal')?.remove();
    
    window.open(whatsappURL, '_blank');
    showToast('Inquiry sent! The store will respond shortly.', 'success');
}

// ========== CUSTOMER INFO MODAL (For placing orders) ==========
let currentCustomerInfo = {
    name: '',
    phone: '',
    address: ''
};

function showCustomerInfoModal() {
    // Close the choice modal if open
    document.getElementById('checkout-choice-modal')?.remove();
    
    if (cart.length === 0) {
        showToast('Your cart is empty! Add some items first.');
        return;
    }

    // Create modal for customer info
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-[1002] flex items-center justify-center p-4';
    modal.id = 'customer-info-modal';

    const backdrop = document.createElement('div');
    backdrop.className = 'absolute inset-0 bg-black/80 backdrop-blur-sm';
    backdrop.onclick = () => modal.remove();

    const content = document.createElement('div');
    content.className = 'relative bg-gray-900 rounded-3xl max-w-md w-full border border-gray-800 shadow-2xl p-6 transform transition-all duration-300 scale-95 opacity-0';
    content.id = 'customer-info-content';

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    content.innerHTML = `
        <div class="text-center mb-6">
            <div class="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i data-lucide="clipboard-list" class="w-8 h-8 text-orange-500"></i>
            </div>
            <h3 class="text-2xl font-bold text-white">Complete Your Order</h3>
            <p class="text-gray-400 text-sm mt-1">
                ${totalItems} item${totalItems !== 1 ? 's' : ''} • Total: $${totalPrice.toFixed(2)}
            </p>
        </div>
        
        <form id="customer-info-form" class="space-y-4">
            <div>
                <label class="text-white text-sm font-medium mb-1 block">Full Name *</label>
                <input type="text" id="customer-name" required
                    placeholder="Enter preferred name"
                    class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-orange-500">
            </div>
            
            <div>
                <label class="text-white text-sm font-medium mb-1 block">Phone Number *</label>
                <input type="tel" id="customer-phone" required
                    placeholder="Enter Active Number"
                    class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-orange-500">
            </div>
            
            <div>
                <label class="text-white text-sm font-medium mb-1 block">Delivery Address *</label>
                <textarea id="customer-address" rows="2" required
                    placeholder="Enter preferred delivery location"
                    class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-orange-500"></textarea>
            </div>
            
            <div class="bg-orange-500/10 rounded-xl p-3 border border-orange-500/20">
                <p class="text-xs text-gray-300 flex items-center gap-1">
                    <i data-lucide="info" class="w-3 h-3 text-orange-500"></i>
                    Your order details will be sent via WhatsApp for confirmation
                </p>
            </div>
            
            <div class="flex gap-3 pt-4">
                <button type="button" onclick="document.getElementById('customer-info-modal').remove()"
                    class="flex-1 px-4 py-3 bg-gray-800 rounded-xl text-gray-300 hover:bg-gray-700 transition-colors">
                    Cancel
                </button>
                <button type="submit"
                    class="flex-1 px-4 py-3 bg-orange-500 rounded-xl text-white font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                    <i data-lucide="send" class="w-5 h-5"></i>
                    Send Order
                </button>
            </div>
        </form>
    `;

    modal.appendChild(backdrop);
    modal.appendChild(content);
    document.body.appendChild(modal);

    setTimeout(() => {
        document.getElementById('customer-info-content').classList.remove('scale-95', 'opacity-0');
        document.getElementById('customer-info-content').classList.add('scale-100', 'opacity-100');
    }, 10);

    lucide.createIcons();

    // Form submission
    document.getElementById('customer-info-form').addEventListener('submit', (e) => {
        e.preventDefault();
        currentCustomerInfo.name = document.getElementById('customer-name').value;
        currentCustomerInfo.phone = document.getElementById('customer-phone').value;
        currentCustomerInfo.address = document.getElementById('customer-address').value;
        
        modal.remove();
        sendFullOrderToWhatsApp();
    });
}
// ========== SEND FULL ORDER - WITH EMAIL & GOOGLE SHEETS ==========
async function sendFullOrderToWhatsApp() {
    if (cart.length === 0) return;

    const phoneNumber = '263773184147';
    const orderId = 'SOLE-' + Date.now().toString().slice(-8);
    const orderDate = new Date().toLocaleString();

    let message = `🏆 *SOLEMATES OFFICIAL ORDER* 🏆\n\n`;
    message += `📋 *ORDER ID:* ${orderId}\n`;
    message += `📅 *DATE:* ${orderDate}\n`;
    message += `👤 *CUSTOMER:* ${currentCustomerInfo.name}\n`;
    message += `📞 *PHONE:* ${currentCustomerInfo.phone}\n`;
    message += `📍 *ADDRESS:* ${currentCustomerInfo.address}\n\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `🛒 *ORDER SUMMARY*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━\n\n`;

    let total = 0;
    let itemsList = [];

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        itemsList.push({
            id: item.id,
            name: item.name,
            size: item.size,
            price: item.price,
            quantity: item.quantity,
            subtotal: itemTotal
        });

        message += `*${index + 1}. ${item.name}*\n`;
        message += `   👟 Size: EU ${item.size}\n`;
        message += `   💰 Price: $${item.price}\n`;
        message += `   🔢 Quantity: ${item.quantity}\n`;
        message += `   📊 Subtotal: $${itemTotal}\n\n`;
    });

    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `💰 *TOTAL AMOUNT:* $${total}\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
    message += `📦 *SHIPPING:* To be confirmed\n`;
    message += `💳 *PAYMENT METHOD:* To be confirmed\n\n`;
    message += `🙏 Thank you for shopping with SoleMates! We'll confirm your order shortly.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Prepare order data for Google Sheets & Email
    const orderDataForSheets = {
        orderId: orderId,
        date: new Date().toISOString(),
        dateFormatted: orderDate,
        customerName: currentCustomerInfo.name,
        customerPhone: currentCustomerInfo.phone,
        customerAddress: currentCustomerInfo.address,
        totalAmount: total,
        totalItems: itemsList.reduce((sum, item) => sum + item.quantity, 0),
        items: itemsList.map(item => `${item.name} (Size:${item.size}, Qty:${item.quantity}, $${item.subtotal})`).join(' | '),
        itemsDetail: JSON.stringify(itemsList),
        status: 'pending',
        source: 'website'
    };
    
    // 1. Save to Order Dashboard (localStorage)
    saveOrderToDashboard(orderId, itemsList, total, currentCustomerInfo);
    
    // 2. Save to local backup
    const existingBackup = JSON.parse(localStorage.getItem('solemates_orders_backup') || '[]');
    existingBackup.push(orderDataForSheets);
    localStorage.setItem('solemates_orders_backup', JSON.stringify(existingBackup));
    console.log('💾 Order saved to local backup');
    
    // 3. Send to Google Sheets (which will also send email)
    const GOOGLE_ORDERS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwg7RwqdgrXAYoCpKi9LVXmJIDj0eMPK9AjRz04XjWlPbDTpns5CWYr2pKQVYC23_uG/exec';
    
    try {
        console.log('📤 Sending order to Google Sheets & Email...');
        
        await fetch(GOOGLE_ORDERS_ENDPOINT, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderDataForSheets)
        });
        
        console.log('✅ Order sent to Google Sheets! Email notification should be sent.');
        showToast(`Order #${orderId} saved! Check your email.`, 'success');
        
    } catch (error) {
        console.error('❌ Failed to send:', error);
        showToast(`Order #${orderId} saved locally - will sync when online`, 'warning');
    }
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Ask if user wants to clear cart
    setTimeout(() => {
        if (confirm('Order sent successfully! Would you like to clear your cart?')) {
            cart = [];
            saveCartToStorage();
            updateCartUI();
            showToast('Cart cleared. Thank you for your order!', 'success');
        }
    }, 1000);
}
// ========== ORDER DASHBOARD SYSTEM (Same as before) ==========

function saveOrderToDashboard(orderId, items, total, customerInfo) {
    const orders = JSON.parse(localStorage.getItem('solemates_orders')) || [];
    
    const order = {
        orderId: orderId,
        date: new Date().toISOString(),
        dateFormatted: new Date().toLocaleString(),
        customer: {
            name: customerInfo.name,
            phone: customerInfo.phone,
            address: customerInfo.address
        },
        items: items.map(item => ({
            id: item.id,
            name: item.name,
            size: item.size,
            price: item.price,
            quantity: item.quantity,
            subtotal: item.subtotal
        })),
        total: total,
        status: 'pending',
        whatsappSent: true
    };
    
    orders.unshift(order);
    localStorage.setItem('solemates_orders', JSON.stringify(orders));
    
    console.log('✅ Order saved to dashboard:', order);
    console.log('📊 Total orders in dashboard:', orders.length);
    
    // Also log to verify
    return order;
}

function updateDashboardBadge() {
    const orders = JSON.parse(localStorage.getItem('solemates_orders')) || [];
    console.log(`📊 Dashboard: ${orders.length} total orders`);
}

// Open Order Dashboard
function openOrderDashboard() {
    const orders = JSON.parse(localStorage.getItem('solemates_orders')) || [];
    
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-[1003] overflow-y-auto';
    modal.id = 'order-dashboard-modal';
    
    const backdrop = document.createElement('div');
    backdrop.className = 'fixed inset-0 bg-black/90 backdrop-blur-sm';
    backdrop.onclick = () => modal.remove();
    
    const content = document.createElement('div');
    content.className = 'relative min-h-screen flex items-center justify-center p-4';
    
    let ordersHTML = '';
    if (orders.length === 0) {
        ordersHTML = `
            <div class="text-center py-16">
                <div class="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i data-lucide="package" class="w-10 h-10 text-gray-600"></i>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">No Orders Yet</h3>
                <p class="text-gray-400">Orders placed via WhatsApp will appear here</p>
            </div>
        `;
    } else {
        ordersHTML = orders.map((order, idx) => `
            <div class="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden mb-4">
                <div class="p-4 bg-gray-800/50 border-b border-gray-700 flex flex-wrap justify-between items-center gap-3">
                    <div>
                        <p class="text-orange-500 font-mono text-sm">${order.orderId}</p>
                        <p class="text-gray-400 text-xs">${new Date(order.date).toLocaleString()}</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="px-3 py-1 rounded-full text-xs font-medium ${
                            order.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                            order.status === 'confirmed' ? 'bg-green-500/20 text-green-400' :
                            order.status === 'shipped' ? 'bg-blue-500/20 text-blue-400' :
                            order.status === 'delivered' ? 'bg-purple-500/20 text-purple-400' :
                            'bg-red-500/20 text-red-400'
                        }">${order.status.toUpperCase()}</span>
                        <button onclick="updateOrderStatus('${order.orderId}')" class="text-xs text-orange-500 hover:text-orange-400">
                            Update
                        </button>
                    </div>
                </div>
                <div class="p-4">
                    <div class="grid grid-cols-2 gap-3 text-sm mb-3">
                        <div>
                            <p class="text-gray-500 text-xs">Customer</p>
                            <p class="text-white font-medium">${order.customer.name}</p>
                            <p class="text-gray-400 text-xs">${order.customer.phone}</p>
                        </div>
                        <div>
                            <p class="text-gray-500 text-xs">Delivery Address</p>
                            <p class="text-white text-sm">${order.customer.address.substring(0, 50)}${order.customer.address.length > 50 ? '...' : ''}</p>
                        </div>
                    </div>
                    <div class="border-t border-gray-700 pt-3">
                        <p class="text-gray-500 text-xs mb-2">Items (${order.items.length})</p>
                        <div class="space-y-2">
                            ${order.items.map(item => `
                                <div class="flex justify-between text-sm">
                                    <span class="text-gray-300">${item.name}</span>
                                    <div class="flex gap-3 text-gray-400">
                                        <span>Size: ${item.size}</span>
                                        <span>Qty: ${item.quantity}</span>
                                        <span class="text-orange-400">$${item.subtotal}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="border-t border-gray-700 pt-3 mt-3 flex justify-between">
                        <span class="text-white font-bold">Total</span>
                        <span class="text-orange-500 font-bold">$${order.total}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    content.innerHTML = `
        <div class="relative w-full max-w-4xl bg-gray-900 rounded-3xl border border-gray-800 shadow-2xl">
            <div class="sticky top-0 bg-gray-900 rounded-t-3xl border-b border-gray-800 p-6 flex justify-between items-center">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                        <i data-lucide="layout-dashboard" class="w-5 h-5 text-orange-500"></i>
                    </div>
                    <div>
                        <h2 class="text-xl font-bold text-white">Order Dashboard</h2>
                        <p class="text-gray-400 text-sm">${orders.length} total orders</p>
                    </div>
                </div>
                <div class="flex gap-2">
                    <button onclick="exportOrdersToCSV()" class="px-3 py-2 bg-gray-800 rounded-lg text-gray-300 hover:bg-orange-500 hover:text-white transition-colors text-sm">
                        <i data-lucide="download" class="w-4 h-4 inline"></i> Export
                    </button>
                    <button onclick="document.getElementById('order-dashboard-modal').remove()" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                        <i data-lucide="x" class="w-5 h-5"></i>
                    </button>
                </div>
            </div>
            <div class="p-6 max-h-[70vh] overflow-y-auto">
                ${ordersHTML}
            </div>
            <div class="border-t border-gray-800 p-4 text-center">
                <button onclick="clearAllOrders()" class="text-red-500 text-sm hover:text-red-400 transition-colors">
                    Clear All Orders
                </button>
            </div>
        </div>
    `;
    
    modal.appendChild(backdrop);
    modal.appendChild(content);
    document.body.appendChild(modal);
    
    lucide.createIcons();
}

function updateOrderStatus(orderId) {
    const orders = JSON.parse(localStorage.getItem('solemates_orders')) || [];
    const orderIndex = orders.findIndex(o => o.orderId === orderId);
    
    if (orderIndex !== -1) {
        const statuses = ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'];
        const currentIndex = statuses.indexOf(orders[orderIndex].status);
        const nextStatus = statuses[(currentIndex + 1) % statuses.length];
        
        orders[orderIndex].status = nextStatus;
        localStorage.setItem('solemates_orders', JSON.stringify(orders));
        
        showToast(`Order ${orderId} status updated to ${nextStatus}`, 'success');
        
        document.getElementById('order-dashboard-modal')?.remove();
        openOrderDashboard();
    }
}

function exportOrdersToCSV() {
    const orders = JSON.parse(localStorage.getItem('solemates_orders')) || [];
    
    if (orders.length === 0) {
        showToast('No orders to export', 'error');
        return;
    }
    
    let csv = 'Order ID,Date,Customer Name,Phone,Address,Items,Sizes,Quantities,Total,Status\n';
    
    orders.forEach(order => {
        const itemsNames = order.items.map(i => i.name).join(' | ');
        const itemsSizes = order.items.map(i => i.size).join(' | ');
        const itemsQtys = order.items.map(i => i.quantity).join(' | ');
        
        csv += `"${order.orderId}","${new Date(order.date).toLocaleString()}","${order.customer.name}","${order.customer.phone}","${order.customer.address.replace(/"/g, '""')}","${itemsNames}","${itemsSizes}","${itemsQtys}","${order.total}","${order.status}"\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `solemates-orders-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    
    showToast('Orders exported to CSV!', 'success');
}

function clearAllOrders() {
    if (confirm('⚠️ WARNING: This will delete ALL orders. Are you sure?')) {
        localStorage.removeItem('solemates_orders');
        showToast('All orders cleared', 'success');
        document.getElementById('order-dashboard-modal')?.remove();
    }
}

// Override the original checkout function
window.checkoutToWhatsApp = showCheckoutChoice;

// Add new functions to global scope
window.showCheckoutChoice = showCheckoutChoice;
window.sendInquiryOnly = sendInquiryOnly;
window.showCustomerInfoModal = showCustomerInfoModal;
window.sendFullOrderToWhatsApp = sendFullOrderToWhatsApp;
window.openOrderDashboard = openOrderDashboard;
window.updateOrderStatus = updateOrderStatus;
window.exportOrdersToCSV = exportOrdersToCSV;
window.clearAllOrders = clearAllOrders;

// ============================================================
// MODAL BACK BUTTON HANDLER (Mobile)
// ============================================================

(function() {
    // List of all modal IDs that should close on back button
    const modalsToHandle = [
        { id: 'collection-modal', closeFn: 'closeCollectionModal', isCart: false },
        { id: 'about-modal', closeFn: 'closeAboutModal', isCart: false },
        { id: 'cart-sidebar', closeFn: 'toggleCart', isCart: true },
        { id: 'wishlist-modal', closeFn: 'closeWishlist', isCart: false },
        { id: 'lookbook-modal', closeFn: 'closeLookbook', isCart: false },
        { id: 'lookbook-detail-modal', closeFn: 'closeLookbookDetail', isCart: false },
        { id: 'product-gallery-modal', closeFn: 'closeProductGallery', isCart: false },
        { id: 'size-guide-modal', closeFn: 'closeSizeGuide', isCart: false },
        { id: 'privacy-modal', closeFn: 'closePrivacy', isCart: false },
        { id: 'terms-modal', closeFn: 'closeTerms', isCart: false },
        { id: 'returns-modal', closeFn: 'closeReturnsModal', isCart: false },
        { id: 'clear-cart-modal', closeFn: 'closeClearCartModal', isCart: false },
        { id: 'subscribe-page', closeFn: 'closeSubscribePage', isCart: false },
        { id: 'search-modal', closeFn: 'closeSearch', isCart: false },
        { id: 'search-action-modal', closeFn: 'closeSearchAction', isCart: false }
    ];

    // Check if a modal is currently visible
    function isModalVisible(modalId, isCart) {
        const el = document.getElementById(modalId);
        if (!el) return false;
        if (isCart) {
            return el.classList.contains('open');
        }
        return !el.classList.contains('hidden');
    }

    // Get the topmost (most recently opened) visible modal
    function getTopmostModal() {
        for (let i = modalsToHandle.length - 1; i >= 0; i--) {
            const modal = modalsToHandle[i];
            if (isModalVisible(modal.id, modal.isCart)) {
                return modal;
            }
        }
        return null;
    }

    // Close the topmost modal
    function closeTopmostModal() {
        const topModal = getTopmostModal();
        if (!topModal) return false;
        
        const closeFunction = window[topModal.closeFn];
        if (closeFunction && typeof closeFunction === 'function') {
            closeFunction();
            return true;
        }
        return false;
    }

    // Intercept back button
    window.addEventListener('popstate', function(event) {
        if (closeTopmostModal()) {
            // Prevent actual navigation by pushing a new state
            history.pushState(null, '', window.location.href);
            event.preventDefault();
            return;
        }
        // No modals open, allow normal back navigation
    });

    // Initialize history state
    history.pushState(null, '', window.location.href);

    // Wrap modal open functions to push history state when opening
    function wrapOpenFunction(originalFn, modalId, isCart) {
        return function(...args) {
            // Check if modal is currently closed
            const el = document.getElementById(modalId);
            const wasClosed = el ? (isCart ? !el.classList.contains('open') : el.classList.contains('hidden')) : true;
            
            const result = originalFn ? originalFn(...args) : undefined;
            
            // If we just opened a modal, push a new history state
            if (wasClosed && el && (isCart ? el.classList.contains('open') : !el.classList.contains('hidden'))) {
                history.pushState(null, '', window.location.href);
            }
            return result;
        };
    }

    // Wrap all modal open functions after they are defined
    setTimeout(() => {
        // Open functions that need wrapping
        const openFunctions = {
            'openCollectionModal': 'collection-modal',
            'openAboutModal': 'about-modal',
            'openWishlist': 'wishlist-modal',
            'openLookbook': 'lookbook-modal',
            'openSizeGuide': 'size-guide-modal',
            'openPrivacy': 'privacy-modal',
            'openTerms': 'terms-modal',
            'openReturnsModal': 'returns-modal',
            'openSubscribePage': 'subscribe-page',
            'openSearch': 'search-modal'
        };

        for (const [fnName, modalId] of Object.entries(openFunctions)) {
            if (window[fnName] && typeof window[fnName] === 'function') {
                const original = window[fnName];
                window[fnName] = wrapOpenFunction(original, modalId, false);
            }
        }

        // Special handling for openLookbookDetail (opens after lookbook is open)
        if (window.openLookbookDetail && typeof window.openLookbookDetail === 'function') {
            const originalDetail = window.openLookbookDetail;
            window.openLookbookDetail = function(...args) {
                const result = originalDetail(...args);
                history.pushState(null, '', window.location.href);
                return result;
            };
        }

        // Special handling for openProductGallery
        if (window.openProductGallery && typeof window.openProductGallery === 'function') {
            const originalGallery = window.openProductGallery;
            window.openProductGallery = function(...args) {
                const result = originalGallery(...args);
                history.pushState(null, '', window.location.href);
                return result;
            };
        }

        // Wrap toggleCart (cart sidebar)
        if (window.toggleCart && typeof window.toggleCart === 'function') {
            const originalCart = window.toggleCart;
            window.toggleCart = function(...args) {
                const sidebar = document.getElementById('cart-sidebar');
                const wasClosed = sidebar ? !sidebar.classList.contains('open') : true;
                const result = originalCart(...args);
                if (wasClosed && sidebar && sidebar.classList.contains('open')) {
                    history.pushState(null, '', window.location.href);
                }
                return result;
            };
        }
    }, 100);
})();

// ============================================================
// GOOGLE SHEETS ORDER SUBMISSION - FIXED VERSION
// ============================================================

// Your Google Apps Script Web App URL (REPLACE THIS with your actual URL!)
const GOOGLE_ORDERS_URL = 'https://script.google.com/macros/s/AKfycbwg7RwqdgrXAYoCpKi9LVXmJIDj0eMPK9AjRz04XjWlPbDTpns5CWYr2pKQVYC23_uG/exec';

// Send order to Google Sheets - WITH PROPER ERROR HANDLING
async function sendOrderToGoogleSheets(orderData) {
    try {
        console.log('📤 Sending order to Google Sheets:', orderData.orderId);
        
        const response = await fetch(GOOGLE_ORDERS_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData)
        });
        
        if (response.ok) {
            const result = await response.json();
            console.log('✅ Order sent to Google Sheets:', result);
            return true;
        } else {
            console.error('❌ Google Sheets returned error:', response.status);
            return false;
        }
    } catch (error) {
        console.error('❌ Failed to send to Google Sheets:', error);
        return false;
    }
}

// Alternative method using JSONP (works if CORS fails)
function sendOrderViaJSONP(orderData) {
    return new Promise((resolve) => {
        const callbackName = 'jsonp_callback_' + Date.now();
        const script = document.createElement('script');
        
        window[callbackName] = function(data) {
            delete window[callbackName];
            document.body.removeChild(script);
            resolve(data.success === true);
        };
        
        const params = new URLSearchParams();
        params.append('data', JSON.stringify(orderData));
        params.append('callback', callbackName);
        
        script.src = `${GOOGLE_ORDERS_URL}?${params.toString()}`;
        script.onerror = () => {
            delete window[callbackName];
            document.body.removeChild(script);
            resolve(false);
        };
        
        document.body.appendChild(script);
        
        setTimeout(() => {
            if (window[callbackName]) {
                delete window[callbackName];
                resolve(false);
            }
        }, 5000);
    });
}

// Save order to localStorage backup
function saveOrderToLocalBackup(orderData) {
    const orders = JSON.parse(localStorage.getItem('solemates_orders_backup')) || [];
    orders.push({ ...orderData, localTimestamp: new Date().toISOString() });
    localStorage.setItem('solemates_orders_backup', JSON.stringify(orders));
    console.log('💾 Order saved to local backup');
}

// Sync pending orders
async function syncPendingOrders() {
    const pending = JSON.parse(localStorage.getItem('solemates_orders_pending')) || [];
    if (pending.length === 0) return;
    
    console.log(`🔄 Syncing ${pending.length} pending orders...`);
    
    for (const order of pending) {
        const success = await sendOrderToGoogleSheets(order);
        if (success) {
            const updated = pending.filter(o => o.orderId !== order.orderId);
            localStorage.setItem('solemates_orders_pending', JSON.stringify(updated));
        }
    }
}

// Enhanced order saving
async function saveAndSendOrder(orderId, items, total, customerInfo) {
    const orderData = {
        orderId: orderId,
        date: new Date().toISOString(),
        dateFormatted: new Date().toLocaleString(),
        customerName: customerInfo.name,
        customerPhone: customerInfo.phone,
        customerAddress: customerInfo.address,
        totalAmount: total,
        totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
        items: items.map(item => `${item.name} (Size:${item.size}, Qty:${item.quantity}, $${item.subtotal})`).join(' | '),
        itemsDetail: JSON.stringify(items),
        status: 'pending',
        source: 'website'
    };
    
    saveOrderToLocalBackup(orderData);
    saveOrderToDashboard(orderId, items, total, customerInfo);
    
    const sheetSuccess = await sendOrderToGoogleSheets(orderData);
    
    if (!sheetSuccess) {
        const pending = JSON.parse(localStorage.getItem('solemates_orders_pending')) || [];
        pending.push(orderData);
        localStorage.setItem('solemates_orders_pending', JSON.stringify(pending));
        console.log('⏳ Order added to pending queue');
        setTimeout(() => syncPendingOrders(), 30000);
    }
    
    return sheetSuccess;
}

// View all orders (enhanced)
function viewAllOrders() {
    const localOrders = JSON.parse(localStorage.getItem('solemates_orders_backup')) || [];
    const pendingOrders = JSON.parse(localStorage.getItem('solemates_orders_pending')) || [];
    const dashboardOrders = JSON.parse(localStorage.getItem('solemates_orders')) || [];
    
    console.log('📦 BACKUP ORDERS:', localOrders.length);
    console.log('⏳ PENDING SYNC:', pendingOrders.length);
    console.log('📋 DASHBOARD ORDERS:', dashboardOrders.length);
    
    if (localOrders.length > 0) {
        console.table(localOrders.map(o => ({
            'Order ID': o.orderId,
            'Customer': o.customerName,
            'Total': '$' + o.totalAmount,
            'Date': o.dateFormatted
        })));
    }
    
    return { backup: localOrders, pending: pendingOrders, dashboard: dashboardOrders };
}

// Manually sync orders
async function manualSyncOrders() {
    showToast('Syncing pending orders...', 'success');
    await syncPendingOrders();
    const pending = JSON.parse(localStorage.getItem('solemates_orders_pending')) || [];
    if (pending.length === 0) {
        showToast('All orders synced! ✅', 'success');
    } else {
        showToast(`${pending.length} orders still pending`, 'error');
    }
}

// Export all orders to CSV
function exportAllOrdersToCSV() {
    const localOrders = JSON.parse(localStorage.getItem('solemates_orders_backup')) || [];
    
    if (localOrders.length === 0) {
        showToast('No orders to export', 'error');
        return;
    }
    
    let csv = 'Order ID,Date,Customer Name,Phone,Address,Total Items,Total Amount,Status\n';
    localOrders.forEach(order => {
        csv += `"${order.orderId}","${order.dateFormatted}","${order.customerName}","${order.customerPhone}","${order.customerAddress.replace(/"/g, '""')}","${order.totalItems}","${order.totalAmount}","${order.status || 'pending'}"\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `solemates-orders-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    showToast(`${localOrders.length} orders exported!`, 'success');
}

// Test connection to Google Sheets
async function testGoogleSheetsConnection() {
    console.log('🔍 Testing Google Sheets connection...');
    console.log('📡 URL:', GOOGLE_ORDERS_URL);
    
    try {
        const response = await fetch(GOOGLE_ORDERS_URL, {
            method: 'GET',
            mode: 'no-cors'
        });
        const data = await response.json();
        console.log('✅ Connection successful!');
        console.log('📊 Response:', data);
        return true;
    } catch (error) {
        console.error('❌ Connection failed:', error);
        console.log('💡 Make sure your Web App URL is correct and deployed');
        return false;
    }
}

// Manual test order
async function testOrder() {
    console.log('🧪 Sending test order...');
    const testData = {
        orderId: 'TEST-' + Date.now(),
        dateFormatted: new Date().toLocaleString(),
        customerName: 'Test Customer',
        customerPhone: '1234567890',
        customerAddress: '123 Test Street',
        totalAmount: 299.99,
        totalItems: 2,
        items: 'Test Item 1 | Test Item 2',
        status: 'test',
        source: 'console-test'
    };
    
    const result = await sendOrderToGoogleSheets(testData);
    console.log('Test result:', result ? '✅ Success - Check your Google Sheet!' : '❌ Failed');
    return result;
}

// Add to window exports
window.viewAllOrders = viewAllOrders;
window.manualSyncOrders = manualSyncOrders;
window.exportAllOrdersToCSV = exportAllOrdersToCSV;
window.testGoogleSheetsConnection = testGoogleSheetsConnection;
window.testOrder = testOrder;