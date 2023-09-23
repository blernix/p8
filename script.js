document.addEventListener("DOMContentLoaded", function () {
  const projectCards = document.querySelectorAll(".project-card");
  const modal = document.getElementById("modal");
  const modalContent = modal.querySelector(".modal-content");
  const modalName = modalContent.querySelector("h2");
  const swiperWrapper = modal.querySelector(".swiper-wrapper");

  // Vérifier si l'appareil est tactile (événement "ontouchstart" pris en charge) 
  // et si l'événement "mousedown" est également pris en charge
  const isTouchDevice = "ontouchstart" in window || navigator.msMaxTouchPoints;
  const isMouseAndTouchDevice = isTouchDevice && "onmousedown" in window;

  // Ajouter un gestionnaire d'événement clic à chaque carte de projet
  projectCards.forEach((card) => {
    card.addEventListener("click", function () {
      const projectName = card.getAttribute("data-name");
      const projectDescription = card.getAttribute("data-description");
      const projectImages = card.getAttribute("data-images");

      // Mettre à jour le contenu de la modal avec le nom et la description du projet
      modalName.textContent = projectName;
      modalContent.querySelector("p").textContent = projectDescription;

      // Vider le contenu actuel du carrousel Swiper
      swiperWrapper.innerHTML = "";

      // Vérifier si des images sont disponibles pour le projet
      if (projectImages) {
        const imageSrcArray = projectImages.split(",");
        // Ajouter les images du carrousel en fonction du projet sélectionné
        imageSrcArray.forEach((imageSrc) => {
          const swiperSlide = document.createElement("div");
          swiperSlide.className = "swiper-slide";
          const image = document.createElement("img");
          image.src = imageSrc;
          image.alt = projectName;
          swiperSlide.appendChild(image);
          swiperWrapper.appendChild(swiperSlide);
        });
      }

      // Afficher la modal
      modal.style.display = "block";

      // Initialisation du carrousel Swiper
      const swiper = new Swiper(".swiper-container", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        
        },
        slidesPerView: 1,
      });
    });
  });

  // Gestionnaire d'événement pour fermer la modal
  modal.querySelector(".close").addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Gestionnaire d'événement pour fermer la modal lorsque l'utilisateur clique en dehors de celle-ci
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});






// Sélectionner toutes les sections "pres_section"
const presentationSection = document.querySelectorAll('.presentation-section');

// Fonction pour vérifier si une section est visible à l'écran
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour activer l'animation lorsqu'une section devient visible
function animateOnScroll() {
    presentationSection.forEach(section => {
        if (isElementInViewport(section)) {
            if (!section.classList.contains('active')) {
                section.classList.add('active');
            }
        } else {
            // Si la section n'est plus visible, retirer la classe 'active'
            section.classList.remove('active');
        }
    });
}

// Ajouter un écouteur de scroll pour déclencher l'animation
window.addEventListener('scroll', animateOnScroll);

// Appeler la fonction animateOnScroll au chargement de la page pour vérifier les sections déjà visibles
animateOnScroll();


// Sélectionnez la classe kikiweb
const kikiweb = document.querySelector('.kikiweb');

// Écoutez l'événement de défilement de la page
window.addEventListener('scroll', () => {
    // Obtenez la position actuelle de défilement verticale
    const scrollY = window.scrollY;

    // Définissez la limite à laquelle vous souhaitez que kikiweb passe en arrière-plan
    const threshold = 50; // Vous pouvez ajuster cette valeur selon vos besoins

    // Ajoutez ou supprimez la classe "in-background" en fonction du défilement
    if (scrollY >= threshold) {
        kikiweb.classList.add('in-background');
    } else {
        kikiweb.classList.remove('in-background');
    }
});


