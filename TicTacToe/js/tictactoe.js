// This variable keeps track of whose turn it is
let activePlayer = "X";
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

//This function is for placing an X or O in a square.
function placeXOrO(squareNumber) {
    //this condition ensures a square hasn't been selected already.
    //the .some() method is used to check each element of the selectSquare array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this variable retrives the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        //this condition checks whos turn it is
        if (activePlayer === "X") {
            //if activePlayer is equal X the x.png is placed in html
            select.style.backgroundImage = 'url("images/x.png")';
            //ActivePlayer may only be X or O so, if not X it must be O
        } else {
            //if activePlayer is equal to O, the o.png is placed in HTML
            select.style.backgroundImage = 'url("images/o.png")' ;
        }
        //squarenumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a function to check for any win conditions.
        checkWinConditions();
        //this condition is for changing the active player.
        if (activePlayer === 'X') {
            //if active player is 'X' change it to 'O'
            activePlayer = 'O';
            //if active player is anything other than 'X'
        } else {
            //change active player to 'X'
            activePlayer = 'X';
        }
        //this function plays placement sound.
        audio('./media/pen.mp3');
        //this condition checks to see if its the computer turn.
        if(activePlayer === 'O') {
            //computer turn
            disableClick();
            //this function waits 1 second before the computer place an image and enables click
            setTimeout(function() { computersTurn(); }, 1000);

        }
        //returning true is needed for our computersTurn() function 
        return true;
    }
    //this function results in a random square being selected by the computer.
    function computersTurn() {
        //this boolean is needed for our while loop
        let success = false;
        //this variable stores a random number 0-8
        let pickASquare;
        //this condition allows our while loop to keep trying if a square is selected already.
        while(!success) {
            //a random number between 0 and 8 is selected 
            pickASquare = String(Math.floor(Math.random() * 9));
            // if the random number evalueted return true, the square hasnt been selected yet
            if(placeXOrO(pickASquare)) {
                //this line calls the function 
                placeXOrO(pickASquare);
                //this changes our boolean and ends the loop
                success = true;
            };
        }
    }
}
            //this function parses the selectSquares array to search for win conditions.
            //drawline function is called to draw line on the screen if the condition is met 

            function checkWinConditions() {
                // X 0, 1, 2 condition
                if (arrayIncludes("0X", "1X", "2X")) {drawWinLine(50, 100, 558, 100)}
                // x 3 , 4 , 5 condition
                else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304)}
                // X 6, 7, 8 condition 
                else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508)}
                //X 0, 3, 6 condition
                else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100, 50, 100, 558)}
                // X 1, 4, 7 
                else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558)}
                //X2 , 5, 8
                else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 508, 558)}
                //X6, 4, 2
                else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90)}
                //X 0 , 4, 8
                else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520)}
                //O 0, 1, 2
                else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50, 100, 558, 100)}
                // O 3, 4, 5
                else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304)}
                //O 6, 7, 8 condition 
                else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508)}
                //O 0, 3, 6 condition
                else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558)}
                //O 1, 4, 7 
                else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558)}
                //O 2, 5, 8
                else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558)}
                //O 6, 4, 2
                else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90)}
                //O , 4, 8
                else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520)}
                
                //this condition checks for a tie if none of the above conditons are met and 
                //9 squares are selected the code executes 
                else if (selectedSquares.length >= 9) {
                    //this function plays the tie game sound
                    audio('./media/boo.wav');
                    //this function sets a .3 seconds timer before the reseGame is called
                    setTimeout(function(){ resetGame(); }, 500);
                }
                    //this function checks if an array includes 3 strings. it is used to check for
                    //each win condition 
                    function arrayIncludes(squareA, squareB, squareC) {
                        //these 3 variables will be used to check for 3 in a row
                        const a = selectedSquares.includes(squareA);
                        const b = selectedSquares.includes(squareB);
                        const c = selectedSquares.includes(squareC);
                        //if the 3 variables we pass are all included in our array then 
                        //true is returned and our else if condition executes the drawline function
                        if(a === true && b === true && c === true) {return true;}

                    } 
                }

                //this function makes our body element temporary unclickable 
                function disableClick(){
                    //this makes our body unclickable 
                    body.style.pointerEvents = 'none';
                    //this makes our body clickable again after 1 second
                    setTimeout (function () {body.style.pointerEvents = 'auto'; }, 1000);

                }

                //this function takes a string parameter of the path i set earlier for 
                //placement sound ('.media/place.mp3)
                function audio(audioURL){
                    //we create a new audion object and we pass the path as a parameter
                    let audio = new Audio(audioURL);
                    //Play method plays our audio sound
                    audio.play();
                }

                //this function utilize HTML canvas to draw win lines 
                function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
                    //this line access our HTMLcanvas element
                    const canvas = document.getElementById("win-lines");
                    //this line gives us asscess to method and properties to use on canvas
                    const c = canvas.getContext('2d');
                    //this line indicates where the start of a line x axis is
                    let x1 = coordX1,
                        //this line indicates where the start of a line y axis is
                        y1 = coordY1,
                        //this line indicates where the start of a line x2 axis is
                        x2 = coordX2,
                        //this line indicates where the start of a line y2 axis is
                        y2 = coordY2,
                        //this variable stores temporary x axis data we update in our animation loop
                        x = x1,
                        y = y1;


                        //this function interacts with the canvas 
                        function animateLineDrawing () {
                            //this variable creates a loop 
                            const animationLoop = requestAnimationFrame(animateLineDrawing);
                            //this method clears content from the last loop interation.
                            c.clearRect(0, 0, 608, 608);
                            //this method starts new path
                            c.beginPath();
                            //this method moves to a starting point in our line
                            c.moveTo(x1, y1);
                            //this method indicates the end point inour line 
                            c.lineTo(x, y);
                            //this method sets the width of line
                            c.lineWidth = 10;
                            //this method sets the color of line
                            c.strokeStyle = 'rgba(70, 255, 33, .8)';
                            //this method draws everything that laid out above 
                            c.stroke();
                            //this condition checks if i've reached the endppoint
                            if (x1 <= x2 && y1 <= y2) {
                                //this condiiton adds 10 to the previous end x endpoint.
                                if(x < x2) { x += 10;}
                                //this condition adds 10 to the previous end y endpoint 
                                if (y < y2) {y += 10;}
                                //this condition is similar to the one above
                                //this necessary for the 6, 4, 2 win condition 
                                if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop);}
                            }

                            //this conditon is similar to the one above
                            //this is neccesary for the 6, 4, 2 win condition 
                            if ( x1 <= x2 && y1 >= y2) {
                                if (x < x2) {x += 10;}
                                if (y > y2) {y -= 10;}
                                if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
                            }
                        }

                            //this fanction cleans canvas after win line is drawn
                            function clear () {
                                //this line starts our animation loop 
                                const animationLoop = requestAnimationFrame(clear);
                                //this line clears canvas
                                c.clearRect(0, 0, 608, 608);
                                //this line stops our animation loop 
                                cancelAnimationFrame(animationLoop);
                            }

                            // this line disallows clicking while the win cound is playing
                            disableClick();
                            //this line plays the win sound 
                            audio('./media/win_sound.mp3');
                            // this line calls our main animation loop 
                            animateLineDrawing();
                            //this line waits 1 second then clears canvas reset game and allows clicking again
                            setTimeout(function() {clear(); resetGame(); }, 1000);
                        }

                        //this function reset the game in the event of tie or win
                        function resetGame() {
                            //this for loop itertes through each HTML square element 
                            for ( let i = 0; i < 9; i++) {
                                // this variable gets HTML element i
                                let square = document.getElementById(String(i));
                                //this removes our elements backgroundimage
                                square.style.backgroundImage = '';

                            }
                            //this reset our array so it is empty and we can start over
                            selectedSquares = [];
                        }



// let cat;
//         cat = (val) => "My cat is always want to " + val;
//         document.getElementById('demo').innerHTML = cat('Eat', 'Meow');
        
