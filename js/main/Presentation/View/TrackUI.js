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
        var car, canvasStage, vehicleLayer, boxLayer, weaponLayer, enemyLayer, labelLayer, bulletLayer, intersectionLayer,
            gameOver = false, vehicle, numberOfShots = 2, enemiesCollection = [], player, billboard, actualIntersections,
            suggestionLayer, enemiesPositionX = [175, 275, 375, 475, 575];
        var currentWeapon, currentChromosome, currentEnemies = [];
        var nodo;
        
        $("#btnPlay").click(function(){
            $("#imgMedal1").hide("explode", { pieces: 64 }, 1000);
            $("#imgMedal2").hide("explode", { pieces: 64 }, 1000);
            $("#imgMedal3").hide("explode", { pieces: 64 }, 1000);
            $("#imgMedal4").hide("explode", { pieces: 64 }, 1000);
            $(this).hide("explode", { pieces: 16 }, 1000);
            $("#gameContainer").effect('explode', { pieces: 16 }, 1000, function(){
                player = LibraryData.createPlayer();
                billboard = LibraryData.createBillboard();
                gameOver = false;
                init();
                $(this).removeAttr("style").hide().fadeIn();
                $("#imgMedal1").removeAttr("style").hide().fadeIn();
                $("#imgMedal2").removeAttr("style").hide().fadeIn();
                $("#imgMedal3").removeAttr("style").hide().fadeIn();
                $("#imgMedal4").removeAttr("style").hide().fadeIn();
            });
        });     

        $("#imgMedal1").click(function(){
            $("#audio").attr('src', "audio/song2.mp3").appendTo(this.parent());
        });   

        $("#imgMedal2").click(function(){
            $("#audio").attr('src', "audio/song4.mp3").appendTo(this.parent());
        });   

        $("#imgMedal3").click(function(){
            $("#audio").attr('src', "audio/song3.mp3").appendTo(this.parent());
        });   

        $("#imgMedal4").click(function(){
            $("#audio").attr('src', "audio/aceleration.mp3").appendTo(this.parent());
        });   
        
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
            intersectionLayer = new Kinetic.Layer();
            suggestionLayer = new Kinetic.Layer();
            
            var pit = new Kinetic.Rect({
                x: 90,
                fillPatternImage: images.pit,
                width: 34,
                height: 1200,
                offset : {x : 0, y : 650}             
            });

            var pit2 = new Kinetic.Rect({
                x: 645,
                fillPatternImage: images.pit,
                width: 34,
                height: 1200,
                offset : {x : 0, y : 650}
            });

            var trees = new Kinetic.Rect({
                x: 60,
                fillPatternImage: images.trees,
                width: 36,
                height: 1200,
                offset : {x : 0, y : 600}
            });

            var animals = new Kinetic.Rect({
                x: 10,
                fillPatternImage: images.animals,
                width: 36,
                height: 1200,
                offset : {x : 0, y : 690}
            });
            
            car = new Kinetic.Rect({
                x: 350,
                y: 430,
                fillPatternImage: images.car,
                width: 54,
                height: 112,
                offset : {x : 0, y : -430}
            });
            
            //Creation of the vehicle
            vehicle = LibraryData.createVehicle(car.getX(), car.getY(), numberOfShots);
            //Let's call the controller
            Presentation.getWeaponHandler().askForInitialWeapon();
            

            var amplitude = 270;
            var speedCar = 210;
            var period = 5000;

            var animalsAnim = new Kinetic.Animation(function(frame) {
                animals.setY(amplitude *frame.time* 2 / period);
                if(frame.time >= 4490)
                    frame.time = 0;
            }, vehicleLayer);

            var treesAnim = new Kinetic.Animation(function(frame) {
                trees.setY(amplitude *frame.time* 2 / period);
                if(frame.time >= 4850)
                    frame.time = 0;
            }, vehicleLayer);

            var anim = new Kinetic.Animation(function(frame) {
                pit.setY(amplitude *frame.time * 2 / period);
                pit2.setY(amplitude *frame.time * 2 / period);
                if(frame.time >= 5000)
                    frame.time = 0;
            }, vehicleLayer);
            
            var anim2 = new Kinetic.Animation(function(frame) {
                var yCalculation = -speedCar * frame.time * 2 / period;
                vehicle.setPositionY(yCalculation);
                car.setY(yCalculation);
                if(frame.time >= 5000){         // 5 seconds
                    frame.time = 0;
                    enemyLayer.removeChildren();
                    enemyLayer.draw();
                    boxLayer.removeChildren();
                    boxLayer.draw();
                    bulletLayer.removeChildren();
                    bulletLayer.draw();
                    suggestionLayer.removeChildren();
                    suggestionLayer.draw();
                    vehicle.setNumberOfShots(numberOfShots);
                    
                    nodo.nextNodo(checkLaneNumber() - 1);
                    console.log(nodo);
                    console.log("actualIntersections: "+actualIntersections);
                    console.log("nC: "+ (checkLaneNumber() - 1));

                    createIntersection(nodo.getNumberIntersections() + 1);
                    updateLabel("ID", nodo.getNumInt());
                    updateLabel("Name", convertToHex(nodo.getNumInt()));
                    updateLabel("Level",nodo.getLevel());
                    //It could be 3 or 1
                    var pointAdded = 3;
                    var c = "#3d594b";
                    if(nodo.getVisited()){
                        pointAdded = 1;
                        c = "#2EE1E7";
                    }
                    billboard.setPoints(billboard.getPoints() + pointAdded);
                    updateLabel("Points", billboard.getPoints(), c);
                    setTimeout(function(){
                        getRandomObjects(images);  
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
                        //Let's call the controller
                        Presentation.getWeaponHandler().askForInitialWeapon();
                        Presentation.getWeaponHandler().getNewWeapon(currentChromosome);
                        
                        weaponLayer.removeChildren();
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
            treesAnim.start();
            animalsAnim.start();
            
            vehicleLayer.add(pit);   
            vehicleLayer.add(pit2);  
            vehicleLayer.add(trees); 
            vehicleLayer.add(animals);   
            vehicleLayer.add(car);  
            
            canvasStage.add(vehicleLayer);  
            canvasStage.add(weaponLayer);     
            canvasStage.add(boxLayer);     
            canvasStage.add(enemyLayer);      
            canvasStage.add(labelLayer);      
            canvasStage.add(bulletLayer);   
            canvasStage.add(intersectionLayer);
            canvasStage.add(suggestionLayer);
            
            nodo = LibraryData.createNodo("1",0); 
            createLabel("Lifes:\n" + player.getLifes(), 740, 100, 16, 5, "black", "Lifes");
            createLabel("ID:\n" + nodo.getNumInt(), 740, 150, 16, 5, "#9d1826", "ID");
            createLabel("Int Name:\n" + convertToHex(nodo.getNumInt()) , 740, 200, 16, 5, "#8fc9c1", "Name");
            createLabel("Level:\n" + (nodo.getLevel()),740,250,16,5,"#4aba8d","Level");
            createLabel("Points:\n" + billboard.getPoints(), 740, 300, 16, 5, "#3d594b", "Points");
            getRandomObjects(images);          
            arrowKeys(images);
            
            //This is to make the number of bifurcations
            createIntersection(nodo.getNumBif() + 1);    
            checkLaneNumber(); // returns the lane number, 1-2-3

            //This if for creating the suggestion of the path
            createSuggestion(1);
            
            /*updateLabel("ID", 123);
            updateLabel("Name", "Costa Rica");
            updateLabel("Points", 10);*/
        }   
        
        function createSuggestion(pSuggestion){
            var x;
            if(pSuggestion == 1)
                x = 275;
            else if(pSuggestion == 2)
                x = 485;
            else
                x = 585;
                
            var star = new Kinetic.Star({
                x: x,
                y: 14,
                numPoints: 5,
                innerRadius: 7,
                outerRadius: 12,
                fill: 'yellow',
                stroke: 'black',
                strokeWidth: 4,
                offset: {x: 3, y:6}
            });
        
            suggestionLayer.add(star);
            suggestionLayer.draw();
            
            // one revolution per 4 seconds
            var angularSpeed = 360 / 4;
            var anim = new Kinetic.Animation(function(frame) {
                var angleDiff = frame.timeDiff * angularSpeed / 1000;
                star.rotate(angleDiff);
            }, suggestionLayer);

            anim.start();
        }
        
        function createLabel(pText, pPosX, pPosY, pFontSize, pPadding,pFillColor, pName){
            var label = new Kinetic.Label({
                x: pPosX,
                y: pPosY,
                opacity: 0.75,
                name: pName
            });

            label.add(new Kinetic.Tag({
                fill: pFillColor,
                pointerDirection: 'down',
                lineJoin: 'round',
                shadowColor: 'black',
                shadowBlur: 10,
                shadowOffset: {x:10,y:20},
                shadowOpacity: 0.5
            }));
            
            var text =new Kinetic.Text({
                text: pText,
                fontFamily: 'Calibri',
                fontSize: pFontSize,
                padding: pPadding,
                fill: 'white',
                name: "lifes",
                width: 122,
                height: 50,
                align: "center",
                name: pFillColor
            });
            
            label.add(text);
            labelLayer.add(label);
            labelLayer.draw();

            text.tween = new Kinetic.Tween({
                node: text,
                easing: Kinetic.Easings.ElasticEaseInOut,
                duration: 1.5,
                x: -80
            });
            

            // use event delegation
            labelLayer.on('mouseover touchstart', function(evt) {                
                evt.target.tween.play();
                if(evt.target.name() == "#8fc9c1")
                    evt.target.setFill("#000000");
                else if(evt.target.name() == "#9d1826")
                    evt.target.setFill("#b8bc6f");
                else if(evt.target.name() == "#3d594b")
                    evt.target.setFill("#d5fac4");
                else
                    evt.target.setFill("#ff8000");
                evt.target.fontStyle("Bold");
            });

            labelLayer.on('mouseout touchend', function(evt) {
                evt.target.tween.reverse();
                evt.target.setFill("white");
                evt.target.fontStyle("Normal");
            });
        }
        
        function createIntersection(pIntersection){
            intersectionLayer.removeChildren();
            intersectionLayer.draw();  
            var x = 124;
            var width = 521;
            var color = ["#CC0000", "#FF6600", "#009900"];
            actualIntersections = pIntersection;
            for(var i = 0; i < pIntersection; i++){
                createGraphicalIntersection(x , width, color[i]);
                if(pIntersection == 2){
                    x += 314;   
                    width = 207;
                }
                if(pIntersection == 3){
                    if(i == 0)
                        x += 314;
                    else
                        x += 103;
                    
                    width = 104;
                }
            }
        }
        
        function checkLaneNumber(){
            var x = 124;
            var width = 521;
            var positionsX = [];
            if(actualIntersections == 1)
                return 1;
            else if(actualIntersections == 2){
                if(car.getX() < 400)
                    return 1;
                return 2;
            }else{
                var carPos = vehicle.getPositionX();
                if(carPos < 400)
                    return 1;
                else if(carPos >400 && carPos < 500)
                    return 2;
                return 3;
            }
        }
        
        function createGraphicalIntersection(pPosX, pWidth, pColor){            
            var intersection = new Kinetic.Rect({
                x: pPosX,
                y: 0,
                fill: pColor,
                width: pWidth,
                height: 10
            });
            intersectionLayer.add(intersection);
            intersectionLayer.draw();   
        }
        
        
        function getRandomObjects(pImages){
            var randomEnemies = getRandomInt(1, 3);
            var randomXBox = getRandomInt(0, 4);
            var randomYBox = getRandomInt(50, 200);
            createEnemy(randomEnemies, pImages);
            createBox(enemiesPositionX[randomXBox] - 25, randomYBox, pImages);        
        }
        
        function checkLifes(pAnimation, pLayer, i){
            if(player.getLifes() == 0){
                car.remove();
                vehicleLayer.draw();
                pAnimation.stop();
                setGameOver();
            }else{
                player.setLifes(player.getLifes() - 1);
                pLayer[i].remove();
                updateLabel("Lifes", player.getLifes());
                var smashSound = new Audio("audio/smash2.wav"); 
                smashSound.play();
                return true;
            }
            return false;
        }
        
        function updateLabel(pName, pText, pColor){
            var labelChildren = labelLayer.getChildren();
            for(var i = 0; i < labelChildren.length; i++){
                if(labelChildren[i].name() == pName){
                    var labelChildrenDepth = labelChildren[i].getChildren();
                    if(labelChildren[i].name() == "ID")
                        labelChildrenDepth[1].setFill(pColor);
                    labelChildrenDepth[1].setText(pName + ': \n' + pText);
                    labelLayer.draw();
                    break;
                }       
            }
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
            
        }
        
        function createEnemy(pNumberOfEnemies, pImages){     
            enemiesCollection = [];
            currentEnemies = [];
            for(var i = 0; i < pNumberOfEnemies; i++){    
                var y = getRandomInt(50, 200);
                var x = getRandomInt(0, 4);
                
                enemiesCollection.push(LibraryData.createEnemy(enemiesPositionX[x], y, 1));
                x = enemiesCollection[i].getPositionX();
                y = enemiesCollection[i].getPositionY();
                
                var weapon = new Kinetic.RegularPolygon({
                    x: x,
                    y: y,
                    fill: "purple",
                    sides: 4,
                    radius: 20,
                    stroke: "#000",
                    strokeWidth: 10
                });
                enemyLayer.add(weapon);
                enemyLayer.draw();
                
                Presentation.getWeaponHandler().getNewEnemie();
                
                createBullet(x, y, currentEnemies[i],pImages);
            }
        }
        
        function setEnemieWeapon(pWeapon){
            currentEnemies.push(pWeapon);
        }
        
        function createWeapon(pWeapon){
            var period = 2000;
            var tmpX = 25;
            var group = new Kinetic.Group();
            var posY = 380 + car.getY();
            
            for(var i = 0; i < currentWeapon.getLaneNumber(); i++){
                (function() {
                    if(i == 2)
                        tmpX -= tmpX + 75;
                    var x = car.getX() + tmpX;
                    if(x < 675 && x > 75){
                        var weapon = new Kinetic.RegularPolygon({
                            x: x,
                            y: posY,
                            fill: currentWeapon.getColor(),
                            sides: currentWeapon.getShapeWeapon(),
                            radius: 20,
                            stroke: "#000",
                            strokeWidth: currentWeapon.getThickness()
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
                                weaponChildren[i].remove();
                                weaponLayer.draw();
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
        
        function createBullet(pPosX, pPosY, pObject, pImages){
            var period = 3000;
            
            var bullet = new Kinetic.RegularPolygon({
                x: pPosX,
                y: pPosY,
                fill: pObject.getColor(),
                sides: pObject.getShapeWeapon(),
                radius: 20,
                stroke: "#000",
                strokeWidth: pObject.getThickness()
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
                /*if(frame.time >= 4000){
                    console.log(childrenBullets.length);
                    if(childrenBullets.length > 0){
                        childrenBullets[0].remove();                    
                        bulletLayer.draw();
                        anim.stop();    
                    }                   
                }*/
                
                for(var j = 0; j < childrenGroup.length; j++){
                    weaponChildren = childrenGroup[j].getChildren();
                    for(var k = 0; k < weaponChildren.length; k++){
                        for(var i = 0; i < childrenBullets.length; i++){
                            //var yCalculation = 405 + car.getY() - childrenBullets[i].getY();
                            if(weaponChildren[k] == undefined)
                                break;
                            if(weaponChildren[k].getX() == childrenBullets[i].getX()
                               && (childrenBullets[i].getY() <= weaponChildren[k].getY())){
                                childrenBullets[i].remove();
                                bulletLayer.draw();
                                weaponChildren[k].remove();
                                weaponLayer.draw();
                            }
                        }
                    }
                }
                
                for(var i = 0; i < childrenBullets.length; i++){
                    var yCalculation = 405 + car.getY() - childrenBullets[i].getY();
                    
                    if(childrenBullets[i].getX() - 25 == car.getX()
                       && yCalculation <= 10 && yCalculation >= -160){
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
                    if(car.getX() - 100 >= 150){ //Left Arrow
                        var xCalculation = vehicle.getPositionX() - 100;
                        car.setX(xCalculation);
                        vehicle.setPositionX(xCalculation);
                    }
                    return false;
                }else if (e.keyCode == 39) {    //RightArrow
                    if(car.getX() + 100 <= 550){
                        var xCalculation = vehicle.getPositionX() + 100;
                        car.setX(xCalculation);
                        vehicle.setPositionX(xCalculation);
                    }
                    return false;
                }else if (e.keyCode == 32) {     //Space bar
                    var y = vehicle.getPositionY();                    
                    if(!gameOver && y + 380 >= 60 && vehicle.getNumberOfShots() != 0){
                        vehicle.setNumberOfShots(vehicle.getNumberOfShots() - 1);
                        var x = vehicle.getPositionX();
                        createWeapon(currentWeapon);
                        var bulletSound = new Audio("audio/shot.wav"); 
                        bulletSound.play();
                    }
                    return false;
                }
            });
        }  

        function getRandomInt (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        
        function setInitialWeapon(pWeapon){
            currentChromosome = pWeapon;
            Presentation.getWeaponHandler().convertChromosomeToWeapon(currentChromosome);
        }

        function setConvertedWeapon(pWeapon){
            currentWeapon = pWeapon;
        }
        
        function convertToHex(pNumber){
            return pNumber.toString(16);   
        }

        function init(){            
            //Let's draw the default stage
            var sources = {
                pit: 'images/pits.png',
                car: 'images/car.png',
                bullet: 'images/bullet.png',
                box: 'images/box.png',
                trees: 'images/trees.png',
                animals: 'images/animals.png'
            };
            
            loadImages(sources, function(images) {
                drawCanvasStage(images);
            });
        }

        return {
            init: init,
            setInitialWeapon : setInitialWeapon,
            setConvertedWeapon : setConvertedWeapon,
            setEnemieWeapon : setEnemieWeapon
        };            
    })()

}(Presentation, jQuery));