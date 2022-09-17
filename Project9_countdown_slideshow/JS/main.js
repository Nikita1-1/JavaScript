function countdown() {
   let seconds = document.getElementById("seconds").value;

    function tick() {
       seconds = seconds - 1;
       timer.innerHTML = seconds;
        let time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("time is up!");
            clearTimeout(time);
            timer.innerHTML = " ";
        }
    }
    tick();
}

