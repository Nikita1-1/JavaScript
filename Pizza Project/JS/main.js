function getReceipt() {

    let text1 = '<h3>You ordered: <h3>';
    let runningTotal = 0;
    let sizeTotal = 0;
    let sizeArray = document.getElementsByClassName('size');
    for (let i = 0; i < sizeArray.length; i++){
        if (sizeArray[i].checked) {
            let selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + '<br>';
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize == "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    }  else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $ " + sizeTotal + '.00');
    console.log("size text1: " + text1);
    console.log("subtotal: $ " + runningTotal + ".00");
    //these variables will get passed oom to each function 
    getTopping(runningTotal, text1);
};

function getTooping(runningTotal, text1) {
    let toppingTotal = 0;
    let selectedTopping = [];
    let toppingArray = document.getElementsByClassName('toppings');
    for (let j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log('selected topping item: ('+ toppingArray[j].value+' ) ');
            text1 = text1 + toppingArray[j].value+ '<br>';
        }
    }
    let toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        topping = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
};
//     runningTotal = (runningTotal + toppingTotal);
//     console.log('total topping items: ' + toppingCount);
//     console.log(toppingCount + ' topping - 1 free topping = ' + " $ " + toppingTotal + '.00');
//     console.log('topping text1: ' + text1);
//     console.log('Purchase Total: ' + " $ " + runningTotal + '.00' );
//     document.getElementById('showText').innerHTML = text1;
//     document.getElementById('totalPrice').innerHTML = '<h3> Total: <strong>$ ' + coutingTotal + '.00 ' + '</strong></h3>';
// };

function getVeggi(runningTotal, text1) {
    getTopping();
    let veggiTotal = 0;
    let selectedVeggi = [];
    let veggiArray = document.getElementsByClassName('Veggi');
    for (let z = 0; z < veggiArray.length; z++) {
        if(veggiArray[z].checked) {
            selectedVeggi.push(veggiArray[z].value);
            console.log('selected veggi item: ('+ selectedVeggi[z].value +')');
            text1= text1 + veggiArray[z].value + '<br>';
        }
    }
    let veggiCount = selectedVeggi.length;
    if(veggiCount > 1) {
        veggi = (veggiCount - 1);
    } else {
        veggiTotal = 0;
    }
    runningTotal = (runningTotal + veggiTotal);
    console.log('total veggi items: ' + veggiTotal);
    console.log('total toppings: ' + toppingCount);
    console.log(toppingCount + ' topping - 1 free topping = ' + " $ " + toppingTotal + '.00');
    console.log(veggiTotal + 'veggi - 1 free veggi = ' + ' $ ' + veggiTotal + '.00');
    console.log("veggi text1:" + text1);
    console.log('Purchase Total: ' + " $ " + runningTotal + '.00' );
    document.getElementById('showText').innerHTML = text1;
    document.getElementById('totalPrice').innerHTML = '<h3> Total: <strong>$ ' + coutingTotal + '.00 ' + '</strong></h3>';
}