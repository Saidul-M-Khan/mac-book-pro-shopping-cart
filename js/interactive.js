const memoryCost = document.getElementById("memory-cost");
const storageCost = document.getElementById("storage-cost");
const deliveryCost = document.getElementById("delivery-cost");
const totalCost = document.getElementById("total-cost");
const finalCost = document.getElementById("final-cost");

function totalCostUpdate() {
    totalCost.innerText = 1299 + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);
    finalCost.innerText = totalCost.innerText;
}

// 8GB Unified Memory
function memory8GB() {
    memoryCost.innerText = 0;
    totalCostUpdate();
}

// 16GB Unified Memory
function memory16GB() {
    memoryCost.innerText = 180;
    totalCostUpdate();
}

// 256GB SSD Storage
function storage256GB() {
    storageCost.innerText = 0;
    totalCostUpdate();
}

// 512GB SSD Storage
function storage512GB() {
    storageCost.innerText = 100;
    totalCostUpdate();
}

// 1TB SSD Storage
function storage1TB() {
    storageCost.innerText = 180;
    totalCostUpdate();
}

// Free Delivery
function freeDelivery() {
    deliveryCost.innerText = 0;
    totalCostUpdate();
}

// Paid Delivery
function paidDelivery() {
    deliveryCost.innerText = 20;
    totalCostUpdate();
}

//  bonus part: apply promo code for discount
document.getElementById('submit-btn').addEventListener('click', function(){
    const promoInput = document.getElementById('promo-input');
    const coupon =promoInput.value;
    if(coupon.toLowerCase() == 'stevekaku'){
        // document.getElementById("promo-input").disabled = true;
        const discount = parseFloat(totalCost.innerText) * 20 / 100;
        const priceAfterDiscount = parseFloat(totalCost.innerText) - discount;
        finalCost.innerText = priceAfterDiscount;
        alert("Coupon Applied");
    }
    else if (coupon.toLowerCase() != 'stevekaku'){
        alert('Invalid Code')
    }
    else {
        finalCost.innerText = totalCost.innerText;
    }
    promoInput.value = '';
})