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
        var m = new BigNumber("1152921504606846976");   // 2 ^ 60
        //"Magic numbers"
        var a = 9301;
        var c = 49297;
        var seed = 6;
        var cont = 0;
        var actualSeed = 0;
        var graph = LibraryData.createGraph();
        
        //Singleton Pattern Applied
        //var graph2 = LibraryData.createGraph();
        //alert(graph === graph2);  //Returns True
        
        
        function resetSeed(pSeed){
            seed=pSeed;
        }
        
        function getM(){
            return m;
        }
        
        function getNewRandomSeed(pSeed){
            //Lehmer's algorithm
            pSeed = (pSeed * a + c) % m.valueOf();
            return pSeed;
        }
        
        function getLastRandomNumbers(number){
            var lastseed = 6;
            if(number == (lastseed * a + c) % m.valueOf()){
                return -1;
            }
            var bool =true;
            while(bool){
                var last = (lastseed * a + c) % m.valueOf();
                if(last == number)return lastseed;
                lastseed = last;
            }
        }
        
            
        
        function getAncestorSeed(){
            //Inverse Euclides' algorithm
            var inverse = new BigNumber(xgcd(a, m.valueOf())[0]);
            var previousCalculation  = new BigNumber("129379838756192");
            var previousSeed = new BigNumber(inverse.multiply((previousCalculation.subtract(c))).mod(m));    
            alert(previousSeed.valueOf());
            
            //var previousSeed = new BigNumber(m.add(tmpSeed));
            //we want seed = 105103
            //alert("INVERSE SEED: " + previousSeed.valueOf());
        }
        
        //Extended Euclid's Algorithm
        function xgcd(a, b){ 
            a = new BigNumber(a);
            b = new BigNumber(b);
            if (b.valueOf() == 0)
                return [1, 0, a.valueOf()];
            else{
                var temp = xgcd(b.valueOf(), a.mod(b));
                var x = temp[0];
                var y = temp[1];
                var d = temp[2];
                return [y, x-y*Math.floor(a.divide(b)), d];
            }
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
        
        
        //Let's make it public
        return {
            getNewRandomSeed : getNewRandomSeed,
            getLastRandomNumbers : getLastRandomNumbers,
            resetSeed : resetSeed,
            getM : getM
        };  
    })();

}(BusinessLogic, jQuery));
