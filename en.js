var btn = document.createElement("button");
btn.innerText = "ENGLISH";
var banner = document.querySelector('.banner');
banner?.insertAdjacentElement('beforeBegin',btn);

btn.setAttribute('onclick',"changeLanguage")
btn.style.padding = '15px';

var is_vietnam = document.querySelector('#is_vietnam')
function changeLanguage(){
if (is_vietnam.value==false){is_vietnam.value= true;console.log("TIẾNG VIỆT")} else {is_vietnam.value=false;btn.innerText="Tiếng Việt";console.log("TIẾNG ANH")}
}
