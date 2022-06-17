

//DATA
const projects=[{
    name:"Estial",
    description:"Aplicación para el desarrollo de la estimulación visual",
    img:"./images/estial.png",
    tech:"JavaScript CSS Html Canva "
    
},
{
    name:"Crea tu historia",
    description:"Aplicación para el desarrollo de la imaginación",
    img:"./images/crea-tu-historia.png",
    tech:"JavaScript CSS Html API "
},
{
    name:"Calculadora",
    description:"Descubre cuanto tiempo has estudiado",
    img:"./images/calculator.png",
    tech:"JavaScript CSS Html"

}
]


function createProjectsHtml (){
    const projectshtml = projects.map(item=>{
        return `<div class="project">
                       <h4> ${item.name}</h4>
                       <p>${item.description}</p>
                       <img src=${item.img}>
                       <p>${item.tech}</p>
                        
        </div>`
    })
    return projectshtml.join("")
}


console.log("ok")
document.getElementById("projects-collection").innerHTML = createProjectsHtml()
