// Désactive le clic droit
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});
window.addEventListener('load', function () {
    if (window.innerWidth <= 2000) {
        var popup = document.getElementById('popup');
        popup.style.display = 'block'; 

        var fermerPopup = document.getElementById('fermerPopup');
        fermerPopup.addEventListener('click', function () {
            popup.style.display = 'none'; 
        });
    }
});

function AffichePopupen() {
  // Récupérer la référence du popup
  var popupen = document.getElementById("popupen");

  // Afficher le popup
  popupen.style.display = "block";
}

function fermerPopup() {
  // Récupérer la référence du popup
  var popupen = document.getElementById("popupen");

  // Fermer le popup
  popupen.style.display = "none";
}
// Code pour la section "Accueil"
window.addEventListener('scroll', function () {
    var homeSection = document.querySelector('.home');
    var navbarLink = document.querySelector('.navbar a.active'); // Sélectionnez le lien actif

    if (homeSection) {
        var homeTop = homeSection.offsetTop;
        var homeBottom = homeTop + homeSection.offsetHeight;
        var scrollTop = window.scrollY;

        if (scrollTop >= homeTop && scrollTop < homeBottom) {
            navbarLink.classList.add('active');
        } else {
            navbarLink.classList.remove('active');
        }
    }
});

// Code pour la section "Ma présentation"
window.addEventListener('scroll', function () {
    var presentationSection = document.querySelector('.presentation');
    var navbarLink = document.querySelector('.navbar a.active'); // Sélectionnez le lien actif

    if (presentationSection) {
        var presentationTop = presentationSection.offsetTop;
        var presentationBottom = presentationTop + presentationSection.offsetHeight;
        var scrollTop = window.scrollY;

        if (scrollTop >= presentationTop && scrollTop < presentationBottom) {
            navbarLink.classList.add('active');
        } else {
            navbarLink.classList.remove('active');
        }
    }
});

// Code pour la section "Mes compétences"
window.addEventListener('scroll', function () {
    var competencesSection = document.querySelector('.skills');
    var navbarLink = document.querySelector('.navbar a.active'); // Sélectionnez le lien actif

    if (competencesSection) {
        var competencesTop = competencesSection.offsetTop;
        var competencesBottom = competencesTop + competencesSection.offsetHeight;
        var scrollTop = window.scrollY;

        if (scrollTop >= competencesTop && scrollTop < competencesBottom) {
            navbarLink.classList.add('active');
        } else {
            navbarLink.classList.remove('active');
        }
    }
});

// Sélectionne tous les liens de la barre de navigation
var navbarLinks = document.querySelectorAll('.navbar a');

// Sélectionne toutes les sections
var sections = document.querySelectorAll('section');

// Fonction pour activer/désactiver les classes "active"
function updateActiveSection() {
    var scrollTop = window.scrollY;
    
    sections.forEach(function(section, index) {
        var sectionTop = section.offsetTop;
        var sectionBottom = sectionTop + section.offsetHeight;
        var navbarLink = navbarLinks[index]; // Lien correspondant à la section
        
        if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
            navbarLink.classList.add('active');
        } else {
            navbarLink.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', updateActiveSection);
window.addEventListener('load', updateActiveSection); 

document.getElementById("lang-fr").addEventListener("click", function () {
    document.querySelector(".header-fr").style.display = "flex";
    //document.querySelector(".home-fr").style.display = "flex";

    // Cache
    document.querySelector(".header-en").style.display = "none";
    //document.querySelector(".home-en").style.display = "none";

});

document.getElementById("lang-en").addEventListener("click", function () {
    document.querySelector(".header-fr").style.display = "none";
    //document.querySelector(".home-fr").style.display = "none";

    // Cache
    document.querySelector(".header-en").style.display = "flex";
    //document.querySelector(".home-en").style.display = "flex";
})