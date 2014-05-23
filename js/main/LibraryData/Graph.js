/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Brandon Campos Calderón - Juan Carlos Martínez
 * Use is subject to license terms.
 * Filename: Graph.js
 */

/*
  * Author:      brandonc94@gmail.com
  * Date:        19/05/2014
  * Description: Graph structure
  */

/*
 * Global Library Data Layer
 * @namespace
 */
var LibraryData = window.LibraryData || {};

(function (pContext, $) {

    pContext.createGraph = function(){
        return new Graph();
    };

    var Graph = Class.extend({
        init: function(){
            this.vertices = new Array();
        },
        
        addVertex: function(pId, pIntersectionId, pBifurcation){
            this.vertices.push(LibraryData.createVertex(pId, pIntersectionId, pBifurcation));
        },
        
        addEdge: function(pSource, pDestiny){
            if(pSource != null && pDestiny != null)
                pSource.addEdge(pDestiny);
        },
        
        searchVertex: function(pValue){
            for (var i = 0; i < this.vertices.length; i++){
                if(this.vertices[i].getId() == pValue)
                    return this.vertices[i];
            }
            return null;
        },   

        visitVertex: function(pVertex){
            for (var i = 0; i < this.vertices.length; i++){
                if(this.vertices[i].getId() == pVertex.getId())
                    vertices[i].setVisited(true);
            }
        },
        
        isVertexVisisted: function(pVertex){
            for (var i = 0; i < this.vertices.length; i++){
                if(this.vertices[i].getId() == pVertex.getId())
                    return vertices[i].getVisited();
            }
        },
        
        print: function(){
            for (var i = 0; i < this.vertices.length; i++){
                console.log("Vertice "+ this.vertices[i].getId() + ":  ");
                for (var j = 0; j < this.vertices[i].getEdges().length; j++) {
                    console.log(this.vertices[i].getEdges()[j].getId() +"  ");
                }
                console.log("\n");
            }
        }
    });

}(LibraryData, jQuery));