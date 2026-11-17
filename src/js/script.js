// *** CAROUSEL ***
// TODO
const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");
const premierItem = document.querySelector(".carousel__item");

// Largeur de défilement d’un item
if (carousel) {
  // Scroll au clic sur le bouton précédent
  prevButton.addEventListener("click", () => {
    carousel.scrollLeft -= scrollAmount;
  });

  // Scroll au clic sur le bouton suivant
  nextButton.addEventListener("click", () => {
    carousel.scrollLeft += scrollAmount;
});
}

const scrollAmount = premierItem.clientWidth;

<ul class="mavigation">
    <li><a href="#item1">Item 1</a></li>
    <li><a href="#item2">Item 2</a></li>
    <li><a href="#item3">Item 3</a></li>
    <li><a href="#item4">Item 4</a></li>
    <li><a href="#item5">Item 5</a></li>
</ul>

