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
    let apartment = 150;
    floor = apartment/house;
    if (floor >= 10)
        console.log('each floor has 10 apart');
    else 
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


document.write(10==10 && 20==20);
document.write("red"==="blue" || 17<13);


function not_Operator() {
    document.getElementById("operator").innerHTML = !(20 < 19);
}
