//word count app 

document.querySelector("button").addEventListener("click",()=>{

   var str=prompt("enter the str")
   console.log(str)
   var wordcount=1
   
   for(var i=0;i<str.length;i++){
      
      if(str[i-1]===" "){
         wordcount++
      }
   }
   console.log(wordcount);
})





