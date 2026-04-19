import { OrionCard } from "../../components/orion-fl-cards/orion-card.js";
import { OrionFlyingPage } from "../orion/orion-flying-page.js";
import { ButtonHome } from "../../components/header/header.js";
import { sumOfSquares, isEqualObj, countPrefixes, isPalindrom1 } from "../../components/hw-cards/hw-tasks.js";
import { ajax } from "../../modules/ajax.js";
import { astronautUrls } from "../../modules/arstronautsUrls.js";
import { CreateAstronautPage } from "../create/create-astronaut-page.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
        this.currentFilter = "all";
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

                <div id="main-page" class="d-flex flex-wrap" style="margin-top: 1rem;"></div>
            `
        );
    }

    addCard() {
        const createPage = new CreateAstronautPage(this.parent);
        createPage.render();
    }

    deleteCard(e) {
        const cardId = e.target.dataset.id;
        ajax.delete(astronautUrls.removeAustronautById(cardId), (data, status) => {
            if (status == 204) {
                this.render();
            }
        });
    }

    clickCard(e) {
        const cardId = e.target.dataset.id;
        const orionPage = new OrionFlyingPage(this.parent, cardId);
        orionPage.render();
    }

    clickHome() {
        this.render();
    }

    filterCards(data, status) {
        if (!data) return [];  
        if (status === "all") return data;
        return data.filter(item => item.status === status);
    }

    getData() {
        ajax.get(astronautUrls.getAustronauts(), (data) => {
            this.renderData(data);
        });
    }

    renderData(items) {
        if (!items) return;

        const hwTasks = [
            {
                label: "1.3",
                description: "sumOfSquares(arr) — сумма квадратов элементов массива.<br><code>[2014, 2022, 2026]</code>",
                getAnswer: () => String(sumOfSquares([2014, 2022, 2026])),
            },
            {
                label: "1.7",
                description: "isEqualObj(a, b) — сравнивает два объекта.<br><code>{name: 'Glover', agency: 'NASA'}</code>",
                getAnswer: () => String(isEqualObj({ name: "Glover", agency: "NASA" }, { name: "Glover", agency: "NASA" })),
            },
            {
                label: "2.10",
                description: 'countPrefixes(words, str) — количество слов-префиксов строки.<br><code>["ar","art","artem","reid","vi","artemis"], str="artemis"</code>',
                getAnswer: () => String(countPrefixes(["ar", "art", "artem", "reid", "vi", "artemis"], "artemis")),
            },
            {
                label: "3.8 Палиндром",
                description: "isPalindrom — два решения (reverse и два указателя).<br><code>'А луна канула'</code>",
                getAnswer: () => String(isPalindrom1("А луна канула")),
            },
        ];

        const filtered = this.filterCards(items, this.currentFilter);
        filtered.forEach((item, index) => {
            const orionCard = new OrionCard(this.pageRoot);
            orionCard.render(item, this.clickCard.bind(this), this.deleteCard.bind(this), hwTasks[index]);
        });
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

        this.getData();
    }
}