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

    pContext.createNodo = function() {
        return new Nodo();
    };

    var Nodo = Class.extend({
        init: function(){
            this.numInt = 1;
            this.seedBif = BusinessLogic.getRandomSeed().getNewRandomSeed(this.numInt);
            this.level = 0;
            this.numBif = (this.seedBif + this.level) % 3;
            this.hashLevel = this.createHashNodo();
            console.log(this);
        },

        setNumInt: function(pNumInt){
            this.numInt = pNumInt;
        },

        setLevel : function(pLevel){
            this.level = pLevel;
        },
        
        setNumBif : function(pNumInt){
            this.seedBif = BusinessLogic.getRandomSeed().getNewRandomSeed(pNumInt);
            this.numBif = (this.seedBif + this.level) % 3;
        },
        
        getNumInt : function(){
            return this.numInt;
        },

        getLevel : function(){
            return this.level; 
        },
        
        getSeedBif : function(){
            return this.seedBif;
        },

        getNumBif : function(){
            return this.numBif;
        },
        
        getNumberIntersections : function(){
            if(this.numBif == 0 &&  this.getLevel() == 3){
                return 1;
            }
            return this.numBif;
        },
        
        createHashNodo : function(){
            var hash = new Hashtable();
            var matrix = new Array();
            for(var i = 0 ; i < 4 ; i++){
                matrix[i] = new Array();
            }
            var i = 12;
            var l = this.level;
            var numInt = this.numInt;
            //console.log(this.numInt);
            while( i > 0 && Math.round(numInt/3)!=0){
                l--;
                if(l<0)l=3;
                matrix[l].push(Math.round(numInt/3));
                i--;
                numInt = Math.round(numInt/3);
                
            }
            //console.log(this.numInt);
            console.log(matrix);
            hash.put(0,matrix[0]);
            hash.put(1,matrix[1]);
            hash.put(2,matrix[2]);
            
            return hash;
        },
        
        reHash : function(){
            this.hashLevel= this.createHashNodo();
            this.level = this.numBif % 3;
            var arrayLevel = this.hashLevel.get(this.level);
            //console.log(arrayLevel);
            //console.log("anasfnl : "+arrayLevel[(this.numInt+1)%arrayLevel.length]);
            //console.log("l "+arrayLevel.length);
            //console.log("w"+(this.numInt+1)%arrayLevel.length);
            this.setNumInt(arrayLevel[(this.numInt+1)%arrayLevel.length]);
            this.setNumBif(this.numInt);
        },                  
        

        nextNodo : function(pNumberPath){
            if(this.level==3){
                var b  = this.getNumberIntersections()+1; 
                var pathReturn = this.seedBif%b;
                console.log("return: " +pathReturn);
                if(pNumberPath == pathReturn){
                    this.reHash();
                    return; 
                }
                this.level= -1;
            }
            var n = 3*this.numInt  -1 + pNumberPath
            this.setNumInt(n);
            this.level++;
            this.setNumBif(this.numInt);
            this.hashLevel = this.createHashNodo();

        }/*
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

        }*/      
            
        
    });

}(LibraryData, jQuery));