

let x; 
let y;
  

function tosss()
{
     x= Math.floor(  Math.random()*2 ) +1  ;
    if(x==1){
        y="HEAD";
     } 
     else
 {
     
        y="TAIL";
     }
    
    document.getElementById("res").innerHTML= y ;
   

}

function refresh()
{
    window.location.reload();
    
}


