export let products = [
	{
		id: 1,
		name: 'snekers shoes',
		brand: 'SNEAKER COMPANY',
		series: 'Fall Limited Edition',
		description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
		price: 125,
		inCart:0,
		photo: ["image-product-1.jpg","image-product-2.jpg","image-product-3.jpg","image-product-4.jpg"]
	},
	{
		id:2,
		name: 'snekers hoodie',
		brand: 'SNEAKER COMPANY',
		series: 'Fall Limited Edition',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod optio asperiores aliquam fugit nemo vitae doloribus odio itaque tempore iure, nihil beatae quasi fugiat harum laborum error quia. Quia, cumque?',
		price: 50,
		inCart:0,
		photo: ["hoodie-product-1.jpg","hoodie-product-2.jpg","hoodie-product-3.jpg","hoodie-product-4.jpg"]
	},
	{
		id:3,
		name: 'snekeh   oodie',
		brand: 'SNEAKER COMPANY',
		series: 'Fall Limited Edition',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod optio asperiores aliquam fugit nemo vitae doloribus odio itaque tempore iure, nihil beatae quasi fugiat harum laborum error quia. Quia, cumque?',
		price: 501,
		inCart:0,
		photo: ["hoodie-product-1.jpg","hoodie-product-2.jpg","hoodie-product-3.jpg","hoodie-product-4.jpg"]
	}
]


export function displayProducts(products){
	let displayProduct = products.map(function(item){

		return`<section class="product">
		<div class="lightbox">
		  <button class="img-btn">
			<img class="product-img" src="./images/${item.photo[0]}" alt="main img">
		  </button>
		  <ul class="thumbnails">
		  <li class="thumbnail active"><img class="thumbnail-img opacity" data-nr="${item.id}1" src="./images/${item.photo[0]}" alt="1 thumbanil"></li>
			<li class="thumbnail"><img class="thumbnail-img" data-nr="${item.id}2" src="./images/${item.photo[1]}" alt="2 thumbanil" ></li>
			<li class="thumbnail"><img class="thumbnail-img" data-nr="${item.id}3" src="./images/${item.photo[2]}" alt="3 thumbanil"></li>
			<li class="thumbnail"><img class="thumbnail-img" data-nr="${item.id}4" src="./images/${item.photo[3]}" alt="4 thumbanil"></li>
		  </ul>
		</div>
		<div class="wrapper">
		  <div class="gallery-container">
			<div class="close-gallery">
			  <button class="close-btn">
				<svg class="close-icon" width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>
			  </button>
			</div>
			<div class="main-container">
			  <button class="previus-btn">
				<svg class="previus-icon" width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
			  </button>
			  <img class="gallery-img" src="./images/${item.photo[0]}" alt="main img">
			  <button class="next-btn">
				<svg class="next-icon" width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
			  </button>
			</div>
			  <ul class="gallery-thumbnails">
			  <li class="thumbnail active"><img class="thumbnail-img opacity" data-nr="${item.id}1" src="./images/${item.photo[0]}" alt="1 thumbanil"></li>
				<li class="thumbnail"><img class="thumbnail-img" data-nr="${item.id}2" src="./images/${item.photo[1]}" alt="2 thumbanil" ></li>
				<li class="thumbnail"><img class="thumbnail-img" data-nr="${item.id}3" src="./images/${item.photo[2]}" alt="3 thumbanil"></li>
				<li class="thumbnail"><img class="thumbnail-img" data-nr="${item.id}4" src="./images/${item.photo[3]}" alt="4 thumbanil"></li>
			  </ul>
		  </div>
		</div>
		<article class="description">
		  <div class="product__info">
			<p class="brand">${item.brand}</p>
			<h1>${item.series}</h1>
			<p class="description-info">
			  ${item.description}
			</p>
			<div class="price">
			  <p class="discount-price">$${item.price}</p>
		  </div>
		  <div class="item">
			<div class="counter">
			  <button class="decrease segment"><svg width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/></defs><use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#a"/></svg></button>
			  <p class="current segment">0</p>
			  <button class="increase segment"><svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/></defs><use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#b"/></svg></button>
			</div>
			<button class="item-add">
			  <svg class="cart" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill-rule="nonzero"/></svg>
			  <p>Add to cart</p></button>
			</div>
		</article>
	  </section>`
	})
	return displayProduct = displayProduct.join("")
}
