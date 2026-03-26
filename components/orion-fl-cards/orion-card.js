export class OrionCard {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data, task) {
        const hwSection = task ? `
            <hr>
            <p class="text-muted mb-1" style="font-size:0.75rem;"><strong>Задача ${task.label}</strong></p>
            <p style="font-size:0.8rem;">${task.description}</p>
            <button class="btn btn-outline-secondary btn-sm" id="hw-btn-${data.id}">Ответ</button>
            <div id="hw-answer-${data.id}" style="display:none; margin-top:8px; background:#f8f9fa; border-radius:6px; padding:8px; font-size:0.8rem; font-family:monospace; white-space:pre-wrap;"></div>
        ` : "";

        return (
            `
                <div class="card" style="width: 300px;">
                    <img class="card-img-top" src="${data.src}" alt="картинка" style="height: 520px; object-fit: cover;">
                    <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text">${data.text}</p>
                        <button class="btn btn-primary" id="click-card-${data.id}" data-id="${data.id}">Подробнее</button>
                        <button class="btn btn-danger" id="delete-card-${data.id}" data-id="${data.id}">Удалить</button>
                        ${hwSection}
                    </div>
                </div>
            `
        )
    }

    addListener(data, listener, deleteListener, task) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener);

        document
            .getElementById(`delete-card-${data.id}`)
            .addEventListener("click", deleteListener);

        if (task) {
            document.getElementById(`hw-btn-${data.id}`).addEventListener("click", () => {
                const block = document.getElementById(`hw-answer-${data.id}`);
                if (block.style.display === "none") {
                    block.innerHTML = task.getAnswer();
                    block.style.display = "block";
                } else {
                    block.style.display = "none";
                }
            });
        }
    }

    render(data, listener, deleteListener, task) {
        const html = this.getHTML(data, task);
        this.parent.insertAdjacentHTML("beforeend", html);
        this.addListener(data, listener, deleteListener, task);
    }
}