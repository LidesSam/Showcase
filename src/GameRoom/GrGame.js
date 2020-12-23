

class GrGame {

  constructor(world) {
    this.items = Array;
    for (i = 0; i < 3; i++) {
      this.items.push(new GrSprite(32 + 16 * 20, 32, 16, 16));
    }
    this.width = 500;
    this.height = 500;
    this.world = world;
  };


    function ini() {
      
        alert("game room start");
        setInterval(onTimerTick, 33); // 33 milliseconds = ~ 30 frames per sec    
        world.style.minwidth =width;
        world.style.minheight =height;
        world.style.backgroundcolor="CYAN";

    }   
    function onTimerTick() {
      // Do stuff.
      update();
      draw();

    }

    function update() {

    }

    function draw() {
      for (i=0;i<items.lenght;i++){

      }
    }
 
};
