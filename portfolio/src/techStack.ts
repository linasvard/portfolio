import frontendStack from "./data/frontendStack.json";
import graphicDesignStack from "./data/graphicDesignStack.json"

export default function initTechStack() {

    interface IFrontendStack {
        name: string;
    }

    interface IGraphicDesignStack {
        name: string;
    }

    function renderFrontendStack(items: IFrontendStack[]): void {
        const frontendStack = document.querySelector("#frontendStack") as HTMLDivElement;
        if (!frontendStack) return;

        const listOfFrontend = [...items].sort();

        frontendStack.innerHTML = listOfFrontend.map((item) => `
        <div class="tech-content €{item.name}">
            <p>${item.name}</p> 
        </div>
        `).join(""); 
    }

    function renderGraphicDesignStack(items: IGraphicDesignStack[]): void {
        const graphicDesignStack = document.querySelector("#graphicDesignStack") as HTMLDListElement;
        if (!graphicDesignStack) return;

        const listOfGraphicDesign = [...items].sort();
        graphicDesignStack.innerHTML = listOfGraphicDesign.map((item) => `
        <div class="tech-content €{item.name}">
            <p>${item.name}</p> 
        </div>
        `).join("");
    }

    renderFrontendStack(frontendStack);
    renderGraphicDesignStack(graphicDesignStack);
}