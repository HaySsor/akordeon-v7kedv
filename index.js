// Import stylesheets
import './style.css';

const allcards = document.querySelectorAll('.card');
const buttons = document.querySelectorAll('.icon');

function showCardDoubleClick() {
  if (this.matches('.active')) {
    this.classList.remove('active');
  } else {
    allcards.forEach((card) => {
      card.classList.remove('active');
      this.classList.add('active');
    });
  }
}

function openAccordionItems() {
	const text = this.closest("article > div")
  const arrow = this
	if (text.classList.contains("active")) {
		text.classList.remove("active");
    arrow.classList.remove('icon-active')
   
	} else {
		closeAccordionItem();
		text.classList.toggle("active");
    arrow.classList.add('icon-active')
	}
}
function closeAccordionItem() {
	const allActiveitems = document.querySelectorAll(".card");
	allActiveitems.forEach(item => {
		item.classList.remove("active");
	});
  const arrows = document.querySelectorAll('.icon')
  arrows.forEach(arrow =>{
    arrow.classList.remove('icon-active')
  }) 
}

buttons.forEach(button =>{
  button.addEventListener('click',openAccordionItems)
})
allcards.forEach((card) => {
  card.addEventListener('dblclick', showCardDoubleClick);
})

