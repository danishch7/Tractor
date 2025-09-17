// Car data - In a real application, this would come from a database or API
const carsData = [
    {
        id: 1,
        name: "BMW M3 Competition",
        price: "$75,900",
        year: "2024",
        mileage: "0 miles",
        engine: "3.0L Twin-Turbo I6",
        transmission: "8-Speed Automatic",
        fuelType: "Gasoline",
        drivetrain: "RWD",
        color: "Alpine White",
        images: [
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1617469165786-8007eda4bf80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80"
        ],
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        specs: {
            horsepower: "503 HP",
            torque: "479 lb-ft",
            acceleration: "0-60 mph in 3.4s",
            topSpeed: "180 mph",
            mpg: "16/23 mpg"
        },
        description: "Experience pure driving excitement with the BMW M3 Competition. This high-performance sedan combines luxury with track-ready capability."
    },
    {
        id: 2,
        name: "Mercedes-AMG C63 S",
        price: "$79,500",
        year: "2024",
        mileage: "0 miles",
        engine: "4.0L Twin-Turbo V8",
        transmission: "9-Speed Automatic",
        fuelType: "Gasoline",
        drivetrain: "RWD",
        color: "Obsidian Black",
        images: [
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        ],
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        specs: {
            horsepower: "469 HP",
            torque: "479 lb-ft",
            acceleration: "0-60 mph in 3.7s",
            topSpeed: "174 mph",
            mpg: "17/25 mpg"
        },
        description: "The Mercedes-AMG C63 S delivers exceptional performance with luxury refinement. Pure AMG engineering in a sophisticated package."
    },
    {
        id: 3,
        name: "Audi RS5 Sportback",
        price: "$82,400",
        year: "2024",
        mileage: "0 miles",
        engine: "2.9L Twin-Turbo V6",
        transmission: "8-Speed Tiptronic",
        fuelType: "Gasoline",
        drivetrain: "AWD",
        color: "Nardo Gray",
        images: [
            "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2129&q=80"
        ],
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        specs: {
            horsepower: "444 HP",
            torque: "443 lb-ft",
            acceleration: "0-60 mph in 3.7s",
            topSpeed: "174 mph",
            mpg: "19/26 mpg"
        },
        description: "The Audi RS5 Sportback combines stunning design with Quattro all-wheel drive performance. Five doors of pure excitement."
    },
    {
        id: 4,
        name: "Porsche 911 Carrera S",
        price: "$126,100",
        year: "2024",
        mileage: "0 miles",
        engine: "3.0L Twin-Turbo H6",
        transmission: "8-Speed PDK",
        fuelType: "Gasoline",
        drivetrain: "RWD",
        color: "Guards Red",
        images: [
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80"
        ],
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        specs: {
            horsepower: "443 HP",
            torque: "390 lb-ft",
            acceleration: "0-60 mph in 3.5s",
            topSpeed: "191 mph",
            mpg: "20/27 mpg"
        },
        description: "The iconic Porsche 911 Carrera S represents the pinnacle of sports car engineering. Timeless design meets modern performance."
    },
    {
        id: 5,
        name: "Tesla Model S Plaid",
        price: "$108,490",
        year: "2024",
        mileage: "0 miles",
        engine: "Electric Motors",
        transmission: "Single-Speed",
        fuelType: "Electric",
        drivetrain: "AWD",
        color: "Pearl White",
        images: [
            "https://images.unsplash.com/photo-1617886903355-9354bb57751f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
        ],
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        specs: {
            horsepower: "1,020 HP",
            torque: "1,050 lb-ft",
            acceleration: "0-60 mph in 1.99s",
            topSpeed: "200 mph",
            range: "396 miles"
        },
        description: "The Tesla Model S Plaid redefines what's possible in electric performance. Ludicrous acceleration meets luxury comfort."
    },
    {
        id: 6,
        name: "Lamborghini Huracán EVO",
        price: "$248,295",
        year: "2024",
        mileage: "0 miles",
        engine: "5.2L V10",
        transmission: "7-Speed Dual-Clutch",
        fuelType: "Gasoline",
        drivetrain: "AWD",
        color: "Arancio Borealis",
        images: [
            "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        ],
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        specs: {
            horsepower: "630 HP",
            torque: "443 lb-ft",
            acceleration: "0-60 mph in 2.9s",
            topSpeed: "202 mph",
            mpg: "13/18 mpg"
        },
        description: "The Lamborghini Huracán EVO embodies pure Italian supercar passion. Breathtaking performance meets stunning design."
    }
];

// DOM Elements
let carsGrid;
let searchInput;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    carsGrid = document.getElementById('carsGrid');
    searchInput = document.getElementById('searchInput');
    
    // Load and display cars
    displayCars(carsData);
    
    // Setup search functionality
    setupSearch();
    
    // Setup smooth scrolling for anchor links
    setupSmoothScrolling();
});

// Display cars in the grid
function displayCars(cars) {
    if (!carsGrid) return;
    
    carsGrid.innerHTML = '';
    
    if (cars.length === 0) {
        carsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                <h3 style="color: #666;">No cars found</h3>
                <p style="color: #999;">Try adjusting your search criteria</p>
            </div>
        `;
        return;
    }
    
    cars.forEach(car => {
        const carCard = createCarCard(car);
        carsGrid.appendChild(carCard);
    });
    
    // Add fade-in animation
    setTimeout(() => {
        document.querySelectorAll('.car-card').forEach(card => {
            card.classList.add('fade-in');
        });
    }, 100);
}

// Create a car card element
function createCarCard(car) {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.innerHTML = `
        <div class="car-images">
            <div class="car-images-container">
                <div class="car-image" style="background-image: url('${car.images[0]}')"></div>
                <div class="car-image" style="background-image: url('${car.images[1]}')"></div>
            </div>
        </div>
        <div class="car-info">
            <h3 class="car-name">${car.name}</h3>
            <div class="car-price">${car.price}</div>
            <div class="car-specs">
                <div class="car-spec">
                    <i class="fas fa-calendar"></i>
                    <span>${car.year}</span>
                </div>
                <div class="car-spec">
                    <i class="fas fa-tachometer-alt"></i>
                    <span>${car.mileage}</span>
                </div>
                <div class="car-spec">
                    <i class="fas fa-cog"></i>
                    <span>${car.transmission}</span>
                </div>
            </div>
            <button class="read-more-btn" onclick="viewCarDetails(${car.id})">
                Read More
            </button>
        </div>
    `;
    
    return card;
}

// Navigate to car details page
function viewCarDetails(carId) {
    // Store car data in localStorage for the detail page
    const car = carsData.find(c => c.id === carId);
    if (car) {
        localStorage.setItem('selectedCar', JSON.stringify(car));
        window.location.href = 'car-detail.html';
    }
}

// Setup search functionality
function setupSearch() {
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            displayCars(carsData);
            return;
        }
        
        const filteredCars = carsData.filter(car => {
            return car.name.toLowerCase().includes(searchTerm) ||
                   car.year.toString().includes(searchTerm) ||
                   car.engine.toLowerCase().includes(searchTerm) ||
                   car.color.toLowerCase().includes(searchTerm) ||
                   car.drivetrain.toLowerCase().includes(searchTerm);
        });
        
        displayCars(filteredCars);
    });
    
    // Handle search button click
    document.querySelector('.search-btn').addEventListener('click', function() {
        searchInput.focus();
    });
}

// Setup smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Utility function to format numbers
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Utility function to debounce search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}