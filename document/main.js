




function clickme() {
    let a = document.getElementById("click").innerHTML = "amukku dumukku amal dumal";
    alert(a);
}


function confirm() {
    let x = document.getElementById("pass").value;
    let y = document.getElementById("con").value;
    if (x == y) {
        document.getElementById("yes").innerHTML = "currect";
    }
    else {
        document.getElementById("yes").innerHTML = "in currect";
    }
}