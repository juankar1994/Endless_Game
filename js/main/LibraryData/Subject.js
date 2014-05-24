/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Brandon Campos Calderón - Juan Carlos Martínez
 * Use is subject to license terms.
 * Filename: Observer.js
 */

/*
  * Author:      juancar199400@gmail.com
  * Date:        23/05/2014
  * Description: Intersections

 */

(function (pContext, $) {
    'use strict';

    pContext.createSubject = function() {
        return new Subject();
    };

    var Subject = Class.extend({

        init: function(){
            this.observers = LibraryData.createObserverList();
        },

        addObserver: function(observer){
            this.observers.add(observer);
        },

        removeObserver: function(observer){
            this.observers.removeObservable(this.observers.indexOfObservable(observer,0));
        },

        notify : function(){
            var observerCount = this.observers.count();
            for(var i = 0 ; i < observerCount ; i++){
                this.observers.get(i).update(context);
            }
        }
        
    });
    
}(LibraryData, jQuery));



