/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Brandon Campos Calderón - Juan Carlos Martínez
 * Use is subject to license terms.
 * Filename: BasicOperators.js
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
    pContext.getWeaponGeneticAlgorithm = function(){
        return weaponGeneticAlgorithm;
    };
    
    /**
     * Module.
     *      Module for logic layers and sections.
     *
     * @private
     * @namespace
     **/

    
    var weaponGeneticAlgorithm = (function(){

        
        function selectChromosome(pChromosomeRange,bestRange){
            if(pChromosomeRange >= bestRange){
                return true;
            }else{
                return false;
            }
        }
        
        // Returns a random integer between min and max
        // Using Math.round() will give you a non-uniform distribution!
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        
        function reproduceWeaponPart(byte1,byte2,pointCrossing){
            byte1= BusinessLogic.getBasicOperatorsBL().shiftRightByte(byte1,pointCrossing);
            byte2= BusinessLogic.getBasicOperatorsBL().shiftLeftByte(byte2,pointCrossing);
            var son = BusinessLogic.getBasicOperatorsBL().reproduceChromosome(byte1,byte2);
            return son;
        }
        
        
        function geneticAlgorithm(pPopulation,weapon){
            
            var selectedChromosome = new Array();
            var bestWeaponRange = getBestWeaponRange();
            var operationsBits = BusinessLogic.getBasicOperatorsBL();
            
            for(var chromosomeNumber = 0 ; chromosomeNumber < pPopulation.length ; chromosomeNumber ++){
                var chromosome = pPopulation[chromosomeNumber];
                if(selectChromosome(chromosome.getLaneNumber(),bestWeaponRange) == true){
                    selectedChromosome.push(chromosome);
                }
            }
            
            var selectionChromosome = getRandomInt(0,selectedChromosome.length-1);
            
            var pointCrossing = getRandomInt(2,6);
            var mutation = getRandomInt(0,100);
            var bitMutate;
            
            var newThickness = reproduceWeaponPart(weapon.getThickness(),selectionChromosome.getThickness());
            if(mutation>90){
                bitMutate = getRandomInt(0,7);
                newThickness = BusinessLogic.getBasicOperatorsBL().mutateBit(newThickness,bitMutate);
            }
            
            pointCrossing = getRandomInt(2,6);
            mutation = getRandomInt(0,100);
            var newColorWeapon = reproduceWeaponPart(weapon.getColor(),selectionChromosome.getColor());
            if(mutation>90){
                bitMutate = getRandomInt(0,7);
                newColorWeapon = BusinessLogic.getBasicOperatorsBL().mutateBit(newColorWeapon,bitMutate);
            }
            
            pointCrossing = getRandomInt(2,6);
            mutation = getRandomInt(0,100);
            var newLaneNumber = reproduceWeaponPart(weapon.getLaneNumber(),selectionChromosome.getLaneNumber());
            if(mutation>90){
                bitMutate = getRandomInt(0,7);
                newLaneNumber = BusinessLogic.getBasicOperatorsBL().mutateBit(newLaneNumber,bitMutate);
            }

            pointCrossing = getRandomInt(2,6);
            mutation = getRandomInt(0,100);
            var newShapeWeapon = reproduceWeaponPart(weapon.getShapeWeapon(),selectionChromosome.getShapeWeapon());
            if(mutation>90){
                bitMutate = getRandomInt(0,7);
                newShapeWeapon = BusinessLogic.getBasicOperatorsBL().mutateBit(newShapeWeapon,bitMutate);
            }
            
            var son = LibraryData.createChromosome(newLaneNumber,newColorWeapon,newThickness,newShapeWeapon);
            
            return son;
            
        }
        

        //Let's make it public
        return {
            selectChromosome : selectChromosome
        };  
    })();

}(BusinessLogic,jQuery));
