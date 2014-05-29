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
            var saveNodo = LibraryData.createNodo(pNodo.getSeed(),pNodo.getMask(),pNodo.getLevel());
            //array for visited nodes
            var visitedNodo = new Array();
            //The first node is already visited
            visitedNodo.push(saveNodo);
            //array for adjacent nodes
            var adjacent = new Array();
            //for que guarda en la lista de adyacentes los adyaccentes del nodo actual
            for(var i = 0 ; i < (saveNodo.getNumberIntersections()+1) ; i ++ ){
                BusinessLogic.getRandomSeed().resetSeed(saveNodo.getSeed());
                var nodoTemp = saveNodo;
                nodoTemp.nextNodo(i);
                adjacent.push(nodoTemp);
                visitedNodo.push(nodoTemp);
            }
            
            console.log("a"+adjacent);
            console.log("v"+visitedNodo);
            //variable que determina la profundidad de la busqueda
            var deep = 100; 
            //while para recorrer los adyacentes y seguir sus caminos para encontrar cerradura transitiva
            while(adjacent.length > 0 && deep>0){
                // toma nodo de la lista de adyacentes
                var actualNodo  = adjacent[0];
                visitedNodo.push(actualNodo);
                // se remueve de la lista de adyacentes el actualNodo
                adjacent = remove(adjacent,0);
                //for para guardar los adyacentes de los nodos adyacentes
                for(var i = 0 ; i < (actualNodo.getNumberIntersections()+1) ; i++){
                    BusinessLogic.getRandomSeed().resetSeed(actualNodo.getSeed());
                    var nodoTemp = LibraryData.createNodo(actualNodo.getSeed(),actualNodo.getMask(),actualNodo.getLevel());
                    console.log(nodoTemp);
                    nodoTemp.nextNodo(i);
                    console.log(nodoTemp);
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
            greedy : greedy
        };  
    })();

}(BusinessLogic,jQuery));
