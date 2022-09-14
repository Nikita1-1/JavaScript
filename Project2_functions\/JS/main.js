//Write a function that includes assigning two variables and utilizes the document.getElementById method (as covered in the previous step of the course).

window.alert(Math.random() * 100);//return random nuber up to 100 



function random(){
let number= Math.random( ) * 100;
document.getElementById("Random_Math").innerHTML = 'Random number is: ' + number;// return random number in HTML up to 100
}

function result () {
   document.getElementById("demo").innerHTML = Date();// returns date and time in HTML if click on button 

}


function myFunction () {
    var sentence = "I learn a lot ";
    sentence += "from this book";
    document.getElementById("concatenate").innerHTML = sentence;//return concatenatio in html
}

function toCelcius(f){
    return 5/9 * (f-32);
}
document.getElementById("temp").innerHTML = toCelcius(82);//return farenhiet converted into celcius 

let myElement = document.getElementById("color");
 myElement.style.color="blue";//change text into blue color 
 


 function JavaScript() {
    let addition = 2 + 2;
    document.getElementById("Math").innerHTML="2 + 2 = " + addition;// addition 

 }


 function substruction_Function () {
    let substruction = 5 - 2 ;
    document.getElementById("substr").innerHTML = "5 - 2 = " + substruction;
 }


 function division_Function() {
   let division = 10 / 2;
   document.getElementById("Division").innerHTML = "10 / 2 = " + division;
 }


 function multiply( ) {
   let multiply = 4 * 8;
   document.getElementById('multiply').innerHTML = "4 * 8 = " + multiply;
 }


 function More_Math() {
   let simple_math = (1 - 9435) / 45 + 35 * 296;
   document.getElementById("multiple_math").innerHTML = "one minus nine thousands four hundreds thirty five divided in forthy five plus thirty five and multiply by 296 equals " + simple_math;
 }


 function modulus() {
   let modul_math = 20 % 9;
   document.getElementById('modulus').innerHTML = ' 20 % 9 = ' + modul_math;
 }

 function NEGATION_OPERATOR () {
   let x = 10;
   document.getElementById("operator").innerHTML = -x;// 
 }


 let x = 5;
 x++;
 console.log(x);//incremet 


let y = 5.93;
y--;
console.log(y);//decremetn



const PI = Math.PI;
console.log(PI ) //tiFixed(2) use to round the PI number to fers two numbers after 3. 


let min = Math.min(0.5, 10334, 34, 695, 0, 1);
console.log(min);
 
let max = Math.max(0.5, 10334, 34, 695, 0, 1);
console.log(max);


let ceil = Math.ceil (51.3);//returns the value of x rounded up to its nearest integer
console.log(ceil);

let floor = Math.floor(23.9);// returns the value of x rounded down to its nearest integer
console.log(floor);


let round = Math.round(4.49);//  returns the nearest integer:
console.log(round);

let pow = Math.pow (9, 2)//returns the value of x to the power of y
console.log(pow);

let sqrt = Math.sqrt( 110);//eturns the square root of x
console.log(sqrt);

function my_Dictionary() {
   const Animal = {
      Species: "Dog",
      Breed: "Labrador",
      Color: "Silver",
      Age: 4,
      Sound: "Bark!"
   };
   delete Animal.Sound;
   document.getElementById('Dictionary').innerHTML = Animal.Sound;
}



console.log(typeof "Hello");
console.log(typeof 5);