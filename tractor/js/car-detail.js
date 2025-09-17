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
        { label: 'Model', value: car.model || '16', icon: 'fas fa-car' },
        { label: 'Tyre', value: car.tyre || '12', icon: 'fas fa-tire-rugged' },
        { label: 'Color', value: car.color || 'red', icon: 'fas fa-palette' },
        { label: 'Location', value: car.location || '32/sp', icon: 'fas fa-map-marker-alt' }
    ];
    
    carDetailsContainer.innerHTML = details.map(detail => `
        <div class="detail-item">
            <span class="detail-label">
                <i class="${detail.icon}"></i> ${detail.label}
            </span>
            <span class="detail-value">${detail.value}</span>
        </div>
    `).join('');
    
    // Performance specs and description sections have been removed as per requirements
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
        cursor: grab;
        user-select: none;
        overflow: hidden;
    `;
    
    modal.innerHTML = `
        <div class="modal-content" style="position: relative; max-width: 90%; max-height: 90%;">
            <div class="image-container" style="position: relative; overflow: hidden; max-width: 100%; max-height: 90vh;">
                <img src="${imageSrc}" 
                     alt="${altText}" 
                     class="modal-image"
                     style="display: block; max-width: 100%; max-height: 100%; object-fit: contain; transform-origin: center center; transition: transform 0.3s ease;">
            </div>
            
            <!-- Controls -->
            <div style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); display: flex; gap: 10px; background: rgba(0,0,0,0.7); padding: 8px 16px; border-radius: 30px;">
                <button class="control-btn" onclick="zoomOut(event)" title="Zoom Out">
                    <i class="fas fa-search-minus"></i>
                </button>
                <button class="control-btn" onclick="resetZoom(event)" title="Reset Zoom">
                    <i class="fas fa-sync-alt"></i>
                </button>
                <button class="control-btn" onclick="zoomIn(event)" title="Zoom In">
                    <i class="fas fa-search-plus"></i>
                </button>
                <button class="control-btn" onclick="downloadImage('${imageSrc}', '${altText.replace(/\s+/g, '-').toLowerCase()}')" title="Download">
                    <i class="fas fa-download"></i>
                </button>
                <button class="control-btn close-btn" onclick="closeImageModal()" title="Close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <style>
                .control-btn {
                    background: rgba(255, 255, 255, 0.2);
                    border: none;
                    color: white;
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                .control-btn:hover {
                    background: var(--primary-orange);
                    transform: scale(1.1);
                }
                .close-btn {
                    background: #ff4444;
                }
                .close-btn:hover {
                    background: #ff0000;
                }
            </style>
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

// Zoom functionality
let currentScale = 1;
const SCALE_FACTOR = 0.1;
const MIN_SCALE = 0.5;
const MAX_SCALE = 4;

function zoomIn(e) {
    e.stopPropagation();
    const img = document.querySelector('.modal-image');
    if (currentScale < MAX_SCALE) {
        currentScale += SCALE_FACTOR;
        img.style.transform = `scale(${currentScale})`;
    }
}

function zoomOut(e) {
    e.stopPropagation();
    const img = document.querySelector('.modal-image');
    if (currentScale > MIN_SCALE) {
        currentScale -= SCALE_FACTOR;
        img.style.transform = `scale(${currentScale})`;
    }
}

function resetZoom(e) {
    e.stopPropagation();
    const img = document.querySelector('.modal-image');
    currentScale = 1;
    img.style.transform = 'scale(1)';
}

// Pan functionality
let isDragging = false;
let startX, startY, scrollLeft, scrollTop;

function startDrag(e) {
    const container = document.querySelector('.image-container');
    isDragging = true;
    container.style.cursor = 'grabbing';
    startX = e.pageX - container.offsetLeft;
    startY = e.pageY - container.offsetTop;
    scrollLeft = container.scrollLeft;
    scrollTop = container.scrollTop;
}

function drag(e) {
    if (!isDragging) return;
    e.preventDefault();
    const container = document.querySelector('.image-container');
    const x = e.pageX - container.offsetLeft;
    const y = e.pageY - container.offsetTop;
    const walkX = (x - startX) * 2;
    const walkY = (y - startY) * 2;
    container.scrollLeft = scrollLeft - walkX;
    container.scrollTop = scrollTop - walkY;
}

function endDrag() {
    isDragging = false;
    const container = document.querySelector('.image-container');
    if (container) container.style.cursor = 'grab';
}

// Add pan functionality to the modal
document.addEventListener('mousedown', function(e) {
    const modal = document.querySelector('.image-modal');
    const img = document.querySelector('.modal-image');
    if (modal && img && modal.contains(e.target) && e.target.closest('.control-btn') === null) {
        startDrag(e);
    }
});

document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', endDrag);
document.addEventListener('mouseleave', endDrag);

// Download image functionality
function downloadImage(url, filename) {
    const link = document.createElement('a');
    link.href = url;
    link.download = `tractor-${filename}-${new Date().getTime()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

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