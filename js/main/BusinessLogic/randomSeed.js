/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Brandon Campos Calderón - Juan Carlos Martínez
 * Use is subject to license terms.
 * Filename: BasicOperators.js
 */

/*
  * Author:      brandoncc94@gmail.com
  * Date:        23/05/2014
  * Description: Random Seed Generation
  */

(function (pContext, $) {
    'use strict';
    
    pContext.getRandomSeed = function() {
        return RandomSeed;
    };  
    
    var RandomSeed = (function(){
        // the initial variables
        var m = new BigNumber("1152921504606846976");
        var a = 9301;
        var c = 49297;
        var seed = 6;
        var cont = 0;
        var graph = LibraryData.createGraph();
        
        function getNewRandomSeed(){
            //Lehmer's algorithm
            seed = (seed * a + c) % m.valueOf();
            return seed;
        }     
        
        function initialIntersection(){
            seed = getNewRandomSeed();
            graph.addVertex(cont, seed, seed % 3);
        }
        
        function processSeed(pSeed){
            graph.addVertex(cont, pSeed, pSeed % 3);
            cont++;
            if(cont > 2)
                cont = 0;
        }
        
        initialIntersection();
        graph.print();
        
        //Let's make it public
        return {
            getNewRandomSeed : getNewRandomSeed
        };  
    })();

}(BusinessLogic, jQuery));

/*
var graph = LibraryData.createGraph();

for(var i = 0; i < 20; i++){
    var seed = Math.seededRandom();
    console.log(seed);
    graph.addVertex(seed);
}
    graph.print();*/