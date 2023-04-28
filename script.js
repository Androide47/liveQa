let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
let button = document.querySelector('button')
/* context.fillStyle = 'cyan';
context.fillRect(100, 100, 400, 400); */

/* context.lineWidth = 10;
context.beginPath ();
context.rect (100, 100, 400, 400);
context.stroke();



context.lineWidth = 10;
context.beginPath ();
context.arc (300, 300, 180, 0, Math.PI * 2);
context.stroke (); */



for (let i = 0; i < 5; i++){
    for (let j = 0; j < 5; j++){
    let gap = 20;
    let height = 60;
    let width = 60;
    let y = 100 + (height + gap) * i;
    let x = 100 + (width + gap) * j;


    context.lineWidth = 5;
    context.beginPath();
    context.rect(x, y , width, height);
    context.stroke();

   // if(button === true){

    if (Math.random() > 0.5){
    context.lineWidth = 2;
    context.beginPath();
    context.rect(x + 8, y + 8, width - 16, height - 16);
    context.stroke();
    }
//}
}

}