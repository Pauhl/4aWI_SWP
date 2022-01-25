import Actor from "./actor.js";

export default class Rectangle extends Actor {

    direction=0
 
    constructor(x,y) {
        super();
        this.x = x;
        this.y = y;
    }

    render(context) {
        
        context.fillRect(this.x, this.y , 10, 10); 
       
    }

    update() {
        if (this.direction==0) {
            this.x+=3;
        }

        else {
            this.x-=3;
        }


        if (this.x>400) {
            this.direction=1;
            this.x=399;
        }

        if (this.x<0) {
            this.direction=0;
            this.x=1
        }
       
        

    }
}