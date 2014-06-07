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

    pContext.createNodo = function(pNumber,pLevel) {
        return new Nodo(pNumber,pLevel);
    };

    var Nodo = Class.extend({
        init: function(pNumber,pLevel){
            this.numInt = new BigNumber(pNumber);
            this.seedBif = BusinessLogic.getRandomSeed().getNewRandomSeed(this.numInt);
            this.level = pLevel;
            this.numBif = (this.seedBif + this.level) % 3;
            this.hashLevel = this.createHashNodo();
            this.reference  = new BigNumber("1");
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
            //console.log(matrix);
            hash.put(0,matrix[0]);
            hash.put(1,matrix[1]);
            hash.put(2,matrix[2]);
            
            return hash;
        },
        
        reHash : function(){
            this.hashLevel= this.createHashNodo();
            this.level = this.numBif % 3;
            var arrayLevel = this.hashLevel.get(this.level);
            this.setNumInt(arrayLevel[(this.numInt+1)%arrayLevel.length]);
            this.setNumBif(this.numInt);
        },        
        
        getPathReturn : function (){
            var b  = this.getNumberIntersections()+1; 
            var pathReturn = this.seedBif%b;
            return pathReturn;
        },
        
        getVisited : function() {
            //If is the beggining of the game
            //If is in the same reference row
            if(this.equalCenterVertex() || this.reference.valueOf() == 1){   
                return false;
            }
            //If the actual path is multiple of the reference. 
            //Also it could not be multiple, but could be inside the serie
            //Actual path is equal to the reference
            if((getCenterVertex(this.reference).mod(this.getNumInt()).valueOf()<=1 && this.nextSerial()) 
               || this.getNumInt() == this.reference){
                return true;
            }
            return false;
        },
        
        equalCenterVertex : function(){
            if(getCenterVertex(this.reference)==this.getNumInt() && this.reference!=this.getNumInt())
                return true;
            return false;
        },
                
        nextSerial : function(){
            for(var i = 0 ; i< this.getNumberIntersections()+1;i++){
                var nextId  = 3 * this.getNumInt() - 1 + i;
                if(nextId == this.reference)
                    return true;
                if(nextId > this.reference || (nextId+1) == getCenterVertex(this.reference))
                    continue;
                if(getCenterVertex(this.reference).mod(nextId).valueOf()<=1)
                   return true;
            }
            return false;
        },

        nextNodo : function(pNumberPath){
            if(this.level==3){ 
                var pathReturn = this.getPathReturn();
                //console.log("return: " +pathReturn);
                if(pNumberPath == pathReturn){
                    if(!this.getVisited()){
                        this.reference = this.getNumInt();
                    }
                    this.reHash();
                    return this; 
                }
                this.level= -1;
            }
            var n = 3*this.numInt  -1 + pNumberPath;
            if(n>BusinessLogic.getRandomSeed().getM()){
                this.resetNodo(1,0);
            }else{
                this.resetNodo(n, this.level + 1);
            }
            return this;
        }, 
        resetNodo: function(pNumInt, pNumLevel){
            this.setNumInt(pNumInt);
            this.setLevel(pNumLevel);
            this.setNumBif(pNumInt);
            this.hashLevel = this.createHashNodo();
        }
    });

}(LibraryData, jQuery));