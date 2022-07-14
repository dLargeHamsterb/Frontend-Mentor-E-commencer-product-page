const shoppingCart = document.querySelector(".shopping-cart")
const cartContainer = document.querySelector(".cart-img")

const productImg = document.querySelector(".product-img")
const thumbnails = document.querySelectorAll(".thumbnails")
const thumbnailsImg = document.querySelectorAll(".thumbnail-img")

const galleryContainer = document.querySelector(".wrapper")
const galleryImg = document.querySelector(".gallery-img")
const galleryThumbnails= document.querySelectorAll(".gallery-thumbnails .thumbnail .thumbnail-img")

const closeBtn = document.querySelector(".close-btn")
const nextBtn = document.querySelector(".next-btn")
const previusBtn = document.querySelector(".previus-btn")



cartContainer.onclick = () => shoppingCart.classList.toggle('visable')

// load main img by click
thumbnailsImg.forEach(
	function (item) {
		item.onclick = () => {
			productImg.src = item.src
			galleryImg.src = item.src
	}
})

// current thumbnail

thumbnailsImg.forEach(function(img){
	img.addEventListener("click", function(){
		thumbnailsImg.forEach(function (item){
			if(item.dataset.nr !== img.dataset.nr){
				item.classList.remove("opacity");
				item.parentElement.classList.remove("active");
			}
		})
		thumbnailsImg.forEach(function (item){
			if(item.dataset.nr == img.dataset.nr){
				item.classList.add("opacity");
				item.parentElement.classList.add("active");
			}
		})
	})
})

// show/hide gallery

productImg.onclick = () => galleryContainer.classList.add('visable')


closeBtn.addEventListener("click",(e) => {
	galleryContainer.classList.remove('visable')
})

document.addEventListener('keydown', (e)=>{
	if(e.key=== "Escape"){
	galleryContainer.classList.remove('visable')
}
})

const to = document.querySelectorAll(".thumbnail")
to.forEach(function(item)
{
	item.addEventListener("click", (e)=> {e.stopPropagation()})
})

// next img
let currentItem = 0;

nextBtn.addEventListener("click", function () {
	currentItem++
	if (currentItem > galleryThumbnails.length - 1) {
		productImg.src = galleryThumbnails[0].src
		galleryImg.src = galleryThumbnails[0].src
		currentItem = 0
	}
	else {
		productImg.src= galleryThumbnails[currentItem].src
		galleryImg.src = galleryThumbnails[currentItem].src
	}
	thumbnailsImg.forEach(function (item){
		if(item.dataset.nr !== thumbnailsImg[currentItem].dataset.nr){
			item.classList.remove("opacity");
			item.parentElement.classList.remove("active");
		}
	})
	thumbnailsImg.forEach(function (item){
		if(item.dataset.nr == thumbnailsImg[currentItem].dataset.nr){
			item.classList.add("opacity");
			item.parentElement.classList.add("active");
		}
	})
	
  });

// previous img
previusBtn.addEventListener("click", function () {
	currentItem--
	if (currentItem < 0) {
		productImg.src = galleryThumbnails[3].src
		galleryImg.src = galleryThumbnails[3].src
		currentItem = galleryThumbnails.length - 1
	}
	else {
		productImg.src= galleryThumbnails[currentItem].src
		galleryImg.src = galleryThumbnails[currentItem].src
	}
	thumbnailsImg.forEach(function (item){
		if(item.dataset.nr !== thumbnailsImg[currentItem].dataset.nr){
			item.classList.remove("opacity");
			item.parentElement.classList.remove("active");
		}
	})
	thumbnailsImg.forEach(function (item){
		if(item.dataset.nr == thumbnailsImg[currentItem].dataset.nr){
			item.classList.add("opacity");
			item.parentElement.classList.add("active");
		}
	})
	
  });

