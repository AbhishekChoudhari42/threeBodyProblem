





// window.addEventListener('resize',function(){
//    this.location.reload();
//    console.log('loaded')
// })


var canvasHeight = window.innerHeight;
var canvasWidth = window.innerWidth;

// ----------------------------------------------------------------
let globalvar = 0;
let s = 1;
let Xaxis = canvasWidth/2
let Yaxis = canvasHeight/2

let v = 0 ;

let ip1 = document.querySelector('.inp1');
let ip2 = document.querySelector('.inp2');
let ip3 = document.querySelector('.inp3');


let p1,p2,p3;

let simrun = document.querySelector('.run');

let checkVectors;
checkVectors = document.querySelector('.vectorEnable');
let trail = 255;
let checkTrail = document.querySelector('.trail');
checkTrail.addEventListener('click',function(){
    if(checkTrail.checked){
        trail = 5;
    }
    else{
        trail = 210;
    }
})
let arrow = document.querySelector('.arrow');
let control = document.querySelector('.controls');

arrow.addEventListener('click',function(){
    arrow.classList.toggle('up');
    control.classList.toggle('open');
   
})









let input1=[],input2=[],input3=[];
simrun.addEventListener('click',function(){
    input1 = ip1.value.split(',');
    input2 = ip2.value.split(',');
    input3 = ip3.value.split(',');
    
    for(let i = 0; i< input1.length ;i++ ){
        if(  isNaN(input1[i])  ||  isNaN(input2[i])  ||  isNaN(input3[i] 
            || input1[i] == "" || input2[i] == ""  || input3[i] == ""
            || input1[i] == undefined || input2[i] == undefined  || input3[i] == undefined)     ){
            console.log("please enter values correctly ");
            break;
        }
    }
     p1  =  new Particle(parseInt( input1[0]),-parseInt( input1[1]),5,parseInt( input1[2]));
     p2  =  new Particle(parseInt( input2[0]),-parseInt( input2[1]),5,parseInt( input2[2]));
     p3  =  new Particle(parseInt( input3[0]),-parseInt( input3[1]),5,parseInt( input3[2]));

    globalvar = 1;
   
})

function randomX(){
    return Math.random()*200 -100
}
function randomY(){
   return  Math.random()*200 - 100 
}
    
    // console.log(input1)
    // console.log(input2)
    // console.log(input3)

    // let p1  =  new Particle(parseInt( input1[0]),parseInt( input1[1]),5,parseInt( input1[2]));
    // let p2  =  new Particle(parseInt( input2[0]),parseInt( input2[1]),5,parseInt( input2[2]));
    // let p3  =  new Particle(parseInt( input3[0]),parseInt( input3[1]),5,parseInt( input3[2]));
    


    // let p1  =  new Particle(100,100,5);
    // let p2  =  new Particle(200,105,5);
    // let p3  =  new Particle(300,100,5);
function setup(){
    
    //  v = createVector(200,200)
    createCanvas(canvasWidth,canvasHeight);
  if(globalvar){
    console.log(p1.pos);
    console.log(p2.pos);
    console.log(p3.pos);
  }  
    
}
function draw(){

    check = document.querySelector('.vectors input').checked;

    background(0,0,0,trail);
    stroke(255,255,255)
   
    scale(1);
    line(canvasWidth/2,0,canvasWidth/2,canvasHeight)
    line(0,canvasHeight/2,canvasWidth,canvasHeight/2)
   

    

   
  
    stroke(0,0,0,0)
    fill(255)
    

translate(Xaxis,Yaxis)


if(globalvar){
    // Xaxis = (canvasWidth/2 ) -1*centroid(p1.pos.x,p2.pos.x,p3.pos.x);
    // Yaxis = (canvasHeight/2)  -1*centroid(p1.pos.y,p2.pos.y,p3.pos.y);

  
    p1.move(p3,p2)
    p2.move(p1,p3)
    p3.move(p1,p2)

    // console.log(p1.pos);

    p1.draw(255,0,0);
    p2.draw(0,255,0);
    p3.draw(0,0,255);
   
} 
 
 }


 function centroid(a,b,c){
     return (a+b+c)/3;
 }