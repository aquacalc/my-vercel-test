// const modalElement = document.querySelector('.modal');

const modalWindowElement = document.querySelector("#modal-window");
const modalShadowElement = document.querySelector(".shadow");

const modalBackdropElement = document.getElementById("backdrop");

const modalContentTitleElement = document.querySelector(".modal-content-title");
const modalInsertItem = document.querySelectorAll(".insert-item");

const modalCloseBtn = document.querySelector(".modal-close-btn");
const modalDeeperInfoBtn = document.querySelector(".modal-deeper-info-btn");

// console.log(modalWindowElement)

const gridDivElements = document.querySelectorAll(".tldr-container > div");

modalCloseBtn.addEventListener("click", () => {
  // modalElement.style.display = 'none';
  // modalBackdropElement.style.display = 'none';

  // [HACK] Add hideModal for subsequent animations
  modalWindowElement.classList.add("hideModal");
  modalWindowElement.classList.remove("showModal");
  // [HACK] Set initial condition for modal: CLOSED, no animation
  modalWindowElement.classList.remove("initModalClosed");

  // modalElement.classList.remove('showModal')
  // modalElement.classList.add('hideModal')
});

modalBackdropElement.addEventListener("click", () => {
  // modalElement.style.display = 'none';
  // modalBackdropElement.style.display = 'none';

  // [HACK] Add hideModal for subsequent animations
  modalWindowElement.classList.add("hideModal");
  modalWindowElement.classList.remove("showModal");
  // [HACK] Set initial condition for modal: CLOSED, no animation
  modalWindowElement.classList.remove("initModalClosed");

  // modalElement.classList.remove('showModal')
  // modalElement.classList.add('hideModal')
});

// modalShadowElement.addEventListener("click", () => {
//   // modalElement.style.display = 'none';
//   // modalBackdropElement.style.display = 'none';

//   // [HACK] Add hideModal for subsequent animations
//   modalWindowElement.classList.add("hideModal");
//   modalWindowElement.classList.remove("showModal");
//   // [HACK] Set initial condition for modal: CLOSED, no animation
//   modalWindowElement.classList.remove("initModalClosed");

//   // modalElement.classList.remove('showModal')
//   // modalElement.classList.add('hideModal')
// });

// NB: As structure in HTML, no good -- closes modal when click *anywhere*
// modalShadowElement.addEventListener('click', () => {
//   modalWindowElement.classList.remove('showModal')
// })

for (const gridItem of gridDivElements) {
  gridItem.addEventListener("click", (e) => {
    // modalElement.classList.remove('hideModal')
    // modalElement.classList.add('showModal')

    modalWindowElement.classList.add("showModal");

    // see: https://css-tricks.com/a-complete-guide-to-data-attributes/#attributes-javascript
    // console.log(gridItem.getAttribute('data-item'))
    const itemName = gridItem.getAttribute("data-item");

    // modalElement.style.display = 'block';
    // modalBackdropElement.style.display = 'block';

    modalContentTitleElement.textContent = itemName;
    modalDeeperInfoBtn.textContent = `Deeper dive into ${itemName}...`;

    for (const item of modalInsertItem) {
      item.textContent = itemName;
    }
  });
}
