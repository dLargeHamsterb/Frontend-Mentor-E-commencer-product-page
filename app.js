const shoppingCart = document.querySelector(".shopping-cart")
const cartContainer = document.querySelector(".cart-img")

const productImg = document.querySelector(".product-img")
// const thumbnails = document.querySelectorAll(".thumbnails")
const thumbnailsImg = document.querySelectorAll(".thumbnail-img")

const galleryContainer = document.querySelector(".wrapper")
const galleryImg = document.querySelector(".gallery-img")
const galleryThumbnails= document.querySelectorAll(".gallery-thumbnails .thumbnail .thumbnail-img")

const closeBtn = document.querySelector(".close-btn")
const nextBtn = document.querySelector(".next-btn")
const previusBtn = document.querySelector(".previus-btn")

const increase = document.querySelector(".increase")
const decrease = document.querySelector(".decrease")
const currentText = document.querySelector(".current")

const itemAdd = document.querySelector(".item-add")
const cartBody = document.querySelector(".cart-body")



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
	currentImg--
	if (currentItem < 0) {
		productImg.src = galleryThumbnails[3].src
		galleryImg.src = galleryThumbnails[3].src
		currentImg = galleryThumbnails.length - 1
	}
	else {
		productImg.src= galleryThumbnails[currentImg].src
		galleryImg.src = galleryThumbnails[currentImg].src
	}
	thumbnailsImg.forEach(function (item){
		if(item.dataset.nr !== thumbnailsImg[currentImg].dataset.nr){
			item.classList.remove("opacity");
			item.parentElement.classList.remove("active");
		}
	})
	thumbnailsImg.forEach(function (item){
		if(item.dataset.nr == thumbnailsImg[currentImg].dataset.nr){
			item.classList.add("opacity");
			item.parentElement.classList.add("active");
		}
	})
  });

// counter

let counterItem = 0

increase.addEventListener("click", ()=> {counterItem++, currentText.innerHTML=counterItem})
decrease.addEventListener("click", ()=> {
	if(counterItem <=0){
		 courentItem = 0
		}
	else{
		counterItem--;
		currentText.innerHTML=counterItem;
	}})

// //////////////////////////////////////////////////////////////////////
// add to cart

itemAdd.addEventListener("click", function(){
	let price = (counterItem * 125)
	if(price>0){
		cartBody.innerHTML = 
		`<div>
			<div class="cart-product">
				<img class="thumbnail-cart" src="./images/image-product-1-thumbnail.jpg" alt="product img">
				<div class="product-cart-info">
					<p>Fall Limited Edition Sneakers</p>
					<p>$125.00 x ${counterItem} <b>$${price}.00</b> </p>
				</div>
				<button class="delete-img"><svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg></button>
			</div>
			<div class="summary-btn">
				<button class="shop-list">Checkout</button>
			</div>
		</div>`;
}
		const deleteItem = document.querySelector(".delete-img")

		deleteItem.addEventListener("click", function(){
			cartBody.innerHTML = `<p>Your cart is empty.</p>`;
		})
})

