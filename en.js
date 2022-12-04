let btn = document.createElement("button");
btn.innerText = "ENGLISH";
document.querySelector('.banner')?.insertBefore(btn);

btn.setAttribute('onclick',"changeLanguage")

var is_vietnam = document.querySelector('#is_vietnam')
function changeLanguage(){
if (is_vietnam.value==false){is_vietnam.value= true;console.log("TIẾNG VIỆT"}} else {is_vietnam.value=false;btn.innerText="Tiếng Việt";console.log("TIẾNG ANH")}
