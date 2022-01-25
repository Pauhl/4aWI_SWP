import ControllableRectangle from "./actors/controllablerectangle.js";
import Rectangle from "./actors/rectangle.js";
import Circle from "./actors/circle.js";


const actors = [];
actors.push(new Rectangle(50, 50));
actors.push(new Rectangle(100, 100));
actors.push(new Rectangle(300, 200));
actors.push(new ControllableRectangle());
actors.push(new Circle(100, 100));

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");



setInterval(function() {
      
    color = document.getElementById("color").value;
    document.getElementById('fix').innerHTML = document.getElementById("myRange").value;


    context.clearRect(0,0,400,400);
    actors.forEach(actor => {
        actor.update();
        actor.render(context, color);
    });
    

},10);




