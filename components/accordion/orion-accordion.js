export class OrionAccordion {
    constructor(parent) {
        this.parent = parent
    }

    getHTML(data) {
        return (
            `
                <div class="accordion" id="accordionExample">

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">Goals</button>
                        </h2>

                        <div id="collapseOne" class="accordion-collapse collapse">
                            <div class="accordion-body">${data.goals}</div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">Crew</button>
                        </h2>

                        <div id="collapseTwo" class="accordion-collapse collapse">
                            <div class="accordion-body">${data.crew}</div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button callapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">results</button>
                        </h2>

                        <div id="collapseThree" class="accordion-collapse collapse">
                            <div class="accordion-body">${data.results}</div>
                        </div>
                    </div>

                </div>
            `
        ); 
    }

    render(data) {
        const html = this.getHTML(data);
        this.parent.insertAdjacentHTML("beforeend", html);
    }
}