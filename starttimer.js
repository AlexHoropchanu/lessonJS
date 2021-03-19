export let starttimer = document.querySelector('.button').onclick = () =>{
    let timerInput = Number(document.getElementById("time").value);
    let timerShow = document.querySelector(".timer");
    let timeMinute = timerInput * 60 - 1
/*********************************************************/
        let timer = setInterval(function () {
            let seconds = timeMinute%60
            let minutes = timeMinute/60%60
            let hour = timeMinute/60/60%60
            if (timeMinute < 0) {
                clearInterval(timer);
                timerShow.innerHTML = 'Время закончено'
                document.querySelector(".wave").innerHTML = "<audio src=\"https://dwweb.ru/__a-data/mp3/windows_xp_start.mp3\" autoplay></audio>"
                // alert("Время закончилось");
            } else {
                let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
                timerShow.innerHTML = strTimer;
                console.log(strTimer)

            }
            --timeMinute;
        }, 1000)

};