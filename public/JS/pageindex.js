<html>
<head>
  <h1>Adel Resume</h1>
</head>
<body>
<style>
#div1{width:1600px;height:600px;position:relative; margin:0px auto;background-color:white;overflow:hidden}
#ul1{position:absolute;left:0;padding:0;margin:0;top:50px}
ul li{list-style:none;float:left;margin:0;padding:0px}
</style>
<div id="div1">
 <ul id="ul1">
  <li> <img src="/image/land-2.JPG" width="600px" height="600px"/></li>
  <li> <img src="/image/land-2.JPG" width="600px" height="600px"/></li>
  <li> <img src="/image/land-2.JPG" width="600px" height="600px"/></li>
  <li> <img src="/image/land-2.JPG" width="600px" height="600px"/></li>
  <li> <img src="/image/land-2.JPG" width="600px" height="600px"/></li>
 </ul>
</div>


<script>
window.onload=function()
{
 var div1=document.getElementById('div1');
 var ul1=document.getElementById('ul1');
 var li1=document.getElementsByTagName('li');
 var timer=null
 ispeed=5

 ul1.innerHTML+=ul1.innerHTML;
 ul1.style.width=li1.length*li1[0].offsetWidth;

  function toMove()
     {
       if(ul1.offsetLeft<-ul1.offsetWidth/2)
       {
         ul1.style.left=0
       }
         else if(ul1.offsetLeft>=0)
       {
         ul1.style.left=-ul1.offsetWidth/2
       }
       ul1.style.left=ul1.offsetLeft+ispeed+'px'
     }

   timer=setInterval(toMove,30)

 div1.onmouseover=function()
  {
   clearInterval(timer)
  }
 div1.onmouseout=function()
  {
   timer=setInterval(toMove,30)
  }
}
</script>
<body>
</html>
