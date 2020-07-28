window.addEventListener('load', function() {

    window.alert("esta todo bien");
    let abracadabra = document.getElementById('abracadabra');
    abracadabra.addEventListener("click", function(){
    let nombre = prompt("Ingrese su nombre")
    });

    let titulo = document.querySelector('h1');
    titulo.innerHTML = "Hi, I'm " + nombre;

    let getInTouch = document.getElementsByClassName("button big scrolly");
    getInTouch.addEventListener("dbclick", function(){
       document.getElementsByClassName('parrafo-color').style.color = "red"
    });

  
   function colorAlAzar () { 
       let colores = [green, red, blue, yellow, pink];
       let n =  Math.floor(Math.random()*5)
       return colores[n]};

    getInTouch.addEventListener("dbclick", function(){
        document.getElementsByClassName('parrafo-color').style.color = colorAlAzar()
    });


let sections = document.getElementsByTagName('section');
Array.from(sections).forEach(section => {
    section.addEventListener("click", function(e){
    alert("Clickeaste sobre " + this.querySelector('h3').innerHTML)
})});
   

let recentWork = document.querySelector('footer.a');  
recentWork.addEventListener("mouseover", function () {
    previousElementSibling.style.color = colorAlAzar()});
recentWork.addEventListener('mouseout', function() {
    previousElementSibling.style.color = "#888"
});    


window.addEventListener("keypress", function(){
    this.alert("Ey, tocaste el teclado!")
});

window.addEventListener("keypress", function(e){
    if (e.key == "Space") {
        this.alert("Ey, tocaste la barra")
    }
});

let estadoSecreto = 0
window.addEventListener('keyup', function(e) {
    switch (e.which) {
        case 83 : estadoSecreto = 1; break;
        case 69:
            if (estadoSecreto == 83) {
                estadoSecreto =2;
            } else if (estadoSecreto == 82){
                estadoSecreto = 5;
            }
            break;
        case 67 : estadoSecreto = 3; break;
        case 82 : estadoSecreto = 4; break;
        case 84 : estadoSecreto = 6; break;
        case 79 : estadoSecreto = 7; break;
            }
            });




})
   



