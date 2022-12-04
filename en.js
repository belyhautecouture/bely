let btn = document.createElement("button");
btn.innerText = "ENGLISH";
let banner = document.querySelector('.banner');
banner?.insertBefore(btn,banner);

btn.setAttribute('onclick',"changeLanguage")

var is_vietnam = document.querySelector('#is_vietnam')
function changeLanguage(){
if (is_vietnam.value==false){is_vietnam.value= true;console.log("TIẾNG VIỆT")} else {is_vietnam.value=false;btn.innerText="Tiếng Việt";console.log("TIẾNG ANH")}
}
