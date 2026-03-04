import { MainPage } from "../main/main-orion-index.js";
import { BackButtonComponent } from "../../components/back-button/back-button.js";
import { OrionComponents } from "../../components/orion/orion.js";
import { OrionAccordion } from "../../components/accordion/orion-accordion.js";


export class OrionFlyingPage {
    constructor(parent, id) {
        this.parent = parent;
        this.id = id;
    }

    getData() {
        const allData = [
            {
                id: 1,
                src: "",
                title: `Полет ${this.id}`,
                text: "Космический корабль EFT-1, полет 2014 года",
                goals: "Испытательный беспилотный полет для проверки теплозащиты, систем навигации и возвращения корабля в атмосферу.",
                crew: "Экипаж отсутствовал (беспилотная миссия).",
                results: "Миссия прошла успешно, все основные системы были протестированы и подтвердили готовность к дальнейшим этапам программы.",
            },
            {
                id: 2,
                src: "",
                title: `Полет ${this.id}`,
                text: "Космический корабль Artemis I, полет 2021 года",
                goals: "Первый беспилотный полет в рамках лунной программы Artemis с целью испытания корабля в дальнем космосе и на орбите Луны.",
                crew: "Экипаж отсутствовал (беспилотная миссия).",
                results: "Корабль успешно облетел Луну и вернулся на Землю, подтвердив работоспособность ключевых систем для будущих пилотируемых миссий.",
            },
            {
                id: 3,
                src: "",
                title: `Полет ${this.id}`,
                text: "Космический корабль Artemis II, полет 2026 года",
                goals: "Первый пилотируемый полет программы Artemis с облетом Луны для проверки систем жизнеобеспечения и работы экипажа в дальнем космосе.",
                crew: "Четыре астронавта NASA: Reid Wiseman, Voctor Glover, Christina Koch, Jeremy Hansen",
                results: "Миссия запланирована; ожидает орбитальный облет Луны и возвращение на Землю.",
            }
        ];

        return allData.find(item => item.id == this.id);
    }

    getRoot() {
        return document.getElementById("orion-flying-page");
    }

    getHTML() {
        return (
            `
            <div id="orion-flying-page"></div>
            `
        );
    }

    clickBack() {
        const mainPage = new MainPage(this.parent);
        mainPage.render();
    }

    render() {
        this.parent.innerHTML = "";
        const html = this.getHTML();
        this.parent.insertAdjacentHTML("beforeend", html);

        const backButton = new BackButtonComponent(this.getRoot());
        backButton.render(this.clickBack.bind(this));

        const data = this.getData();
        const orion = new OrionComponents(this.getRoot());
        orion.render(data);

        const accordion = new OrionAccordion(this.getRoot());
        accordion.render(data);
    }
}