function ride_function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "Your good to go";
    document.getElementById("Ride").innerHTML = Can_ride + (" to ride");
}



function vote() {// created function 
    let Age, Can_Vote;//variables
    Age = document.getElementById('old').value;//variable Age will connect to input with "old" id to check on age.
    Can_Vote = (Age < 18) ? "You are too young to Vote, come back when you are 18" : "You Can Vote";//created statement f person is less then 18 - cannot vote, if 18 and older - please select your donut.
    document.getElementById("result").innerHTML = Can_Vote + (", Love Donuts");//return result in HTML 
}


