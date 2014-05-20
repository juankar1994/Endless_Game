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
        
        function generateChromosomeWeapon(){
            var thickness = BusinessLogic.getWeaponGeneticAlgorithm().getRandomInt(0,255);
            var color = BusinessLogic.getWeaponGeneticAlgorithm().getRandomInt(0,255);
            var shapeWeapon = BusinessLogic.getWeaponGeneticAlgorithm().getRandomInt(0,255);
            var laneNumber = BusinessLogic.getWeaponGeneticAlgorithm().getRandomInt(0,255);
            return LibraryData.createChromosome(laneNumber,color,thickness,shapeWeapon);
        }
        
        function generateAllChromosomes(){
            var population =  new Array();
            for(var chromosomeNumber = 0 ; chromosomeNumber < 20 ; chromosomeNumber ++){
                population.push(generateChromosomeWeapon());
            }
        }



        //Let's make it public
        return {
            generateChromosomeWeapon : generateChromosomeWeapon,
            generateAllChromosomes : generateAllChromosomes
        };  
    })();

}(BusinessLogic,jQuery));
