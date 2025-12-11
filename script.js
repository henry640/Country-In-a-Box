// ========== State Management ==========
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentFilter = 'all';
let currentSearchTerm = '';
let itemsPerPage = 12;
let currentPage = 1;
let currentModalItem = null;

// ========== Initialize ==========
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    renderMenu();
    updateCartUI();
    setupEventListeners();
    setupScrollAnimations();
    setupNavigation();
    setupLazyLoading();
}

// ========== Navigation ==========
function setupNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Close mobile menu
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        // Navbar shadow on scroll
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        }
    });

    // Scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
        });
    }
}

// ========== Event Listeners ==========
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value.toLowerCase();
        renderMenu();
    });

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderMenu();
        });
    });

    // Highlight cards
    const highlightCards = document.querySelectorAll('.highlight-card');
    highlightCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            const menuSection = document.getElementById('menu');
            menuSection.scrollIntoView({ behavior: 'smooth' });
            
            setTimeout(() => {
                const filterBtn = document.querySelector(`[data-filter="${category}"]`);
                if (filterBtn) {
                    filterBtn.click();
                }
            }, 500);
        });
    });

    // Contact form
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// ========== Menu Rendering ==========
function renderMenu(resetPage = true) {
    const menuGrid = document.getElementById('menuGrid');
    let filteredItems = menuItems;

    // Apply category filter
    if (currentFilter !== 'all') {
        filteredItems = filteredItems.filter(item => item.category === currentFilter);
    }

    // Apply search filter
    if (currentSearchTerm) {
        filteredItems = filteredItems.filter(item => 
            item.name.toLowerCase().includes(currentSearchTerm) ||
            item.country.toLowerCase().includes(currentSearchTerm) ||
            item.category.toLowerCase().includes(currentSearchTerm) ||
            item.description.toLowerCase().includes(currentSearchTerm)
        );
    }

    // Reset to first page when filter changes
    if (resetPage) {
        currentPage = 1;
    }

    // Render items with pagination
    if (filteredItems.length === 0) {
        menuGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--gray);">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
                <p>No items found matching your criteria.</p>
            </div>
        `;
        return;
    }

    const startIndex = 0;
    const endIndex = currentPage * itemsPerPage;
    const itemsToShow = filteredItems.slice(startIndex, endIndex);
    const hasMore = endIndex < filteredItems.length;

    menuGrid.innerHTML = itemsToShow.map(item => createMenuItemHTML(item)).join('');
    
    // Add Search More button if there are more items
    if (hasMore) {
        const loadMoreBtn = document.createElement('div');
        loadMoreBtn.style.cssText = 'grid-column: 1/-1; text-align: center; padding: 2rem;';
        loadMoreBtn.innerHTML = `
            <button class="btn btn-primary" onclick="loadMoreItems()">
                <i class="fas fa-chevron-down"></i> More (${filteredItems.length - endIndex} remaining)
            </button>
        `;
        menuGrid.appendChild(loadMoreBtn);
    }

    // Setup lazy loading for images
    setupLazyLoading();
}

// ========== Menu Item Modal ==========
function openMenuModal(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    currentModalItem = item;

    document.getElementById('modalImage').src = item.image;
    document.getElementById('modalTitle').textContent = item.name;
    document.getElementById('modalCountry').textContent = item.country;
    document.getElementById('modalCategory').textContent = formatCategory(item.category);
    document.getElementById('modalPreparation').textContent = item.description;
    document.getElementById('modalPrice').textContent = `₱${item.price}`;

    document.getElementById('menuModal').classList.add('active');
    document.getElementById('menuModalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenuModal() {
    document.getElementById('menuModal').classList.remove('active');
    document.getElementById('menuModalOverlay').classList.remove('active');
    document.body.style.overflow = '';
    currentModalItem = null;
}

function addToCartFromModal() {
    if (currentModalItem) {
        addToCart(currentModalItem.id);
        closeMenuModal();
    }
}

function loadMoreItems() {
    currentPage++;
    renderMenu(false); // Don't reset page
    // Scroll to first new item
    setTimeout(() => {
        const menuItems = document.querySelectorAll('.menu-item');
        const targetItem = menuItems[Math.max(0, (currentPage - 1) * itemsPerPage - 3)];
        if (targetItem) {
            targetItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100);
}

function createMenuItemHTML(item) {
    return `
        <div class="menu-item fade-in" onclick="openMenuModal(${item.id})">
            <img data-src="${item.image}" alt="${item.name}" class="menu-item-image lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23ecf0f1' width='400' height='300'/%3E%3C/svg%3E" onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop'">
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <div>
                        <h3 class="menu-item-title">${item.name}</h3>
                        <span class="menu-item-country">${item.country}</span>
                    </div>
                </div>
                <p class="menu-item-category">${formatCategory(item.category)}</p>
                <div class="menu-item-footer">
                    <span class="menu-item-price">₱${item.price}</span>
                    <button class="add-to-cart-btn" data-id="${item.id}" onclick="event.stopPropagation(); addToCart(${item.id})">
                        <i class="fas fa-plus"></i> Add
                    </button>
                </div>
            </div>
        </div>
    `;
}

function formatCategory(category) {
    const categories = {
        asian: 'Asian Flavors',
        filipino: 'Filipino Favorites',
        european: 'European',
        american: 'American & Mediterranean',
        snacks: 'Snacks & Sides',
        drinks: 'Drinks',
        desserts: 'Desserts',
        family: 'Family Box'
    };
    return categories[category] || category;
}

// ========== Shopping Cart ==========
function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    const existingItem = cart.find(i => i.id === itemId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    showNotification(`${item.name} added to cart!`);
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    updateCartUI();
}

function updateQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (!item) return;

    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(itemId);
    } else {
        saveCart();
        updateCartUI();
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartCount.textContent = totalItems;
    cartTotal.textContent = `₱${totalPrice.toFixed(2)}`;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=80&h=80&fit=crop'" loading="lazy">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">₱${item.price}</div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    cartSidebar.classList.toggle('active');
    cartOverlay.classList.toggle('active');
    document.body.style.overflow = cartSidebar.classList.contains('active') ? 'hidden' : '';
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Populate modal with order details
    const checkoutItems = document.getElementById('checkoutItems');
    checkoutItems.innerHTML = cart.map(item => 
        `<div class="checkout-item">${item.name} x${item.quantity}</div>`
    ).join('');
    
    document.getElementById('checkoutTotal').textContent = `Total: ₱${totalPrice.toFixed(2)}`;
    
    // Show modal
    document.getElementById('checkoutModal').classList.add('active');
    document.getElementById('checkoutModalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Close cart sidebar
    toggleCart();
}

function closeCheckoutModal() {
    document.getElementById('checkoutModal').classList.remove('active');
    document.getElementById('checkoutModalOverlay').classList.remove('active');
    
    // Show thank you modal
    setTimeout(() => {
        document.getElementById('thankyouModal').classList.add('active');
        document.getElementById('thankyouModalOverlay').classList.add('active');
    }, 300);
    
    // Clear cart
    cart = [];
    saveCart();
    updateCartUI();
}

function closeThankYouModal() {
    document.getElementById('thankyouModal').classList.remove('active');
    document.getElementById('thankyouModalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// ========== Notifications ==========
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('notification-exit');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// ========== Scroll Animations ==========
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Observe menu items as they're added
    const menuObserver = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.classList && node.classList.contains('fade-in')) {
                    observer.observe(node);
                }
            });
        });
    });

    const menuGrid = document.getElementById('menuGrid');
    if (menuGrid) {
        menuObserver.observe(menuGrid, { childList: true });
    }
}

// ========== Lazy Loading ==========
function setupLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            }
        });
    }, {
        rootMargin: '50px'
    });

    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}
