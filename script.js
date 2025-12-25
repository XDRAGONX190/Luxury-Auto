let cart = [];

const cars = [
    {
        name: "لامبورغيني أفينتادور SVJ",
        price: "1,941,637 ريال",
        color: "black",
        colorHex: "#000000",
        image: "https://hips.hearstapps.com/hmg-prod/images/2019-lamborghini-aventador-svj-108-1535557791.jpg",
        specs: {
            engine: "6.5L V12",
            power: "770 حصان",
            speed: "350 كم/س",
            acceleration: "2.8 ثانية"
        }
    },
    {
        name: "فيراري SF90 سترادالي",
        price: "2,343,750 ريال",
        color: "black",
        colorHex: "#000000",
        image: "https://www.topgear.com/sites/default/files/cars-car/image/2019/05/sf90_stradale_1.jpg",
        specs: {
            engine: "4.0L V8 هايبرد",
            power: "1000 حصان",
            speed: "340 كم/س",
            acceleration: "2.5 ثانية"
        }
    },
    {
        name: "بورش 911 GT3 RS",
        price: "839,250 ريال",
        color: "black",
        colorHex: "#000000",
        image: "https://www.topgear.com/sites/default/files/2022/08/1-Porsche-911-GT3-RS.jpg",
        specs: {
            engine: "4.0L فلات 6",
            power: "520 حصان",
            speed: "312 كم/س",
            acceleration: "3.2 ثانية"
        }
    },
    {
        name: "مرسيدس AMG GT بلاك سيريز",
        price: "1,458,750 ريال",
        color: "black",
        colorHex: "#000000",
        image: "https://www.topgear.com/sites/default/files/cars-car/image/2020/07/dsc08964.jpg",
        specs: {
            engine: "4.0L V8 توين تيربو",
            power: "720 حصان",
            speed: "325 كم/س",
            acceleration: "3.1 ثانية"
        }
    },
    {
        name: "رولز رويس فانتوم",
        price: "1,725,000 ريال",
        color: "white",
        colorHex: "#FFFFFF",
        image: "https://cdn.motor1.com/images/mgl/BXX13/s3/2018-rolls-royce-phantom-first-drive.jpg",
        specs: {
            engine: "6.75L V12",
            power: "563 حصان",
            speed: "250 كم/س",
            acceleration: "5.3 ثانية"
        }
    },
    {
        name: "بنتلي كونتيننتال GT",
        price: "885,375 ريال",
        color: "white",
        colorHex: "#FFFFFF",
        image: "https://www.topgear.com/sites/default/files/cars-car/image/2021/06/dsc00686.jpg",
        specs: {
            engine: "6.0L W12",
            power: "626 حصان",
            speed: "333 كم/س",
            acceleration: "3.6 ثانية"
        }
    },
    {
        name: "فيراري F8 تريبوتو",
        price: "1,050,000 ريال",
        color: "red",
        colorHex: "#FF0000",
        image: "https://hips.hearstapps.com/hmg-prod/images/2020-ferrari-f8-tributo-102-1568822274.jpg",
        specs: {
            engine: "3.9L V8 توين تيربو",
            power: "720 حصان",
            speed: "340 كم/س",
            acceleration: "2.9 ثانية"
        }
    },
    {
        name: "لامبورغيني هوراكان إيفو",
        price: "979,777 ريال",
        color: "red",
        colorHex: "#FF0000",
        image: "https://www.topgear.com/sites/default/files/cars-car/image/2019/03/huracan_evo_1.jpg",
        specs: {
            engine: "5.2L V10",
            power: "640 حصان",
            speed: "325 كم/س",
            acceleration: "2.9 ثانية"
        }
    },
    {
        name: "ماكلارين 720S",
        price: "1,162,500 ريال",
        color: "red",
        colorHex: "#FF0000",
        image: "https://cdn.motor1.com/images/mgl/mrz3y/s3/mclaren-720s.jpg",
        specs: {
            engine: "4.0L V8 توين تيربو",
            power: "710 حصان",
            speed: "341 كم/س",
            acceleration: "2.8 ثانية"
        }
    },
    {
        name: "بوغاتي شيرون",
        price: "11,250,000 ريال",
        color: "blue",
        colorHex: "#0066CC",
        image: "https://www.topgear.com/sites/default/files/cars-car/image/2016/03/bugatti_chiron_261.jpg",
        specs: {
            engine: "8.0L W16 كواد تيربو",
            power: "1500 حصان",
            speed: "420 كم/س",
            acceleration: "2.4 ثانية"
        }
    },
    {
        name: "أستون مارتن DBS سوبر ليجيرا",
        price: "1,186,125 ريال",
        color: "silver",
        colorHex: "#C0C0C0",
        image: "https://www.topgear.com/sites/default/files/cars-car/image/2018/06/p90301876_highres_the-new-bmw-8-series.jpg",
        specs: {
            engine: "5.2L V12 توين تيربو",
            power: "715 حصان",
            speed: "340 كم/س",
            acceleration: "3.4 ثانية"
        }
    },
    {
        name: "كورفيت Z06",
        price: "398,981 ريال",
        color: "yellow",
        colorHex: "#FFD700",
        image: "https://hips.hearstapps.com/hmg-prod/images/2023-chevrolet-corvette-z06-132-1633035532.jpg",
        specs: {
            engine: "5.5L V8",
            power: "670 حصان",
            speed: "312 كم/س",
            acceleration: "2.6 ثانية"
        }
    }
];

function displayCars(filteredCars) {
    const grid = document.getElementById('carsGrid');
    grid.innerHTML = '';
    
    filteredCars.forEach(car => {
        const card = document.createElement('div');
        card.className = 'car-card';
        card.innerHTML = `
            <img src="${car.image}" alt="${car.name}" class="car-image">
            <div class="car-info">
                <h2 class="car-name">${car.name} <span class="color-indicator" style="background-color: ${car.colorHex}"></span></h2>
                <div class="car-price">${car.price}</div>
                <ul class="car-specs">
                    <li><span class="spec-label">المحرك:</span> <span>${car.specs.engine}</span></li>
                    <li><span class="spec-label">القوة:</span> <span>${car.specs.power}</span></li>
                    <li><span class="spec-label">السرعة القصوى:</span> <span>${car.specs.speed}</span></li>
                    <li><span class="spec-label">تسارع 0-100:</span> <span>${car.specs.acceleration}</span></li>
                </ul>
                <button class="buy-btn" onclick="addToCart(${JSON.stringify(car).replace(/"/g, '&quot;')})">أضف للسلة 🛒</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function addToCart(car) {
    const existingItem = cart.find(item => item.name === car.name);
    
    if (existingItem) {
        alert('⚠️ هذه السيارة موجودة بالفعل في السلة!');
        return;
    }
    
    cart.push({...car, id: Date.now()});
    updateCartUI();
    
    const btn = event.target;
    btn.innerHTML = '✅ تمت الإضافة';
    btn.style.background = '#4CAF50';
    
    setTimeout(() => {
        btn.innerHTML = 'أضف للسلة 🛒';
        btn.style.background = 'linear-gradient(135deg, #c9a961 0%, #8b7355 100%)';
    }, 1500);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartSummary = document.getElementById('cartSummary');
    
    cartCount.textContent = cart.length;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <h3>السلة فارغة</h3>
                <p>لم تقم بإضافة أي سيارات بعد</p>
            </div>
        `;
        cartSummary.innerHTML = '';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price}</div>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">حذف 🗑️</button>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => {
        const price = parseFloat(item.price.replace(/[^0-9]/g, ''));
        return sum + price;
    }, 0);
    
    cartSummary.innerHTML = `
        <div class="cart-total">
            <span>المجموع الكلي:</span>
            <span>${total.toLocaleString()} ريال سعودي</span>
        </div>
        <button class="checkout-btn" onclick="checkout()">إتمام الشراء 💳</button>
    `;
}

function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.classList.toggle('active');
}

function checkout() {
    if (cart.length === 0) return;
    
    const total = cart.reduce((sum, item) => {
        const price = parseFloat(item.price.replace(/[^0-9]/g, ''));
        return sum + price;
    }, 0);
    
    const carNames = cart.map(item => item.name).join('\n• ');
    
    alert(`🎉 تم إتمام عملية الشراء بنجاح!\n\nالسيارات المشتراة:\n• ${carNames}\n\nالمبلغ الإجمالي: ${total.toLocaleString()} ريال سعودي\n\nشكراً لتسوقك معنا! 🚗✨`);
    
    cart = [];
    updateCartUI();
    toggleCart();
}

// Event listeners for filter buttons
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const color = this.dataset.color;
            const filtered = color === 'all' ? cars : cars.filter(car => car.color === color);
            displayCars(filtered);
        });
    });

    // Display all cars on initial load
    displayCars(cars);
});