// x = 1;
// var a = 5;
// var b = 10;
// var c = function (a, b, c) {
//    var x = 10;
//    console.log(x); //10
//    console.log(a); // 8
//    var f = function (a, b, c) {
//       b = a; //8
//       console.log(b); //8
//       b = c;
//       var x = 5;
//    };
//    f(a, b, c);
//    console.log(b); //9
// };
// c(8, 9, 10);
// console.log(b);//10
// console.log(x);//1

// console.log(bar);// undefine
// console.log(baz);// baz not defined
// foo(); // foo is not defined
// function foo() {
//    console.log('Hola!');
// }
// var bar = 1;
// baz = 2;

// var instructor = 'Tony';
// console.log(instructor); //"Tony"
// (function () {
//    if (true) {
//       var instructor = 'Franco';
//       console.log(instructor);// "Franco"
//    }
// })();
// console.log(instructor);// "Tony"

// var instructor = 'Tony';
// let pm = 'Franco';
// if (true) {
//    var instructor = 'The Flash';
//    let pm = 'Reverse Flash';
//    console.log(instructor); //"The flash"
//    console.log(pm);//"Reverse flash"
// }
// console.log(instructor);//"The Flash"
// console.log(pm);//"Franco"

// 6 / "3" // 2
// "2" * "3"//6
// 4 + 5 + "px"//9px
// "$" + 4 + 5//$45
// "4" - 2//2
// "4px" - 2// NaN
// 7 / 0// infinity
// {}[0];// undifine o posicion 0
// parseInt("09")// 9
// 5 && 2// 2
// 2 && 5// 5
// 5 || 0// 5
// 0 || 5//0
// [3]+[3]-[10]//23 = 3+3=33-10=23
// 3>2>1// false
// // [] == ![] // true 

// function test() {
//     console.log(a);//und
//     console.log(foo());//2
//     var a = 1;
//     function foo() {
//        return 2;
//     }
//  }
 
//  test();

// var snack = 'Meow Mix';

// function getFood(food) {
//     // console.log(food);
//    if (food) {
//       var snack = 'Friskies';
//       return snack;    
//    }
// //    console.log(snack);
//    return snack; 
// }

// getFood(false); // undefined

// console.log(getFood(false));

// var fullname = 'Juan Perez';
// var obj = {
//    fullname: 'Natalia Nerea',
//    prop: {
//       fullname: 'Aurelio De Rosa',
//       getFullname: function () {
//          console.log(this.fullname);
//       }
//    }
// }
// console.log(fullname);

// var fullname = {fullname: "daniel roman"};
// console.log(fullname);
// console.log(this.fullname);
// let funcionBind = obj.prop.getFullname.bind(obj);

// console.log(obj.prop.getFullname());
// console.log(obj);
// console.log(obj.prop);
// console.log(obj.prop.fullname);

// class persona{
//    constructor(nombre,edad,peso,hobby,perro)
// }
// console.log(this.nombre);

//crear una funcion multiplicaar CLOUSURE
// function multiplicar (num){
//    let tabla = []
//    function calcularRango(rango){
//       if(rango < 11){
//          tabla.push(num * rango)
//          calcularRango(rango + 1 );
//       }
//    }
//    calcularRango(1);
//    return function(){
//       return tabla;
//    }
// }
// let tablaDos = multiplicar(2)
// console.log(tablaDos());
// let tablaNueve = multiplicar(9)
// console.log((tablaNueve()));
// let tablaUno = multiplicar(1)
// let tablaTres = multiplicar(3)
// let tablaCuatro = multiplicar(4)
// let tablaCinco = multiplicar(5)
// let tablaSeis = multiplicar(6)
// let tablaSiete = multiplicar(7)
// let tablaOcho = multiplicar(8)
/////////////////////////////////////////
////////////////////////////////////////
// PRACTICANDO CON OBJETOS


// let menu = {
//     hamburguesas:{
//         rachera:{grande : 15.000,
//                 mediana: 12.000,
//                 pequeña: 10.000,
//         },
//         vegetariana:{grande: 15.000,
//                     mediana: 12.000,
//                     pequeña: 10.000,
//         },
//         tresQuesos:{grande: 15.000,
//                     mediana: 12.000,
//                     pequeña: 10.000,
//         },
       
//     },
//     salchipapa:{ranchera:{conQueso:12.000,
//                         sinQueso: 9.000,
//                     },
                
//     },
//     perroCaliente:{grande: 15.000,
//                 mediana: 12.000,
//                 pequeña: 10.000,
//     },
//     bebidas:{
//         limonada: 7.000,
//         jugoHit: 6.000,
//         limonadaDeCoco:7.000,
//     }
// }