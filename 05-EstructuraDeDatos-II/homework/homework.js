'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor
   (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el 
  parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor 
  coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro 
  del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro
  un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
  */
function LinkedList() {
  this._length =0;
  this.head = null;
};
function Node(value) {
  this.value=value;
  this.next= null;
};
LinkedList.prototype.add = function(value){
let nodo = new Node(value); //valor ingresado
let current = this.head; //null
if(!current){                                                    //si dato esta vacio 
  this.head = current;                                                // la propiedad head esta apuntando igual al valor ingresado para nodo
}else{
  while(current.next){ //mientra sea igual a null
    current = current.next;
  }
  current.next = nodo;
}
  this._length++;
  // let newNodo = new Node(value);
  // let current = this.head;
  // if (!current){
  //   this.head = newNodo;
  // } else{
  //   while(current.next){
  //     current = current.next;
  //   }
  //   current.next = newNodo;
  // }
}

LinkedList.prototype.remove = function(){
  let dato = this.head; //null
  //si dato esta vacio realiza lo siguiente
  if(!dato){ //si dato esta vacio
  return null; // 
  }
  //
  if (!dato.next){ //mientra sea igual a null      // this.head = dato = null ⬅ (dato)
    let eliminado = dato.value;
    this.head = null;
    return eliminado;
  }
  while(dato.next.next){//mientras tenga un dato.next (nodo delante)
    dato=dato.next; // dato pasa al siguiente dato.nex;
  }
  let eliminado = dato.next.value;
  dato.next = null;
  return eliminado;
};
LinkedList.prototype.search = function (parametro){
let current = this.head;
  if(!current){
    return false;
}else{
  while(current){
    if(typeof parametro === "function"){
      if(parametro(current.value)){
        return current.value;
      }
    }if(current.value === parametro){
      return current.value;
      }
    current= current.next;
  } 
}
return null;
};
// function isEven(valor){
//   return(valor%2 === 0);
// };
// let miNuevaLista = new LinkedList();
// console.log(miNuevaLista)
// miNuevaLista.add("daniel");
// miNuevaLista.add("amor");
// miNuevaLista.add(951);
// console.log(miNuevaLista)
// console.log(miNuevaLista.search("danil"));

// // miNuevaLista.add("carro");
// // miNuevaLista.add("dinero");
// console.log(miNuevaLista);
// console.log(miNuevaLista.remove());
// console.log(miNuevaLista.remove());
// console.log(miNuevaLista.remove());
// console.log(miNuevaLista.remove());
// console.log(miNuevaLista);
// miNuevaLista.search();
// console.log();



/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores,
   o casilleros; es decir, posiciones posibles para almacenar la información),
    donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests,
   a modo de ejercicio adicional, pueden modificar un poco la clase
    para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)
  
    Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla.
    Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora';
  luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket 
  específico (determinado al hashear la clave)
  */
 function HashTable() {
   this.bucket =[];
   this.numBuckets = 35;
  };
  // console.log(nombre.charCodeAt(0));
  // La clase debe tener los siguientes métodos:
  //   - hash: función hasheadora que determina en qué bucket se almacenará un dato.
  //    Recibe un input alfabético, suma el código numérico de cada caracter del input
  //     (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total
  //      por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  
  HashTable.prototype.hash= function (clave){
    // =0; i<clave.length; i++
    let suma = 0;
    for(let i of clave ){
      suma += i.charCodeAt();
    // console.log(sumaNumerico);
  }
  return suma%this.numBuckets;
};
//set: recibe el conjunto clave valor (como dos parámetros distintos),
// hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
HashTable.prototype.set = function (clave , valor){
  let posicion = this.hash(clave);
  if(!this.bucket[posicion]){
    this.bucket[posicion] = {}            //   {"daniel":daniel@hfhf.com}
  } 
  return this.bucket[posicion][clave] = valor;        //[,,{clave:valor}] 
};
// - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
HashTable.prototype.get = function (clave){
  let posicion = this.hash(clave);
  return this.bucket[posicion][clave];
};
// - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).
HashTable.prototype.hasKey = function (clave){
  let posicion = this.hash(clave);
  if(this.bucket[posicion][clave]){
    return true;
  }
  return false;
};
// let miHash= new HashTable();
// miHash.hash("daniel")
// console.log(miHash.hash("daniel"));
// miHash.set("daniel",1995);
// console.log(miHash);
// console.log(miHash.get("daniel"));
// console.log(miHash.hasKey("daniel"));

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
