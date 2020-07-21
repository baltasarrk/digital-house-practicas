alert(' Bienvenidos a mi sitio');

let avanzar = confirm("¿Está seguro que quiere avanzar?");

let h2 = document.querySelector('h2');
let h1 = document.querySelector('h1');
let avatar = document.querySelector('div.ccontainer background-img');
let article =  document.querySelector('article.hobbies');

if (avanzar) {
    h2.innerText = 'Que alegria que quieras con tu visita por este maravilloso sitio.';
    
    let nombre = prompt('Ingrese su nombre');
    h1.innerHTML = "Bienvenido " + nombre;

    let edad = prompt('Ingrese su edad');
    if (edad < 18) {
        document.getElementsByClassName('container-general')[0].style.display = 'none';
        dpcument.getElementById('accesoDenegado').style.display = 'block';
    } else {
     let hobbies = prompt('Ingrese sus hobbies separados por comas');
     
     if (hobbies.includes('programacion') || hobbies.includes('programar')|| hobbies.includes('programación')) {         
         alert('Qué bueno que te guste la programación');

     } else {

        alert('Qué lástima que no te guste la programación')
        avatar.style.backgroundImage = `url(img/gatito.jpeg)` 
     }
     
    hobbies = hobbies.split(',');

    articles.innerHTML += '<ol>'

    for (let i = 0; i < hobbies.length; i++) {
        if (i == 3) break
        article.innerHTML += `<li>${hobbies[i]}</li>`
    }

    article.innerHTML += '</ol>'


    }


} else {
    h2.innerHTML = 'Lamentamos que no quieras continuar tu visita por este maravilloso sitio'
};


