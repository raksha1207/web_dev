/*var obj={a:10};
var obj2=obj;
obj2.a=20
obj.a=30
b=20;
console.log(obj.a);
console.log(obj2.a);

var x=(function(){ return 2;})();
console.log(x);
window.
*/

(function(){
    'use strict';
    var student;
   
    function Person(){
        var x=10;
        this.firstName="kiran";
    };
    student=new Person();
    console.log(student);
   // console.log(student.x);
})();
var student;
function Person(){
    var x=10;
    this.firstName="kiran";
};
student=Person();
console.log(student);