

//DATA
const projects=[{
    name:"Estial",
    description:"Aplicación para el desarrollo de la estimulación visual",
    img:"./images/estial.png",
    tech:"JavaScript CSS Html Canva",
    whyText:"In fermentum leo sit amet urna sollicitudin, in malesuada tellus laoreet. Quisque enim ex, luctus ut interdum at, iaculis vitae libero. Nam sed mi elit. Maecenas euismod tristique nisi vitae cursus. Aenean a ante scelerisque, blandit magna mollis, interdum nisi. Quisque eget lacinia nisi, eget molestie ex. Mauris tincidunt dui quam, a dictum lacus cursus at. Mauris fringilla ante sed fringilla feugiat. Curabitur ac arcu pellentesque, interdum ex in, porttitor velit. Donec eget sollicitudin erat. Aliquam in arcu tortor. Donec vitae luctus massa. Suspendisse ut condimentum nisl. Phasellus at sollicitudin erat.",
    howText: "In fermentum leo sit amet urna sollicitudin, in malesuada tellus laoreet. Quisque enim ex, luctus ut interdum at, iaculis vitae libero. Nam sed mi elit. Maecenas euismod tristique nisi vitae cursus. Aenean a ante scelerisque, blandit magna mollis, interdum nisi. Quisque eget lacinia nisi, eget molestie ex. Mauris tincidunt dui quam, a dictum lacus cursus at. Mauris fringilla ante sed fringilla feugiat. Curabitur ac arcu pellentesque, interdum ex in, porttitor velit. Donec eget sollicitudin erat. Aliquam in arcu tortor. Donec vitae luctus massa. Suspendisse ut condimentum nisl. Phasellus at sollicitudin erat.",
    linkCode:"https://mig-code.github.io/estial/",
    linkLive:"https://github.com/mig-code/estial"
},
{
    name:"Crea tu historia",
    description:"Aplicación para el desarrollo de la imaginación",
    img:"./images/crea-tu-historia.png",
    tech:"JavaScript CSS Html API ",
    whyText:"In fermentum leo sit amet urna sollicitudin, in malesuada tellus laoreet. Quisque enim ex, luctus ut interdum at, iaculis vitae libero. Nam sed mi elit. Maecenas euismod tristique nisi vitae cursus. Aenean a ante scelerisque, blandit magna mollis, interdum nisi. Quisque eget lacinia nisi, eget molestie ex. Mauris tincidunt dui quam, a dictum lacus cursus at. Mauris fringilla ante sed fringilla feugiat. Curabitur ac arcu pellentesque, interdum ex in, porttitor velit. Donec eget sollicitudin erat. Aliquam in arcu tortor. Donec vitae luctus massa. Suspendisse ut condimentum nisl. Phasellus at sollicitudin erat.",
    howText: "In fermentum leo sit amet urna sollicitudin, in malesuada tellus laoreet. Quisque enim ex, luctus ut interdum at, iaculis vitae libero. Nam sed mi elit. Maecenas euismod tristique nisi vitae cursus. Aenean a ante scelerisque, blandit magna mollis, interdum nisi. Quisque eget lacinia nisi, eget molestie ex. Mauris tincidunt dui quam, a dictum lacus cursus at. Mauris fringilla ante sed fringilla feugiat. Curabitur ac arcu pellentesque, interdum ex in, porttitor velit. Donec eget sollicitudin erat. Aliquam in arcu tortor. Donec vitae luctus massa. Suspendisse ut condimentum nisl. Phasellus at sollicitudin erat.",
    linkCode:"https://github.com/mig-code/crea-tu-historia",
    linkLive:"https://mig-code.github.io/crea-tu-historia/"
},
{
    name:"Calculadora",
    description:"Descubre cuanto tiempo has estudiado",
    img:"./images/calculator.png",
    tech:"JavaScript CSS Html",
    whyText:"In fermentum leo sit amet urna sollicitudin, in malesuada tellus laoreet. Quisque enim ex, luctus ut interdum at, iaculis vitae libero. Nam sed mi elit. Maecenas euismod tristique nisi vitae cursus. Aenean a ante scelerisque, blandit magna mollis, interdum nisi. Quisque eget lacinia nisi, eget molestie ex. Mauris tincidunt dui quam, a dictum lacus cursus at. Mauris fringilla ante sed fringilla feugiat. Curabitur ac arcu pellentesque, interdum ex in, porttitor velit. Donec eget sollicitudin erat. Aliquam in arcu tortor. Donec vitae luctus massa. Suspendisse ut condimentum nisl. Phasellus at sollicitudin erat.",
    howText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    linkCode:"https://github.com/mig-code/money-test",
    linkLive:"https://mig-code.github.io/money-test/"
}
]




function createProjectsHtml (){
    const projectshtml = projects.map(item=>{
        return `<div class="project">
                       <h4 class="project-title"> ${item.name}</h4>
                       <div class="project-description">
                            <p>${item.description}</p>
                        </div>
                       <img src="${item.img}">
                       <p>${item.tech}</p>
                       <div class="accordion">
                            <div class="accordion-block">
                                <div class="accordion-title">
                                     Why I made it
                                </div>
                                <div class="accordion-text">
                                    <p> ${item.whyText}</p>
                                </div>
                            </div>
                            <div class="accordion-block">
                                <div class="accordion-title">
                                     How I made it 
                                </div>
                                <div class="accordion-text">
                                    <p> ${item.howText}</p>
                                </div>
                            </div>
                        </div>

                        <div class="project-buttons">
                            <div class="btn-small live-button">
                                <a href="${item.linkCode}">Live demo</a>
                            </div>
                            <div class="btn-small code-button">
                                <a href="${item.linkLive}">View Code</a>
                            </div>
                        </div>

                </div>`
    })
    return projectshtml.join("")
}


console.log("ok")
document.getElementById("projects-collection").innerHTML = createProjectsHtml()


//ACCORDION

const accordionText    = document.querySelectorAll('.accordion-text')
const accordionTitle  = document.querySelectorAll('.accordion-title')
console.log(accordionTitle)
console.log(accordionText)
    

// Cuando CLICK en h2,
    // QUITAR la clase activo de TODOS los bloque
    // Vamos a añadir la clase activo al BLOQUE con la POSICION del h2

// Recorrer TODOS los h2
accordionTitle.forEach( ( eachTitle , i )=>{
    // Asignando un CLICK a cada h2
    accordionTitle[i].addEventListener('click', ()=>{
        accordionTitle[i].classList.toggle("active-accordion-title");
        
        if (accordionText[i].style.display === "block") {
            accordionText[i].style.display = "none";
          } else {
            accordionText[i].style.display = "block";
          }
        
        console.log(accordionText[i])

    })
})