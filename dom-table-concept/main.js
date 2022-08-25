




function calculate(){
    let unit_price=document.getElementById("unitprice").innerText,
    quantity=document.getElementById("qty").value,
    action=document.getElementById("total");
    

    price=unit_price*quantity;
    document.getElementById("price").innerHTML=price;
    // return total;

}

document.getElementById ("total").addEventListener('click',calculate);
// let a= calculate();
// console.log(a);