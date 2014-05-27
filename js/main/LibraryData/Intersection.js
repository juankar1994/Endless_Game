/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Brandon Campos Calderón - Juan Carlos Martínez
 * Use is subject to license terms.
 * Filename: Intersection.js
 */

/*
  * Author:      brandoncc94@gmail.com
  * Date:        17/04/2014
  * Description: Intersections

 */

(function (pContext, $) {
    'use strict';
    
    pContext.createIntersection = function(pIntersectionId, pBifurcation) {
        return new Intersection(pIntersectionId, pBifurcation);
    };
    
    var Intersection = Class.extend({

        init: function(pIntersectionId, pBifurcation){
            this.id = pIntersectionId;
            this.bifurcation = pBifurcation;
        },

        setIntersectionId: function(pId){
            this.id = pId;
        },
        
        setBifurcation: function(pBifurcation){
            this.bifurcation = pBifurcation;
        },
        
        getIntersectionId : function(){
            return this.id;
        },

        getBifurcation : function(){
            return this.bifurcation;
        }
    });

}(LibraryData, jQuery));