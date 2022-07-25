window.onload = () => 
// On crée la palette
{
    document.querySelectorAll("#palette div").forEach(element =>
    {
        //on met les couleurs
        element.style.backgroundColor = element.dataset.color

        //on écoute le clic
        element.addEventListener("click", () => {
            canvas.setColor(element.dataset.color)
        })
    })

    //On charge le canvas
    let canvas = new Dessin("#feuille")

    //on gère le clic sur le plus
    document.querySelector("#plus").addEventListener("click", () => {
        canvas.biggerStroke()
    })

    //on gère le clic sur le moins
    document.querySelector("#minus").addEventListener("click", () => {
        canvas.lowerStroke()
    })

    //on gère le clic sur la gomme
    document.querySelector("#eraser").addEventListener("click", () => {
        canvas.setColor(" white")
    })

    //on gère le clic sur la croix
    document.querySelector("#times").addEventListener("click", () => {
        canvas.erase()
    })


}