import frontendStack from "./data/frontendStack.json";
import graphicDesignStack from "./data/graphicDesignStack.json"

export default function initTechStack() {

    interface IFrontendStack {
        name: string;
        color: string;
    }

    interface IGraphicDesignStack {
        name: string;
        background: string;
        color: string;
    }

    function renderFrontendStack(items: IFrontendStack[]): void {
        const frontendStack = document.querySelector("#frontendStack") as HTMLDivElement;
        if (!frontendStack) return;

        const listOfFrontend = [...items].sort();

        frontendStack.innerHTML = listOfFrontend.map((item) => `
        <div style="background-color: ${item.color}" class="${item.name} tech-content">
            <p>${item.name}</p> 
        </div>
        `).join(""); 
    }

    function renderGraphicDesignStack(items: IGraphicDesignStack[]): void {
        const graphicDesignStack = document.querySelector("#graphicDesignStack") as HTMLDListElement;
        if (!graphicDesignStack) return;

        const listOfGraphicDesign = [...items].sort();
        graphicDesignStack.innerHTML = listOfGraphicDesign.map((item) => `
        <div style="background-color: ${item.background}" class="tech-content ${item.name}">
            <p style="color: ${item.color};">${item.name}</p> 
        </div>
        `).join("");
    }

    renderFrontendStack(frontendStack);
    renderGraphicDesignStack(graphicDesignStack);
}