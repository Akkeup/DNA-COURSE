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
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/EFT-1_launch_-_view_from_pad.jpg/1280px-EFT-1_launch_-_view_from_pad.jpg",
                title: "EFT-1",
                text: "Полет космического корябля программы Orion, 2014 года",
                status: "completed",
            }, 
            {
                id: 2,
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Artemis_1_SLS_Rollout_%28cropped%29.jpg/330px-Artemis_1_SLS_Rollout_%28cropped%29.jpg",
                title: "Artemis I",
                text: "Полет космического корябля программы Orion, 2021 года",
                status: "completed",
            },
            {
                id: 3,
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Artemis_II_Rollout_%28NHQ202601170047%29_%28cropped%29.jpg/1280px-Artemis_II_Rollout_%28NHQ202601170047%29_%28cropped%29.jpg",
                title: "Artemis II",
                text: "Полет космического корябля программы Orion, 2026 года",
                status: "upcoming",
            }
        ];
    }

    get pageRoot() {
        return document.getElementById("main-page");
    }

    getHTML() {
        return (
            `   <h1>Filter:</h1>
                <button class="btn btn-filter-all" id="filter-all">all</button>
                <button class="btn btn-filter-complited" id="filter-completed">Завершенные</button>
                <button class="btn btn-filter-upcoming" id="filter-upcoming">Планируемые</button>
                <button class="btn btn-filter-canceled" id="filter-canceled">Отмененные</button>
                <button class="btn btn-success" id="add-card">Добавить миссию</button>

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
            this.currentFilter = "completed";
            this.render();
        });
        document.getElementById("filter-upcoming").addEventListener("click", () => {
            this.currentFilter = "upcoming";
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