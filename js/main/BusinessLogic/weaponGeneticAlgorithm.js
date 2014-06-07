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

(function (pContext, $) {
    'use strict';
    
    pContext.getWeaponGeneticAlgorithm = function(){
        return weaponGeneticAlgorithm;
    };
    
    var weaponGeneticAlgorithm = (function(){
        //Adaptability Function
        function selectChromosome(pChromosomeRange,bestRange){
            if(pChromosomeRange >= bestRange){
                return true;
            }else{
                return false;
            }
        }
        
        //Function for crossing the two chromosomes
        function reproduceWeaponPart(byte1,byte2,pointCrossing){
            byte1= BusinessLogic.getBasicOperatorsBL().shiftLeftByte(byte1,pointCrossing);
            byte2= BusinessLogic.getBasicOperatorsBL().shiftRightByte(byte2,pointCrossing);
            var son = BusinessLogic.getBasicOperatorsBL().reproduceChromosome(byte1,byte2);
            return son;
        }
        
        //Function to get the average range of weapons according to the chromosomes. 
        //Taking the average of the bits and dividing them by the number of population.
        function getBestWeaponRange(pPopulation){
            var bestWeaponRange = 0;
            for(var chromosomeNumber = 0 ; chromosomeNumber < pPopulation.length ; chromosomeNumber ++){
                bestWeaponRange += pPopulation[chromosomeNumber].getLaneNumber();
            }
            bestWeaponRange = Math.floor(bestWeaponRange/pPopulation.length);
            return bestWeaponRange;
        }
        
        //Genetic algorithm that generates a new weapon for the player
        function geneticAlgorithm(pPopulation,weapon){
            
            var selectedChromosome = new Array();                       // List that keeps the best chromosome of the population
            var bestWeaponRange = getBestWeaponRange(pPopulation);      //This variable is assigned to take the average of the top 50% of the population                                                                             according to laneNumber.
            
            //Selection random chromosome of population.
            var selectionChromosome = pPopulation[getRandomInt(0,pPopulation.length-1)];
            
            //Combination between the weapon taken by the player and one of the last weapons
            var newChromosome = generateSon(selectionChromosome,weapon);
            
            //Added newChromosome to the population
            if(pPopulation.length<20){
                pPopulation.push(newChromosome);
            }else{
                pPopulation[getRandomInt(0,pPopulation.length-1)]= newChromosome;
            }
            
            //Selection of chromosomes from the average bestWeaponRange
            for(var chromosomeNumber = 0 ; chromosomeNumber < pPopulation.length ; chromosomeNumber ++){
                var chromosome = pPopulation[chromosomeNumber];
                if(selectChromosome(chromosome.getLaneNumber(),bestWeaponRange) == true){
                    selectedChromosome.push(chromosome);
                }
            }
            
            /*
            var popuString = "Cromosomas seleccionados: \n";
            for( var i = 0; i < selectedChromosome.length ; i++){
                var chromosome = i+":"+selectedChromosome[i].getLaneNumber()+"  ";
                popuString +=chromosome;
            }
            alert(popuString);
            */
            
            //Combination between 2 of the best chromosomes according to the scope
            var parent1 = selectedChromosome[getRandomInt(0,selectedChromosome.length-1)];
            var parent2 = selectedChromosome[getRandomInt(0,selectedChromosome.length-1)];
            
            //Creation of new weapon.
            var newWeapon = generateSon(parent1,parent2);

            //Added newChromosome to the population
            if(pPopulation.length<20){
                pPopulation.push(newWeapon);
            }else{
                pPopulation[getRandomInt(0,pPopulation.length-1)]= newWeapon;
            }
            
            //New Weapon returned for the player.This chromosome will be converted to object weapon when you go to use by the player.
            Presentation.getWeaponHandler().convertChromosomeToWeapon(newWeapon);
        }
        
        
        //Function to generate children of chromosome from 2 parents
        function generateSon(parent1,parent2){
            var operationsBits = BusinessLogic.getBasicOperatorsBL();
            
            var pointCrossing = getRandomInt(2,6);
            var mutation = getRandomInt(0,100);
            var bitMutate;

            var newThickness = reproduceWeaponPart(parent1.getThickness(),parent2.getThickness());
            if(mutation>90){
                bitMutate = getRandomInt(0,7);
                newThickness = BusinessLogic.getBasicOperatorsBL().mutateBit(newThickness,bitMutate);
            }

            pointCrossing = getRandomInt(2,6);
            mutation = getRandomInt(0,100);
            var newColorWeapon = reproduceWeaponPart(parent1.getColor(),parent2.getColor());
            if(mutation>90){
                bitMutate = getRandomInt(0,7);
                newColorWeapon = BusinessLogic.getBasicOperatorsBL().mutateBit(newColorWeapon,bitMutate);
            }

            pointCrossing = getRandomInt(2,6);
            mutation = getRandomInt(0,100);
            var newLaneNumber = reproduceWeaponPart(parent1.getLaneNumber(),parent2.getLaneNumber());
            if(mutation>90){
                bitMutate = getRandomInt(0,7);
                newLaneNumber = BusinessLogic.getBasicOperatorsBL().mutateBit(newLaneNumber,bitMutate);
            }

            pointCrossing = getRandomInt(2,6);
            mutation = getRandomInt(0,100);
            var newShapeWeapon = reproduceWeaponPart(parent1.getShapeWeapon(),parent2.getShapeWeapon());
            if(mutation>90){
                bitMutate = getRandomInt(0,7);
                newShapeWeapon = BusinessLogic.getBasicOperatorsBL().mutateBit(newShapeWeapon,bitMutate);
            }

            var son = LibraryData.createChromosome(newLaneNumber,newColorWeapon,newThickness,newShapeWeapon);

            return son;
        }
        
        //Let's make it public
        return {
            selectChromosome : selectChromosome,
            geneticAlgorithm : geneticAlgorithm
        };  
    })();

}(BusinessLogic,jQuery));
