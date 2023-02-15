var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["10af8612-c3e9-4a07-856a-0a7d8adcf43c"],"propsByKey":{"10af8612-c3e9-4a07-856a-0a7d8adcf43c":{"name":"jojo","sourceUrl":"assets/v3/animations/fIOh4x-Z41tkmh2lug4EpC3DiEKwNx3djfoop0TrEGs/10af8612-c3e9-4a07-856a-0a7d8adcf43c.png","frameSize":{"x":1000,"y":1050},"frameCount":1,"looping":true,"frameDelay":4,"version":"hrq9KktCviaIul.bTN1wt1q8GWfitSJP","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1000,"y":1050},"rootRelativePath":"assets/v3/animations/fIOh4x-Z41tkmh2lug4EpC3DiEKwNx3djfoop0TrEGs/10af8612-c3e9-4a07-856a-0a7d8adcf43c.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ball = createSprite(200, 150, 100, 10);
ball.shapeColor = "blue";
ball.velocityX = 9;
var ball2 = createSprite(5, 100, 100, 10);
ball2.shapeColor = "red";
ball2.velocityX = 9;
var ball3 = createSprite(100, 200, 100, 10);
ball3.shapeColor = "green";
ball3.velocityX = 9;
var ball4 = createSprite(50, 280, 100, 10);
ball4.shapeColor = "yellow";
ball4.velocityX = 9;
var joaozin = createSprite(204,350,20,20);
joaozin.shapeColor = "blue"
joaozin.setAnimation("jojo");
joaozin.scale = 0.03
playSound("X2Download.app---Evan's-Adventure-(320-kbps)-(1).mp3", true);

































createEdgeSprites();


function draw() {
  background("purple");
  text("tower off hell", 170, 20, 200, 200);
  textSize(40)
  drawSprites();
  ball.bounceOff(leftEdge);
  ball.bounceOff(rightEdge);
  ball2.bounceOff(leftEdge);
  ball2.bounceOff(rightEdge);
  ball3.bounceOff(leftEdge);
  ball3.bounceOff(rightEdge);
  ball4.bounceOff(leftEdge);
  ball4.bounceOff(rightEdge);
  
  if (keyDown("left")) {
    
    joaozin.x -= 5;
  }
  if (keyDown("right")) {
    
    joaozin.x += 5;
}
 if (keyDown("up")) {
    
    joaozin.y -= 5;
}
 if (keyDown("down")) {
    
    joaozin.y += 5;
}
if (joaozin.isTouching(ball)) {
   
    joaozin.x = 208;
    joaozin.y = 353;
    playSound("X2Download.app---Roblox-Death-Sound-Effect-(NEW-2022)-(320-kbps).mp3", false);
    
    
  }
  if (joaozin.isTouching(ball2)) {
   
    joaozin.x = 208;
    joaozin.y = 353;
    playSound("X2Download.app---Roblox-Death-Sound-Effect-(NEW-2022)-(320-kbps).mp3", false);
    
  }
  if (joaozin.isTouching(ball3)) {
   
    joaozin.x = 208;
    joaozin.y = 353;
    playSound("X2Download.app---Roblox-Death-Sound-Effect-(NEW-2022)-(320-kbps).mp3", false);
    
  }
  if (joaozin.isTouching(ball4)) {
   
    joaozin.x = 208;
    joaozin.y = 353;
    playSound("X2Download.app---Roblox-Death-Sound-Effect-(NEW-2022)-(320-kbps).mp3", false);
    
  }



}
  



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
