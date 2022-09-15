console.log(typeof "Hello");
console.log(typeof 5);
console.log(typeof true);



function my_Function(){
    document.getElementById("test").innerHTML = isNaN ("this is a string");
    document.getElementById("test").innerHTML = isNaN("004");
}

//infinity number 

console.log(3E310);
console.log(-3E310);


function boolean_logic() {
    let number = (10 > 34) && (30 <= 43);
    document.getElementById('boolean').innerHTML = ("ten is greater then thirty four? : ") + number;
}



function my_Console() {
    const house = 15;
    let apartment = 150;//use let just because, however LET using when you can change this value in the future, CONST using when you dont want to change value in the future, VAR is not popular as of now, mostly people usen this 2 
    floor = apartment/house;
    if (floor >= 10)//condition IF, if something is true or false then you should do this... 
        console.log('each floor has 10 apart');
    else //else use when you wrote all terms in previous steps with IF or if else, then you can use else to finih the condition with cerain terms
    console.log("each floor has:" + floor + " apartments" );
}
my_Console()



document.write(10==10);
document.write(10==9);


x = 10;
y = 10;
document.write(x===y);

a=10;
b="10";
document.write(a===b);

flower = "cactus";
age = 5;
document.write(flower===age);

backpack = "black";
color = "red";
document.write(backpack===color);


document.write(10==10 && 20==20);//
document.write("red"==="blue" || 17<13);


function not_Operator() {//not operator does work when statement is for example: 20 is not equal 19, ! means NOT 
    document.getElementById("operator").innerHTML = !(20 < 19);
}
