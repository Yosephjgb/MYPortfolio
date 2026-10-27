let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
      strings: ['Frontend Developer', 'App Developer', 'Game Developer'],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1200,
      loop: true,
    });

function openModal() {
    document.getElementById("projectModal").style.display = "block";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

function openCertModal(imgSrc, title) {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("certModalImg");
    const modalTitle = document.getElementById("certModalTitle");
    if (modal && modalImg && modalTitle) {
        modalImg.src = imgSrc;
        modalTitle.textContent = title;
        modal.style.display = "block";
    }
}

function closeCertModal() {
    const modal = document.getElementById("certModal");
    if (modal) {
        modal.style.display = "none";
    }
}

// Close modals when clicking outside content
window.addEventListener('click', (e) => {
    const projectModal = document.getElementById("projectModal");
    const certModal = document.getElementById("certModal");
    if (e.target === projectModal) {
        projectModal.style.display = "none";
    }
    if (e.target === certModal) {
        certModal.style.display = "none";
    }
});

// Close modals with Escape key
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        closeModal();
        closeCertModal();
    }
});