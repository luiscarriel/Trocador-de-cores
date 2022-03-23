var btnBlack = document.getElementById("btn-black");
function black(){
    document.querySelector("body").setAttribute("class", "black");
};
btnBlack.addEventListener("click", black);

var btnWhite = document.getElementById("btn-white");

function white(){
    document.querySelector("body").setAttribute("class", "white");
};

btnWhite.addEventListener("click", white);