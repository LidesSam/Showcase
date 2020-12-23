function _calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    var age=Math.abs(ageDate.getUTCFullYear() - 1970);
    document.getElementById("age").textContent = age.toString();
    

}
function addInversionCalculator(){
    var container = document.getElementById("invCalc");
    container.textContent="ssss";
    container.style.color="white";



    var money = document.createElement("INPUT");
    money.setAttribute("type","text");
    money.setAttribute("id","money");
    money.style.display="flexbox";
    money.style.width="inherit";

    container.appendChild(money);
    var days = document.createElement("INPUT");
    days.setAttribute("type","text");
    days.setAttribute("id","days");
    days.style.display="flexbox";
    days.style.width="inherit";
    days.style.background.color="grey";

    container.appendChild(days);

    var days = document.createElement("INPUT");
    days.setAttribute("type","text");
    days.setAttribute("id","days");
    days.style.display="flexbox";
    days.style.width="inherit";
    days.style.background.color="grey";

    container.appendChild(days);


    var calcbtn = document.createElement("button");
    calcbtn.textContent="calculate";
    calcbtn.style.display="flexbox";
    calcbtn.style.width="inherit";
    calcbtn.onclick=calculateProfit;
    container.appendChild(calcbtn);



    var result =document.createElement("div");
    result.setAttribute("id","result");
    result.textContent="R;";
    result.style.color="white";
    result.style.background="black";

    container.appendChild(result);
}

function calculateProfit(){
    alert("calc");
    var container = document.getElementById("invCalc");
    var money = parseint(container.getElementById("money").textContent);
    alert("money:"+string(money));
    var result =container.getElementById("result");
    result.textContent=money;
}

