import { OrionCard } from "../../components/orion-fl-cards/orion-card.js";
import { OrionFlyingPage } from "../orion/orion-flying-page.js";
import { ButtonHome } from "../../components/header/header.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
        this.currentFilter = "all";
        this.data = [
            {
                id: 1,
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Jsc2023e0016434_alt.jpg/500px-Jsc2023e0016434_alt.jpg",
                title: "Рид Вайзман",
                text: "Командир миссии Artemis II. NASA, США.",
                status: "commander",
            },
            {
                id: 2,
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Jsc2023e0016433_alt.jpg/1280px-Jsc2023e0016433_alt.jpg",
                title: "Виктор Гловер",
                text: "Пилот миссии Artemis II. NASA, США.",
                status: "pilot",
            },
            {
                id: 3,
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Jsc2023e0016435_alt.jpg/1280px-Jsc2023e0016435_alt.jpg",
                title: "Кристина Кох",
                text: "Специалист миссии Artemis II. NASA, США.",
                status: "specialist",
            },
            {
                id: 4,
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jsc2023e0016436_alt2.jpg/500px-Jsc2023e0016436_alt2.jpg",
                title: "Джереми Хансен",
                text: "Специалист миссии Artemis II. CSA, Канада.",
                status: "specialist",
            },
        ];
    }

    get pageRoot() {
        return document.getElementById("main-page");
    }

    getHTML() {
        return (
            `   <h1>Filter:</h1>
                <button class="btn btn-filter-all" id="filter-all">all</button>
                <button class="btn btn-filter-complited" id="filter-completed">Командир</button>
                <button class="btn btn-filter-upcoming" id="filter-upcoming">Пилот</button>
                <button class="btn btn-filter-canceled" id="filter-canceled">Специалист</button>
                <button class="btn btn-success" id="add-card">Добавить астронавта</button>

                <div style="display: grid; grid-template-columns: max-content max-content; gap: 1rem; margin-top: 1rem; align-items: start;">
                    <div id="main-page" class="d-flex flex-wrap"></div>
                    <div id="hw-cards" class="d-flex flex-wrap gap-3" style="align-items: flex-start;"></div>
                </div>
            `
        );
    }

    addCard(e) {
        const firstCard = this.data[0];
        const newCard = {...firstCard};
        newCard.id = this.data.length + 1;

        this.data.push(newCard);
        this.render();
    }

    deleteCard(e) {
        const cardId = e.target.dataset.id;
        this.data = this.data.filter(item => item.id != cardId);
        this.render();
    }

    clickCard(e) {
        const cardId = e.target.dataset.id;
        const orionPage = new OrionFlyingPage(this.parent, cardId);
        orionPage.render();
    }

    clickHome(e) {
        this.render();
    }

    filterCards(status) {
        if (status === "all") {
            return this.data;
        }

        return this.data.filter(item => item.status === status);
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML("beforeend", html);

        document.getElementById("add-card").addEventListener("click", this.addCard.bind(this));

        document.getElementById("filter-all").addEventListener("click", () => {
            this.currentFilter = "all";
            this.render();
        });
        document.getElementById("filter-completed").addEventListener("click", () => {
            this.currentFilter = "commander";
            this.render();
        });
        document.getElementById("filter-upcoming").addEventListener("click", () => {
            this.currentFilter = "pilot";
            this.render();
        });
        document.getElementById("filter-canceled").addEventListener("click", () => {
            this.currentFilter = "specialist";
            this.render();
        });

        const homeButton = new ButtonHome(this.parent);
        homeButton.render(this.clickHome.bind(this));

        this.filterCards(this.currentFilter).forEach((item) => {
            const orionCard = new OrionCard(this.pageRoot);
            orionCard.render(item, this.clickCard.bind(this), this.deleteCard.bind(this));
        });
    }
}
