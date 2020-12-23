
var lastUpdate = Date.now();
var myInterval = setInterval(tick, 0);
var dicelist;



function tick() {
    var now = Date.now();
    var dt = now - lastUpdate;
    lastUpdate = now;

    update(dt);
    render(dt);
}

function update(dt){

}
function render(dt){

}


class Basic{
    constructor() {
      
    }

    update(dt){

    }
    
    render(dt){

    }
}

class dice extends Basic{
    constructor() {
      
    }

    roll(){

    }
    
        
}




