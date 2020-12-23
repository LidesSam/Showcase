var inchange = false;
var idx = 0;


function addcolorbox() {
    
    var container = document.getElementById("colorbox");
    var i;
    for (i = 0; i < 3; i++) {
        var btn = document.createElement("BUTTON");
        btn.id=i;
        btn.innerHTML = "CLICK ME"+String(btn.id);
        btn.id=String(i)
        btn.onclick = new function() { colorchange(btn.id); };
        container.appendChild(btn);
    }
}




function colorchange(idx){
    var n = Math.floor(Math.random() * 3); 
    var c;

    //alert("idx:"+String(idx));
    switch (n){
        case 0:
            
            btn.style.background = "red";
            break;    
        case 1:
            btn.style.background = "red";
            break;
        case 2:
            btn.style.background = "green";
            break;
    }
}
