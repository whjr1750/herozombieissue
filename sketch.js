var bg;
var ground1,ground2,ground3;
var door1,door2,door3,door4,door5,door1img,door2img,door3img,door4img,door5img;
var box1,box2,box3,box4,box5,box6,box_img;
var box1_f,box2_f,box3_f,box4_f,box5_f,box6_f;
var box1_b,box2_b,box3_b,box4_b,box5_b,box6_b;

var hero,heroimg,heroLeftimg,heroForward,heroBackward;
// var hero_jumping,hero_back_jumping;
var zombies,zombie1,zombie2,zombie3,zombie4,zombie5,zombie6,zombie7;
var zombiemove,zombiemove_2;
var base;
var lift1,lift2,lift3,lift4;
var right_edge,left_edge_bottom,left_edge_top;
var prePos=null;
var position  = "right";
var gameOver,gameOver_img;
var win_img;
var score =0;
var lives=3;
// var gameState="play";

var gameState="serve";

var start_page;
var play_button,play_button_img;

function preload(){
 bg=loadImage("background2.png");
 door1img=loadImage("door.gif");
 door2img=loadImage("door2.gif");
 door3img=loadImage("door.gif");
 door4img=loadImage("door2.gif");
 door5img=loadImage("final_door.gif");
 heroimg=loadImage("hero_House/big_hero_standing.png");
 heroLeftimg=loadImage("hero_House/l_big_hero_standing.png");
 heroForward= loadAnimation("hero_House/hero1.png","hero_House/hero2.png","hero_House/hero3.png");
 heroBackward=loadAnimation("hero_House/l_hero1.png","hero_House/l_hero2.png","hero_House/l_hero3.png");
 zombiemove= loadAnimation("zombie_House/zo_Images/zo1.png","zombie_House/zo_Images/zo2.png","zombie_House/zo_Images/zo3.png","zombie_House/zo_Images/zo4.png","zombie_House/zo_Images/zo5.png","zombie_House/zo_Images/zo6.png","zombie_House/zo_Images/zo7.png","zombie_House/zo_Images/zo8.png");
 zombiemove_2=loadAnimation("zombie_House/r_zo_Images/r_zo1.png","zombie_House/r_zo_Images/r_zo2.png","zombie_House/r_zo_Images/r_zo3.png","zombie_House/r_zo_Images/r_zo4.png","zombie_House/r_zo_Images/r_zo5.png","zombie_House/r_zo_Images/r_zo6.png","zombie_House/r_zo_Images/r_zo7.png","zombie_House/r_zo_Images/r_zo8.png");
 box_img=loadImage("box.png");
 gameOver_img=loadImage("game_over.jpg");
 win_img=loadImage("congrats.jpg");
 start_page=loadImage("serve_page.png");
 play_button_img=loadImage("play_button.jpg");
 // hero_jumping=loadAnimation("hero_House/j_1.png");
 // hero_back_jumping=loadAnimation("hero_House/l_j_1.png");

 
}

function setup() {

  createCanvas(windowWidth,windowHeight);

     
if(gameState === "serve"){
 
  background(start_page); 
 

  play_button = createSprite(windowWidth/2,windowHeight-100,50,10)
  play_button.addImage("play_button",play_button_img);
  play_button.scale=0.4;

  drawSprites();
}
  

// For grounds...  

    ground1=createSprite(windowWidth/2,windowHeight-20,2000,15);
    ground1.shapeColor="black";

    ground2=createSprite(windowWidth/2,windowHeight-320,2000,15);
    ground2.shapeColor="black";

    ground3=createSprite(windowWidth/2,windowHeight-620,2000,15);
    ground3.shapeColor="black";

// For ladders...

    door1=createSprite(windowWidth-50,windowHeight-110,10,25);
    door1.addImage("door1",door1img);
    door1.scale=1;

    door2=createSprite(windowWidth/10-140,windowHeight/2+35,10,25);
    door2.addImage("door2",door2img);
    door2.scale=1;

    door3=createSprite(windowWidth-50,windowHeight/2+35,10,25);
    door3.addImage("door3",door3img);
    door3.scale=1;
      
    door4=createSprite(windowWidth/10-140,windowHeight/2-265,10,25);
    door4.addImage("door4",door4img);
    door4.scale=1;

    door5=createSprite(windowWidth-50,windowHeight/2-265,10,25);
    door5.addImage("door5",door5img);
    door5.scale=1;


    
// For hero...    

    hero=createSprite(windowWidth/10-120,windowHeight-105,100,200);
// hero=createSprite(windowWidth/10-120,windowHeight/2,100,200);
    hero.addImage("hero",heroimg);
  //  hero.addAnimation("hero",heroimg);
    hero.scale=1;
  //  hero.velocityY=2;
//    hero.setCollider("rectangle",-15,5,70,145)
 //   hero.debug = true;
   // hero.debug = false;

    base=createSprite(windowWidth/10-50,windowHeight-145,10,10);
    base.shapeColor="green";
    base.visible=false;

  //  bullet=createSprite(base.x, base.y, 20,5);
  //  bullet.shapeColor="purple";
  bulletGroup = new Group();

// For zombies...    

    zombie1=createSprite(windowWidth/6,windowHeight-105,100,200);
    zombie1.addAnimation("zombie1", zombiemove_2);
    zombie1.velocityX=4;
    zombie1.setCollider("rectangle",0,10,80,150);
    zombie1.debug = false;
    

    zombie2=createSprite(windowWidth-350,windowHeight-105,100,200);
    zombie2.addAnimation("zombie2", zombiemove);
    zombie2.velocityX=-4;
    zombie2.setCollider("rectangle",0,10,80,150);
    zombie2.debug = false;
    
    zombie3=createSprite(windowWidth/2,windowHeight/2+40,100,200);
    zombie3.addAnimation("zombie3", zombiemove);
    zombie3.velocityX=-4;
    zombie3.setCollider("rectangle",0,10,80,150);
    zombie3.debug = false;

    zombie4=createSprite(windowWidth-350,windowHeight/2+40,100,200);
    zombie4.addAnimation("zombie4", zombiemove);
    zombie4.velocityX=-4;
    zombie4.setCollider("rectangle",0,10,80,150);
    zombie4.debug = false;

    zombie5=createSprite(windowWidth/6,windowHeight/4-38,100,200);
    zombie5.addAnimation("zombie5", zombiemove_2);
    zombie5.velocityX=4;
    zombie5.setCollider("rectangle",0,10,80,150);
    zombie5.debug = false;

    zombie6=createSprite(windowWidth/2,windowHeight/4-38,100,200);
    zombie6.addAnimation("zombie6", zombiemove_2);
    zombie6.velocityX=4;
    zombie6.setCollider("rectangle",0,10,80,150);
    zombie6.debug = false;

    zombie7=createSprite(windowWidth-350,windowHeight/4-38,100,200);
    zombie7.addAnimation("zombie7", zombiemove);
    zombie7.velocityX=-4;
    zombie7.setCollider("rectangle",0,10,80,150);
    zombie7.debug = false;

// For boxes.....

    box1=createSprite(windowWidth/9,windowHeight-65,10,25);
    box1.addImage("box1",box_img);
    box1.scale = 0.07;
    box1.setCollider("rectangle",0,0);
    box1.debug = false;
    

    box2=createSprite(windowWidth-230,windowHeight-65,10,25);
    box2.addImage("box2",box_img);
    box2.scale = 0.07;
    box2.setCollider("rectangle",0,0);
    box2.debug = false;

    box3=createSprite(windowWidth/9,windowHeight/2+80,10,25);
    box3.addImage("box3",box_img);
    box3.scale = 0.07;
    box3.setCollider("rectangle",0,0);
    box3.debug = false;

    box4=createSprite(windowWidth-230,windowHeight/2+80,10,25);
    box4.addImage("box4",box_img);
    box4.scale = 0.07;
    box4.setCollider("rectangle",0,0);
    box4.debug = false;

    box5=createSprite(windowWidth/9,windowHeight/4+2,10,25);
    box5.addImage("box5",box_img);
    box5.scale = 0.07;
    box5.setCollider("rectangle",0,0);
    box5.debug = false;

    box6=createSprite(windowWidth-230,windowHeight/4+2,10,25);
    box6.addImage("box6",box_img);
    box6.scale = 0.07;
    box6.setCollider("rectangle",0,0);
    box6.debug = false;

//.....................................................................

    box1_f=createSprite(windowWidth/9-30,windowHeight-65,10,25);
    box1_f.visible=false;
    box1_f.setCollider("rectangle",0,0)
    box1_f.debug = true;
   

    box2_f=createSprite(windowWidth-260,windowHeight-65,10,25);
    box2_f.visible=false;
    box2_f.setCollider("rectangle",0,0)
    box2_f.debug = true;

    box3_f=createSprite(windowWidth/9-30,windowHeight/2+100,10,25);
    box3_f.visible=false;
    box3_f.setCollider("rectangle",0,0)
    box3_f.debug = true;

    box4_f=createSprite(windowWidth-260,windowHeight/2+100,10,25);
    box4_f.visible=false;
    box4_f.setCollider("rectangle",0,0)
    box4_f.debug = true;  

    box5_f=createSprite(windowWidth/9-30,windowHeight/4+37,10,25);
    box5_f.visible=false;
    box5_f.setCollider("rectangle",0,0)
    box5_f.debug = true;

    box6_f=createSprite(windowWidth-260,windowHeight/4+37,10,25);
    box6_f.visible=false;
    box6_f.setCollider("rectangle",0,0)
    box6_f.debug = true;  
   
// ....................................................................      

    box1_b=createSprite(windowWidth/9+30,windowHeight-65,10,25);
    box1_b.visible=false;
    box1_b.setCollider("rectangle",0,0)
    box1_b.debug = true;
   
   
    box2_b=createSprite(windowWidth-200,windowHeight-65,10,25);
    box2_b.visible=false;
    box2_b.setCollider("rectangle",0,0)
    box2_b.debug = true;

    box3_b=createSprite(windowWidth/9+30,windowHeight/2+100,10,25);
    box3_b.visible=false;
    box3_b.setCollider("rectangle",0,0)
    box3_b.debug = true;

    box4_b=createSprite(windowWidth-200,windowHeight/2+100,10,25);
    box4_b.visible=false;
    box4_b.setCollider("rectangle",0,0)
    box4_b.debug = true; 

    box5_b=createSprite(windowWidth/9+30,windowHeight/4+37,10,25);
    box5_b.visible=false;
    box5_b.setCollider("rectangle",0,0)
    box5_b.debug = true;

    box6_b=createSprite(windowWidth-200,windowHeight/4+37,10,25);
    box6_b.visible=false;
    box6_b.setCollider("rectangle",0,0)
    box6_b.debug = true; 

//....................................................................

  lift1=createSprite(windowWidth-50,windowHeight-100,25,25);
  lift1.visible=false;
  lift2=createSprite(windowWidth/10-140,windowHeight/2+50,25,25);
  lift2.visible=false;
  lift3=createSprite(windowWidth-50,windowHeight/2+50,25,25);
  lift3.visible=false;
  lift4=createSprite(windowWidth/10-140,windowHeight/2-250,25,25);
  lift4.visible=false;
//.....................................................................

  right_edge=createSprite(windowWidth-30,windowHeight/2,5,250);
  right_edge.visible=false;
  left_edge_bottom=createSprite(windowWidth/10-190,windowHeight-160,5,250);
  left_edge_bottom.visible=false;
  left_edge_top=createSprite(windowWidth/10-190,windowHeight/5-20,5,250);
  left_edge_top.visible=false;
    
 // gameOver=createSprite(windowWidth/2,windowHeight/2);
  //gameOver.addImage("gameOver",gameOver_img);
}

function draw() {
 
console.log(gameState)



if(gameState === "serve"){

    if(mousePressedOver(play_button)){

      gameState="play";
      play_button.destroy();

    }

    

}

if(gameState==="play"){

  background(bg); 

    hero.velocityY=7;



    if((keyDown("right_arrow") || keyIsDown(RIGHT_ARROW))){
      prePos=position;
      position="right";
    }

    if((keyDown("left_arrow") || keyIsDown(LEFT_ARROW))){
      prePos=position;
      position="left";
    }
            
   // console.log(position);
   // console.log('kk -'+ prePos)
  //  console.log(windowWidth)

    // base.x=hero.x+70;
    // bullet.x=base.x;

    
    /// if(keyIsDown(RIGHT_ARROW))
    /// if(keyIsPressed === true)
          
    if(hero.isTouching(ground1) || hero.isTouching(box1) || hero.isTouching(box2) || hero.isTouching(ground2)){
      hero.velocityY=0;

    }

    if(position  === "right"){

      hero.setCollider("rectangle",-15,5,70,145)
      hero.debug = false;

        if((keyDown("right_arrow") || keyIsDown(RIGHT_ARROW))){
            // position="right";
            if(hero.isTouching(right_edge) || hero.isTouching(box1_f) || hero.isTouching(box2_f) || hero.isTouching(box3_f) || hero.isTouching(box4_f) || hero.isTouching(box5_f) || hero.isTouching(box6_f)){
              hero.addImage("hero",heroimg);
            
            }else{
            hero.x = hero.x + 10;
            hero.addAnimation("hero", heroForward);
            // hero.changeAnimation("hero", heroForward);
            base.x=hero.x+70;
            }
          
        }else{
            hero.addImage("hero",heroimg);
        }

        if(hero.isTouching(ground1) || hero.isTouching(box1) || hero.isTouching(box2) || hero.isTouching(ground2) || hero.isTouching(box3) || hero.isTouching(box4) || hero.isTouching(ground3) || hero.isTouching(box5) || hero.isTouching(box6)){
          hero.velocityY=0;
        
          if((keyDown("up_arrow") || keyDown(UP_ARROW))){
            console.log('abcdef');
            hero.y=hero.y-60;
          // hero.y=hero.y-10;
            hero.addAnimation("hero", heroimg);
            base.y=hero.y-15;
          //  hero.velocityY=2;
          
          }else{
            base.y=hero.y-40;
        //   hero.addImage("hero",heroimg);
          }
          
        }
    
    }

    if(position  === "left"){

      hero.setCollider("rectangle",15,5,70,145)
      hero.debug = false;

        if((keyDown("left_arrow") || keyIsDown(LEFT_ARROW))){
          // position="left";
          if(hero.isTouching(left_edge_bottom) || hero.isTouching(left_edge_top) || hero.isTouching(box1_b) || hero.isTouching(box2_b) || hero.isTouching(box3_b) || hero.isTouching(box4_b) || hero.isTouching(box5_b) || hero.isTouching(box6_b)){
            hero.addImage("hero",heroLeftimg);
          
          }else{
          hero.x = hero.x - 10;
          hero.addAnimation("hero", heroBackward);
          base.x=hero.x-70;
          }

      }else{
        hero.addImage("hero",heroLeftimg);
        
      } 

      if(hero.isTouching(ground1) || hero.isTouching(box1) || hero.isTouching(box2) || hero.isTouching(ground2) || hero.isTouching(box3) || hero.isTouching(box4) || hero.isTouching(ground3) || hero.isTouching(box5) || hero.isTouching(box6)){
        hero.velocityY=0;
      
        if((keyDown("up_arrow") || keyDown(UP_ARROW))){
          console.log('abcdef');
          hero.y=hero.y-60;
        // hero.y=hero.y-10;
          hero.addAnimation("hero", heroLeftimg);
          base.y=hero.y-15;
        //  hero.velocityY=2;
        
        }else{
          base.y=hero.y-40;
      //   hero.addImage("hero",heroimg);
        }
        
      }

    }

   
    if(bulletGroup.isTouching(zombie1)){
      // zombie1.visible= false;
      bulletGroup[0].destroy();
      //bullet.destroy();
      zombie1.destroy();
     
      score=score+1;
    }
    
    if(bulletGroup.isTouching(zombie2)){
      // zombie1.visible= false;
      bulletGroup[0].destroy();
    //bullet.destroy();
    zombie2.destroy();
    score=score+1;
    }


    if(bulletGroup.isTouching(zombie3)){
      // zombie1.visible= false;
      bulletGroup[0].destroy();
    //bullet.destroy();
    zombie3.destroy();
    score=score+1;
    }

    if(bulletGroup.isTouching(zombie4)){
    // zombie1.visible= false;
    bulletGroup[0].destroy();
    //bullet.destroy();
    zombie4.destroy();
    score=score+1;
    }


    if(bulletGroup.isTouching(zombie5)){
      // zombie5.visible= false;
      bulletGroup[0].destroy();
    //bullet.destroy();
    zombie5.destroy();
    score=score+1;
    }


    if(bulletGroup.isTouching(zombie6)){
      // zombie6.visible= false;
      bulletGroup[0].destroy();
    //bullet.destroy();
    zombie6.destroy();
    score=score+1;
    }

    if(bulletGroup.isTouching(zombie7)){
    // zombie7.visible= false;
      bulletGroup[0].destroy();
    //bullet.destroy();
    zombie7.destroy();
    score=score+1;
    }

    if(keyWentUp("space")){
      // bullet.velocityX=7; 
      createBullet();
      ///bullet=createSprite(base.x, base.y, 20,5);
      //bullet.shapeColor="purple";
    }
    
    if(hero.isTouching(lift1)){
      hero.x=windowWidth-130;
      hero.y=windowHeight/2+50;
    }

    if(hero.isTouching(lift2)){
      hero.x=windowWidth/10-70;
      hero.y=windowHeight/5+10;
    }

    if(hero.isTouching(lift3)){
      hero.x=windowWidth-130;
      hero.y=windowHeight-105;
    }

    if(hero.isTouching(lift4)){
      hero.x=windowWidth/10-65;
      hero.y=windowHeight/3+200;
    }

    if(hero.isTouching(door5)){
      background(win_img);
      gameState="won";
     
      console.log("---->" + gameState);

    }
    
    if(hero.isTouching(zombie1) || hero.isTouching(zombie2) || hero.isTouching(zombie3) || hero.isTouching(zombie4) || hero.isTouching(zombie5) || hero.isTouching(zombie6) || hero.isTouching(zombie7)){
      // if(hero.collide(zombie1) || hero.collide(zombie2) || hero.collide(zombie3) || hero.collide(zombie4) || hero.collide(zombie5) || hero.collide(zombie6) || hero.collide(zombie7)){
   
      //   if(lives > 0){
      //   lives=lives-1;
      // }

      // if(lives===0){
        
      gameState="end";
      background(gameOver_img);
      hero.destroy();
      base.destroy();
      lives=lives-1;
      // }
    //  bulletGroup.destroyEach();
    // bulletGroup.visible=false;
    }
    drawSprites();

    fill("blue")
    textSize(40)
    text("score : " + score ,1000,40 );


    text("lives : " + lives ,1000,90 );

}

 // For bottom ground's zombies...

 if(zombie1.isTouching(box2)){
  zombie1.velocityX=-4;
  zombie1.addAnimation("zombie1", zombiemove);
}else if(zombie1.isTouching(box1)){
  zombie1.addAnimation("zombie1", zombiemove_2);
  zombie1.velocityX=4;
}

if(zombie2.isTouching(box1)){
  zombie2.velocityX=4;
  zombie2.addAnimation("zombie2", zombiemove_2);
}else if(zombie2.isTouching(box2)){
  zombie2.addAnimation("zombie2", zombiemove);
  zombie2.velocityX=-4;
}

// For middle ground's zombies...

if(zombie3.isTouching(box3)){
  zombie3.velocityX=4;
  zombie3.addAnimation("zombie3", zombiemove_2);
}else if(zombie3.isTouching(box4)){
  zombie3.addAnimation("zombie3", zombiemove);
  zombie3.velocityX=-4;
}

if(zombie4.isTouching(box3)){
  zombie4.velocityX=4;
  zombie4.addAnimation("zombie4", zombiemove_2);
}else if(zombie4.isTouching(box4)){
  zombie4.addAnimation("zombie4", zombiemove);
  zombie4.velocityX=-4;
}

// For top ground's zombies...

if(zombie5.isTouching(box6)){
  zombie5.velocityX=-4;
  zombie5.addAnimation("zombie5", zombiemove);
}else if(zombie5.isTouching(box5)){
  zombie5.addAnimation("zombie5", zombiemove_2);
  zombie5.velocityX=4;
}

if(zombie6.isTouching(box6)){
  zombie6.velocityX=-4;
  zombie6.addAnimation("zombie6", zombiemove);
}else if(zombie6.isTouching(box5)){
  zombie6.addAnimation("zombie6", zombiemove_2);
  zombie6.velocityX=4;
}

if(zombie7.isTouching(box5)){
  zombie7.velocityX=4;
  zombie7.addAnimation("zombie7", zombiemove_2);
}else if(zombie7.isTouching(box6)){
  zombie7.addAnimation("zombie7", zombiemove);
  zombie7.velocityX=-4;
}


if(gameState === "end"){

  background(gameOver_img);

  ground1.destroy();
  ground2.destroy();
  ground3.destroy();

  zombie1.destroy();
  zombie2.destroy();
  zombie3.destroy();
  zombie4.destroy();
  zombie5.destroy();
  zombie6.destroy();
  zombie7.destroy();

  box1.destroy();
  box2.destroy();
  box3.destroy();
  box4.destroy();
  box5.destroy();
  box6.destroy();

  door1.destroy();
  door2.destroy();
  door3.destroy();
  door4.destroy();
  door5.destroy();

  drawSprites();

  textSize(50);
  fill("yellow");
  text("Press 'R' to restart the game.",windowWidth/2-400,windowHeight-50);

  if(keyDown('R')){
    gameState="play";
    location.reload();
  }
  drawSprites();
}

if(gameState === "won"){

  background(win_img);

  
  hero.destroy();

  ground1.destroy();
  ground2.destroy();
  ground3.destroy();

  zombie1.destroy();
  zombie2.destroy();
  zombie3.destroy();
  zombie4.destroy();
  zombie5.destroy();
  zombie6.destroy();
  zombie7.destroy();

  box1.destroy();
  box2.destroy();
  box3.destroy();
  box4.destroy();
  box5.destroy();
  box6.destroy();

  door1.destroy();
  door2.destroy();
  door3.destroy();
  door4.destroy();
  door5.destroy();

  bulletGroup.destroyEach();
  drawSprites();

  textSize(50);
  fill("yellow");
  text("Press 'R' to restart the game.",windowWidth/2-400,windowHeight-50);

  if(keyDown('R')){
    gameState="play";
    location.reload();
  }
  drawSprites();
}

 
}


function createBullet() {

  var bullet= createSprite(base.x, base.y, 20,5);
  bullet.shapeColor="purple";

  if(position  === "right"){
    bullet.velocityX = 25; 
  }
  if(position  === "left"){
  bullet.velocityX = -25;
  }

  bulletGroup.add(bullet);
  bullet.setCollider("rectangle",0,0);
  bullet.debug = false;
  return bullet;
  
}



