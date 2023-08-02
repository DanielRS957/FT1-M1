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
//          return this.fullname;
//       },
//    },
// };
// console.log(fullname);

// var fullname = {fullname: "daniel roman"};

// console.log(fullname);console.log(fullname);

// console.log(obj.prop.getFullname());
// console.log(obj);
// console.log(obj.prop);
// console.log(obj.prop.fullname);

// class persona{
//    constructor(nombre,edad,peso,hobby,perro)
// }
// console.log(this.nombre);
