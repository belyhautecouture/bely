let btn = document.createElement("button");
btn.innerText = "ENGLISH";
document.body.appendChild(btn);

btn.setAttribute('onclick',"changeLanguage")

var is_vietnam = document.querySelector('#is_vietnam')
function changeLanguage(){
if (is_vietnam.value==false){is_vietnam.value= true}} else {is_vietnam.value=false;btn.innerText="Tiếng Việt"}
