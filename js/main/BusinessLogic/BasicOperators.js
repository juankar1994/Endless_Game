/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Brandon Campos Calderón - Juan Carlos Martínez
 * Use is subject to license terms.
 * Filename: BasicOperators.js
 */

 /*
  * Author:      juancar199400@gmail.com
  * Date:        18/05/2014
  * Description: Business layer
  */


/**
 * Namespace declaration.
 */

var BusinessLogic = window.BusinessLogic || {};

/*
 * Global BusinessLogic Layer 
 * @namespace
 */
(function (pContext, $) {
    'use strict';
    /**
     * Public method to return a reference of parseBusinessLogic.
     * 
     * @return {parseBusinessLogic} Bussiness logic.
         * @public
     */
    pContext.getBasicOperatorsBL = function() {
      return basicOperatorsBL;
    };  

    /**
     * Module.
     *      Module for logic layers and sections.
     *
     * @private
     * @namespace
     **/

    //This is a logic that only connects with Parse and get the data.
    var basicOperatorsBL = (function(){
    
        function shiftRightByte(pByte,pNumPositionsMove){
            var bitMoved;
            bitMoved = ((0xff >> pNumPositionsMove) & pByte); 
            return bitMoved;
        }

        function shiftLeftByte(pByte,pNumPositionsMove){
            var bitMoved;
            bitMoved = (0xff<< pNumPositionsMove & pByte); 
            return bitMoved;
        }
        
        function reproduceChromosome(pByte1,pByte2){
            var son= (pByte1&pByte2);
            return son;
        }

        function ckeckOnBit(pByte,pNumBit){
            if((pByte & 1<<pNumBit) != 0){
                return true;
            }else{
                return false;
            }
        }
        
        function mutateBit(pByte,pNumBit){
            var bitMutate;
            if(ckeckOnBit(pByte, pNumBit)==true){
                bitMutate = (pByte & ~(1<<pNumBit));
            }
            else{
                bitMutate = (pByte | 1<<pNumBit);
            }
            return bitMutate;
        }

        //Let's make it public
        return {
            shiftLeftByte : shiftLeftByte,
            shiftRightByte : shiftRightByte,
            reproduceChromosome : reproduceChromosome,
            mutateBit : mutateBit
        };  
    })();

}(BusinessLogic, jQuery));
