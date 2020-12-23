class GrSprite {
    constructor(X,Y,width,heigth) {
      this.x = X;
      this.y = Y;
      this.width = width;
      this.heigth = heigth;
    }


    draw(c){
     
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.heigth);
        ctx.sstroke();
    }
  }