//Write a function that includes assigning two variables and utilizes the document.getElementById method (as covered in the previous step of the course).

function result () {
   document.getElementById("demo").innerHTML = Date();

}


function myFunction () {
    var sentence = "I learn a lot ";
    sentence += "from this book";
    document.getElementById("concatenate").innerHTML = sentence;
}

function toCelcius(f){
    return 5/9 * (f-32);
}
document.getElementById("temp").innerHTML = toCelcius(82);

const myElement = document.getElementById("color");
 myElement.style.color="blue";
 


 function JavaScript() {
    const addition = 2 + 2;
    document.getElementById("Math").innerHTML="2 + 2 = " + addition;

 }


 function substruction_Function () {
    const substruction = 5 - 2 ;
    document.getElementById("substr").innerHTML = "5 - 2 = " + substruction;
 }


 function division_Function() {
   const division = 10 / 2;
   document.getElementById("Division").innerHTML = "10 / 2 = " + division;
 }


 function multiply( ) {
   const multiply = 4 * 8;
   document.getElementById('multiply').innerHTML = "4 * 8 = " + multiply;
 }