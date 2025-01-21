// Menu Functionality
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-menu');
let isMenuOpen = false;

menuIcon.addEventListener('mouseenter', () => {
    navMenu.style.right = '0';
    isMenuOpen = true;
});

document.addEventListener('mousemove', (e) => {
    if (isMenuOpen && e.clientX < window.innerWidth * 0.8) {
        navMenu.style.right = '-20%';
        isMenuOpen = false;
    }
});

// Draggable Battery
const battery = document.getElementById('battery');
const batteryLevel = document.querySelector('.battery-level');
const batteryPercentage = document.querySelector('.battery-percentage');
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 20;
let yOffset = 20;

// Battery API
if ('getBattery' in navigator) {
    navigator.getBattery().then(function(battery) {
        function updateBattery() {
            const level = battery.level * 100;
            batteryLevel.style.width = `${level}%`;
            batteryPercentage.textContent = `${Math.round(level)}%`;
        }

        battery.addEventListener('levelchange', updateBattery);
        updateBattery();
    });
}

// Dragging functionality
function dragStart(e) {
    if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
    } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
    }

    if (e.target === battery) {
        isDragging = true;
    }
}

function dragEnd() {
    initialX = currentX;
    initialY = currentY;
    isDragging = false;
}

function drag(e) {
    if (isDragging) {
        e.preventDefault();

        if (e.type === "touchmove") {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
        } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, battery);
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

// Event Listeners for dragging
battery.addEventListener("touchstart", dragStart, false);
battery.addEventListener("touchend", dragEnd, false);
battery.addEventListener("touchmove", drag, false);

battery.addEventListener("mousedown", dragStart, false);
battery.addEventListener("mouseup", dragEnd, false);
battery.addEventListener("mousemove", drag, false);

// Modal Functionality
const messageBtn = document.querySelector('.message-btn');
const contactBtn = document.querySelector('.contact-btn');
const messageModal = document.getElementById('messageModal');
const contactModal = document.getElementById('contactModal');
const closeBtns = document.querySelectorAll('.close-btn');
const notification = document.getElementById('notification');

function openModal(modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

messageBtn.addEventListener('click', () => openModal(messageModal));
contactBtn.addEventListener('click', () => openModal(contactModal));

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        closeModal(modal);
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target);
    }
});

// Form Submission
function showNotification(message) {
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

document.getElementById('messageForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    showNotification('Message sent successfully!');
    closeModal(messageModal);
    e.target.reset();
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    showNotification('Contact form submitted successfully!');
    closeModal(contactModal);
    e.target.reset();
});

// Service Cards Animation
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    });
});

// Smooth Scrolling
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

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.service-card, .stat-item, .info-item').forEach(el => {
    observer.observe(el);
});