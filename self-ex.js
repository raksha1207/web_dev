// (function (t) {
//     'use strict'
//     var a=b=3;
//     console.log('outer');
//     var x=t;
//     console.log(a);
//     console.log(b);
//     (function (y) {
//         console.log('inner');
//         console.log(y);
//       }(100));
//   }(50));

// (function () {
//     var a=[1,2,3,4,5];
//     Array.prototype.even=function(){
//         //the prototype is available for all objects that are created before also
//        // console.log('hi');
//        console.log(this);
//     }
//     a.even();
//     var b=[1,2,2];
//     //b.even
//   })();
// (function () {
// var obj=new Object();
// Object.prototype.funcn=function(){
//     console.log("i am a prototypal function");
// }
// obj.funcn();
// })();
// (function () {
//     var obj2=new Object();
//     obj2.funcn();
// })();

var nums = [1,2,3,4,5,6,7];
var res=nums.filter((x,i)=>{
    return x%2==0
})
const result = nums.filter(num=> num%2==0);

console.log(result);
console.log(res);
// expected output: Array ["exuberant", "destruction", "present"]

