function _calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    var age=Math.abs(ageDate.getUTCFullYear() - 1970);
    document.getElementById("age").textContent = age.toString();
    

}

function addClock(){
    var clockcontainer = document.getElementById("clock");
    clockcontainer.appendChild(new label("hola"));
}

