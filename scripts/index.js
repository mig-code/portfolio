

//DATA
const projects=[{
    "name":"Estial",
    "description":"Aplicación para el desarrollo de la estimulación visual"
},
{
    "name":"Crea tu historia",
    "description":"Aplicación para el desarrollo de la imaginación"
},
{
    "name":"Calculadora",
    "description":"Descubre cuanto tiempo has estudiado"

}
]


function createProjectsHtml (){
    const projectshtml = projects.map(item=>{
        return `<div class="project">
                       <h4> ${item.name}</h4>
                        <p>${item.description}</p>
        </div>`
    })
    return projectshtml.join("")
}


console.log("ok")
document.getElementById("projects-collection").innerHTML = createProjectsHtml()
