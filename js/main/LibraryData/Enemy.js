/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Brandon Campos Calderón - Juan Carlos Martínez
 * Use is subject to license terms.
 * Filename: Enemy.js
 */

/*
  * Author:      brandoncc94@gmail.com
  * Date:        26/05/2014
  * Description: Enemy
  */

(function (pContext, $) {
    'use strict';

    pContext.createEnemy = function(pPositionX, pPositionY, pNumberOfShots){
        return new Enemy(pPositionX, pPositionY, pNumberOfShots);
    };

    var Enemy = TrackObject.extend({
        init: function(pPositionX, pPositionY, pNumberOfShots){
            this._super(pPositionX, pPositionY, pNumberOfShots);
        }
    });

}(LibraryData, jQuery));

