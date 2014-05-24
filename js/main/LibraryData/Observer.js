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
  * Description: Observer

 */

(function (pContext, $) {
    'use strict';

    pContext.createObserver = function() {
        return new Observer();
    };

    var Observer = Class.extend({

        init: function(){
            
        },

        update: function(){
            // ...
        }

    });
}(LibraryData, jQuery));

