window.onload = function() {

    
function fetchGif() {
    fetch("https://api.giphy.com/v1/gifs/random?api_key=kys47o2yAFubZqXhMs3vEijqUsIromBo&tag=&rating=g").then(function(response){
        return response.json()
    }).then(function(info){
        console.log(info);
        let nombreGif = info.data.title;
        console.log(nombreGif);
        let URLGif = info.data.image_url;
        console.log(URLGif);

document.getElementById('gif-title').innerHTML = nombreGif;
document.getElementById('gif-image').src = URLGif;
})
document.getElementById("gif-refresh").addEventListener("click", function(e){
    e.preventDefault()
    fetchGif()

})}

fetchGif()

}