import {products, displayProducts} from './products.js'

const productList = document.querySelector(".products-list")
productList.innerHTML=displayProducts(products)

const eachProduct = document.querySelectorAll(".product")

const shoppingCart = document.querySelector(".shopping-cart")
const cartContainer = document.querySelector(".cart-img")

const productImg = document.querySelectorAll(".product-img")
// const thumbnails = document.querySelectorAll(".thumbnails")
const thumbnailsImg = document.querySelectorAll(".thumbnail-img")

const galleryContainer = document.querySelector(".wrapper")
const galleryImg = document.querySelector(".gallery-img")
const galleryThumbnails= document.querySelectorAll(".gallery-thumbnails .thumbnail .thumbnail-img")

const closeBtn = document.querySelectorAll(".close-btn")
const nextBtn = document.querySelectorAll(".next-btn")
const previusBtn = document.querySelectorAll(".previus-btn")

const increase = document.querySelectorAll(".increase")
const decrease = document.querySelectorAll(".decrease")
const currentText = document.querySelectorAll(".current")

const itemAdd = document.querySelectorAll(".item-add")
const cartBody = document.querySelectorAll(".cart-body")



cartContainer.onclick = () => shoppingCart.classList.toggle('visable')


// load main img by click


eachProduct.forEach(function (item){
	const itemThumbnailImg = item.querySelectorAll(".thumbnail-img")
	const itemProductImg = item.querySelector(".product-img")
	const itemGalleryImg = item.querySelector(".gallery-img")
	const itemGalleryContainer = item.querySelector(".wrapper")
	const itemCloseBtn = item.querySelector(".close-btn")
	const itemNextBtn = item.querySelector(".next-btn")
	const itemPreviusBtn = item.querySelector(".previus-btn")
	const itemGalleryThumbnails= item.querySelectorAll(".gallery-thumbnails .thumbnail .thumbnail-img")
	const itemThumbnailsImg = item.querySelectorAll(".thumbnail-img")
	

	itemThumbnailImg.forEach(
		function (item) {
			item.onclick = () => {
				itemProductImg.src = item.src
				itemGalleryImg.src = item.src
		}
	})
	
// show/hide gallery

	itemProductImg.addEventListener("click", function(){
		itemGalleryContainer.classList.add('visable')
	})

	itemThumbnailImg.forEach(function(img){
		img.addEventListener("click", function(){
			itemThumbnailImg.forEach(function (item){
				if(item.dataset.nr !== img.dataset.nr){
					item.classList.remove("opacity");
					item.parentElement.classList.remove("active");
				}
			})
			itemThumbnailImg.forEach(function (item){
				if(item.dataset.nr == img.dataset.nr){
					item.classList.add("opacity");
					item.parentElement.classList.add("active");
				}
			})
		})
	})

	itemCloseBtn.addEventListener("click",() => {
			itemGalleryContainer.classList.remove('visable')
		})
	
	document.addEventListener('keydown', (e)=>{
		if(e.key === "Escape"){
			itemGalleryContainer.classList.remove('visable')
		}
	})

// next img
let currentImg = 0;

itemNextBtn.addEventListener("click", function () {
		currentImg++
		if (currentImg > itemGalleryThumbnails.length - 1) {
			itemProductImg.src = itemGalleryThumbnails[0].src
			itemGalleryImg.src = itemGalleryThumbnails[0].src
			currentImg = 0
		}
		else {
			itemProductImg.src= itemGalleryThumbnails[currentImg].src
			itemGalleryImg.src = itemGalleryThumbnails[currentImg].src
		}
		itemThumbnailsImg.forEach(function (item){
			if(item.dataset.nr !== itemThumbnailsImg[currentImg].dataset.nr){
				item.classList.remove("opacity");
				item.parentElement.classList.remove("active");
			}
		})
		itemThumbnailsImg.forEach(function (item){
			if(item.dataset.nr == itemThumbnailsImg[currentImg].dataset.nr){
				item.classList.add("opacity");
				item.parentElement.classList.add("active");
			}
		})
	  });

	// previous img
	itemPreviusBtn.addEventListener("click", function () {
		currentImg--
		if (currentImg < 0) {
			itemProductImg.src = itemGalleryThumbnails[3].src
			itemGalleryImg.src = itemGalleryThumbnails[3].src
			currentImg = itemGalleryThumbnails.length - 1
		}
		else {
			itemProductImg.src= itemGalleryThumbnails[currentImg].src
			itemGalleryImg.src = itemGalleryThumbnails[currentImg].src
		}
		itemThumbnailsImg.forEach(function (item){
			if(item.dataset.nr !== thumbnailsImg[currentImg].dataset.nr){
				item.classList.remove("opacity");
				item.parentElement.classList.remove("active");
			}
		})
		itemThumbnailsImg.forEach(function (item){
			if(item.dataset.nr == itemThumbnailsImg[currentImg].dataset.nr){
				item.classList.add("opacity");
				item.parentElement.classList.add("active");
			}
		})
	});






})


//  it working but i could change it
// counter
currentText.forEach(function(item){
	let counterItem = 0
	increase.forEach(function(btn){
		btn.addEventListener("click",()=>{
		if(item.parentElement == btn.parentElement){
			counterItem++,
			item.innerHTML=counterItem}
	})
	})
	decrease.forEach(function(btn){
		btn.addEventListener("click", ()=> {
			if(item.parentElement == btn.parentElement && counterItem > 0){
				counterItem--;
				item.innerHTML=counterItem;
			}
		})
	})

})


// //////////////////////////////////////////////////////////////////////
// add to cart

itemAdd.forEach(function(item){
	item.addEventListener("click", function(){
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
})
