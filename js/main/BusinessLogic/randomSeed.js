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

/*
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

for(i = 0; i < 100; i++) {
  console.log(rand().valueOf());
}*/

    var graph = LibraryData.createGraph();
    graph.addVertex(0);
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);
    graph.addVertex(5);
    graph.addVertex(6);
    graph.addVertex(7);

    graph.addEdge(graph.searchVertex(0), graph.searchVertex(2));
    graph.addEdge(graph.searchVertex(2), graph.searchVertex(0));
    graph.addEdge(graph.searchVertex(0), graph.searchVertex(7));
    graph.addEdge(graph.searchVertex(7), graph.searchVertex(0));
    graph.addEdge(graph.searchVertex(0), graph.searchVertex(5));
    graph.addEdge(graph.searchVertex(5), graph.searchVertex(0));
    graph.addEdge(graph.searchVertex(1), graph.searchVertex(7));
    graph.addEdge(graph.searchVertex(7), graph.searchVertex(1));
    graph.addEdge(graph.searchVertex(2), graph.searchVertex(6));
    graph.addEdge(graph.searchVertex(6), graph.searchVertex(2));
    graph.addEdge(graph.searchVertex(3), graph.searchVertex(4));
    graph.addEdge(graph.searchVertex(4), graph.searchVertex(3));
    graph.addEdge(graph.searchVertex(3), graph.searchVertex(5));
    graph.addEdge(graph.searchVertex(5), graph.searchVertex(3));
    graph.addEdge(graph.searchVertex(4), graph.searchVertex(7));
    graph.addEdge(graph.searchVertex(7), graph.searchVertex(4));
    graph.addEdge(graph.searchVertex(4), graph.searchVertex(6));
    graph.addEdge(graph.searchVertex(6), graph.searchVertex(4));
    graph.addEdge(graph.searchVertex(4), graph.searchVertex(5));
    graph.addEdge(graph.searchVertex(5), graph.searchVertex(4));

    graph.print();