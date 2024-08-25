/* Fetch API 
- La API Fetch proporciona una interfaz para recuperar recursos (incluso a través de la red). Resultará familiar a cualquiera que haya usado XMLHttpRequest, pero la nueva API ofrece un conjunto de características más potente y flexible.

*/

const apiKey = "khvIMpxNNzZ2gHrgsTFRvQllLLoDDoMv";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${ apiKey}`);

peticion
    .then((resp) => resp.json())
    .then( ({data})=> {
        const {url} = data.images.original;
        console.log(url);
        
        const img = document.createElement("img");
        img.src= url;

        document.body.append(img)
    }
    )
    .catch(console.warn)