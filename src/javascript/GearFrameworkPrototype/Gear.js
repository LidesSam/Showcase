

function CreateGearBot(){
    var box = document.getElementById("gearBox");
    box.style.display="flexbox";
    box.textContent="box";
    
    box.style.color="white";

    box.style.minWidth="100%";


    box.style.textAlign="center";
    var lbl = document.createElement("div");
    lbl.textContent = "lbl";
    var chatList = document.createElement("div");
    chatList.setAttribute("id","chatList");
    chatList.style.minWidth="100%"
    chatList.style.minHeight="50vh";
    chatList.style.background="black";

    var contInput = document.createElement("div");
    contInput.setAttribute("id","contInput");
    contInput.minHeight="10vh";
    contInput.minWidth="100%";
    
    contInput.style.background="red";
    contInput.display="block";
    contInput.textContent="txt here";
  
    var uinput = document.createElement("input");
    uinput.setAttribute("id","uinput");
    uinput.setAttribute("type","text");

    uinput.setAttribute("onkeypress","uniCharCode(event)");

    uinput.setAttribute("onkeydown","uniKeyCode(event)");
    uinput.setAttribute("Value","okay");
    
    
   
    box.appendChild(lbl);
    box.appendChild(chatList);
    box.appendChild(contInput);

    contInput.appendChild(uinput);
  
}
  
function uniCharCode(event) {
  var char = event.which || event.keyCode;
  if(char==13)  {
        var msgbox= document.getElementById("uinput");
        msgbox.textContent="";
    }
  //document.getElementById("demo").innerHTML = "The Unicode CHARACTER code is: " + char;

}

function uniKeyCode(event) {
  var key = event.keyCode;
 
  document.getElementById("uinput").style.color="orange";
  //document.getElementById("demo2").innerHTML = "The Unicode KEY code is: " + key;
  if(key=="13")  {
    document.getElementById("uinput").style.color="black";
    
    var uinput= document.getElementById("uinput");
    uinput.style.color="blue"

}
}
   
  