function newfunc() {kkk
    var x=10;
    return function () {
        console.log(x);
    };
    //return 'ABCDE';
};
var exec=newfunc();
exec();
//closure

var x=!![ ]+"false";
console.log(x);