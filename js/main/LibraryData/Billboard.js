/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Brandon Campos Calderón - Juan Carlos Martínez
 * Use is subject to license terms.
 * Filename: BillBoard.js
 */

/*
  * Author:      brandoncc94@gmail.com
  * Date:        26/05/2014
  * Description: Billboard
  */

(function (pContext, $) {
    'use strict';

    var instance;

    pContext.createBillboard = function(){
        // Get the Singleton instance if one exists
        // or create one if it doesn't
        if ( !instance ) {
            instance = new Billboard();
        }
        return instance;
    };

    var Billboard = Class.extend({
        init: function(){
            this.points = 0;
        },
        
        setPoints: function(pPoints){
            this.points = pPoints;
        },
        
        getPoints: function(){
            return this.points;
        }
    });

}(LibraryData, jQuery));
