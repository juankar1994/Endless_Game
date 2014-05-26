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

        var car, canvasStage, vehicleLayer, bulletLayer, weaponLayer, enemyLayer, labelLayer, lifeCounter = 2;

        var weaponObj = {
            laneNumber : 3,
            color: "green",
            stroke: 4,
            shapeWeapon: 4
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
            bulletLayer = new Kinetic.Layer();
            weaponLayer = new Kinetic.Layer();
            enemyLayer = new Kinetic.Layer();
            labelLayer = new Kinetic.Layer();
            
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
                offset : {x : 0, y : -430}
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
                if(frame.time >= 5000)
                    frame.time = 0;

                var enemyChildren = enemyLayer.getChildren();
                
                for(var i = 0; i < enemyChildren.length; i++){
                    if(car.getX() + 25 == enemyChildren[i].getX()
                       && 400 + car.getY() <= enemyChildren[i].getY()){
                        if(lifeCounter == 0){
                            car.remove();
                            vehicleLayer.draw();   
                        }else{
                            enemyChildren[i].remove();
                            enemyLayer.draw();
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
                            lifeCounter--;
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
                text: 'Lifes: 3',
                fontFamily: 'Calibri',
                fontSize: 24,
                padding: 5,
                fill: 'white',
                name: "lifes"
            }));

            labelLayer.add(lifesLabel);
            
            canvasStage.add(vehicleLayer);  
            canvasStage.add(weaponLayer);     
            canvasStage.add(bulletLayer);     
            canvasStage.add(enemyLayer);      
            canvasStage.add(labelLayer);   
            
            var weapon = new Kinetic.RegularPolygon({
                x: 175,
                y: 50,
                fill: "purple",
                sides: 4,
                radius: 20,
                stroke: "#000",
                strokeWidth: 10
            });
            
            enemyLayer.add(weapon);

            var weapon2 = new Kinetic.RegularPolygon({
                x: 575,
                y: 100,
                fill: "purple",
                sides: 4,
                radius: 20,
                stroke: "#000",
                strokeWidth: 10
            });
            enemyLayer.add(weapon2);
            

            var weapon3 = new Kinetic.RegularPolygon({
                x: 375,
                y: 150,
                fill: "purple",
                sides: 4,
                radius: 20,
                stroke: "#000",
                strokeWidth: 10
            });
            enemyLayer.add(weapon3);
            enemyLayer.draw();
            
            arrowKeys(images);
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
        
        function createBullet(pPosX, pPosY, images){
            var period = 2000;
            pPosY = 380 + pPosY;
            
            var bullet = new Kinetic.Rect({
                x: pPosX + 10, 
                y: pPosY,
                fillPatternImage: images.bullet,
                width: 32,
                height: 32
            });
            
            bulletLayer.add(bullet);
            bulletLayer.draw();    
            
            var anim = new Kinetic.Animation(function(frame) {
                if(pPosY > 0)
                    bullet.setY(pPosY - (pPosY * frame.time * 4 / period));
                else
                    bullet.setY(pPosY + (pPosY * frame.time * 4 / period));
                if(frame.time >= 2000){
                    var children = bulletLayer.get('Rect');
                    children[0].remove();                    
                    bulletLayer.draw();
                    anim.stop();
                }
            }, bulletLayer);

            anim.start();
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
                    var x = car.getX();
                    var y = car.getY();
                    createWeapon(weaponObj);
                    //createBullet(x, y, images);
                    var bulletSound = new Audio("audio/shot.wav"); 
                    bulletSound.play();
                    return false;
                }
            });
        }        

        function init(){            
            //Let's draw the default stage
            var sources = {
                pit: 'images/pits.png',
                car: 'images/car.png',
                bullet: 'images/bullet.png'
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