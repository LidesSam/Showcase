var interval;
var mar = 0;
var ClockCount = 0;
var styleClock = "none"
/*
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);
*/
function set_interation(seconds) {
    alert("interval");
    interval = setInterval("updateclock()", seconds * 100);



}

function createClock(n = 2, stylename = "none") {
    styleClock = stylename;
    for (i = 0; i < n; i++) {
        var container = document.getElementById("clock");


        var clockContainer = document.createElement("div");
        clockContainer.setAttribute("id", "clock-com" + ClockCount.toString());
        clockContainer.setAttribute("class", "clockContainer");
        //clockContainer.textContent = "Clock";

        var digital = document.createElement("div");
        digital.setAttribute("id", "dclock");
        digital.setAttribute("class", "digital");
        // digital.textContent = "Digital";


        var digit = document.createElement("div");

        digit.textContent = "digit";
        digit.setAttribute("class", "digit");
        digit.setAttribute("id", "digit");
        //digital.style.color = 0xffff;
        //digital.style.textAlign="center";
        digital.appendChild(digit);
        clockContainer.appendChild(digital);






        createAnalog(clockContainer);

        var ControlCOM = document.createElement("Div");
        ControlCOM.className = "controlbox";


        var btn = document.createElement("BUTTON");

        btn.onclick = swithClock.bind(ClockCount);
        btn.className = "camerabtn";
        container.appendChild(clockContainer);
        clockContainer.appendChild(ControlCOM);
        ControlCOM.appendChild(btn);
        //btn.textContent = "Switch Clock";
        digital.style.display = "none";
        //analog.style.display="none";
        ClockCount += 1;
        ChangeStyleFilter(clockContainer);
    }

    setInterval(updateclock, 1000);

}

function swithClock(nr) {
    //alert("1!");
    var container = document.getElementById("clock-com" + (ClockCount - 1).toString());
    //alert("2!"+ClockCount);

    var digital = container.querySelector("#dclock");
    var analog = container.querySelector("#aclock");
    //  alert("3!"+ClockCount);
    if (analog.style.display == "none") {

        digital.style.display = "none";

        analog.style.display = "block";

    }
    else {

        digital.style.display = "block";
        analog.style.display = "none";

    }




}

function updateclock() {
    console.log("hola");
    mar += 1;

    var currentdate = new Date();
    var sec, min, hrs, angsec, angmin, anghrs;
    sec = currentdate.getSeconds();
    min = currentdate.getMinutes();
    hrs = currentdate.getHours();

    // angulo para analogo
    //add check for active clock for calculate only when it's use

    angsec = 360 / 60 * sec;
    angmin = 360 / 60 * min;
    anghrs = 360 / 12 * hrs;
    var secArrow = document.getElementById("rotsec");
    secArrow.style.transform = 'rotate(+' + angsec + 'deg)';
    var minArrow = document.getElementById("rotmin");
    minArrow.style.transform = 'rotate(+' + angmin + 'deg)';

    var hrArrow = document.getElementById("rothr");
    hrArrow.style.transform = 'rotate(+' + anghrs + 'deg)';



    var container = document.getElementById("clock-com" + (ClockCount - 1).toString());

    var digital = container.querySelector("#dclock");
    var digit = digital.querySelector("#digit");
    digit.textContent = hrs + " : " + min + " :" + sec;


}

function createAnalog(container) {
    var analog = document.createElement("div");
    analog.setAttribute("class", "analog");
    analog.setAttribute("id", "aclock");
    //analog.textContent = "Analog";
    analog.style.display = "none";

    container.appendChild(analog);


    var hrbox = document.createElement("div");
    hrbox.setAttribute("class", "rotbox");
    hrbox.setAttribute("id", "rothr");

    var hr = document.createElement("div");
    hr.setAttribute("id", "needle");
    hr.setAttribute("class", "hr");



    var minbox = document.createElement("div");
    minbox.setAttribute("class", "rotbox");
    minbox.setAttribute("id", "rotmin");

    var min = document.createElement("div");
    min.setAttribute("id", "needle");
    min.setAttribute("class", "min");

    var secbox = document.createElement("div");
    secbox.setAttribute("class", "rotbox");
    secbox.setAttribute("id", "rotsec");

    var sec = document.createElement("div");
    sec.setAttribute("id", "needle");
    sec.setAttribute("class", "sec");




    analog.appendChild(hrbox);
    hrbox.appendChild(hr)

    analog.appendChild(minbox);
    minbox.appendChild(min)

    analog.appendChild(secbox);
    secbox.appendChild(sec);


    var round = document.createElement("div");
    round.setAttribute("class", "point");
    round.setAttribute("id", "dot");
    analog.appendChild(round);


    analog.style.display = "block";
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function ChangeStyleFilter(container) {
    // alert("hola1"+container.id);
    if (styleClock.toLowerCase() == "random") {
        var r = getRandomArbitrary(0, 4);
        r = Math.floor(r);
       //r=3;
       // alert("r" + r);
        switch (r) {
            case 1: styleClock = "AtomicGreen"; break;
            case 2: styleClock = "ElectricYellow"; break;
            
            case 3: styleClock = "SeaBlue"; break;
            default: styleClock = "MonocromeW"; break;

        }
    }


    //alert(styleClock);

    //alert(styleClock);
    switch (styleClock) {
        case "AtomicGreen":
            //alert("aloa");
            var digital = container.querySelector("#dclock");

            digital.style.borderColor = "green";
            digital.style.color = "green";
            var analog = container.querySelector("#aclock");

            analog.style.borderColor = "green";

            var hr = analog.querySelector("#rothr").querySelector("#needle");
            hr.style.background = "var(--AtomicGHr)";
            var min = analog.querySelector("#rotmin").querySelector("#needle");
            min.style.background = "var(--AtomicGMin)";
            var sec = analog.querySelector("#rotsec").querySelector("#needle");
            sec.style.background = "var(--AtomicGSec)";

            var dot = analog.querySelector("#dot")
            dot.style.background = "var(--AtomicGDot)";
        break;

        case "ElectricYellow":
            var digital = container.querySelector("#dclock");

            digital.style.borderColor = "yellow";
            digital.style.color = "yellow";
            var analog = container.querySelector("#aclock");

            analog.style.borderColor = "yellow";

            var hr = analog.querySelector("#rothr").querySelector("#needle");
            hr.style.background = "var(--ElectricYHr)";
            var min = analog.querySelector("#rotmin").querySelector("#needle");
            min.style.background = "var(--ElectricYMin)";
            var sec = analog.querySelector("#rotsec").querySelector("#needle");
            sec.style.background = "var(--ElectricYSec)";

            var dot = analog.querySelector("#dot")
            dot.style.background = "var(--ElectricYDot)";
        break;
        case "SeaBlue":
            var digital = container.querySelector("#dclock");

            digital.style.borderColor = "blue";
            digital.style.color = "blue";
            var analog = container.querySelector("#aclock");

            analog.style.borderColor = "blue";

            var hr = analog.querySelector("#rothr").querySelector("#needle");
            hr.style.background = "var(--SeaBHr)";
            var min = analog.querySelector("#rotmin").querySelector("#needle");
            min.style.background = "var(--SeaBMin)";
            var sec = analog.querySelector("#rotsec").querySelector("#needle");
            sec.style.background = "var(--SeaBSec)";

            var dot = analog.querySelector("#dot")
            dot.style.background = "var(--SeaBDot)";
        break;

        
        

        case "MonocromeW":
            var digital = container.querySelector("#dclock");

            digital.style.borderColor = "white";
            digital.style.color = "white";

            var analog = container.querySelector("#aclock");

            analog.style.borderColor = "White";

            var hr = analog.querySelector("#rothr").querySelector("#needle");
            hr.style.background = "darkgray";
            var min = analog.querySelector("#rotmin").querySelector("#needle");
            min.style.background = "gray";
            var sec = analog.querySelector("#rotsec").querySelector("#needle");
            sec.style.background = "white";

            var dot = analog.querySelector("#dot")
            dot.style.background = "grey";

            break;


    }

}