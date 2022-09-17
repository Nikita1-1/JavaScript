function concatenation(){// in this function i use CONCAT() method that is concatenating a few variables  
    let word_1 = ("I have made ");
    let word_2 = ("this function ");
    let word_3 = ("that is ");
    let word_4 = ("concatenating this text");
    let all = word_1.concat(word_2, word_3, word_4);// use concat to concatenate different pieces o text
    document.getElementById("concat").innerHTML = all;
}

function slice_Method() {// slice wor kthe way if you want to return specific element of something inside a text or array etc, you just need to point pocition elemnt where it start and where it ends, positions start with 0 point
    let Sentence = "I like banana and fruits in general"
    let Section = Sentence.slice(1, 6);
    document.getElementById("slice").innerHTML = Section;
}



let whiskey = "15 years old ";// return all letters uppercase 
document.write(whiskey.toUpperCase());


let text = "I love my cat, her name is Ivory";//The search() method returns the index (position) of the first match.
let position = text.search("Ivory");
document.write(position);


function string_method(){//toString method converts number into string, as well as just takingsame value to another variable 
    let x = 180;
    document.getElementById("element").innerHTML = x.toString();
    console.log(typeof x);
}

function precision_method() {//toPrecision method just make number shorter 
    let z = 1352235.35131033322;
    document.getElementById("Precision").innerHTML = z.toPrecision(10);
}


let smth = " <br> apple has iphone";
let apple = smth.valueOf();//valueOf takes value from variable that you point to variab;le that you are using. In this case variable APPLe will take the same value as SMTH
document.write(apple);


let num = 4.5567;//converts a number to a string, rounded to a specified number of decimals
let n = num.toFixed();
document.write(n);

