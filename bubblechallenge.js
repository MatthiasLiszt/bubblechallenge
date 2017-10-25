

var inNumbers=document.getElementById('inNumbers');
var Aquarium=document.getElementById('aquarium');
var bubbles;
var index=0;
var gravity=false;
var rounds=0;

setInterval(function(){applyGravity(bubbles)},1000);

function randomBubbles(){
 gravity=false;
 bubbles=generateBubbles(7);
 inNumbers.textContent=JSON.stringify(bubbles);

 var code=drawBubbles(bubbles);
 console.log(code);
 var awesomeColors="<defs><radialGradient id='awesome'><stop offset='10%' stop-color='gold'/>   <stop offset='95%' stop-color='blue'/></radialGradient></defs>";
 Aquarium.innerHTML=awesomeColors+code;
} 

function printBubbles(b)
{var code=drawBubbles(b);
 var awesomeColors="<defs><radialGradient id='awesome'><stop offset='10%' stop-color='gold'/>   <stop offset='95%' stop-color='blue'/></radialGradient></defs>";
 Aquarium.innerHTML=awesomeColors+code;
 inNumbers.textContent=JSON.stringify(bubbles);
}

function lightningSort(b){
 var i,j;
 var swap;
 var g=b.value;
 for(i=0;i<g.length;++i)
  {for(j=i;j<g.length;++j)
    {if(b.value[i]>b.value[j])
      {swap=b.x[j];b.x[j]=b.x[i];b.x[i]=swap;
       swap=b.value[j];b.value[j]=b.value[i];b.value[i]=swap; 
      }
    }
  }
  console.log("lightningSort");
  console.log(JSON.stringify(b));
  return b;
}

function lightningButton(b){
 var o=lightningSort(b);
 console.log("lightningButton");
 printBubbles(o);
}

function generateBubbles(n){
 var bY=[];
 var bX=[];
 var values=[];
 
 for(var i=0;i<7;++i)
  {bY.push(Math.round((Math.random()*40)+40*i)+20);
   bX.push(Math.round((Math.random()*280)+20));
   values.push(Math.round((Math.random()*15)+5));
  }

 return {x: bX, y: bY, value: values};
}

function drawBubbles(b){
 var g=b.x;
 var output=[];
 for(var i=0;i<g.length;++i){
  output.push("<circle r='"+b.value[i]+"' cx='"+g[i]+"' cy='"+b.y[i]+"' fill='url(#awesome)' />" );
 }
 return output.join('');
}


function bubbleSort(blub){

 return blob;
}

function jsSort(blub){
 return blob;
}

function showDescription(){
 var Description=document.getElementById("description");
 console.log("showDescription");
 Description.style.display="inline";
}

function animatedButton(b){
 gravity=true;
 rounds=0;
}

function applyGravity(b){
 var j,i;
 var swap;
 var g=b.value;
 console.log("applyGravity "+index);
 if(gravity)
  {if(index>6){index=0;}
   i=index;
   for(j=index;j<g.length;++j)
     {if(b.value[i]>b.value[j])
       {swap=b.x[j];b.x[j]=b.x[i];b.x[i]=swap;
        swap=b.value[j];b.value[j]=b.value[i];b.value[i]=swap; 
       }
     }
   printBubbles(b);
   ++index;
   ++rounds;
   if(rounds>49){gravity=0;}
  } 
}

