/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Brandon Campos Calderón - Juan Carlos Martínez
 * Use is subject to license terms.
 * Filename: WeaponController.js
 */

/*
  * Author:      brandoncc94@gmail.com
  * Date:        16/04/2014
  * Description: WeaponController
  */

/*
 * Global Presentation Layer to be used with MVC Pattern
 * @namespace
 */

(function (pContext, $) {
    'use strict'

    pContext.getControllerSeed = function() {
        return controllerSeed;
    };

    var controllerSeed = (function(){

        function getNewRandomSeed(){
            return BusinessLogic.getRandomSeed().getNewRandomSeed();
        }

        
        return {
            
            getNewRandomSeed : getNewRandomSeed
        }; 
    })();    

}(Presentation, jQuery));
