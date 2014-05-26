/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Brandon Campos Calderón - Juan Carlos Martínez
 * Use is subject to license terms.
 * Filename: TrackUI.js
 */

 /*
  * Author:      brandonc94@gmail.com
  * Date:        19/05/2014
  * Description: Design space (canvas) to develop the graphical design
  */

/*
 * Global Presentation Layer to be used with MVC Pattern
 * @namespace
 */
var Presentation = window.Presentation || {};

(function (pContext, $) {

    pContext.getTrackUI = function() {
        return TrackUI;
    };

    TrackUI = (function(){

        var car, canvasStage, vehicleLayer, boxLayer, weaponLayer, enemyLayer, labelLayer, bulletLayer,
            lifeCounter = 2, gameOver = false;

        var weaponObj = {
            laneNumber : 3,
            color: "green",
            stroke: 4,
            shapeWeapon: 4
        };
        

        var weaponObj2 = {
            laneNumber : 1,
            color: "red",
            stroke: 4,
            shapeWeapon: 3
        };
        
        init();
        
        function loadImages(sources, callback) {
            var images = {};
            var loadedImages = 0;
            var numImages = 0;
            // get num of sources
            for(var src in sources) {
                numImages++;
            }
            for(var src in sources) {
                images[src] = new Image();
                images[src].onload = function() {
                    if(++loadedImages >= numImages) {
                        callback(images);
                    }
                };
                images[src].src = sources[src];
            }
        }
        
        //Funtion that draws the kinetic Stage, layers and anchors
        function drawCanvasStage(images){
            //We declare the stage to be working with 
            canvasStage = new Kinetic.Stage({
                container: 'gameContainer',
                width: 800,
                height: 550
            });

            vehicleLayer = new Kinetic.Layer();
            boxLayer = new Kinetic.Layer();
            weaponLayer = new Kinetic.Layer();
            enemyLayer = new Kinetic.Layer();
            labelLayer = new Kinetic.Layer();
            bulletLayer = new Kinetic.Layer();
            
            var pit = new Kinetic.Rect({
                x: 90,
                fillPatternImage: images.pit,
                width: 34,
                height: 1200,
                offset : {x : 0, y : 650}             
            });
            
            var pit2 = new Kinetic.Rect({
                x: 650,
                fillPatternImage: images.pit,
                width: 34,
                height: 1200,
                offset : {x : 0, y : 650}
            });
            
            car = new Kinetic.Rect({
                x: 150,
                y: 430,
                fillPatternImage: images.car,
                width: 54,
                height: 112,
                offset : {x : 0, y : -430},
                id: "car"
            });

            var amplitude = 270;
            var speedCar = 210;
            var period = 5000;

            var anim = new Kinetic.Animation(function(frame) {
                pit.setY(amplitude *frame.time * 2 / period);
                pit2.setY(amplitude *frame.time * 2 / period);
                if(frame.time >= 5000)
                    frame.time = 0;
            }, vehicleLayer);
            
            var anim2 = new Kinetic.Animation(function(frame) {
                car.setY(-speedCar * frame.time * 2 / period);
                if(frame.time >= 5000){
                    frame.time = 0;
                    enemyLayer.removeChildren();
                    enemyLayer.draw();
                    setTimeout(function(){
                        createEnemy(5, images);
                        createBox(350, 200,images);
                    }, 300);
                }
                
                var boxChildren = boxLayer.getChildren();
                for(var k = 0; k < boxChildren.length; k++){
                    if(car.getX() == boxChildren[k].getX()
                       && 380 + car.getY() <= boxChildren[k].getY()){
                        boxChildren[k].remove();
                        boxLayer.draw();
                        var boxSound = new Audio("audio/success.wav"); 
                        boxSound.play();
                        //Genetic algorithm
                        weaponLayer.removeChildren();
                        weaponObj = weaponObj2;
                        break;
                    }
                }

                var enemyChildren = enemyLayer.getChildren();
                
                for(var i = 0; i < enemyChildren.length; i++){
                    if(car.getX() + 25 == enemyChildren[i].getX()
                       && 400 + car.getY() <= enemyChildren[i].getY()){
                        if(checkLifes(anim2, enemyChildren, i)){
                            enemyLayer.draw();
                            break;
                        }
                    }
                }
                
            }, vehicleLayer);

            anim.start();
            anim2.start();
            
            vehicleLayer.add(pit);   
            vehicleLayer.add(pit2);   
            vehicleLayer.add(car);  
            
            var lifesLabel = new Kinetic.Label({
                x: 745,
                y: 75,
                opacity: 0.75
            });

            lifesLabel.add(new Kinetic.Tag({
                fill: 'black',
                pointerDirection: 'down',
                pointerWidth: 10,
                pointerHeight: 10,
                lineJoin: 'round',
                shadowColor: 'black',
                shadowBlur: 10,
                shadowOffset: {x:10,y:20},
                shadowOpacity: 0.5
            }));

            lifesLabel.add(new Kinetic.Text({
                text: 'Lifes: 2',
                fontFamily: 'Calibri',
                fontSize: 24,
                padding: 5,
                fill: 'white',
                name: "lifes"
            }));

            labelLayer.add(lifesLabel);
            
            canvasStage.add(vehicleLayer);  
            canvasStage.add(weaponLayer);     
            canvasStage.add(boxLayer);     
            canvasStage.add(enemyLayer);      
            canvasStage.add(labelLayer);      
            canvasStage.add(bulletLayer);   
            
            createEnemy(5, images);
            createBox(150,100,images);            
            arrowKeys(images);
        }   
        
        function checkLifes(pAnimation, pLayer, i){
            console.log(lifeCounter);
            if(lifeCounter == 0){
                car.remove();
                vehicleLayer.draw();
                pAnimation.stop();
                setGameOver();
            }else{
                lifeCounter--;
                pLayer[i].remove();
                var labelChildren = labelLayer.getChildren();
                for(var i = 0; i < labelChildren.length; i++){
                    var labelChildrenDepth = labelChildren[i].getChildren();
                    for(var j = 0; j <labelChildrenDepth.length; j++){
                        if(labelChildrenDepth[j].name() == "lifes"){
                            labelChildrenDepth[j].setText('Lifes:' + lifeCounter);
                            labelLayer.draw();
                            break;
                        }
                    }
                }
                var smashSound = new Audio("audio/smash2.wav"); 
                smashSound.play();
                return true;
            }
            return false;
        }
        
        function setGameOver(){
            var gameOverLabel = new Kinetic.Label({
                x: canvasStage.getWidth() /2,
                y: canvasStage.getHeight() /2,
                opacity: 0.75
            });

            gameOverLabel.add(new Kinetic.Tag({
                fill: 'black',
                pointerDirection: 'down',
                pointerWidth: 10,
                pointerHeight: 10,
                lineJoin: 'round',
                shadowColor: 'black',
                shadowBlur: 10,
                shadowOffset: {x:10,y:20},
                shadowOpacity: 0.5
            }));

            gameOverLabel.add(new Kinetic.Text({
                text: 'Game Over',
                fontFamily: 'Calibri',
                fontSize: 60,
                padding: 5,
                fill: 'white',
                name: "lifes"
            }));

            labelLayer.add(gameOverLabel);
            labelLayer.draw();
            
            gameOver = true;
        }
        
        function createEnemy(pNumberOfEnemies, pImages){
            //Falta crear el objeto enemigo
            var y = 50;
            var x = 175;
            for(var i = 0; i < pNumberOfEnemies; i++){
                var weapon = new Kinetic.RegularPolygon({
                    x: x,
                    y: y,
                    fill: "purple",
                    sides: 4,
                    radius: 20,
                    stroke: "#000",
                    strokeWidth: 10
                });
                createBullet(x, y, pImages);
                x += 100;
                y += 20;
                enemyLayer.add(weapon);
                enemyLayer.draw();

            }
        }
        
        function createWeapon(pWeapon){
            var period = 2000;
            var tmpX = 25;
            var group = new Kinetic.Group();
            var posY = 380 + car.getY();
            
            for(var i = 0; i < weaponObj.laneNumber; i++){
                (function() {
                    if(i == 2)
                        tmpX -= tmpX + 75;
                    var x = car.getX() + tmpX;
                    if(x < 675 && x > 75){
                        var weapon = new Kinetic.RegularPolygon({
                            x: x,
                            y: posY,
                            fill: weaponObj.color,
                            sides: weaponObj.shapeWeapon,
                            radius: 20,
                            stroke: "#000",
                            strokeWidth: weaponObj.stroke
                        });
                        group.add(weapon);
                    }
                    tmpX += 100;                    
                })();
            }
            weaponLayer.add(group);            
            weaponLayer.draw();
            

            var enemyChildren = enemyLayer.getChildren();
            var childrenGroup = weaponLayer.getChildren();
            var weaponChildren;
            
            var anim = new Kinetic.Animation(function(frame) {
                if(posY > 0)
                    group.setY((-posY * frame.time * 4 / period));
                else
                    group.setY((posY * frame.time * 4 / period));
                if(frame.time >= 2000){
                    var children = weaponLayer.getChildren();
                    if(children.length > 0){
                        children[0].remove();                    
                        weaponLayer.draw();
                    }
                    anim.stop();
                }
                
                for(var j = 0; j < enemyChildren.length; j++){     
                    for(var k = 0; k < childrenGroup.length; k++){
                        weaponChildren = childrenGroup.getChildren()[k].getChildren();
                        for(var i = 0; i < weaponChildren.length; i++){                
                            if(enemyChildren[j] == undefined)
                                break;
                            var enemyX = enemyChildren[j].getX();
                            var weaponX = weaponChildren[i].getX();
                            if(posY + childrenGroup[k].getY() <= enemyChildren[j].getY()
                               && weaponX == enemyX){
                                enemyChildren[j].remove();                    
                                enemyLayer.draw();
                                if(enemyChildren.length == 0){
                                    weaponLayer.removeChildren();
                                    weaponChildren.draw();
                                }
                                var bulletSound = new Audio("audio/smash.wav"); 
                                bulletSound.play();
                                break;
                            }
                        } 
                    }
                }
                    
            }, weaponLayer);                
            
            anim.start();
        }
        
        function createBullet(pPosX, pPosY, pImages){
            var period = 2000;
            
            var bullet = new Kinetic.Rect({
                x: pPosX - 15, 
                y: pPosY,
                fillPatternImage: pImages.bullet,
                width: 32,
                height: 32
            });
            
            bulletLayer.add(bullet);
            bulletLayer.draw();  

            var childrenBullets = bulletLayer.getChildren();
            var childrenGroup = weaponLayer.getChildren();
            var weaponChildren;
            
            var anim = new Kinetic.Animation(function(frame) {
                if(pPosY < 0)
                    bullet.setY(pPosY - (pPosY * frame.time * 4 / period));
                else
                    bullet.setY(pPosY + (pPosY * frame.time * 4 / period));
                if(frame.time >= 4000){
                    if(childrenBullets.length > 0){
                        childrenBullets[0].remove();                    
                        bulletLayer.draw();
                        anim.stop();    
                    }                    
                }
                
                for(var i = 0; i < childrenBullets.length; i++){
                    if(childrenBullets[i].getX() - 10 == car.getX()
                       && Math.abs(childrenBullets[i].getY() - (400 + car.getY())) <= 10){
                        if(checkLifes(anim, childrenBullets, i)){
                            bulletLayer.draw();
                            break;
                        }
                    }    
                }
            }, bulletLayer);

            anim.start();
        }
        
        function createBox(pPosX, pPosY, images){
            var box = new Kinetic.Rect({
                x: pPosX, 
                y: pPosY,
                fillPatternImage: images.box,
                width: 64,
                height: 64
            });

            boxLayer.add(box);
            boxLayer.draw();  
        }
        
        function arrowKeys(images){
            $(document).keydown(function(e){
                if (e.keyCode == 37) { 
                    if(car.getX() - 100 >= 150) //Left Arrow
                        car.setX(car.getX() - 100);
                    return false;
                }else if (e.keyCode == 39) {    //RightArrow
                    if(car.getX() + 100 <= 550)
                        car.setX(car.getX() + 100);
                    return false;
                }else if (e.keyCode == 32) {     //Space bar
                    if(!gameOver){
                        var x = car.getX();
                        var y = car.getY();
                        createWeapon(weaponObj);
                        var bulletSound = new Audio("audio/shot.wav"); 
                        bulletSound.play();
                    }
                    return false;
                }
            });
        }        

        function init(){            
            //Let's draw the default stage
            var sources = {
                pit: 'images/pits.png',
                car: 'images/car.png',
                bullet: 'images/bullet.png',
                box: 'images/box.png'
            };
            
            loadImages(sources, function(images) {
                drawCanvasStage(images);
            });
        }

        return {
            init: init
        };            
    })()

}(Presentation, jQuery));