'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
 El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left=null;
   this.right=null;
};
   // this._length = 1;

// - size: retorna la cantidad total de nodos del árbol

BinarySearchTree.prototype.size = function(){
   // esta es una de las maneras mas eficientes de escribir este algoritmo
let counter = 1;
if(this.left)counter+=this.left.size()
if(this.right)counter+=this.right.size()
return counter;
// una forma distinta de realizar el codigo pero no la mas efeiciente
   // if(!this.value)return null;
   // let counter = 1
   // if(this.right) counter+=this.right.size()
   // if(this.left) counter+=this.left.size()
   // return counter;

// esta es otra manera de realizar el algoritmo pero es menos eficiente
// if(this.right === null && this.left === null) return 1;
// if(this.left !== null && this.right === null) return 1 + this.left.size()
// if(this.left === null && this.right !== null) return 1 + this.right.size()
// if(this.left !== null && this.right !== null) return 1 + this.left.size() + this.right.size()
};


// - insert: agrega un nodo en el lugar correspondiente

BinarySearchTree.prototype.insert = function(value){
   if(value < this.value){
      if(this.left){
         this.left.insert(value)
      }else{
         this.left = new BinarySearchTree(value);
      }  
   }
   else {
      if(this.right){
         this.right.insert(value);
      }else{
         this.right = new BinarySearchTree(value);
      }
   }
};
// let nueva = new BinarySearchTree(9);
// nueva.insert(11);
// nueva.insert(5)
// nueva.insert(10)
// console.log(nueva);
// - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol

BinarySearchTree.prototype.contains = function(value){
   if (this.value === value)return true

   if (value < this.value){
      if(this.left === null) return false
      return this.left.contains(value)
   }
   if (value > this.value){
      if(this.right === null)return false
      return this.right.contains(value)
   }
};
// console.log(nueva.contains(5));
// - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes,
// según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro,
//  hará el recorrido "in-order" por defecto.

BinarySearchTree.prototype.depthFirstForEach = function(cb,pedido){
   
   if(pedido === "in-order" || pedido=== undefined){
      if(this.left && this.left.depthFirstForEach(cb,pedido));
      cb(this.value);
      if(this.right && this.right.depthFirstForEach(cb,pedido));
   }

   if(pedido === "pre-order"){
      cb(this.value);
      if(this.left && this.left.depthFirstForEach(cb,pedido));
      if(this.right && this.right.depthFirstForEach(cb,pedido));
   }

   if(pedido === "post-order"){
      if(this.left && this.left.depthFirstForEach(cb,pedido));
      if(this.right && this.right.depthFirstForEach(cb,pedido));
      cb(this.value);
   }
};
//
// nueva.insert(5);
// nueva.insert(6);
// nueva.insert(13);
// console.log(nueva);
// console.log(nueva.contains());
// console.log(nueva.depthFirstForEach("post-order"));

// - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

BinarySearchTree.prototype.breadthFirstForEach = function(cb, value = []){
   if(this.left !== null){                                        //mi izq tiene algo si o no?
      value.push(this.left)                                     //si tiene valor por favor guardame el valor de izq en value
   }
//si izq no tiene valor realiza lo siguiente

   if(this.right !== null){                                       //mi right tiene algo si o no?
      value.push(this.right)                                     //si tiene valor guardame right en value
   }
// si no tiene valor en izq y en right 
   cb(this.value)                                                // ejecuta el call back la cual lo que hace es imprimir los elementos en arden 

   if(value.length > 0){
     value.shift().breadthFirstForEach(cb, value)
   }
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
