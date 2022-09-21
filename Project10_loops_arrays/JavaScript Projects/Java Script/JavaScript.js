function food_Function(){
    let Food_Output;
    let Food = document.getElementById("Food_Input").value;
    let Food_String = " is great choice";
    switch(Food) {
        case "Banana":
            Food_Output = 'Banana' + Food_String;
        break;
        case "Dumplings":
            Food_Output = 'Dumplings' + Food_String;
        break;
        case "Rice":
            Food_Output = 'Rice' + Food_String;
        break;
        case "Soup":
            Food_Output = 'Soup' + Food_String;
        break;
        case "Cake":
            Food_Output = 'Cake' + Food_String;
        break;
        default:
            Food_Output = 'Please enter a Food Name exactly as written'
            
    }
    document.getElementById('Output').innerHTML = Food_Output;
}

function Hello_World_Function(){
    let A = document.getElementsByClassName("Click");
    A[1].innerHTML = 'The text has changed!';
}

let draw = document.getElementById("draw");
let w = draw.getContext("2d");
let z = draw.getContext("2d");
w.moveTo(0, 0);
w.lineTo(250, 125);
z.moveTo(-20, 260);
z.lineTo(250, 125);
w.stroke();
z.stroke();

let color = document.getElementById('color');
let ctx = color.getContext("2d");

//Create Gradient
let grd = ctx.createLinearGradient(60, 30, 200, 30);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");


//Fill with gradient

ctx.fillStyle = grd;
ctx.fillRect(20, 10, 500, 190);

