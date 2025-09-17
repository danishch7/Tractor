// Car detail page functionality
document.addEventListener('DOMContentLoaded', function() {
    loadCarDetails();
});

function loadCarDetails() {
    // Get car data from localStorage
    const carData = localStorage.getItem('selectedCar');
    
    if (!carData) {
        // If no car data found, redirect to home page
        window.location.href = 'index.html';
        return;
    }
    
    const car = JSON.parse(carData);
    
    // Update page title
    document.getElementById('pageTitle').textContent = `${car.name} - CarHub`;
    document.title = `${car.name} - CarHub`;
    
    // Update car title
    document.getElementById('carTitle').textContent = car.name;
    
    // Populate car details
    populateCarDetails(car);
    
    // Populate car images
    populateCarImages(car);
    
    // Populate car video
    populateCarVideo(car);
}

function populateCarDetails(car) {
    const carDetailsContainer = document.getElementById('carDetails');
    
    const details = [
        { label: 'Price', value: car.price, icon: 'fas fa-dollar-sign' },
        { label: 'Year', value: car.year, icon: 'fas fa-calendar' },
        { label: 'Mileage', value: car.mileage, icon: 'fas fa-tachometer-alt' },
        { label: 'Engine', value: car.engine, icon: 'fas fa-cog' },
        { label: 'Transmission', value: car.transmission, icon: 'fas fa-exchange-alt' },
        { label: 'Fuel Type', value: car.fuelType, icon: 'fas fa-gas-pump' },
        { label: 'Drivetrain', value: car.drivetrain, icon: 'fas fa-road' },
        { label: 'Color', value: car.color, icon: 'fas fa-palette' }
    ];
    
    carDetailsContainer.innerHTML = details.map(detail => `
        <div class="detail-item">
            <span class="detail-label">
                <i class="${detail.icon}"></i> ${detail.label}
            </span>
            <span class="detail-value">${detail.value}</span>
        </div>
    `).join('');
    
    // Add performance specs if available
    if (car.specs) {
        const specsSection = document.createElement('div');
        specsSection.innerHTML = `
            <div class="car-detail-section" style="margin-top: 2rem;">
                <h2 class="section-title">
                    <i class="fas fa-bolt"></i>
                    Performance Specifications
                </h2>
                <div class="car-details-grid">
                    ${Object.entries(car.specs).map(([key, value]) => `
                        <div class="detail-item">
                            <span class="detail-label">${formatSpecKey(key)}</span>
                            <span class="detail-value">${value}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        document.getElementById('carDetails').parentNode.insertAdjacentElement('afterend', specsSection);
    }
    
    // Add description if available
    if (car.description) {
        const descriptionSection = document.createElement('div');
        descriptionSection.innerHTML = `
            <div class="car-detail-section" style="margin-top: 2rem;">
                <h2 class="section-title">
                    <i class="fas fa-file-alt"></i>
                    Description
                </h2>
                <p style="font-size: 1.1rem; line-height: 1.6; color: var(--text-light);">
                    ${car.description}
                </p>
            </div>
        `;
        
        document.getElementById('carDetails').parentNode.insertAdjacentElement('afterend', descriptionSection);
    }
}

function populateCarImages(car) {
    const imagesContainer = document.getElementById('carImagesGallery');
    
    imagesContainer.innerHTML = car.images.map((image, index) => `
        <div class="gallery-image" 
             style="background-image: url('${image}')" 
             onclick="openImageModal('${image}', '${car.name} - Image ${index + 1}')">
        </div>
    `).join('');
}

function populateCarVideo(car) {
    const videoContainer = document.getElementById('carVideoSection');
    
    if (car.video) {
        videoContainer.innerHTML = `
            <iframe class="car-video" 
                    src="${car.video}" 
                    title="${car.name} - Video Showcase"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
            </iframe>
        `;
    } else {
        videoContainer.innerHTML = `
            <div style="text-align: center; padding: 3rem; background: var(--light-gray); border-radius: var(--border-radius);">
                <i class="fas fa-video" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                <h3 style="color: #666;">Video Coming Soon</h3>
                <p style="color: #999;">A showcase video for this vehicle will be available soon.</p>
            </div>
        `;
    }
}

function formatSpecKey(key) {
    // Convert camelCase to Title Case
    return key.replace(/([A-Z])/g, ' $1')
              .replace(/^./, str => str.toUpperCase());
}

function openImageModal(imageSrc, altText) {
    // Create modal for full-size image viewing
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        cursor: pointer;
    `;
    
    modal.innerHTML = `
        <div style="position: relative; max-width: 90%; max-height: 90%;">
            <img src="${imageSrc}" 
                 alt="${altText}" 
                 style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px;">
            <button style="
                position: absolute;
                top: -15px;
                right: -15px;
                background: var(--primary-orange);
                color: white;
                border: none;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                font-size: 1.2rem;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
            " onclick="closeImageModal()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeImageModal();
        }
    });
    
    // Store reference for closing
    window.currentModal = modal;
}

function closeImageModal() {
    if (window.currentModal) {
        document.body.removeChild(window.currentModal);
        document.body.style.overflow = 'auto';
        window.currentModal = null;
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && window.currentModal) {
        closeImageModal();
    }
});

// Additional functionality for car detail interactions
function shareCar() {
    const car = JSON.parse(localStorage.getItem('selectedCar'));
    if (navigator.share && car) {
        navigator.share({
            title: car.name,
            text: `Check out this ${car.name} for ${car.price}`,
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard!');
        });
    }
}

function addToFavorites() {
    const car = JSON.parse(localStorage.getItem('selectedCar'));
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (!favorites.find(fav => fav.id === car.id)) {
        favorites.push(car);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Car added to favorites!');
    } else {
        alert('Car is already in favorites!');
    }
}

// Print car details
function printCarDetails() {
    window.print();
}