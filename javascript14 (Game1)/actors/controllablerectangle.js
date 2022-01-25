import Actor from "./actor.js";

export default class ControllableRectangle extends Actor {


    constructor(x,y) {
        super();
        this.x = 20;
        this.y = 20;
        let that = this;
        let speed = 3;
        document.addEventListener("keypress", function(key){
        
            speed = document.getElementById("myRange").value;
            
            if (key.keyCode =="97") {
                that.x-=speed;
            }
            else if (key.keyCode == "100") {
                that.x+=speed/1;
            }
            else if (key.keyCode =="119") {
                that.y-=speed;
            }
            else if (key.keyCode == "115") {
                that.y+=speed/1;
            }
        })
    }

    render(context, color) {



     
       

        if (this.x<-2) {
            this.x=0;
        }
        if (this.x>372) {
            this.x=370;
        }
       
        if (this.y<-2) {
            this.y=0;
        }
       
     


        context.fillStyle = color;
        context.fillRect(this.x, this.y, 30, 30);

    }

    update() {

    }
 

}