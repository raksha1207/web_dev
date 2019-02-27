let promise= new Promise((resolve,reject)=>{
    //console.log('I am line 2');
    if(true){
        resolve('I am the resolved data1-');//used an object /function
    }
    else{
        reject('I am the rejected Data');
    }
});
let promise2= new Promise((resolve,reject)=>{
   // console.log('I am line 2');
    if(true){
        resolve('I am the resolved data2-');//used an object /function
    }
    else{
        reject('I am the rejected Data');
    }
});
// promise.then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err);

// })
console.log('i am first')
 Promise.all([promise,promise2]).then((data)=>{
        console.log(data);
    }).catch(err=>{
        console.log(err);
    
    })