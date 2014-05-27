/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Brandon Campos Calderón - Juan Carlos Martínez
 * Use is subject to license terms.
 * Filename: Player.js
 */

/*
  * Author:      brandoncc94@gmail.com
  * Date:        26/05/2014
  * Description: Player
  */

(function (pContext, $) {
    'use strict';

    var instance;

    pContext.createPlayer = function(){
        // Get the Singleton instance if one exists
        // or create one if it doesn't
        if ( !instance ) {
            instance = new Player();
        }
        return instance;
    };

    var Player = Class.extend({
        init: function(){
            this.lifes = 2;
        },

        setLifes: function(pLifes){
            this.lifes = pLifes;
        },

        getLifes: function(){
            return this.lifes;
        }
    });

}(LibraryData, jQuery));
