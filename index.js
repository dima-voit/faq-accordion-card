import { faqData } from "./faqData.js";

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
  });
}

getAccordionItem();
