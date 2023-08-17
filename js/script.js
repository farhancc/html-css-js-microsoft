const loginbut=document.getElementById("usrlogin");
const popup=document.getElementById("pop");
const out=document.getElementsByClassName("close")[0];

loginbut.addEventListener('click',function(event){
  event.preventDefault();
  popup.style.display="flex";
});

out.addEventListener("click",function(){
  popup.style.display='none';
});