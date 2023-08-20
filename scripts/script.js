function getValueOfElement(id){
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    return elementValue;
}

function getDiscount(){
    const couponCode = document.getElementById('coupon-code').value;
    if(couponCode !== "SELL200") {
      alert('Invalid Coupon');
      return;
    }
    const totalPrice = getValueOfElement('total-price');
    const totalPriceInNumber = parseFloat(totalPrice);
    let discountValue = totalPriceInNumber*0.2;
    document.getElementById('discount').innerText = discountValue.toFixed(2);
    let finalTotal = totalPriceInNumber - discountValue;
    document.getElementById('total').innerText = finalTotal.toFixed(2);
  }

function getProductData(divId, pnId, ppId){
    document.getElementById(divId).addEventListener('click', function(){
    const product_name = getValueOfElement(pnId);
    addProductToCart(product_name);
    const product_price = getValueOfElement(ppId);
    calculateTotalPrice(product_price); 
    const couponCode = document.getElementById('coupon-code').value;
    if(couponCode === 'SELL200'){
        getDiscount();
    }  
  });
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

getProductData('product-kw1','pn-kw1','kw1-price');
getProductData('product-kw2','pn-kw2','kw2-price');
getProductData('product-kw3','pn-kw3','kw3-price');
getProductData('product-sw1','pn-sw1','sw1-price');
getProductData('product-sw2','pn-sw2','sw2-price');
getProductData('product-sw3','pn-sw3','sw3-price');
getProductData('product-frn1','pn-frn1','frn1-price');
getProductData('product-frn2','pn-frn2','frn2-price');
getProductData('product-frn3','pn-frn3','frn3-price');

//reset all data
document.getElementById('go-home').addEventListener('click', function(){
    location.reload();
});

document.getElementById('autoFill').addEventListener('click', function(){
    if(document.getElementById('btn-coupon').disabled == false){
        document.getElementById('coupon-code').value = 'SELL200';
    }
});

document.getElementById('btn-coupon').addEventListener('click',function(){
    getDiscount();
});
