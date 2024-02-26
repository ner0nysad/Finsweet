const tabs = document.querySelectorAll(".portfolio__name");
const cards = document.querySelectorAll(".portfolio__card");

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    const id = tab.getAttribute("id");

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("portfolio__name-active");
    }
    tab.classList.add("portfolio__name-active");

    if (id === "all") {
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].classList.contains("portfolio__card-hidden")) {
          cards[i].classList.remove("portfolio__card-hidden");
        }
      }
    } else {
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].getAttribute("id") === id) {
          if (cards[i].classList.contains("portfolio__card-hidden")) {
            cards[i].classList.remove("portfolio__card-hidden");
          }
        } else {
          if (!cards[i].classList.contains("portfolio__card-hidden")) {
            cards[i].classList.add("portfolio__card-hidden");
          }
        }
      }
    }
  });
});
