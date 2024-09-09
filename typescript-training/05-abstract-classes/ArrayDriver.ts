import { Shape } from "./Shape";
import { Circle} from "./Circle";
import { Rectangle } from "./Rectangle";

let myCircle=new Circle(5,10,20);
let myRectangle=new Rectangle(2,3,45,59);

let theShapes:Shape[]=[];
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let it of theShapes){
    console.log(it.getInfo());
    console.log(it.calcArea());
    console.log();
}

