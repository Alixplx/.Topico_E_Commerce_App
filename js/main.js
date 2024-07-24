// Open & Close Menu Cart

var cart = document.querySelector('.cart')

function openCart() {

    cart.classList.add('active')
}

function closeCart() {

    cart.classList.remove('active')
}


// Open & Close Menu Cart

var menu = document.querySelector('#menu')

function openMenu() {

    menu.classList.add('active')
}

function closeMenu() {

    menu.classList.remove('active')
}


// Change item image

let bigImage = document.getElementById('bigImg')

function changeImage(img) {

    bigImage.src = img
}

// Add Items To Cart

var allProductJson;

var itemsInCart = document.querySelector('.items_in_cart')

let productCart = []

function addToCart(id, btn) {

    productCart.push(allProductJson[id])
    btn.classList.add('active')

    getCartItems()
}


let countItem = document.querySelector('.count_item')
let priceCartHead = document.querySelector('.price_cart_head')
let countItemCart = document.querySelector('.count_item_cart')
let priceCartTotal = document.querySelector('.price_cart_total')


function getCartItems() {

    let items_c = ""
    let totalPrice = 0

    for (let i = 0; i < productCart.length; i++) {

        items_c += `

            <div class="item_cart">

                <img src="${productCart[i].img}" alt="">
                
                <div class="content">

                    <h4>${productCart[i].name}</h4>
                    <p class="price_cart">$${productCart[i].price}</p>
                </div>

                <button onclick="removeItem(${i})" class="delete_item"> <i class="fa-solid fa-trash-can"></i> </button>

            </div>
        `

        totalPrice += productCart[i].price
    }

    itemsInCart.innerHTML = items_c

    priceCartHead.innerHTML = "$" + totalPrice
    countItem.innerHTML = productCart.length

    countItemCart.innerHTML = `${productCart.length} (Item In Cart)`
    priceCartTotal.innerHTML = "$" + totalPrice
}

// This Function Remove Item From Cart List

function removeItem(index) {

    productCart.splice(index, 1)
    getCartItems()

    let addToCartButtons = document.querySelectorAll('.fa-cart-plus')
    for (let i = 0; i < addToCartButtons.length; i++) {
        
        addToCartButtons[i].classList.remove('active')
        productCart.forEach( product => {

            if (product.id == i) {

                addToCartButtons[i].classList.add('active')
            }
        })
    }
}


// Back To Top

let backToTop = document.querySelector('.back_to_top')

backToTop.addEventListener('click', function() {

    window.scrollTo( {

        top : 0,
        behavior: "smooth"
    })
})