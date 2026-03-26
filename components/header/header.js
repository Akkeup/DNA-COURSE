export class ButtonHome {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML() {
        return (
            `
                <header class="d-flex align-items-center p-3 bg-dark">
                    <button id="home-button" class="btn btn-light" type="button">Домой</button>
                </header>
            `
        );
    }

    addListener(listener) {
        document
            .getElementById("home-button")
            .addEventListener("click", listener);
    }

    render(listener) {
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListener(listener);
    }
}