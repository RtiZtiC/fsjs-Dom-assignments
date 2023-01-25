
    var countdownEl = document.getElementById("countdown");
    var startButton = document.getElementById("start-button");
    var startPositionInput = document.getElementById("start-position");
    var countdown;

    startButton.addEventListener("click", function() {
        var startPosition = startPositionInput.value;
        countdownEl.innerHTML = startPosition;
        clearInterval(countdown);
        countdown=null
        countdown = setInterval(function() {
            startPosition--;
            countdownEl.innerHTML = startPosition;

            if (startPosition === 0) {
                clearInterval(countdown);
                document.getElementById("countdown").innerHTML="Countdown complete!";
            }
        }, 1000);
    });