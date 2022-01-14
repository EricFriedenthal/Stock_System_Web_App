'use strict'
// Add product fields
const addProductCode  = document.getElementById("addProduct");
const itemsReceived   = document.getElementById("itemsReceived");
const priceItem       = document.getElementById("priceItem");
const addStockBtn     = document.getElementById("addStockBtn");
const errorMessage    = document.getElementById("errorMessage");
// Remove product fields
const removeProductCode = document.getElementById("removeProduct");
const buyerEmail      = document.getElementById("buyerEmail");
const itemsSold       = document.getElementById("itemsSold");
const removeStockBtn  = document.getElementById("removeStockBtn");
// Table display fields
const firstProduct    = document.getElementById("firstProduct");
const secondProduct   = document.getElementById("secondProduct");
const thirdProduct    = document.getElementById("thirdProduct");
const firstQuantity   = document.getElementById("firstQuantity");
const secondQuantity  = document.getElementById("secondQuantity");
const thirdQuantity   = document.getElementById("thirdQuantity");
const firstAverage    = document.getElementById("firstAverage");
const secondAverage   = document.getElementById("secondAverage");
const thirdAverage    = document.getElementById("thirdAverage");
const firstSubTotal   = document.getElementById("firstSubTotal");
const secondSubTotal  = document.getElementById("secondSubTotal");
const thirdSubTotal   = document.getElementById("thirdSubTotal");
const firstGrandTotal = document.getElementById("firstGrandTotal");
const secondGrandTotal= document.getElementById("secondGrandTotal");
const thirdGrandTotal = document.getElementById("thirdGrandTotal");

const emailArray = [];
let totalStock ;
let grandTotal ;
// Event Listeners 
addStockBtn.addEventListener("click", () => 
{ const buyStock = new StockAdd; buyStock.addStock(Number(itemsReceived.value),addProductCode.value,Number(priceItem.value));});
removeStockBtn.addEventListener("click", () => 
{ const sellStock = new StockRemove; sellStock.removeStock(removeProductCode.value,Number(itemsSold.value),buyerEmail.value)});

class StockAdd {
  
    //Add stock to inventory  
    addStock = function (addItem,productCode,priceItem) {

    if(addItem == " "){console.log("The number of items sold has not been entered !");
            return false;
        }
    if(productCode == 0){console.log("The Product Code has not been selected !");
            return false;
        }
    if(priceItem == " "){console.log("The Item Price has not been entered !");
            return false;
        }
        let totalValue1 = addItem * priceItem;
        if(productCode == 1){
            grandTotal = Number(firstGrandTotal.textContent) + totalValue1;
            firstQuantity.textContent = totalStock = Number(firstQuantity.textContent) + addItem;         
            firstSubTotal.textContent = totalValue1;
            firstGrandTotal.textContent = grandTotal ;
            firstAverage.textContent =  ( grandTotal/ totalStock).toFixed(2);
        }
        else if(productCode == 2){
            grandTotal = Number(secondGrandTotal.textContent) + totalValue1;
            secondQuantity.textContent = totalStock = Number(secondQuantity.textContent) + addItem; ;      
            secondSubTotal.textContent = totalValue1;
            secondGrandTotal.textContent = grandTotal;
            secondAverage.textContent =  (grandTotal / totalStock).toFixed(2);
        }
        else if(productCode == 3){
            grandTotal = Number(thirdGrandTotal.textContent) + totalValue1;
            thirdQuantity.textContent = totalStock = Number(thirdQuantity.textContent) + addItem; ;
            thirdSubTotal.textContent = totalValue1;
            thirdGrandTotal.textContent = grandTotal;
            thirdAverage.textContent  = (grandTotal / totalStock).toFixed(2);
        } }}

class StockRemove {
      
     
// Remove stock from inventory
removeStock = function (productCode,removeItem,buyerEmail)  {

if(productCode == 0){console.log("The Product Code has not been selected !");
    return false;
}
if(buyerEmail == ""){console.log("Buyers e-mail has not been selected !");
    return false;
}
if(removeItem == " "){console.log("The number of items sold has not been selected !");
return false;
}

// Append new value to the array and check if email already used 
        if(!emailArray.includes(buyerEmail)){
            emailArray.push(buyerEmail);  
            console.log(emailArray);
        if((firstQuantity.textContent || secondQuantity.textContent || thirdQuantity.textContent ) > removeItem){
            if      (productCode == 1)
                    {firstQuantity.textContent  -= removeItem;}
            else if (productCode == 2)
                    {secondQuantity.textContent -= removeItem;}
            else if (productCode == 3)
                    {thirdQuantity.textContent  -= removeItem;}}
            else  {errorMessage.textContent =  "WARNING insufficient stock to enable this transaction !!"}
            }else {errorMessage.textContent =  " Only one purchase allowed per customer !"; }
    }}
