/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Brandon Campos Calderón - Juan Carlos Martínez
 * Use is subject to license terms.
 * Filename: Vertex.js
 */

/*
  * Author:      brandonc94@gmail.com
  * Date:        19/05/2014
  * Description: Vertex structure
  */

/*
 * Global Library Data Layer
 * @namespace
 */

(function (pContext, $) {

    pContext.createVertex = function(pId){
        return new Vertex(pId);
    };

    var Vertex = Class.extend({
        init: function(pId){
            this.id = pId;
            this.visited = false;
            this.edges = new Array();
        },
        
        //Set's 
        setId: function(pId){
            this.id = pId;
        },

        setVisited: function(pVisited){
            this.visited = pVisited;
        },

        setEdges: function(pEdges){
            this.edges = pEdges;
        },
        
        //Get's
        getId: function(){
            return this.id;
        },

        getVisited: function(){
            return this.visited;
        },

        getEdges: function(){
            return this.edges;
        },
        
        searchEdge: function(pVertex){
            for(var i = 0; i < this.edges.length; i++){
                if(pVertex.getId() === this.edges[i].getId())
                    return i;
            }
            return -1;  //There is no edge
        },
        
        addEdge: function(pVertex){
            if(this.searchEdge(pVertex) === -1)
                this.edges.push(LibraryData.createVertex(pVertex.getId()));
        }
        
    });

}(LibraryData, jQuery));
