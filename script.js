function validate(){
  var valEle = document.body.querySelector(".valMess");
  var username =document.body.querySelector(".username").value;
  if(username=="coolStudent123"){
    
  var nav = document.body.querySelector(".nav");
  var display =document.body.querySelector(".display");
  var ele = document.createElement("div");
  valEle.innerHTML=""

var pages = [
  {
    title:"Home",
    content:"Home"
  },
  {
    title:"About",
    content:"About"
  },
  {
    title:"Veiw",
  }
]

for(var i=0; i<pages.length; i++){
  new pageMaker(pages[i]);
}

function pageMaker(pg){
  this.button = document.createElement("button");
  this.button.addEventListener("click", function(){
  writeStuff(pg.content, pg.title);
  })
  this.button.innerHTML=pg.title;
  nav.appendChild(this.button);
}

function writeStuff(stuff, pg){
  if(pg=="Home"){
    writePage3();
  }else if (pg=="Veiw"){
    writePage();
  }else{
    writePage2();
  }
}
  
function writePage(){
  display.innerHTML="";
  var heading = document.createElement("h1");
  var Counter = document.createElement("div");
  heading.innerHTML="Veiw Notes";
  display.appendChild(heading);
  display.appendChild(Counter);
  for (let el of document.querySelectorAll('.username')) el.style.visibility = 'hidden';
  for (let el of document.querySelectorAll('.validate')) el.style.visibility = 'hidden';
  for (let el of document.querySelectorAll('.submit')) el.style.visibility = 'visible';
  for (let el of document.querySelectorAll('.itemText')) el.style.visibility = 'visible';
  for (let el of document.querySelectorAll('.number')) el.style.visibility = 'visible';
  for (let el of document.querySelectorAll('.list')) el.style.visibility = 'visible';
  for (let el of document.querySelectorAll('.itmMess')) el.style.visibility = 'visible';
}

function writePage2(){
  display.innerHTML="";
  var heading = document.createElement("h1");
  var name = document.createElement("h3");
  name.innerHTML="Nathan";
  heading.innerHTML="About";
  display.appendChild(heading);
  display.appendChild(name);
  for (let el of document.querySelectorAll('.username')) el.style.visibility = 'hidden';
  for (let el of document.querySelectorAll('.validate')) el.style.visibility = 'hidden';
  for (let el of document.querySelectorAll('.submit')) el.style.visibility = 'hidden';
  for (let el of document.querySelectorAll('.itemText')) el.style.visibility = 'hidden';
  for (let el of document.querySelectorAll('.number')) el.style.visibility = 'hidden';
  for (let el of document.querySelectorAll('.list')) el.style.visibility = 'hidden';
  for (let el of document.querySelectorAll('.itmMess')) el.style.visibility = 'hidden';
  
}
  
function writePage3(){
  display.innerHTML="";
  var heading = document.createElement("h1");
  heading.innerHTML="Home";
  display.appendChild(heading);
  for (let el of document.querySelectorAll('.username')) el.style.visibility = 'hidden';
  for (let el of document.querySelectorAll('.validate')) el.style.visibility = 'hidden';  
  for (let el of document.querySelectorAll('.submit')) el.style.visibility = 'hidden';
  for (let el of document.querySelectorAll('.itemText')) el.style.visibility = 'hidden';
  for (let el of document.querySelectorAll('.number')) el.style.visibility = 'hidden';
  for (let el of document.querySelectorAll('.list')) el.style.visibility = 'hidden';
  for (let el of document.querySelectorAll('.itmMess')) el.style.visibility = 'hidden';
} 
 
    
var list = [];
 var listN =[];
    
function renderList(){
  var listEle = document.body.querySelector(".list");
  listEle.innerHTML="";
  
  for(var i=0; i<list.length; i++){
    var element = document.createElement("div");
    element.innerHTML=(listN[i] +" "+ list[i])
    listEle.appendChild(element);
  }
}

function submit(){
  var text =document.body.querySelector(".itemText").value;
   var numb =document.body.querySelector(".number").value;
  if(text.length>0 && numb != ""){
    list.push(text);
    listN.push(numb);
     document.body.querySelector(".itmMess").innerHTML=""
}else{
  document.body.querySelector(".itmMess").innerHTML="Not enough Characters/Numbers"
}
  renderList();
}

document.body.querySelector(".submit").addEventListener("click", function(){ submit();
})
renderList();

writeStuff(pages[0].content, "Home");
    
  }else{
    valEle.innerHTML="Username Incorrect"
  }
  renderList();
}

document.body.querySelector(".validate").addEventListener("click", function(){ validate();
})