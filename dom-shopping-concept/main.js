

function calculate(){

    let rate,cost,qty;
    let row=this.parentNode.parentNode;
    // console.log(row)
   let unitpriceEle= row.getElementsByClassName("unitprice")[0],
    quantityEle= row.getElementsByClassName("quantity")[0],
    priceEle= row.getElementsByClassName("price")[0];
    rate=unitpriceEle.innerText;
    rate=parseInt(rate);
    qty=quantityEle.value;
    cost=(rate*qty);
    priceEle.innerHTML=cost;

}
let x=document.getElementsByClassName("action");
    
    for(let i=0; i<x.length; i++){
        x[i].addEventListener('click',calculate);
       
    } console.log(x);
