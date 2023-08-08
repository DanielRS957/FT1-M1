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
      }
      this.left = new BinarySearchTree(value);
      // return this.left
   }
   else{
      if(value>this.root){
         if(this.right){
            this.right.insert(value);
         }
         this.right = new BinarySearchTree(value);
         // return this.right
      }
   }
   // this._length++;
};

// - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol

BinarySearchTree.prototype.contains = function(value){
   let current = this.root;
   let resultado;
   if(current){
      if(this.left){
         this.left.contains(value);
      }
      else if(current === value){
         return true;
      }
      this.left.contains(value);
   }
   else if(this.right){
         this.right.contains(value);
      }
   resultado= current===value;
   
};
let nueva = new BinarySearchTree(9);
nueva.insert(11);
nueva.insert(5);
// nueva.insert()
console.log(nueva);
console.log(nueva.size());
nueva.contains(5);



// - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes,
// según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro,
//  hará el recorrido "in-order" por defecto.

BinarySearchTree.prototype.depthFirstForEach = function(){
};

// - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

BinarySearchTree.prototype.breadthFirstForEach = function(){
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
