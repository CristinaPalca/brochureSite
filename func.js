
var imagesContainers = document.querySelectorAll(".imageContainer");
var closeBtn = document.querySelector(".closeBtn");
var galleryBg = document.querySelector(".galleryBackground");
var selectedImage = document.querySelector(".selectedImage");

function addGalleryListeners(){
  for(var i = 0; i < imagesContainers.length; i++){
    imagesContainers[i].addEventListener("click", function(){
      var openImage = document.querySelector(".selectedImage");
      var closeBtn = document.querySelector(".closeBtn");

      openImage.innerHTML = this.innerHTML;
      openImage.classList.remove("d-none");
      openImage.classList.add("d-flex");

      galleryBg.classList.remove("d-none");
      galleryBg.classList.add("d-block");

      closeBtn.classList.remove("d-none");
      closeBtn.classList.add("d-block");
    });
  }
}

addGalleryListeners();


closeBtn.addEventListener("click", function(){
  selectedImage.classList.remove("d-flex");
  selectedImage.classList.add("d-none");

  galleryBg.classList.remove("d-block");
  galleryBg.classList.add("d-none");

  closeBtn.classList.remove("d-block");
  closeBtn.classList.add("d-none");
});


selectedImage.addEventListener("click", function(){
  selectedImage.classList.remove("d-flex");
  selectedImage.classList.add("d-none");

  galleryBg.classList.remove("d-block");
  galleryBg.classList.add("d-none");

  closeBtn.classList.remove("d-block");
  closeBtn.classList.add("d-none");
});
