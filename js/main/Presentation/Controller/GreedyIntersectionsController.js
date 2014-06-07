/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Brandon Campos Calderón - Juan Carlos Martínez
 * Use is subject to license terms.
 * Filename: GreedyIntersectionController.js
 */

/*
  * Author:      brandoncc94@gmail.com
  * Date:        06/04/2014
  * Description: GreedyIntersectionController
  */

/*
 * Global Presentation Layer to be used with MVC Pattern
 * @namespace
 */

(function (pContext, $) {
    'use strict'

    pContext.getGreedyIntersectionController = function() {
        return GreedyIntersectionController;
    };

    var GreedyIntersectionController = (function(){

        function setSuggestion(pIntersection){
            Presentation.getTrackUI().createSuggestion(pIntersection);
        }

        return {
            setSuggestion : setSuggestion
        }; 
    })();    

}(Presentation, jQuery));
