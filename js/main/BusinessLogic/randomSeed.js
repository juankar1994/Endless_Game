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
        //"Magic numbers"
        var a = 9301;
        var c = 49297;
        var seed = 6;
        var cont = 0;
        var actualSeed = 0;
        var graph = LibraryData.createGraph();
        
        function getNewRandomSeed(){
            //Lehmer's algorithm
            seed = (seed * a + c) % m.valueOf();
            return seed;
        }     
        getAncestorSeed();
        function getAncestorSeed(){
            //Inverse Lehmer's algorithm
            seed = (977612300 - c)  * a;
            //we want seed = 105103
            alert("INVERSE SEED: " + seed);
        }
        
        function initialIntersection(){
            var initialSeed = actualSeed = seed = getNewRandomSeed();
            var bifurcation  = seed % 3 + 1;
            graph.addVertex(cont, seed, bifurcation);

            cont++;
            for(var i = 0; i < bifurcation; i++){
                seed =  getNewRandomSeed();
                //Create the Vertex
                graph.addVertex(cont, seed, seed % 3 + 1);
                //Now make the connection with the edges ( arcs )
                graph.addEdge(graph.searchVertex(initialSeed), graph.searchVertex(seed));
            }
        }
        
        function processSeed(pBifurcation){
            var propertiesSeed = graph.addVertexAccordingToPath(actualSeed, pBifurcation);
            actualSeed = propertiesSeed.idIntersection;
            //Let's create the new vertex of the path I chose.
            if(actualSeed !== null){
                var bifurcation  = propertiesSeed.bifurcation;
                cont++;
                if(cont > 3)
                    cont = 0;
                for(var i = 0; i < bifurcation; i++){
                    seed =  getNewRandomSeed();
                    //Create the Vertex
                    graph.addVertex(cont, seed, seed % 3 + 1);
                    //Now make the connection with the edges ( arcs )
                    graph.addEdge(graph.searchVertex(propertiesSeed.idIntersection), graph.searchVertex(seed));
                }
            }                
        }
        
        //Initial seed of the graph
        initialIntersection();
        processSeed(1); //Second Intersection
        processSeed(0); //First Intersection
        processSeed(2); //First Intersection
        /*processSeed(0); //First Intersection*/
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