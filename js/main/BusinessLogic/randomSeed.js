/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Brandon Campos Calderón - Juan Carlos Martínez
 * Use is subject to license terms.
 * Filename: kibraryDataNamespace.js
 */

 /*
  * Author:      brandoncc94@gmail.com
  * Date:        19/05/2014
  * Description: Library of Data
  */


/**
 * Namespace declaration.
 */ 

var LibraryData = window.LibraryData || {};

/*
 * 
 * @namespace
 */
(function (pContext, $) {
    'use strict';

    pContext.createPoint = function(pPosX, pPosY) {
        return new Point(pPosX, pPosY);
    };

    var Point = Class.extend({         
        init: function(pPositionX, pPositionY){
            this.positionY = pPositionY;
            this.positionX = pPositionX;     
        },

        setPositionY: function(pPositionY){
            this.positionY = pPositionY; 
        },

        setPositionX: function(pPositionX){
            this.positionX = pPositionX; 
        },

        getPositionY: function(){
            return this.positionY;
        },

        getPositionX: function(){
            return this.positionX;
        },

        convertToArray: function(){
            var pointArray = new Array();
            pointArray.push(this.positionX);
            pointArray.push(this.positionY);
            return pointArray;
        }

    });
    
}(LibraryData, jQuery));


// A simple Linear Congruential Generator
 
// Establish the parameters of the generator
var maxValue = new BigNumber("1152921504606846976"),
    // a - 1 should be divisible by maxValue's prime factors
    a = 11,
    // c and maxValue should be co-prime
    c = 17;

// Setting the seed of the first Node
var seed = new BigNumber("3");

var rand = function() {
  // define the recurrence relationship
  var multiply = new BigNumber(seed.multiply(a));
  seed = new BigNumber(multiply.add(c));
  seed = seed.mod(maxValue);
    
  return seed;
};

for(i = 0; i < seed; i++) {
  console.log(rand().valueOf());
}