
 function getStyle(obj,attr)
 {
  if(obj.currentStyle)
  {
  return obj.currentStyle[attr];
  }
   else
   {
    return getComputedStyle(obj,false)[attr];
   }
  }

 function startMove(obj,json,fn)
 {
  clearInterval(obj.timer);
  obj.timer=setInterval(function()
   {
    for (var attr in json)
   {
    var icur=0;
    if(attr=='opacity')
     {
      icur=parseInt(parseFloat(getStyle(obj,attr))*100);
     }
     else
     {
      icur=parseInt(getStyle(obj,attr));
     }

    var ispeed=(json[attr]-icur)/30;
    // ispeed=ispeed>0?Math.ceil(ispeed):Math.floor(ispeed);

    if(icur==json[attr])
     {
      clearInterval(obj.timer)
      if(fn)
       {
        fn()
       }
     }
    else
    {
     if(attr=='opacity')
     {
      obj.style.filter='alpha(opacity:'+(icur+ispeed)+')';
      obj.style.opacity=(icur+ispeed)/100;
     }
     else
     {
      obj.style[attr]=icur+ispeed+'px'
     }
    }
   }
 },60)
 }
