"use strict";

const { match } = require("assert");

// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 2) return array;
  let pivot = array[Math.floor(Math.random() * array.length)];
  let left = [];
  let right = [];
  let iqual = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    }
    else if (array[i] > pivot){
      right.push(array[i]);
    } else{
      iqual.push(array[i]);
    }
  }
  return quickSort(left).concat(iqual).concat(quickSort(right));
};
// let array1 =[6,7,3,5,88,3,23,5]
// console.log(quickSort(array1));

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //okey probemos ahora:
  if(array.length<2)return array;
  const index = Math.floor(array.length/2);
  let left = array.slice(0,index);
  let right= array.slice(index);
  array = [];
  left = mergeSort(left);
  right = mergeSort(right);

  while(left.length && right.length){
    if(left[0]<right[0]){
      array.push(left.shift());
    }else{
      array.push(right.shift());
    }
  }
  array = array.concat(left,right);
  return array;
};

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
