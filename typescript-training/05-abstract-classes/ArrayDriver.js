"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myCircle = new Circle_1.Circle(5, 10, 20);
let myRectangle = new Rectangle_1.Rectangle(2, 3, 45, 59);
let theShapes = [];
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (let it of theShapes) {
    console.log(it.getInfo());
    console.log(it.calcArea());
    console.log();
}
