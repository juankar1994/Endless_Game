/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Brandon Campos Calderón - Juan Carlos Martínez
 * Use is subject to license terms.
 * Filename: Vehicle.js
 */

/*
  * Author:      brandoncc94@gmail.com
  * Date:        26/05/2014
  * Description: Vehicle
  */

(function (pContext, $) {
    'use strict';
    
    var instance;
    
    pContext.createVehicle = function(pPositionX, pPositionY, pNumberOfShots){
        // Get the Singleton instance if one exists
        // or create one if it doesn't
        if ( !instance ) {
            instance = new Vehicle(pPositionX, pPositionY, pNumberOfShots);
        }
        return instance;
    };

    var Vehicle = TrackObject.extend({
        init: function(pPositionX, pPositionY, pNumberOfShots){
            this._super(pPositionX, pPositionY, pNumberOfShots);
        }
    });

}(LibraryData, jQuery));

