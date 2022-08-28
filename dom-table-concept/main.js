




// function calculate(){
//     let unit_price=document.getElementById("unitprice").innerText,
//     quantity=document.getElementById("qty").value,
//     action=document.getElementById("total");
    

//     price=unit_price*quantity;
//     document.getElementById("price").innerHTML=price;
//     // return total;

// }

// document.getElementById ("total").addEventListener('click',calculate);


// function cal() {
//     let unitElement=document.getElementsByClassName("unit").innerText;
//     let quanElement=document.getElementsByClassName("quan").value;
//     let  actElement=document.getElementsByClassName("act");

//     prize=unitElement*quanElement;
//     document.getElementsByClassName("prize").innerHTML=prize;
// }
// let a=document.getElementsByClassName("act");
// console.log(a);
// // document.getElementsByClassName("act").addEventListener('click',cal);




function calculation(){
    let rate,qty,cost,
    select=this.parentNode.parentNode,
   un_p=select.getElementsByClassName("unitprice")[0],
    qtyele=select.getElementsByClassName("quantity")[0],
    total=select.getElementsByClassName("price")[0];
    rate=un_p.innerText;
    qty=qtyele.value;
    rate=parseInt(rate);
    cost=(rate*qty);
    
    total.innerHTML=cost;
    // total=parseInt(cost);
}
let x=document.getElementsByClassName("action");
// console.log(x);

for(i=0;i<x.length;i++){
    x[i].addEventListener("click",calculation);
    console.log(x[i]);
}

// function calculation(){

//     let select=this.parentNode.parentNode,
//    un_p=select.getElementsByClassName("unitprice")[0],
//     qty=select.getElementsByClassName("quantity")[0].Value,
//     cost,
//     total=select.getElementsByClassName("price")[0];
//     un_p=un_p.innerText;
//     un_p=parseInt(un_p);
//     cost=un_p*qty;
    
//     total.innerHTML=cost;
//     total=parseInt(cost);
// }
// let x=document.getElementsByClassName("action");
// console.log(x);

// for(i=0;i<x.length;i++){
//     x[i].addEventListener("click",calculation);
//     console.log(x[i]);
// }























