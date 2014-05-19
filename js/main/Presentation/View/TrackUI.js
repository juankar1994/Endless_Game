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

        var car;
        
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
            var canvasStage = new Kinetic.Stage({
                container: 'gameContainer',
                width: 800,
                height: 550
            });

            var vehicleLayer = new Kinetic.Layer();
            
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
            }, vehicleLayer);

            anim.start();
            anim2.start();

            vehicleLayer.add(pit);   
            vehicleLayer.add(pit2);   
            vehicleLayer.add(car);   
            canvasStage.add(vehicleLayer);   
                        
            arrowKeys();
        }    
        
        function arrowKeys(){
            $(document).keydown(function(e){
                if (e.keyCode == 37) { 
                    if(car.getX() - 100 >= 150)
                        car.setX(car.getX() - 100);
                    return false;
                }else if (e.keyCode == 39) { 
                    if(car.getX() + 100 <= 550)
                        car.setX(car.getX() + 100);
                    return false;
                }
            });
        }
        
        

        

        function init(){
            //Let's draw the default stage
            
            var sources = {
                pit: 'images/pits.png',
                car: 'images/car.png'
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
