function Vehicle(Make, Model, Year, Color) {// Vehicle is the object constructor
    this.Vehicle_Make = Make;//The “this” keyword gets the values of the newly created car object with the use of the “new” keyword. This is useful when you want to create objects – the “this” keyword allows you to essentially create a placeholder of undetermined values until the new object is created from the object constructor.
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

let Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");// NEW  is keyword that creats object of the Vehicle function (Jack, Emily, Erik)
let Emily = new Vehicle ("Jeep", " Trail Hawk", 2019, "White and Black");
let Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + " - colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}



function fruit(color, taste, seeds){//using this function with keyword THIS and NEW 
    this.Fruit_color = color;
    this.Fruit_taste = taste;
    this.Fruit_seeds = seeds;

} 

var banana = new fruit("Yellow", "Sweet", "Soft seeds");//creating NEW fruit and giving him own values.
function myFruits(){
    document.getElementById("Fruit").innerHTML = "All bananas have " + banana.Fruit_color + " color, and " + banana.Fruit_taste + " taste " + " and inside of it you can find " + banana.Fruit_seeds;
}


function Student(FirstName, LastName, Grade, Age) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Grade = Grade;
    this.Age = Age;
}

const highSchool = new Student ("Alex", "Peterson", 5, 90);
const middleSchool = new Student ("Ivory", "Brown", 9, 13);
document.getElementById("class").innerHTML = "This is a new Student " + highSchool.FirstName + " He is " + highSchool.Age + " next year he will graduate, p.s. hopefully:)";



function count_Function(){//nested function is function inside the function . First function return the whole result in HTML
    document.getElementById("Counting").innerHTML = Count();
    function Count(){// this function is counting from start point to + 1
        let Starting_Point = 8;
        function Plus_One(){ Starting_Point += 1;}
        Plus_One();
        return Starting_Point;//returning result 9 
    }
}