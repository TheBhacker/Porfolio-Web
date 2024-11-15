// Función para cargar los proyectos y badges
function loadProjects() {
    // Cargar el archivo JSON
    fetch('badges.json')
        .then(response => response.json())
        .then(data => {
            const projectList = document.getElementById('project-list');
            
            // Iterar sobre los proyectos y generar el contenido HTML
            data.forEach(project => {
                const projectItem = document.createElement('li');
                projectItem.classList.add('timeline-item');
                
                const projectHTML = `
                    <div class="project-left">
                        <h3 class="timeline-title">${project.project}</h3>
                        <img src="${project.image}" alt="${project.project}" class="project-image">
                    </div>

                    <div class="project-right">
                        <p class="timeline-description">${project.description}</p>
                        
                        <div class="badge-container">
                            ${project.badges.map(badge => `
                                <span class="badge" style="background-color: ${badge.color};">
                                    <img src="${badge.icon}" alt="${badge.name}" class="badge-icon">
                                    ${badge.name}
                                </span>
                            `).join('')}
                        </div>

                        <!-- Botón Saber Más con enlace al proyecto -->
                        <a href="${project.link}" class="timeline-link" target="_blank">Saber más</a>
                    </div>
                `;
                
                projectItem.innerHTML = projectHTML;
                projectList.appendChild(projectItem);
            });
        })
        .catch(error => {
            console.error('Error cargando el archivo JSON:', error);
        });
}

// Llamar a la función para cargar los proyectos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadProjects);
