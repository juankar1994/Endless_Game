/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Brandon Campos Calderón - Juan Carlos Martínez
 * Use is subject to license terms.
 * Filename: Intersection.js
 */

/*
  * Author:      juancar199400@gmail.com
  * Date:        26/04/2014
  * Description: Intersections

 */

(function (pContext, $) {
    'use strict';

    pContext.createNodo = function(pSeed, pMask, pLevel) {
        return new Nodo(pSeed, pMask,pLevel);
    };

    var Nodo = Class.extend({
        init: function(pSeed, pMask ,pLevel){
            this.seed = pSeed;
            this.mask = pMask;
            this.level = pLevel;
            this.hashLevel = null;
        },

        setSeed: function(pSeed){
            this.seed = pSeed;
        },

        setMask: function(pMask){
            this.mask = pMask;
        },
        
        setLevel : function(pLevel){
            this.level = pLevel;
        },
        
        getSeed : function(){
            return this.seed;
        },

        getMask : function(){
            return this.mask;
        },
        
        getLevel : function(){
            return this.level; 
        },
        
        getNumberIntersections : function(){
            if((this.seed+this.mask)%3 == 0 &&  this.getLevel() == 4){
                return 1;
            }
            return (this.seed+this.mask)%3;
        },
        
        createHashNodo : function(){
            var hash = new Hashtable();
            var matrix = new Array();
            for(var i = 0 ; i < 4 ; i++){
                matrix[i] = new Array();
            }
            var i = 12;
            var l = this.level;
            var seed = this.seed;
            while( i > 0 && BusinessLogic.getRandomSeed().getLastRandomNumbers(seed)>0){
                seed=BusinessLogic.getRandomSeed().getLastRandomNumbers(seed);
                l--;
                if(l<0)l=3;
                matrix[l].push(seed);
                i--;
                
            }
            console.log(matrix);
            hash.put(0,matrix[0]);
            hash.put(1,matrix[1]);
            hash.put(2,matrix[2]);
            
            return hash;
        },
        
        reHash : function(){
            this.hashLevel= this.createHashNodo();
            this.level = this.seed % 3;
            var arrayLevel = this.hashLevel.get(this.level);
            console.log(arrayLevel);
            console.log("anasfnl : "+arrayLevel[(this.seed+1)%arrayLevel.length]);
            console.log("l "+arrayLevel.length);
            console.log("w"+(this.seed+1)%arrayLevel.length);
            this.seed = arrayLevel[(this.seed+1)%arrayLevel.length];
            BusinessLogic.getRandomSeed().reset(this.seed);
        },                  
        
        nextNodo : function(pNumberPath){
            console.log(this.level);
            console.log("i: "+this.getNumberIntersections());
            if(this.level==3){
                var pathReturn = this.getNumberIntersections();
                if(pNumberPath == pathReturn && pathReturn != 0){
                    this.reHash();
                    return;
                }
                this.level= -1;
            }
            this.seed = Presentation.getControllerSeed().getNewRandomSeed();
            this.level++;
            this.mask = 101 + pNumberPath;

        }
        
            
        
    });

}(LibraryData, jQuery));