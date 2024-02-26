const faqCards = document.querySelectorAll(".accordion__content");

faqCards.forEach((card) => {
  card.addEventListener("click", function () {
    card.closest(".accordion__card").classList.toggle("accordion__card-open");
  });
});