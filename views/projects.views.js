function createPage(title, content) {
    let html = '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    html += '<link rel="stylesheet" href="/css/style.css">'
    html += '<title>' + title + '</title></head><body>'
    html += '<nav><div class="container navegador"><h1>MisProyectos</h1><ul>'
    html += '<li><a href="/">Inicio</a></li> <li><a href="/projects/mobile">Mobile</a></li> <li><a href="/projects/landing">LandingPage</a></li>'
    html += '<li><a href="/projects/webapp">Web App</a></li> <li><a href="/projects/ecommerce">e-Commerce</a></li> <li><a href="/projects/game">Games</a></li>'
    html += '</ul></div></nav>'
    html += content
    html += '<footer><p>Alumno Ignacio Galiano</p></footer>'
    html += '</body></html>'

    return html
}


function createPageProjects(projects) {
    let html = `<h2>Lista de projectos ${projects[0].section}</h2>`
    html += '<div class="container projectos">'
    
    for(let i = 0; i < projects.length; i++) {
        html += '<div class="cont">'
        html += `<h3>${projects[i].name}</h3>`
        html += '<ul class="projecto_lista">'
        html += `<li><span>Descripcion:</span> ${projects[i].description}</li> <li><span>Tecnologias usadas:</span> ${projects[i].technologies}</li> <li><span>Link al repositorio:</span> ${projects[i].link}</li>`
        html += '</ul>'
        html += `<img src=${projects[i].img} alt="imagen"></img>`
        html += '</div>'
    }

    html += '</div>'

    return createPage(`${projects[0].section}`, html)
}









export {
    createPage,
    createPageProjects
}