export class OrionAccordion {
    constructor(parent) {
        this.parent = parent
    }

    getHTML(items) {
        const accordionItems = items.map((item, index) => {
            const collapseId = `collapseAccordion${index}`;
            const btnClass = index === 0 ? 'accordion-button' : 'accordion-button collapsed';
            return `
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="${btnClass}" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}">${item.title}</button>
                    </h2>
                    <div id="${collapseId}" class="accordion-collapse collapse">
                        <div class="accordion-body">${item.body}</div>
                    </div>
                </div>
            `;
        }).join('');

        return `<div class="accordion" id="accordionExample">${accordionItems}</div>`;
    }

    render(items) {
        const html = this.getHTML(items);
        this.parent.insertAdjacentHTML("beforeend", html);
    }
}
