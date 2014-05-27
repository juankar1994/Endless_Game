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
                console.log("a"+this.vertices[i].getIntersection().getIntersectionId());
                console.log("b"+pVertex.getIntersection().getIntersectionId());
                if((this.vertices[i].getIntersection().getIntersectionId() == pVertex.getIntersection().getIntersectionId()))
                    this.vertices[i].setVisited(true);
            }
        },
        
        isVertexVisisted: function(pVertex){
            for (var i = 0; i < this.vertices.length; i++){
                if(this.vertices[i].getIntersection().getIntersectionId() == pVertex.getIntersection().getIntersectionId())
                    return this.vertices[i].getVisited();
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
        },
        
        cleanVisitVertex : function(){
            for (var i = 0; i < this.vertices.length(); i++){
                var vertex = this.vertices[i];
                vertex.setVisited(false);
            }
		},
        
        broadness : function(pVertex)
        {
            this.visitVertex(pVertex);// marca el primer nodo
            var cola = new Array();
            // mete a la cola los adyacentes del nodo inicial
            for (var i = 0 ; i < pVertex.getEdges().length ; i++) {
                cola.push(this.searchVertex(pVertex.getEdges()[i].getId()));// es para buscar el nodo en vertices
                this.visitVertex(pVertex.getEdges()[i]);
                //System.out.println("COLA "+v.aristas.get(i).dato);
            }
            // mientras no se vacíe la cola
            while(cola.length > 0){
                // trabaja con el primero de la cola
                var actualVertex = cola[0];

                console.log("sss"+actualVertex.getId()+"  ");
                this.visitVertex(actualVertex);
                cola = this.remove(cola,0);
                console.log(actualVertex.getEdges().length);
                console.log("sss"+actualVertex.getId()+"  ");
                // cada arista del vertice en la cola
                for (var i = 0; i < actualVertex.getEdges().length; i++) {
                    // si no se ha visitado se mete en la cola el adyacente
                    if(this.isVertexVisisted(actualVertex.getEdges()[i])==false){
                        // si no está ya en la cola, se mete
                        console.log(actualVertex.getEdges()[i].getId());
                        this.visitVertex(this.searchVertex(actualVertex.getEdges()[i].getId()));
                        //                    System.out.println("METE"+ actual.aristas.get(i).dato+ "  "+actual.aristas.get(i).visitado);
                        cola.push(actualVertex.getEdges()[i]);
                        console.log("asasf"+cola.length);
                    }
                    else{
                        if(actualVertex.getEdges()[i].getId() === pVertex.getId()){
                            return true;
                        }
                    }
                }
            }
            this.cleanVisitVertex();
            return false;
        },
        
        remove: function(arr, item) {
            var i;
            var array = new Array();
            for(var i = 0 ; i < arr.length; i++){
                if(i!=item)array.push(arr[i]);
            }
            console.log("..." + array.length);
            return array;
        }
        
        
    });

}(LibraryData, jQuery));