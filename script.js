const icons = document.querySelectorAll(".icon");

icons.forEach(icon => {

icon.addEventListener("click", function(){

icon.classList.toggle("active");

if(icon.classList.contains("active")){
icon.style.color="#38bdf8";
}
else{
icon.style.color="white";
}

});

});