export function startTimer(timer ) {

    let time = "00:00";
    setInterval(() => {
        let minutes = parseInt(timer / 60, 10);
        let seconds = parseInt(timer % 60, 10);

        minutes  = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        time = minutes + ":" + seconds;
        timer++;
    }, 1000);

    return time;
}