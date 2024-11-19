function loadProjects() {
    fetch('badges.json')
        .then(response => response.json())
        .then(data => {
            const projectList = document.getElementById('project-list');

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

                        <a href="${project.link}" class="timeline-link shadow__btn" target="_blank">Saber más</a>
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

document.addEventListener('DOMContentLoaded', loadProjects);
