/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Brandon Campos Calderón - Juan Carlos Martínez
 * Use is subject to license terms.
 * Filename: chromosome.js
 */

/*
  * Author:      juancar199400@gmail.com
  * Date:        17/04/2014
  * Description: Chromosomes

/*
 * 
 * @namespace
 */
(function (pContext, $) {
    'use strict';
    
    pContext.createChromosome = function(pLaneNumber,pColor,pThickness,pShapeWeapon) {
        return new Chromosome(pLaneNumber,pColor,pThickness,pShapeWeapon);
    };
    
    var Chromosome = Class.extend({

        init: function(pLaneNumber,pColor,pThickness,pShapeWeapon){
            this.laneNumber = pLaneNumber;
            this.color = pColor;
            this.thickness = pThickness;
            this.shapeWeapon = pShapeWeapon;
        },

        setLaneNumber: function(pLaneNumber){
            this.laneNumber = pLaneNumber;
        },
        
        setColor: function(pColor){
            this.color = pColor;
        },
        
        setThickness: function(pThickness){
            this.thickness = pThickness;
        },
        
        setShapeWeapon: function(pShapeWeapon){
            this.shapeWeapon = pShapeWeapon;
        },
        
        getLaneNumber : function(){
            return this.laneNumber;
        },

        getColor : function(){
            return this.color;
        },

        getThickness : function(){
            return this.thickness;
        },
        
        getShapeWeapon : function(){
            return this.shapeWeapon;
        },

    });

}(LibraryData, jQuery));


