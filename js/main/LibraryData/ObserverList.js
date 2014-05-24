/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Brandon Campos Calderón - Juan Carlos Martínez
 * Use is subject to license terms.
 * Filename: ObserverList.js
 */

/*
  * Author:      juancar199400@gmail.com
  * Date:        23/05/2014
  * Description: List of observer

 */

(function (pContext, $) {
    'use strict';

    pContext.createObserverList = function() {
        return new ObserverList();
    };

    var ObserverList = Class.extend({

        init: function(){                                                                 
            this.observerList = new Array();
        },

        add: function(observable){
            this.observerList.push(observable);
        },

        count: function(){
            return this.observerList.length;
        },

        getObservable : function(index){
            if( index > -1 && index < this.count());
        },

        indexOfObservable : function(observable, startIndex){
            while( startIndex < this.count() ){
                if(this.observerList[startIndex] === observable){
                    return startIndex;
                }
                startIndex++;
            }
            
        
            return -1;
        },
        
        removeObservable : function(index){
            this.observerList.splice(index , 1);
        }
        
    });
}(LibraryData, jQuery));