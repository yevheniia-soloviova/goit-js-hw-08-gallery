import galleryImages from "./gallery-items.js";


const galleryElementContainer = document.querySelector(".js-gallery");
console.log(galleryElementContainer);



const modal = document.querySelector(".js-lightbox");

const galleryMarkup = galleryCreatorMarkup(galleryImages);

const backdropRef = document.querySelector(".lightbox__overlay");

const imageModalRef = document.querySelector(".lightbox__image");

const modalCloseButton = document.querySelector(".lightbox__button");


galleryElementContainer.insertAdjacentHTML("beforeEnd", galleryMarkup);




function galleryCreatorMarkup(galleryImages) {
  return galleryImages
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `;
    })
    .join("");
  console.log(markup);
}



galleryElementContainer.addEventListener("click", onGalleryClick);

function onGalleryClick(evt) {
  evt.preventDefault();
    console.log(evt.target.nodeName);
    
  window.addEventListener("keydown", onEscKeyPress);
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  openModal();
  imageModalRef.src = evt.target.dataset.source;
  console.log(imageModalRef.src);
}

function openModal() {
  modal.classList.add("is-open");
  
}


function closeModal() {
  window.removeEventListener("keydown", onEscKeyPress);
  modal.classList.remove("is-open");
  imageModalRef.src = "";
}


function onEscKeyPress(evt) {
  console.log(evt.code);
  if (evt.code === "Escape") {
    closeModal();
  }
  if (evt.code === "ArrowLeft") {
  }
  if (evt.code === "ArrowRight") {
  }
  console.log(evt);
}


backdropRef.addEventListener("click", closeModal);

modalCloseButton.addEventListener("click", closeModal);


