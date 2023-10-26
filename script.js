function start() {
    let sand = +prompt("Input the amount of sand");
    function printRestOfTime() {
        console.log(sand);
        if (sand > 0) {
            sand -= 1;
        } else {
            clearInterval(timer);
            console.log("Time is up!");
        }
    }
    let timer = setInterval(printRestOfTime, 1000);
}