function getValueOfElement(id){
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    return elementValue;
}

//add product to the cart
function addProductToCart(productName){
    const cart = document.getElementById('product-list');
    const p = document.createElement('p');
    const count = cart.childElementCount;
    p.classList.add('my-4');
    p.innerHTML = `<strong>${count+1}. ${productName}</strong>`;
    cart.appendChild(p);
  }

//calculate total price

function calculateTotalPrice(productPrice){
    let totalPrice = getValueOfElement('total-price');
    let totalPriceInNumber = parseFloat(totalPrice);
    console.log(totalPriceInNumber);
    const productPriceInNumber = parseFloat(productPrice);
    console.log(productPriceInNumber);
    totalPriceInNumber = totalPriceInNumber + productPriceInNumber;
    document.getElementById('total-price').innerText = totalPriceInNumber;
    if(totalPriceInNumber>0){
        document.getElementById('btn-purchase').disabled = false;
    }
    
    if(totalPriceInNumber>=200){
        document.getElementById('btn-coupon').disabled = false;
    }
}

