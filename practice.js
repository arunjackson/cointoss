

let x; 
let y;
let hcount =0;
let tcount =0;
  

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

function totalc()
{
    document.getElementById('counts').innerHTML= "head count : " +hcount + "  tail count : " + tcount;
}
