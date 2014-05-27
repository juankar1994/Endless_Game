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
        var m = new BigNumber("1125899906842624");      // 2 ^ 50
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
        
        function getNewRandomSeed(){
            //Lehmer's algorithm
            seed = (seed * a + c) % m.valueOf();
            return seed;
        }
        
        function getLastRandomNumbers(number){
            var lastseed = 6;
            while(true){
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
        
        //Initial seed of the graph
        //initialIntersection();
        
        //Prueba
        /*var w ;
        var z ;
        for(var i = 0 ; i < 100000 ; i++){
            if(i==65400){
                w=getNewRandomSeed();
                z=getNewRandomSeed();
            }
            
                getNewRandomSeed();
        }
        
        var s = getLastRandomNumbers(z);
        alert(w+"\n"+z+"\n"+s);
        getAncestorSeed();
        processSeed(0); //Second Intersection
        processSeed(0); //First Intersection
        processSeed(0); //First Intersection
        processSeed(0); //First Intersection*/
        //graph.print();

        var g = LibraryData.createGraph();

        g.addVertex(0,0,0);
        g.addVertex(1,1,0);
        g.addVertex(2,2,0);
        g.addVertex(3,3,0);
        g.addVertex(4,4,0);
        g.addVertex(5,5,0);
        g.addVertex(6,6,0);
        g.addVertex(7,7,0);

        g.addEdge(g.searchVertex(0), g.searchVertex(1));
        g.addEdge(g.searchVertex(1), g.searchVertex(2));
        g.addEdge(g.searchVertex(2), g.searchVertex(3));
        g.addEdge(g.searchVertex(3), g.searchVertex(6));
        g.addEdge(g.searchVertex(6), g.searchVertex(0));
        /*g.addEdge(g.buscarVertice(5), g.buscarVertice(0));
        g.addEdge(g.buscarVertice(1), g.buscarVertice(7));
        g.agregarArista(g.buscarVertice(7), g.buscarVertice(1));
        g.agregarArista(g.buscarVertice(2), g.buscarVertice(6));
        g.agregarArista(g.buscarVertice(6), g.buscarVertice(2));
        g.agregarArista(g.buscarVertice(3), g.buscarVertice(4));
        g.agregarArista(g.buscarVertice(4), g.buscarVertice(3));
        g.agregarArista(g.buscarVertice(3), g.buscarVertice(5));
        g.agregarArista(g.buscarVertice(5), g.buscarVertice(3));
        g.agregarArista(g.buscarVertice(4), g.buscarVertice(7));
        g.agregarArista(g.buscarVertice(7), g.buscarVertice(4));
        g.agregarArista(g.buscarVertice(4), g.buscarVertice(6));
        g.agregarArista(g.buscarVertice(6), g.buscarVertice(4));
        g.agregarArista(g.buscarVertice(4), g.buscarVertice(5));
        g.agregarArista(g.buscarVertice(5), g.buscarVertice(4));

*/
        var a  = g.searchVertex(0).getIntersection().getIntersectionId();
        alert(a);
        alert(g.broadness(g.searchVertex(0)));

        
        g.print();
        //g.anchura(g.vertices.get(0));

        
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