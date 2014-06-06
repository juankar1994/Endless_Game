/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Brandon Campos Calderón - Juan Carlos Martínez
 * Use is subject to license terms.
 * Filename: GreedyAlgorithm.js
 */

/*
  * Author:      juancar199400@gmail.com
  * Date:        25/05/2014
  * Description: Business layer
  */

(function (pContext, $) {
    'use strict';

    pContext.getGreedyAlgorithm = function(){
        return greedyAlgorithm;
    };

    var greedyAlgorithm = (function(){
        
        function greedy(pNodo){
            //saving data pNodo
            var saveNodo = LibraryData.createNodo(pNodo.getNumInt(),pNodo.getLevel());
            //array for visited nodes
            var backUp= new Array();
            //The first node is already visited
            visitedNodo.push(saveNodo);
            //array for adjacent nodes
            var adjacent = new Array();
            //for que guarda en la lista de adyacentes los adyaccentes del nodo actual
            for(var i = 0 ; i < (saveNodo.getNumberIntersections()+1) ; i ++ ){
                var nodoTemp = LibraryData.createNodo(saveNodo.getNumInt(),saveNodo.getLevel());
                nodoTemp.nextNodo(i);
                adjacent.push(nodoTemp);
            }
            console.log("a"+adjacent);
            for(var l = 0;l < adjacent.length;l++){
                console.log(l+ "  "+adjacent[l].getNumInt());
            }

            //variable que determina la profundidad de la busqueda
            var deep = 12; 
            var visitedNodo = new Array();
            //while para recorrer los adyacentes y seguir sus caminos para encontrar cerradura transitiva
            while(adjacent.length > 0 && deep>0){
                visitedNodo = backUp;
                // toma nodo de la lista de adyacentes
                var actualNodo  = adjacent[0];
                visitedNodo.push(actualNodo);
                // se remueve de la lista de adyacentes el actualNodo
                adjacent = remove(adjacent,0);
                //for para guardar los adyacentes de los nodos adyacentes
                for(var i = 0 ; i < (actualNodo.getNumberIntersections()+1) ; i++){
                    var nodoTemp = LibraryData.createNodo(actualNodo.getNumInt(),actualNodo.getLevel());
                    //console.log(nodoTemp);
                    nodoTemp.nextNodo(i);
                    //console.log(nodoTemp);
                    if(!(checkVisited(visitedNodo,nodoTemp))){
                        visitedNodo.push(nodoTemp);
                        adjacent.push(nodoTemp);
                    }else{
                        console.log("cerradura");
                        break;
                    }
                    
                }
                deep--;
            }
        }
        
        
        
        function greddyAux(pNodo,contador,deep,nodoCerradura){
            console.log("INTERSECTION: " + pNodo.getNumInt());
            deep--;
            if( pNodo.getNumInt() == nodoCerradura)
            {
                return contador;
            }
            
            if(pNodo.getLevel() == 3){
                var nodoBif = pNodo.nextNodo(pNodo.retorno());
                contador++; 
                return greddyAux(nodoBif,contador,deep,nodoCerradura);
            }    
            var bestNodo = new Array();
            for(var numBif = 0; numBif < pNodo.getNumberIntersections()+1; numBif ++ ){
                var nodoTemp = LibraryData.createNodo(pNodo.getNumInt(),pNodo.getLevel());
                var nodoBif = nodoTemp.nextNodo(numBif);
                var cont1 = contador + 1;
                bestNodo[numBif]=greddyAux(nodoBif,cont1,deep,nodoCerradura);
            }
            var best = 0;
            for(var i = 0 ;i < bestNodo.length -1; i++){
                if(bestNodo[i] <bestNodo[i+1]){
                    best=i+1;
                }
            }
            var cont1 = contador + 1;
            var nodoBif = pNodo.nextNodo(best);
            return greddyAux(nodoBif,cont1,deep,nodoCerradura);
        }
        
        function greedyA(pNodo){
            var nodoTemp = LibraryData.createNodo(pNodo.getNumInt(),pNodo.getLevel());
            var bestNodo = new Array();
            console.log(nodoTemp.getNumberIntersections()+1);
            for(var numBif = 0 ; numBif < nodoTemp.getNumberIntersections()+1 ; numBif ++){
                console.log("numBif: "+ numBif);
                var nodoTempA = LibraryData.createNodo(nodoTemp.getNumInt(),nodoTemp.getLevel());
                var nodoBif = nodoTempA.nextNodo(numBif);
                var num = 1;
                bestNodo[numBif] = greddyAux(nodoBif,num,6,pNodo.getNumInt());
            }
            console.log("-----------------------------------------------------------------------");
            var best = 0;
            for(var i = 0 ;i < bestNodo.length -1; i++){
                console.log("Cantidad de Path: " + bestNodo[i]);
                if(bestNodo[i] <bestNodo[i+1]){
                    best=i+1;
                }
            }
            console.log("Mejor camino: "+best);

            console.log("-----------------------------------------------------------------------");
        }
        
        function remove(arr, item) {
            var i;
            var array = new Array();
            for(var i = 0 ; i < arr.length; i++){
                if(i!=item)array.push(arr[i]);
            }
            return array;
        }
                
        function checkVisited(pVisitedNodo,pNodo){
            for(var i = 0 ; i < pVisitedNodo.length ; i++){
                if(pVisitedNodo[i].getSeed() == pNodo.getSeed()){
                    return true;
                }
            }
            return false;
        }
        
        


        //Let's make it public
        return {
            greedyA : greedyA,
            greddyAux : greddyAux
        };  
    })();

}(BusinessLogic,jQuery));
