// Car data - In a real application, this would come from a database or API
const carsData = [
    {
        id: 1,
        name: "240 Tractor",
        price: "1200,000",
        year: "2010",
        color: "Red",
        model: "240",
        tyre: "12",
        location: "32/sp",
        images: [
            "img/240/download.jpeg",
            "img/240/download (1).jpeg",
            "img/240/download (3).jpeg"
        ],
        video: "video/tractorvid.mp4",
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
        name: "260 Tractor",
        price: "1600,000",
        year: "2014",
        color: "Red",
        model: "260",
        tyre: "12",
        location: "32/sp",
        images: [
            "img/260/download.jpeg",
            "img/240/download (2).jpeg",
            "img/240/download (3).jpeg"
        ],
        video: "video/tractorvid.mp4",
        specs: {
            horsepower: "469 HP",
            torque: "479 lb-ft",
            acceleration: "0-60 mph in 3.7s",
            topSpeed: "174 mph",
            mpg: "17/25 mpg"
        },
        description: "The 260 Tractor delivers exceptional performance with reliability. Pure engineering in a powerful package."
    },
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