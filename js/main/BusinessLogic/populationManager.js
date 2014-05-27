/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Brandon Campos Calderón - Juan Carlos Martínez
 * Use is subject to license terms.
 * Filename: populationManager.js
 */

/*
  * Author:      juancar199400@gmail.com
  * Date:        19/05/2014
  * Description: Business layer
  */


(function (pContext, $) {
    'use strict';
    
    pContext.getPopulationManager = function(){
        return populationManager;
    };

    var populationManager = (function(){
        
        var population  =  new Array();
        var COLOR = {
            RED: 1,//{value: 1, RGB: "#FF0000"}, 
            YELLOW: 2,//{value: 2, RGB: "#FFFF00"}, 
            GREEN : 3,//{value: 3, RGB: "#008000"}
        };
        
        var colors = ["#FF0000","#FFFF00","#008000"]
        
        var a = convertColor(2);
        //var a = "#008000";
        //alert(a);
        
        function convertColor(numColor){
            var color;
            switch(numColor){
                case COLOR.RED: {
                    color = colors[numColor-1];
                    break;
                }
                case COLOR.GREEN: {
                    color = colors[numColor-1];
                    break;
                }
                case COLOR.YELLOW: {
                    color = colors[numColor-1];
                    break;
                }
                default:{
                    var colorMutate = colors[getRandomInt(0,2)];
                    var posMutate = getRandomInt(4,6);
                    var newBite = getRandomInt(0,9);
                    var color= colorMutate.substring(0,posMutate)+ "" + newBite + ""+colorMutate.substring(posMutate+1,7);
                }
            }
            return color;
        }
        
        function getNewEnemie(){
            var thickness = getRandomInt(0,255);
            var color = getRandomInt(0,255);
            var shapeWeapon = getRandomInt(0,255);
            var laneNumber = getRandomInt(0,255);
            var chromosome = LibraryData.createChromosome(laneNumber,color,thickness,shapeWeapon);
            
            convertChromosomeToWeapon(chromosome, true);
        }
        
        function generateChromosomeWeapon(){
            var thickness = getRandomInt(0,255);
            var color = getRandomInt(0,255);
            var shapeWeapon = getRandomInt(0,255);
            var laneNumber = getRandomInt(0,255);
            var chromosome = LibraryData.createChromosome(laneNumber,color,thickness,shapeWeapon);
            if(population.length == 0)
                population.push(chromosome);
            Presentation.getWeaponHandler().sendInitialWeapon(chromosome);
        }
        
        function convertChromosomeToWeapon(pChromosome, pFlag){
            var laneNumber = trunc((pChromosome.getLaneNumber()/85)+1,0);
            var colorWeapon = trunc((pChromosome.getColor()/80)+1,0);
            colorWeapon = convertColor(colorWeapon);
            var thickness = trunc((pChromosome.getThickness()/25.5)+1,0);
            var shape = trunc((pChromosome.getShapeWeapon()/80)+3,0);
            var shapeWeapon = shape;
            if(shape>5){
                var mutateShape = getRandomInt(0,6);
                shapeWeapon = shape + mutateShape;
            }
            var newWeapon = LibraryData.createWeapon(laneNumber,colorWeapon,thickness,shapeWeapon);
            if(!pFlag)
                Presentation.getWeaponHandler().sendConvertedWeapon(newWeapon);
            else
                Presentation.getWeaponHandler().sendEnemieWeapon(newWeapon);
        }
        
        function getNewWeapon(pChromosome){
            Presentation.getWeaponHandler().sendToGeneticAlgorithm(population, pChromosome);
        }
        
        function convertToIntNumPositive(num){
            num = num - 0.5;
            num = num.toFixed();
            if(num<0) num=0;
            return num;
        }
        
        //Let's make it public
        return {
            generateChromosomeWeapon : generateChromosomeWeapon,
            convertChromosomeToWeapon : convertChromosomeToWeapon,
            getNewWeapon : getNewWeapon,
            getNewEnemie : getNewEnemie
        };  
    })();

}(BusinessLogic,jQuery));
