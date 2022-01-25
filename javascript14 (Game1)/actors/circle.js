import Actor from "./actor.js";

export default class Circle extends Actor {

    direction=0
 
    constructor(x,y) {
        super();
        this.x = x;
        this.y = y;
    }

    render(context) {
        context.beginPath();
        context.fillStyle = "green";
        context.arc(this.x, this.y, 50, 0, 2 * Math.PI);
        context.fill();
       context.stroke();
    }

    update() {
      
            this.y+=3;
   


        if (this.y>600) {
            this.direction=1;
            this.y=-100;
        }

        

    }
}