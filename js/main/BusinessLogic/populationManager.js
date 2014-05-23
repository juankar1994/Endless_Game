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


/**
 * Namespace declaration.
 */


(function (pContext, $) {
    'use strict';
    /**
     * Public method to return a reference of parseBusinessLogic.
     * 
     * @return {parseBusinessLogic} Bussiness logic.
         * @public
     */
    pContext.getPopulationManager = function(){
        return populationManager;
    };

    /**
     * Module.
     *      Module for logic layers and sections.
     *
     * @private
     * @namespace
     **/


    var populationManager = (function(){
        
        
        // Returns a random integer between min and max
        // Using Math.round() will give you a non-uniform distribution!
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        
        function generateChromosomeWeapon(){
            var thickness = getRandomInt(0,255);
            var color = getRandomInt(0,255);
            var shapeWeapon = getRandomInt(0,255);
            var laneNumber = getRandomInt(0,255);
            return LibraryData.createChromosome(laneNumber,color,thickness,shapeWeapon);
        }
        
        function generateAllChromosomes(){
            var population =  new Array();
            for(var chromosomeNumber = 0 ; chromosomeNumber < 20 ; chromosomeNumber ++){
                population.push(generateChromosomeWeapon());
            }
            return population;
        }
        
        function convertChromosomeToWeapon(pChromosome){
            
            
        }
        
        function convertToIntNumPositive(num){
            num = num - 0.5;
            num = num.toFixed();
            if(num<0)num=0;
            return num;
        }



        //Let's make it public
        return {
            generateChromosomeWeapon : generateChromosomeWeapon,
            generateAllChromosomes : generateAllChromosomes
        };  
    })();

}(BusinessLogic,jQuery));
