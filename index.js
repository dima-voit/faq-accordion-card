import { faqData } from "./faqData.js";

let accordions;
const faqBox = document.querySelector(".faq__box");
const accordionWrapper = document.querySelector(".accordion");

const accordionItem = (item) => {
  return `
    <div class="accordion__item">
      <h2 class="accordion__title">${item.question}</h2>
      <div class="accordion__text">
        <p>${item.answer}</p>
      </div>
    </div>
  `
}

const getAccordionItem = () => {
  faqData.forEach(item => {
    accordionWrapper.innerHTML += accordionItem(item);
  })
  accordions = document.querySelectorAll(".accordion__item");

}

getAccordionItem();

if(accordions) {
  accordions.forEach((item) => {
    accordions[1].classList.add("active")

    item.addEventListener("mouseover", () => {
      faqBox.style.transform = "translateY(-80px)";
    })

    item.addEventListener("mouseleave", () => {
      faqBox.style.transform = "translateY(-48px) translateY(-20%)";
    })

    item.addEventListener("click", function() {
      if(this.classList.contains("active")) {
        this.classList.remove("active");
      } else {
        accordions.forEach((el) => {
          el.classList.remove("active");
        })
        this.classList.add("active");
      }
    })
  })
}
