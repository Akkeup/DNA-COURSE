import { OrionCard } from "../../components/orion-fl-cards/orion-card.js";
import { OrionFlyingPage } from "../orion/orion-flying-page.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() {
        return document.getElementById("main-page");
    }

    getHTML() {
        return `<div id="main-page" class="d-flex flex-wrap"></div>`;
    }

    getData() {
        return [
            {
                id: 1,
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/EFT-1_launch_-_view_from_pad.jpg/1280px-EFT-1_launch_-_view_from_pad.jpg",
                title: "EFT-1",
                text: "Полет космического корябля программы Orion, 2014 года"
            }, 
            {
                id: 2,
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Artemis_1_SLS_Rollout_%28cropped%29.jpg/330px-Artemis_1_SLS_Rollout_%28cropped%29.jpg",
                title: "Artemis I",
                text: "Полет космического корябля программы Orion, 2021 года",
            },
            {
                id: 3,
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Artemis_II_Rollout_%28NHQ202601170047%29_%28cropped%29.jpg/1280px-Artemis_II_Rollout_%28NHQ202601170047%29_%28cropped%29.jpg",
                title: "Artemis II",
                text: "Полет космического корябля программы Orion, 2026 года"
            }
        ]
    }

    clickCard(e) {
        const cardId = e.target.dataset.id;
        const orionPage = new OrionFlyingPage(this.parent, cardId);
        orionPage.render();
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML("beforeend", html);

        const data = this.getData();
        data.forEach((item) => {
            const orionCard = new OrionCard(this.pageRoot);
            orionCard.render(item, this.clickCard.bind(this));
        });
    }
} 