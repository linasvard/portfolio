import projects from "./data/projects.json";

export default function initProjects() {

    interface IProjects {
        id: string
        title: string
        image: string
        description: string
        github: string
        demo: string
        tag_1: string
        tag_2: string
    }

    function renderProjects(items: IProjects[]):void {
        const projectCard = document.querySelector("#projectsWrapper") as HTMLDivElement;
        if (!projectCard) return;

        const listOfProjects = [...items].sort();

        projectCard.innerHTML = listOfProjects.map((item) => `
        <div id="projectCard" class="project-card">    
            <img src="${item.image}"/>
            <div class="on-hover-card">
                <div class="about-project-wrapper">
                    <div class="project-tags">
                        <p class="basic-tag">${item.tag_1}</p>
                        <p class="basic-tag">${item.tag_2}</p>
                    </div>

                    <div>
                        <h2 class="project-heading"><span>1.${item.id}</span> ${item.title}</h2>
                        <p>${item.description}</p>
                    </div>
                </div>
                <div class="more-info-wrapper">
                    <a href="${item.demo}" class="more-info">Demo</a>
                    <a href="${item.github}" class="more-info">GitHub</a>
                </div>
            </div>
        </div>
        `).join("");
    }

    renderProjects(projects);
}