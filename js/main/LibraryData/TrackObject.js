/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Brandon Campos Calderón - Juan Carlos Martínez
 * Use is subject to license terms.
 * Filename: TrackObject.js
 */

/*
  * Author:      brandoncc94@gmail.com
  * Date:        26/05/2014
  * Description: TrackObject

/*
 * 
 * @namespace
 */

var TrackObject;

(function (pContext, $) {
    'use strict';

    TrackObject = Class.extend({

        init: function(pPositionX, pPositionY, pNumberOfShots){
            this.positionX = pPositionX;
            this.positionY = pPositionY;
            this.numberOfShots = pNumberOfShots;
            this.weapon = undefined;
        },

        setPositionX: function(pPositionX){
            this.positionX = pPositionX;
        },
        
        setPositionY: function(pPositionY){
            this.positionY = pPositionY;
        },

        setNumberOfShots: function(pNumberOfShots){
            this.numberOfShots = pNumberOfShots;
        },
        
        setWeapon: function(pWeapon){
            this.weapon = pWeapon;
        },

        getPositionX: function(){
            return this.positionX;
        },
        
        getPositionY: function(){
            return this.positionY;
        },

        getNumberOfShots: function(){
            return this.numberOfShots;
        },
        
        getWeapon: function(){
            return this.weapon;
        }
    });

}(LibraryData, jQuery));


