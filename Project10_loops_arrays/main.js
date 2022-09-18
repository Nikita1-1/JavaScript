function count_to_Ten() {
    let digit = "";
    let num = 1;
    while( num < 11) {
        digit += "<br>" + num;
        num++;
    }
    document.getElementById("number").innerHTML = digit;
}

let words = "i have a cat";
let len = words.length;

let arr = [14, 03, 13, 3, 5, 9];
let num = arr.length
document.write(len + "<br>" + num);


let Instruments = ["Piano", 'Guitar', 'Drums', 'Violin', 'Trumpet'];
let Content = " ";
let Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>"; 
    }
    document.getElementById('music').innerHTML = Content;
}

function cat_Pic() {
    const Cat_Picture = [] ;
    Cat_Picture[0] = 'sleeping';
    Cat_Picture[1] = 'playing';
    Cat_Picture[2] = 'eating';
    Cat_Picture[3] = 'purring';
    document.getElementById('Cat').innerHTML = 'in this picture the cat is ' + Cat_Picture[2] + '.';
}

function  const_Function(){//constant cannot share its name with a function or a variable in the same scope
    const Instruments = {
        color: "Black",
        type: "Guitar",
        brand: "Fender"
    };
    Instruments.color = "Blue";
    Instruments.price = "$900";
    document.getElementById('guitar').innerHTML = "My friend have a " + Instruments.type + " that is worth " + Instruments.price + " i wish i have the same";
     
}




// var can be accessed outside of a function and curly brackets whereas Let cannot be
//however VAR has bug when you make few same variables with different values the last value of the VAR variable will be assigned to it even thoug it was in curly brackets

let a = myFunc(4, 6)

function myFunc(a, b){
    return a * b;
}
document.write(a + "<br>")



let car = {
    color: "red",
    make: "Hellcat",
    model: "Dodge",
    year: 2022,
    description: function (){
        return "The car is a " + this.model + " " + this.make + " " + this.year;
    }
};
document.getElementById("car").innerHTML = car.description();


let number = " ";
for ( let i = 0; i < 16; i++ ) {
     if (i === 5 && i === 13) {
        continue;
    }
    number += "This number is -  " + i + "<br>";
    document.getElementById("movie").innerHTML = number;
}

let f = " ";
for ( let i = 0; i < 16; i++ ) {
     if (i === 9 ) {
        break;
    }
    f += "This number is -  " + i + "<br>";
    document.getElementById("number").innerHTML = f;
}
