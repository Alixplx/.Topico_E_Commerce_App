
// Open & Close Filter

var filter = document.querySelector('.filter')


function openClsoeFilter() {

    filter.classList.toggle('active')
}

fetch('js/items.json')
    .then( response => response.json())
    .then(data => {

        const allProducts = document.getElementById('products_dev')


        allProductJson = data

        data.forEach(product => {
            
            const discount = Math.floor( (product.old_price - product.price) / product.old_price * 100)

            const old_price_parg = product.old_price ? `<p class="old_price">$${product.old_price}</p>` : ""

            const check_discount = product.old_price ? `<span class="sale_present">%${discount}</span>` : ""

            allProducts.innerHTML += `
                
                <div class="product swiper-slide">

                    <div class="icons">

                        <span> <i onclick="addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i> </span>
                        <span> <i class="fa-solid fa-heart"></i> </span>
                        <span> <i class="fa-solid fa-share"></i> </span>
                    </div>

                    ${check_discount}

                    <div class="img_product">

                        <a href="item.html">

                            <img src="${product.img}" alt="">
                            <img class="img_hover" src="${product.img_hover}" alt="">
                        </a>
                    </div>

                    <h3 class="name_product">

                        <a href="#">
                            ${product.name}
                        </a> 
                    </h3>

                    <div class="stars">

                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>

                    <div class="price">

                        <p> <span>$${product.price}</span> </p>
                        ${old_price_parg}
                    </div>

                </div> `
        });

})