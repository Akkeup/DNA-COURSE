export class HwCard {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(task) {
        return `
            <div class="card hw-card" style="width: 300px;" id="hw-card-${task.id}">
                <div class="card-body d-flex flex-column gap-2">
                    <h6 class="card-subtitle text-muted">Задача ${task.label}</h6>
                    <p class="card-text" style="font-size: 0.85rem;">${task.description}</p>
                    <button class="btn btn-outline-primary btn-sm hw-answer-btn" data-id="${task.id}">Ответ</button>
                    <div class="hw-answer-block" id="hw-answer-${task.id}" style="display:none; background:#f8f9fa; border-radius:6px; padding:8px; font-size:0.85rem; font-family:monospace; white-space:pre-wrap;"></div>
                </div>
            </div>
        `;
    }

    render(task) {
        this.parent.insertAdjacentHTML("beforeend", this.getHTML(task));

        document
            .querySelector(`#hw-card-${task.id} .hw-answer-btn`)
            .addEventListener("click", () => {
                const block = document.getElementById(`hw-answer-${task.id}`);
                if (block.style.display === "none") {
                    block.innerHTML = task.getAnswer();
                    block.style.display = "block";
                } else {
                    block.style.display = "none";
                }
            });
    }
}
