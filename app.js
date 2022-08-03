import {products, displayProducts} from './products.js'

const productList = document.querySelector(".products-list")
productList.innerHTML=displayProducts(products)

const eachProduct = document.querySelectorAll(".product")

const shoppingCart = document.querySelector(".shopping-cart")
const cartContainer = document.querySelector(".cart-img")

const increase = document.querySelectorAll(".increase")
const decrease = document.querySelectorAll(".decrease")
const currentText = document.querySelectorAll(".current")

const itemAdd = document.querySelectorAll(".item-add")
const cartBody = document.querySelector(".cart-body")
const sideMenu = document.querySelector(".main-navigation")
const openMenu= document.querySelector(".open-side-menu")
const closeMenu= document.querySelector(".nav-button")

openMenu.onclick=()=>  sideMenu.classList.add('visable-menu')
closeMenu.onclick=()=>  sideMenu.classList.remove('visable-menu')
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






})



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
for(let i=0; i< itemAdd.length; i++){
	itemAdd[i].addEventListener("click", function(){
		cartNumbers(products[i],currentText[i])
		productCost(products[i],currentText[i])
		displayCart ()
		onLoadCartNumbers()

	})
}


function displayCart (){
	
	let cartItems = JSON.parse(localStorage.getItem("productsInCart"));
	let totalCost= localStorage.getItem("totalCost")
	if(cartItems && Object.keys(cartItems).length > 0){
		cartBody.innerHTML=``;
		Object.values(cartItems).map(item => {
			cartBody.innerHTML += `
						<div class="cart-product">
							<img class="thumbnail-cart" src="./images/${item.photo[0]}" alt="product img">
							<div class="product-cart-info">
								<p class="product-name-cart">${item.name}</p>
								<p>$${item.price} x ${item.inCart} = <b>$${item.price * item.inCart}</b> </p>
							</div>
							<button class="delete-img"><svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg></button>
						</div>`;
		})
		cartBody.innerHTML += `
						<div class="total-cost">Total cost: <b>$${totalCost}</b></div>
						<div class="summary-btn">
							<button class="shop-list">Checkout</button>
						</div>`
	}
	else if (cartItems && Object.keys(cartItems).length === 0){
		cartBody.innerHTML=`<main class="cart-body"><p>Your cart is empty.</p></main>`
	}
	remove(products)

}

function onLoadCartNumbers(){
	let productNumbers = localStorage.getItem('cartNumbers');
	if(productNumbers >0){
		document.querySelector(".in-cart").innerHTML = `<p>${productNumbers}</p>`
		document.querySelector(".in-cart").classList.add("visable");
	}else {
		document.querySelector(".in-cart").classList.remove("visable");
	}
}


function cartNumbers(product,currentText){
	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers = parseInt(productNumbers);
	let currentTextValue = parseInt(currentText.textContent)
	if(productNumbers){
		localStorage.setItem('cartNumbers',productNumbers + currentTextValue);
		document.querySelector(".in-cart").innerHTML = `<p>${productNumbers+ currentTextValue}</p>`;
	}else {
		localStorage.setItem('cartNumbers', currentTextValue);
		document.querySelector(".in-cart").innerHTML = `<p>${currentTextValue}</p>`;
		document.querySelector(".in-cart").classList.add("visable");
	}
	setItems(product,currentText)
}
function setItems(product,currentText){
	let cartItems = localStorage.getItem('productsInCart')
	cartItems = JSON.parse(cartItems)

	let currentTextValue = parseInt(currentText.textContent)

	if(cartItems && currentTextValue !== 0){
		if(cartItems[product.name] == undefined){
			cartItems = {
				...cartItems,
				[product.name]:product
			}
		}
		cartItems[product.name].inCart += currentTextValue;
	}
	else if (currentTextValue !== 0){
	product.inCart = currentTextValue;
	cartItems = {
		[product.name]:product
	}
}
	localStorage.setItem("productsInCart",JSON.stringify(cartItems))
}

function productCost(product,currentText){
	let cartCost = parseInt(localStorage.getItem('totalCost'));
	let currentTextValue = parseInt(currentText.textContent)
	let productsCost = product.price * currentTextValue
	if(cartCost){
		localStorage.setItem('totalCost',cartCost + productsCost);
	}else {
		localStorage.setItem('totalCost', productsCost);

	}
}



//////////////// delete from cart
function remove(products){
const deleteImg = document.querySelectorAll(".delete-img")

deleteImg.forEach(function(item,index){
	item.addEventListener("click",function(){
		const productCartName = document.querySelectorAll(".product-name-cart")
		decreseCartNumbers(productCartName[index])
		decreseTotalCost(productCartName[index])
		decreseProductInCart(productCartName[index],products)
		onLoadCartNumbers()
		displayCart()
	})
	
})
}


function decreseProductInCart(productCartName,products){
	let cartItems = JSON.parse(localStorage.getItem('productsInCart'))
	const product = productCartName.textContent
	cartItems[product].inCart -= cartItems[product].inCart
	delete cartItems[product]
	products.forEach(function(item){
		if(item.name == product){
			item.inCart = 0
		}
	})
	localStorage.setItem("productsInCart",JSON.stringify(cartItems))
}

function decreseTotalCost(productCartName){
	let cartItems = JSON.parse(localStorage.getItem('productsInCart'))
	let cartCost = JSON.parse(localStorage.getItem('totalCost'))
	const product = productCartName.textContent
	cartCost = cartCost-(cartItems[product].inCart * cartItems[product].price)
	localStorage.setItem("totalCost",JSON.stringify(cartCost))

}

function decreseCartNumbers(productCartName){
	let cartItems = JSON.parse(localStorage.getItem('productsInCart'))
	let productNumbers = JSON.parse(localStorage.getItem('cartNumbers'))
	const product = productCartName.textContent
	productNumbers= productNumbers-cartItems[product].inCart

	localStorage.setItem("cartNumbers",JSON.stringify(productNumbers))
	
}
displayCart ()
onLoadCartNumbers()

