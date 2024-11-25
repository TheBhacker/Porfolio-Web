function loadProjects() {
    // Cargar el archivo JSON
    fetch('badges.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar el archivo JSON: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const projectList = document.getElementById('project-list');

            // Iterar sobre los proyectos y generar el contenido HTML
            data.forEach(project => {
                const projectItem = document.createElement('li');
                projectItem.classList.add('timeline-item');

                // Crear la estructura HTML para cada proyecto
                const projectHTML = `
                    <div class="project-left">
                        <h3 class="timeline-title">${project.project}</h3>
                        <img src="${project.image}" alt="${project.project}" class="project-image">
                    </div>

                    <div class="project-right">
                        <p class="timeline-description">${project.description}</p>
                        
                        <!-- Contenedor de badges -->
                        <div class="badge-container">
                            ${project.badges.map(badge => `
                                <span class="badge" style="background-color: ${badge.color};">
                                    <img src="${badge.icon}" alt="${badge.name}" class="badge-icon">
                                    ${badge.name}
                                </span>
                            `).join('')}
                        </div>

                        <!-- Botón Saber Más -->
                        <a href="${project.link}" class="timeline-link shadow__btn" target="_blank" rel="noopener noreferrer">
                            Saber más
                        </a>
                    </div>
                `;

                // Asignar el contenido generado al proyecto
                projectItem.innerHTML = projectHTML;

                // Añadir el proyecto al contenedor
                projectList.appendChild(projectItem);
            });
        })
        .catch(error => {
            console.error('Error cargando los proyectos:', error);
        });
}

// Ejecutar la función una vez que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', loadProjects);
