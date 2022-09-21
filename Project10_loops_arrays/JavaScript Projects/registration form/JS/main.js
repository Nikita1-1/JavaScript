// const form = document.getElementById("info");
// const fname = document.getElementById("fname");
// const lname = document.getElementById("lname");
// const email = document.getElementById("email");
// const error = document.getElementsByClassName("error");

// form.addEventListener('submit', e => {
//     // e.preventDefault();//preventing our page from submitting
    

//     validateInputs();
// })

//     const setError = (element, message) => {
//         const inputControl = element.parentElement;
//         const errorDisplay = inputControl.querySelector('.error');

//         errorDisplay.innerText = message;
//         inputControl.classList.add("error");
//         inputControl.classList.remove("success")
//     }

//     const setSuccess = element => {
//         const inputControl1 = element.parentElement;
//         const errorDisplay = inputControl1.querySelector(".error")
        
//         errorDisplay.innerText = ' ';
//         inputControl1.classList.add("success");
//         inputControl1.classList.remove("error")
    
//     }

//     const isValidEmail = email => {
//         const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
//         re.test(String(email).toLowerCase());
//         return
//     }

//     const isFnameValid = fname => {
//         const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
//         re.test(String(fname).toLowerCase());
//         return
//     }

//     const isLnameValid = lname => {
//         const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
//         re.test(String(lname).toLowerCase());
//         return
//     }



// const validateInputs = () => {
//     const fnameValue = fname.value.trim();
//     const emailValue = email.value.trim();//trim will remove empty space if user will click space
//     const lnameValue = lname.value.trim();


//     if (fname == " "){
//         setError(fname, "First Name Is Required");
//     } else {
//         setSuccess(fname);
//     }

//     if ( email == " ") {
//         setError(email, "Email is Required");

//     } else if (!isValidEmail (emailValue)){
//         setError(email, "Provide valid email");
//     } else {
//         setSuccess(email);
//     }

//     if (lname == " "){
//         setError(lname, "Last Name Is Required");
//     } else {
//         setSuccess(lname);
//     }
// };


function validateForm() {
    let x = document.forms["Registration"]["fname"].value;
    if (x == "") {
      document.getElementById("error").innerHTML = "Name must be filled out";
        return false;
    }
    let y = document.forms["Registration"]["lname"].value;
    if (y == "") {
      document.getElementById("error_2").innerHTML = "Last Name must be filled out";
      return false;
    }
}