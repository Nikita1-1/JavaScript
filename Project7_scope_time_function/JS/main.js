let iron =  10;
function global() {//in this functon because IRON is a global variable bith functions GLOBAL and GLOBAL_1 could use it
    document.write(20 + iron + "<br>");
}
function global_1() {
    document.write(20 + iron + "<br>");
}

global();
global_1();



function local(){// in this case variable NUMBER is local and only LOCAL function can utilize it when local_1 cannot. 
    let number = 10;
    document.write(20 + number + "<br>");
}
function local_1() {
    document.write(20 + number);
}

local();
local_1();


function myFunction() {
    const cable = 15
    console.log(20 + cable + "<br>");
}


function get_Date() {
    if (new Date().getHours() < 18) {// creting new date with hours using NEW keyword
    document.getElementById("time").innerHTML = "How are you today? ";
    }
}



function get_Game() {
    let Buyer;
    Buyer = document.getElementById("age_number").value;
    if (Buyer >= 21 && Buyer <= 65){
        document.getElementById("statement").innerHTML = "You Can  Buy This Property";
    } else {
        document.getElementById("statement").innerHTML = "You are too young or too old to buy it";
    }
}


function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {//if condition is true then it will print  You are old enough to vote
        Vote = "You are old enough to vote";
    } 
    else {// if previous condition IF is not true then it will go to ELSE 
        Vote = "You are too young to vote";
    }
    document.getElementById("How_old_are_you").innerHTML = Vote;
}


function Time_Function(){
    let Time = new Date().getHours();//new object with hours
    let Reply;
    if (Time < 12 && Time > 0) {//this condition true then print It is morning time
        Reply = "It is morning time";
    }
     else if (Time >= 12 && Time < 18 ) {//if previous condition is not true then to make additional condition you need to use else if 
        Reply = "It is afternoon";
     }
     else {// end even if "ELSE IF" is not true then it will go to last option "ELSE" where that means if previous conditions were false and in this case "ELSE" condition must be true to return any result 
        Reply = "It is evening time";
     }
     document.getElementById("Time_of_day").innerHTML = Reply;
}