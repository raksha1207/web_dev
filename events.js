
(function(){

   var btn= document.getElementById("myBtn")
   btn.addEventListener('click',function(e){
       console.log(e);
       console.log(this);
   })
   var keys=document.getElementById("keypr");
   keys.addEventListener('keypress',function(e){
    console.log(e);
    console.log(this);
    validateInput(e,/^[0-9]*$/);
    
    function validateInput(e,regex){
if(regex.test(e.key)){
        //
     

    }
    else{
        e.preventDefault();
    }
    }
   })
  })();