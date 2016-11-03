/* dropdown menu filters*/
var dropdown = document.querySelector(".filtersorteer");
var actief = document.querySelector(".filter");

var show = function () {
    actief.classList.toggle("active");
};

dropdown.addEventListener("click", show);




/*opslaan icoon micro interactie */
var image = document.querySelectorAll("article img");

var change = function (that) {
        if(that.getAttribute("src") == "/styles/images/opslaan.png"){
            that.src = "/styles/images/opslaan-active.png";
        }
        else{
            that.src = "/styles/images/opslaan.png";
        }
};
    
for (var i = 0; i < image.length; i++){ 
    image[i].addEventListener("click", function(){
        change(this);
    });
}



/*opslaan icoon micro interactie */
var open = document.querySelector(".mijnaccount");
var mijnMenu = document.querySelector(".menu");

var fullscreen = function () {
    mijnMenu.classList.toggle("open");
};

open.addEventListener("click", fullscreen);

/*             close menu                */
var close = document.querySelector(".close");
var mijnMenu = document.querySelector(".menu");

var fullscreen = function () {
    mijnMenu.classList.remove("open");
};

close.addEventListener("click", fullscreen);


