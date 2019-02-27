/* function hello(){
    this.myname=' ';//this is a property
    var myname='k2';
    this.fullname=new (function(){
        this.myname='Ravi';
        //return myname+this.myname;
        console.log("hi");
    })();
}
//hello();
var x = new hello();
//var y=new hello();
x.myname='kiran';
//y.myname='ravi';

console.log(x.fullname);
console.log(x.myname);
*/

function hello(){
    var globalVariable='k2';//this is a global variable
    this.myname='';//this is a property
    this.fullname=new function(){
       this.myname='Ravi';//if this is commented then it shows undefined.
        //return myname+this.myname;
        console.log("inside the function");
        console.log(globalVariable+this.myname);// the function has access to only the property not the variable
    }
}
//hello();
var x = new hello();
//var y=new hello();
x.myname='kiran';
//y.myname='ravi';

//console.log(x.fullname);
//console.log(x.myname);


