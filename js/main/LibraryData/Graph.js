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
    // Instance stores a reference to the Singleton
    var instance;

    pContext.createGraph = function(){
        // Get the Singleton instance if one exists
        // or create one if it doesn't
        if ( !instance ) {
            instance = new Graph();
        }
        return instance;
    };

    var Graph = Class.extend({
        init: function(){
            this.vertices = new Array();
        },
        
        addVertex: function(pId, pIntersectionId, pBifurcation){
            this.vertices.push(LibraryData.createVertex(pId, pIntersectionId, pBifurcation));
        },
        
        addVertexAccordingToPath: function(pValue, pBifurcation){
            for (var i = 0; i < this.vertices.length; i++){
                if(this.vertices[i].getIntersection().getIntersectionId() == pValue)
                    return {idIntersection: this.vertices[i].getEdges()[pBifurcation].getIntersection().getIntersectionId(), 
                            bifurcation: this.vertices[i].getEdges()[pBifurcation].getIntersection().getBifurcation()};
            }
            return null;
        },
        
        addEdge: function(pSource, pDestiny){
            if(pSource != null && pDestiny != null)
                pSource.addEdge(pDestiny);
        },
        
        searchVertex: function(pValue){
            for (var i = 0; i < this.vertices.length; i++){
                if(this.vertices[i].getIntersection().getIntersectionId() == pValue)
                    return this.vertices[i];
            }
            return null;
        },   

        visitVertex: function(pVertex){
            for (var i = 0; i < this.vertices.length; i++){
                if(this.vertices[i].getIntersection().getIntersectionId() == pVertex.getIntersection().getIntersectionId())
                    vertices[i].setVisited(true);
            }
        },
        
        isVertexVisisted: function(pVertex){
            for (var i = 0; i < this.vertices.length; i++){
                if(this.vertices[i].getIntersection().getIntersectionId() == pVertex.getIntersection().getIntersectionId())
                    return vertices[i].getVisited();
            }
        },
        
        print: function(){
            for (var i = 0; i < this.vertices.length; i++){
                console.log("Vertice "+ this.vertices[i].getIntersection().getIntersectionId() + ":  ");
                console.log("   Cont: " + this.vertices[i].getId());
                console.log("   Bifurcacion(s): " + this.vertices[i].getIntersection().getBifurcation());
                console.log("   Connection(s): ");
                for (var j = 0; j < this.vertices[i].getEdges().length; j++) {
                    console.log("         " + this.vertices[i].getEdges()[j].getIntersection().getIntersectionId() +"  ");
                }
                console.log("\n");
            }
        }
    });

}(LibraryData, jQuery));