/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Brandon Campos Calderón - Juan Carlos Martínez
 * Use is subject to license terms.
 * Filename: WeaponController.js
 */

/*
  * Author:      brandoncc94@gmail.com
  * Date:        16/04/2014
  * Description: WeaponController
  */

/*
 * Global Presentation Layer to be used with MVC Pattern
 * @namespace
 */

(function (pContext, $) {
    'use strict'
    
    pContext.getWeaponHandler = function() {
        return WeaponHandler;
    };
    
    var WeaponHandler = (function(){
        
        function askForInitialWeapon(){
            BusinessLogic.getPopulationManager().generateChromosomeWeapon();
        }
        
        function sendInitialWeapon(pChromosome){
            Presentation.getTrackUI().setInitialWeapon(pChromosome);
        }
        
        function convertChromosomeToWeapon(pChromosome){
            BusinessLogic.getPopulationManager().convertChromosomeToWeapon(pChromosome);
        }
        
        function getNewWeapon(pChromosome){
            BusinessLogic.getPopulationManager().getNewWeapon(pChromosome);
        }
        
        function sendConvertedWeapon(pWeapon){
            Presentation.getTrackUI().setConvertedWeapon(pWeapon);
        }
        
        function sendToGeneticAlgorithm(pPopulation, pChromosome){
            BusinessLogic.getWeaponGeneticAlgorithm().geneticAlgorithm(pPopulation, pChromosome);            
        }
        
        function getNewEnemie(){
            BusinessLogic.getPopulationManager().getNewEnemie();   
        }
        
        function sendEnemieWeapon(pWeapon){
            Presentation.getTrackUI().setEnemieWeapon(pWeapon);
        }
        
        return {
            askForInitialWeapon : askForInitialWeapon,
            convertChromosomeToWeapon : convertChromosomeToWeapon,
            sendInitialWeapon : sendInitialWeapon,
            getNewWeapon : getNewWeapon,
            sendConvertedWeapon : sendConvertedWeapon,
            sendToGeneticAlgorithm : sendToGeneticAlgorithm,
            getNewEnemie : getNewEnemie,
            sendEnemieWeapon : sendEnemieWeapon
        }; 
    })();    

}(Presentation, jQuery));
