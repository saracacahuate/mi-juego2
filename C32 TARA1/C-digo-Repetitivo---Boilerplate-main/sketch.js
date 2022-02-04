const Engine = Matter.Engine;//crea una constante para la biblioteca del motor 
const World= Matter.World;//crea una constante para la bibloteca del mundo
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;//crea una constante para la biblioteca de los cuerpos restringidos

var ground1;
var engine,world;
var venom1

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();//crea el motor
  world = engine.world;//crea el mundo

  ground1 = new ground(600,height,1200,20);

  venom1 = new venom(810,350)

}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  ground1.display();
  venom1.display();
}