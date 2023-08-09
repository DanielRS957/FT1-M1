'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
 El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   // this._length = 1;
   this.root = value;
   this.left=null;
   this.right=null;
};
// - size: retorna la cantidad total de nodos del árbol

BinarySearchTree.prototype.size = function(){
   if(!this.root)return null;
   let counter = 1
   if(this.right) counter+=this.right.size()
   if(this.left) counter+=this.left.size()
   return counter;
};


// - insert: agrega un nodo en el lugar correspondiente

BinarySearchTree.prototype.insert = function(value){
   if(value < this.root){
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
   if (this.root === value) {
      return true;
   } else if (value < this.root && this.left !== null) {
      return this.left.contains(value);
   } else if (value > this.root && this.right !== null) {
      return this.right.contains(value);
  } else {
     return false;
   }
};
// console.log(nueva.contains(5));
// - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes,
// según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro,
//  hará el recorrido "in-order" por defecto.

BinarySearchTree.prototype.depthFirstForEach = function(cb,pedido){
   if(pedido === "in-order" || !pedido){
      if(this.left && this.left.depthFirstForEach(cb,pedido));
      cb(this.root);
      if(this.right && this.right.depthFirstForEach(cb,pedido));
   }
   if(pedido=== "pre-order"){
     cb(this.root);
      if(this.left && this.left.depthFirstForEach(cb,pedido));
      if(this.right && this.right.depthFirstForEach(pedido));
   }
   if(pedido=== "post-order"){
      if(this.left && this.left.depthFirstForEach(cb,pedido));
      if(this.right && this.right.depthFirstForEach(cb,pedido));
      cb(this.root);
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

BinarySearchTree.prototype.breadthFirstForEach = function(){
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
