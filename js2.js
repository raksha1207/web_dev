/*'use strict';
var initValue;
initValue=5;
function counter(callback){
    if(initValue>0){
        console.log(initValue);
        initValue--;
        callback(callback);
    }
}
function init(cb){
    cb(cb);
}
init(counter);
-----------------------------------------

'use strict';
var counter=10;
function iLoveThis(){
    console.log("awesome prog");
}
console.log("awesome prog1");
setTimeout(iLoveThis,1000);
console.log("awesome prog3");
*/

'use strict';
var counter=10;
function iLoveThis(){
    var counter=10;
    counter--;
    console.log(counter);
}

setTimeout(iLoveThis,1000);

setTimeout(iLoveThis,2000);

setTimeout(iLoveThis,3000);


