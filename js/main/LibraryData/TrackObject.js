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
        },

        setPositionX: function(pPositionX){
            this.positionX = pPositionX;
        },
        
        setPositionY: function(pPositionY){
            this.positionY = pPositionY;
        },

        setNumbeOfShots: function(pNumberOfShots){
            this.numberOfShots = pNumberOfShots;
        },

        getPositionX: function(){
            return this.positionX;
        },
        
        getPositionY: function(){
            return this.positionY;
        },

        getNumberOfShots: function(){
            return this.numberOfShots;
        }
    });

}(LibraryData, jQuery));


