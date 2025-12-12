        // Data produk
        const products = [
            {
                id: 1,
                name: "Mukena Silky Premium",
                description: "dibuat menggunakan material Silky Grade A yang memberikan sensasi super lembut, sangat adem, dan ringan seperti hembusan angin. Teksturnya yang licin dan glossy memberikan kilau mewah yang menawan, namun tetap menjaga kenyamanan dan tidak mudah kusut.",
                price: 189000,
                originalPrice: 249000,
                images: [
                    "https://i.pinimg.com/736x/e2/00/fc/e200fc039a5256f6fb527df03634ec25.jpg",
                    "https://down-id.img.susercontent.com/file/id-11134207-7r98t-lwdln0m3bmh95f.webp",
                    "https://i.pinimg.com/1200x/c4/d6/86/c4d6864e9d07a22a432746ca38149421.jpg"
                ],
                colors: [
                    { name: "Cyan White", code: "#CCFFFF" },
                    { name: "Cyan Blue", code: "#99FFFF" },
                    { name: "Light Grey", code: "#CCCCCC" }
                ],
                tag: "Bestseller"
            },
            {
                id: 2,
                name: "Mukena French Khimar",
                description: "Perpaduan sempurna antara kepraktisan desain French Khimar, dengan kemewahan material Silky Premium yang halus dan lembut. Bahannya yang flowy dan dingin di kulit memberikan kenyamanan tiada tara, sementara tampilannya yang mewah membuat Anda selalu tampil elegan.",
                price: 230000,
                originalPrice: 299000,
                images: [
                    "https://i.pinimg.com/736x/13/49/52/134952eb42ca4506e9f3e0afba6c3edc.jpg",
                    "https://i.pinimg.com/736x/55/66/6b/55666b885ab05d8b63c619cebc5c8a41.jpg",
                    "https://i.pinimg.com/1200x/d8/3c/dc/d83cdc13562d566086c591b470b67a72.jpg"
                ],
                colors: [
                    { name: "Burgundy Wine", code: "#6C403E" },
                    { name: "Beige", code: "#D1BB9A" },
                    { name: "Broken White", code: "#EADED2" }
                ],
                tag: "Premium"
            },
            {
                id: 3,
                name: "Mukena Katun Rayon",
                description: "Terbuat dari serat katun rayon premium, bahan ini memiliki daya serap keringat yang sangat baik, menjadikannya terasa adem, lembut, dan ringan di kulit, bahkan di cuaca paling panas sekalipun. Potongannya yang jatuh sempurna dan tidak menerawang.",
                price: 149000,
                originalPrice: 199000,
                images: [
                    "https://i.pinimg.com/736x/89/8d/bd/898dbd03edee4c50403d2dd27e3f4076.jpg",
                    "https://i.pinimg.com/1200x/b0/a5/50/b0a550172be7218162896dab6f807f73.jpg",
                    "https://i.pinimg.com/1200x/a6/56/20/a6562033b39961509ef58f8f3f558c61.jpg"
                ],
                colors: [
                    { name: "Hijau Army", code: "#808080" },
                    { name: "Abu-abu", code: "#DAB5BE" },
                    { name: "Coklat", code: "#444B1D" }
                ],
                tag: "Hemat"
            },
            {
                id: 4,
                name: "Mukena Travel",
                description: "dirancang khusus dengan material super ringan dan mudah dilipat, menjadikannya sangat ringkas dan muat dalam tas sekecil apa pun. Dilengkapi dengan pouch cantik yang praktis, mukena ini siap menemani perjalanan, kantor, atau acara di luar rumah.",
                price: 199000,
                originalPrice: 249000,
                images: [
                    "https://i.pinimg.com/1200x/85/ed/d6/85edd6e764fb7eb80aed2506e9ee0068.jpg",
                    "https://i.pinimg.com/1200x/85/9c/dd/859cddb2a040e190f693c275ee9c1610.jpg",
                    "https://i.pinimg.com/1200x/f1/33/f0/f133f0414d21c9d63ddc7523ea14d2ce.jpg"
                ],
                colors: [
                    { name: "Navy", code: "#E2C5CC" },
                    { name: "Maroon", code: "#C3B091" },
                    { name: "Tosca", code: "#EFDCCC" }
                ],
                tag: "New"
            },
            {
                id: 5,
                name: "Mukena Lajuran",
                description: "Dengan desain satu potong dari kepala hingga kaki, mukena ini siap pakai tanpa perlu merapikan bawahan, menghilangkan risiko terbukanya aurat saat bergerak. Dibuat dengan potongan yang longgar dan lebar, serta material Satin yang jatuh dan tidak membentuk tubuh.",
                price: 225000,
                originalPrice: 279000,
                images: [
                    "https://i.pinimg.com/736x/6b/c6/9d/6bc69dd67b77a87719c2e9f0eee4f908.jpg",
                    "https://i.pinimg.com/1200x/81/b9/5e/81b95e31767087eeb5fbb83eeb8d12ad.jpg",
                    "https://i.pinimg.com/1200x/86/69/7e/86697e462c42dc951bd89ff452f52be8.jpg"
                ],
                colors: [
                    { name: "Biru Dongker", code: "#A08679" },
                    { name: "Ungu", code: "#B7E4C7" },
                    { name: "Merah", code: "#BCA89F" }
                ],
                tag: "Travel"
            },
            {
                id: 6,
                name: "Mukena Anak Premium",
                description: "Terbuat dari bahan Katun Jepang yang sangat lembut, adem, dan tidak gerah, membuat anak betah berlama-lama mengenakannya. Hadir dengan  warna-warna cerah yang disukai anak-anak. Membantu menumbuhkan rasa suka dan semangat beribadah sejak dini.",
                price: 109000,
                originalPrice: 149000,
                images: [
                    "https://i.pinimg.com/736x/a8/26/1c/a8261c4d45edc6e468a744a2b009e593.jpg",
                    "https://i.pinimg.com/736x/51/c1/ac/51c1accb520c7641533edab2bd3166af.jpg",
                    "https://i.pinimg.com/736x/76/b1/1b/76b11b084f359dde732b6835a2777289.jpg"
                ],
                colors: [
                    { name: "Pink", code: "#926E68" },
                    { name: "Kuning", code: "#D1C5B8" },
                    { name: "Hijau Mint", code: "#000000" }
                ],
                tag: "Anak"
            }
        ];

        // State aplikasi
        let cart = [];
        let currentProduct = null;
        let currentStep = 1;
        let selectedPaymentMethod = null;
        let currentSlideIndex = 0;

        // DOM Elements
        const productsGrid = document.getElementById('productsGrid');
        const cartIcon = document.getElementById('cartIcon');
        const cartCount = document.querySelector('.cart-count');
        const cartModal = document.getElementById('cartModal');
        const closeCartModal = document.getElementById('closeCartModal');
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        const checkoutBtn = document.getElementById('checkoutBtn');
        const productDetailModal = document.getElementById('productDetailModal');
        const closeDetailModal = document.getElementById('closeDetailModal');
        const productDetailContent = document.getElementById('productDetailContent');
        const checkoutModal = document.getElementById('checkoutModal');
        const closeCheckoutModal = document.getElementById('closeCheckoutModal');
        const trackingModal = document.getElementById('trackingModal');
        const closeTrackingModal = document.getElementById('closeTrackingModal');
        const trackingLink = document.getElementById('trackingLink');
        const orderConfirmationModal = document.getElementById('orderConfirmationModal');
        const closeOrderConfirmModal = document.getElementById('closeOrderConfirmModal');
        const mobileToggle = document.getElementById('mobileToggle');
        const navLinks = document.getElementById('navLinks');

        // Format harga ke Rupiah
        function formatRupiah(amount) {
            return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0
            }).format(amount);
        }

        // Render produk
        function renderProducts() {
            productsGrid.innerHTML = '';
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <div class="product-img">
                        <img src="${product.images[0]}" alt="${product.name}">
                        ${product.tag ? `<div class="product-tag">${product.tag}</div>` : ''}
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <div class="product-price">
                            <div class="price">
                                ${product.originalPrice ? `<span class="original-price">${formatRupiah(product.originalPrice)}</span>` : ''}
                                ${formatRupiah(product.price)}
                            </div>
                        </div>
                        <div class="product-actions">
                            <button class="btn btn-small btn-view-detail" data-id="${product.id}">Detail</button>
                            <button class="btn btn-small btn-secondary btn-add-to-cart" data-id="${product.id}">+ Keranjang</button>
                        </div>
                    </div>
                `;
                productsGrid.appendChild(productCard);
            });

            // Tambahkan event listener untuk tombol detail
            document.querySelectorAll('.btn-view-detail').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(e.target.getAttribute('data-id'));
                    showProductDetail(productId);
                });
            });

            // Tambahkan event listener untuk tombol tambah ke keranjang
            document.querySelectorAll('.btn-add-to-cart').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(e.target.getAttribute('data-id'));
                    addToCart(productId);
                });
            });
        }

        // Tampilkan detail produk
        function showProductDetail(productId) {
            currentProduct = products.find(p => p.id === productId);
            currentSlideIndex = 0;
            
            if (!currentProduct) return;
            
            productDetailContent.innerHTML = `
                <div class="product-slider">
                    <div class="slide-container">
                        <img src="${currentProduct.images[currentSlideIndex]}" alt="${currentProduct.name}" id="detailImage">
                    </div>
                    <div class="slide-nav">
                        ${currentProduct.images.map((_, index) => 
                            `<div class="slide-dot ${index === currentSlideIndex ? 'active' : ''}" data-index="${index}"></div>`
                        ).join('')}
                    </div>
                </div>
                <div class="product-details">
                    <h2>${currentProduct.name}</h2>
                    <p>${currentProduct.description}</p>
                    <div class="product-price" style="margin: 20px 0;">
                        <div class="price">
                            ${currentProduct.originalPrice ? `<span class="original-price">${formatRupiah(currentProduct.originalPrice)}</span>` : ''}
                            ${formatRupiah(currentProduct.price)}
                        </div>
                    </div>
                    
                    <h4>Pilih Warna:</h4>
                    <div class="color-options">
                        ${currentProduct.colors.map((color, index) => 
                            `<div class="color-option ${index === 0 ? 'selected' : ''}" 
                                  style="background-color: ${color.code};"
                                  data-color="${color.name}"
                                  title="${color.name}"></div>`
                        ).join('')}
                    </div>
                    
                    <div style="margin: 30px 0;">
                        <button class="btn" id="addToCartFromDetail">+ Tambah ke Keranjang</button>
                        <button class="btn btn-secondary" id="buyNowFromDetail" style="margin-left: 10px;">Beli Sekarang</button>
                    </div>
                </div>
            `;
            
            productDetailModal.style.display = 'block';
            
            // Tambahkan event listener untuk dot slider
            document.querySelectorAll('.slide-dot').forEach(dot => {
                dot.addEventListener('click', (e) => {
                    const index = parseInt(e.target.getAttribute('data-index'));
                    currentSlideIndex = index;
                    document.getElementById('detailImage').src = currentProduct.images[currentSlideIndex];
                    
                    // Update active dot
                    document.querySelectorAll('.slide-dot').forEach((d, i) => {
                        d.classList.toggle('active', i === index);
                    });
                });
            });
            
            // Tambahkan event listener untuk pilihan warna
            document.querySelectorAll('.color-option').forEach(option => {
                option.addEventListener('click', (e) => {
                    document.querySelectorAll('.color-option').forEach(opt => {
                        opt.classList.remove('selected');
                    });
                    e.target.classList.add('selected');
                });
            });
            
            // Tambahkan event listener untuk tombol tambah ke keranjang
            document.getElementById('addToCartFromDetail').addEventListener('click', () => {
                const selectedColor = document.querySelector('.color-option.selected').getAttribute('data-color');
                addToCart(currentProduct.id, selectedColor);
            });
            
            // Tambahkan event listener untuk tombol beli sekarang
            document.getElementById('buyNowFromDetail').addEventListener('click', () => {
                const selectedColor = document.querySelector('.color-option.selected').getAttribute('data-color');
                addToCart(currentProduct.id, selectedColor, true);
            });
        }

        // Tambahkan produk ke keranjang
        function addToCart(productId, color = null, buyNow = false) {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            const selectedColor = color || product.colors[0].name;
            
            // Cek apakah produk dengan warna yang sama sudah ada di keranjang
            const existingItemIndex = cart.findIndex(item => item.id === productId && item.color === selectedColor);
            
            if (existingItemIndex !== -1) {
                // Jika sudah ada, tambahkan kuantitas
                cart[existingItemIndex].quantity += 1;
            } else {
                // Jika belum ada, tambahkan item baru
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.images[0],
                    color: selectedColor,
                    quantity: 1
                });
            }
            
            updateCart();
            
            if (buyNow) {
                productDetailModal.style.display = 'none';
                cartModal.style.display = 'none';
                showCheckout();
            }
        }

        // Update tampilan keranjang
        function updateCart() {
            // Update jumlah item di ikon keranjang
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;
            
            // Update tampilan modal keranjang jika terbuka
            if (cartModal.style.display === 'block') {
                renderCartItems();
            }
        }

        // Render item di keranjang
        function renderCartItems() {
            if (cart.length === 0) {
                cartItems.innerHTML = '<p style="text-align: center; padding: 30px;">Keranjang belanja kosong</p>';
                cartTotal.textContent = formatRupiah(0);
                return;
            }
            
            cartItems.innerHTML = '';
            let total = 0;
            
            cart.forEach((item, index) => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-color">Warna: ${item.color}</div>
                        <div class="cart-item-price">${formatRupiah(item.price)}</div>
                    </div>
                    <div class="cart-item-actions">
                        <div class="quantity-control">
                            <div class="quantity-btn" data-index="${index}" data-action="decrease">-</div>
                            <span>${item.quantity}</span>
                            <div class="quantity-btn" data-index="${index}" data-action="increase">+</div>
                        </div>
                        <div style="margin-left: 20px; font-weight: 600;">${formatRupiah(itemTotal)}</div>
                        <div class="quantity-btn" data-index="${index}" data-action="remove" style="margin-left: 20px; color: #ff6b6b;">
                            <i class="fas fa-trash"></i>
                        </div>
                    </div>
                `;
                cartItems.appendChild(cartItem);
            });
            
            cartTotal.textContent = formatRupiah(total);
            
            // Tambahkan event listener untuk kontrol kuantitas
            document.querySelectorAll('.quantity-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const index = parseInt(e.target.closest('.quantity-btn').getAttribute('data-index'));
                    const action = e.target.closest('.quantity-btn').getAttribute('data-action');
                    
                    if (action === 'increase') {
                        cart[index].quantity += 1;
                    } else if (action === 'decrease') {
                        if (cart[index].quantity > 1) {
                            cart[index].quantity -= 1;
                        } else {
                            cart.splice(index, 1);
                        }
                    } else if (action === 'remove') {
                        cart.splice(index, 1);
                    }
                    
                    updateCart();
                });
            });
        }

        // Tampilkan checkout
        function showCheckout() {
            if (cart.length === 0) {
                alert('Keranjang belanja kosong. Tambahkan produk terlebih dahulu.');
                return;
            }
            
            // Reset form checkout
            currentStep = 1;
            selectedPaymentMethod = null;
            updateCheckoutSteps();
            
            // Tampilkan modal checkout
            checkoutModal.style.display = 'block';
        }

        // Update langkah checkout
        function updateCheckoutSteps() {
            // Update langkah aktif
            document.querySelectorAll('.step').forEach((step, index) => {
                const stepNumber = index + 1;
                step.classList.remove('active', 'completed');
                
                if (stepNumber < currentStep) {
                    step.classList.add('completed');
                } else if (stepNumber === currentStep) {
                    step.classList.add('active');
                }
            });
            
            // Tampilkan konten langkah yang sesuai
            document.getElementById('step1Content').style.display = currentStep === 1 ? 'block' : 'none';
            document.getElementById('step2Content').style.display = currentStep === 2 ? 'block' : 'none';
            document.getElementById('step3Content').style.display = currentStep === 3 ? 'block' : 'none';
            
            // Hitung total untuk pembayaran
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const codTotal = total + 10000;
            
            // Update jumlah pembayaran
            document.getElementById('paymentAmount').textContent = formatRupiah(total);
            document.getElementById('qrisAmount').textContent = formatRupiah(total);
            document.getElementById('codAmount').textContent = formatRupiah(codTotal);
            
            // Render ringkasan pesanan untuk langkah 3
            if (currentStep === 3) {
                renderOrderSummary();
            }
        }

        // Render ringkasan pesanan
        function renderOrderSummary() {
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const codTotal = total + 10000;
            const finalTotal = selectedPaymentMethod === 'cod' ? codTotal : total;
            
            const name = document.getElementById('name').value || '-';
            const phone = document.getElementById('phone').value || '-';
            const address = document.getElementById('address').value || '-';
            const city = document.getElementById('city').value || '-';
            const postalCode = document.getElementById('postalCode').value || '-';
            
            let paymentMethodText = '';
            switch(selectedPaymentMethod) {
                case 'transfer':
                    paymentMethodText = 'Transfer Bank';
                    break;
                case 'qris':
                    paymentMethodText = 'QRIS';
                    break;
                case 'cod':
                    paymentMethodText = 'Cash On Delivery (COD)';
                    break;
                default:
                    paymentMethodText = '-';
            }
            
            document.getElementById('orderSummary').innerHTML = `
                <div style="background-color: #f9f9f9; padding: 20px; border-radius: 10px;">
                    <h4>Informasi Pengiriman</h4>
                    <p><strong>Nama:</strong> ${name}</p>
                    <p><strong>Telepon:</strong> ${phone}</p>
                    <p><strong>Alamat:</strong> ${address}</p>
                    <p><strong>Kota:</strong> ${city}, ${postalCode}</p>
                    
                    <h4 style="margin-top: 20px;">Metode Pembayaran</h4>
                    <p><strong>Metode:</strong> ${paymentMethodText}</p>
                    <p><strong>Total Pembayaran:</strong> ${formatRupiah(finalTotal)}</p>
                    
                    <h4 style="margin-top: 20px;">Rincian Pesanan</h4>
                    ${cart.map(item => `
                        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                            <span>${item.name} (${item.color}) x${item.quantity}</span>
                            <span>${formatRupiah(item.price * item.quantity)}</span>
                        </div>
                    `).join('')}
                    
                    ${selectedPaymentMethod === 'cod' ? `
                        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                            <span>Biaya COD</span>
                            <span>${formatRupiah(10000)}</span>
                        </div>
                    ` : ''}
                    
                    <div style="display: flex; justify-content: space-between; margin-top: 15px; padding-top: 15px; border-top: 1px solid #ddd; font-weight: 700;">
                        <span>Total</span>
                        <span>${formatRupiah(finalTotal)}</span>
                    </div>
                </div>
            `;
        }

        // Konfirmasi pesanan
        function confirmOrder() {
            // Generate ID pesanan acak
            const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
            
            // Tampilkan modal konfirmasi
            document.getElementById('confirmedOrderId').textContent = orderId;
            orderConfirmationModal.style.display = 'block';
            
            // Kosongkan keranjang
            cart = [];
            updateCart();
            
            // Tutup modal checkout
            checkoutModal.style.display = 'none';
        }

        // Event Listeners
        document.addEventListener('DOMContentLoaded', () => {
            renderProducts();
            
            // Toggle menu mobile
            mobileToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
            
            // Tutup menu mobile saat klik link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                });
            });
            
            // Cart icon click
            cartIcon.addEventListener('click', () => {
                renderCartItems();
                cartModal.style.display = 'block';
            });
            
            // Close cart modal
            closeCartModal.addEventListener('click', () => {
                cartModal.style.display = 'none';
            });
            
            // Close product detail modal
            closeDetailModal.addEventListener('click', () => {
                productDetailModal.style.display = 'none';
            });
            
            // Close checkout modal
            closeCheckoutModal.addEventListener('click', () => {
                checkoutModal.style.display = 'none';
            });
            
            // Close tracking modal
            closeTrackingModal.addEventListener('click', () => {
                trackingModal.style.display = 'none';
            });
            
            // Close order confirmation modal
            closeOrderConfirmModal.addEventListener('click', () => {
                orderConfirmationModal.style.display = 'none';
            });
            
            // Checkout button in cart
            checkoutBtn.addEventListener('click', showCheckout);
            
            // Tracking link click
            trackingLink.addEventListener('click', (e) => {
                e.preventDefault();
                trackingModal.style.display = 'block';
            });
            
            // Checkout steps navigation
            document.getElementById('nextToPayment').addEventListener('click', () => {
                // Validasi form alamat
                const name = document.getElementById('name').value;
                const phone = document.getElementById('phone').value;
                const address = document.getElementById('address').value;
                
                if (!name || !phone || !address) {
                    alert('Harap isi semua field informasi pengiriman.');
                    return;
                }
                
                currentStep = 2;
                updateCheckoutSteps();
            });
            
            document.getElementById('backToAddress').addEventListener('click', () => {
                currentStep = 1;
                updateCheckoutSteps();
            });
            
            document.getElementById('nextToConfirm').addEventListener('click', () => {
                if (!selectedPaymentMethod) {
                    alert('Harap pilih metode pembayaran.');
                    return;
                }
                
                currentStep = 3;
                updateCheckoutSteps();
            });
            
            document.getElementById('backToPayment').addEventListener('click', () => {
                currentStep = 2;
                updateCheckoutSteps();
            });
            
            document.getElementById('confirmOrder').addEventListener('click', confirmOrder);
            
            // Payment method selection
            document.querySelectorAll('.payment-method').forEach(method => {
                method.addEventListener('click', () => {
                    // Hapus pilihan sebelumnya
                    document.querySelectorAll('.payment-method').forEach(m => {
                        m.classList.remove('selected');
                    });
                    
                    // Tandai yang dipilih
                    method.classList.add('selected');
                    selectedPaymentMethod = method.getAttribute('data-method');
                    
                    // Tampilkan detail pembayaran
                    document.getElementById('paymentDetails').style.display = 'block';
                    document.getElementById('transferDetails').style.display = selectedPaymentMethod === 'transfer' ? 'block' : 'none';
                    document.getElementById('qrisDetails').style.display = selectedPaymentMethod === 'qris' ? 'block' : 'none';
                    document.getElementById('codDetails').style.display = selectedPaymentMethod === 'cod' ? 'block' : 'none';
                });
            });
            
            // Track order button
            document.getElementById('trackOrderBtn').addEventListener('click', () => {
                const orderId = document.getElementById('orderId').value;
                if (!orderId) {
                    alert('Harap masukkan ID Pesanan.');
                    return;
                }
                
                document.getElementById('trackingResult').style.display = 'block';
            });
            
            // Track new order button
            document.getElementById('trackNewOrder').addEventListener('click', () => {
                orderConfirmationModal.style.display = 'none';
                trackingModal.style.display = 'block';
            });
            
            // Close order confirmation
            document.getElementById('closeOrderConfirm').addEventListener('click', () => {
                orderConfirmationModal.style.display = 'none';
            });
            
            // Close modals when clicking outside
            window.addEventListener('click', (e) => {
                if (e.target.classList.contains('modal')) {
                    e.target.style.display = 'none';
                }
            });
        });