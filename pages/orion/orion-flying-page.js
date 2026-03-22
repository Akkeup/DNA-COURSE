import { MainPage } from "../main/main-orion-index.js";
import { BackButtonComponent } from "../../components/back-button/back-button.js";
import { OrionComponents } from "../../components/orion/orion.js";
import { OrionAccordion } from "../../components/accordion/orion-accordion.js";
import { ButtonHome } from "../../components/header/header.js";
import { Orion3DModel } from "../../components/orion-3d/orion-3d-model.js";


export class OrionFlyingPage {
    constructor(parent, id) {
        this.parent = parent;
        this.id = id;
    }

    getData() {
        const allData = [
            {
                id: 1,
                src: "https://images-assets.nasa.gov/image/KSC-20170412-PH_LCH01_0052/KSC-20170412-PH_LCH01_0052~large.jpg?w=1920&h=1280&fit=clip&crop=faces%2Cfocalpoint",
                title: `Полет ${this.id}`,
                text: "Космический корабль EFT-1, полет 2014 года",
                goals: "Испытательный беспилотный полет для проверки теплозащиты, систем навигации и возвращения корабля в атмосферу.",
                crew: "Экипаж отсутствовал (беспилотная миссия).",
                results: "Миссия прошла успешно, все основные системы были протестированы и подтвердили готовность к дальнейшим этапам программы.",
            },
            {
                id: 2,
                src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.hdnux.com%2Fphotos%2F01%2F30%2F31%2F26%2F23172504%2F3%2FrawImage.jpg&f=1&nofb=1&ipt=69f9d92af0b48ff029c38813a69dd4b0f979d108003864d6024f66b8c25910d9",
                title: `Полет ${this.id}`,
                text: "Космический корабль Artemis I, полет 2021 года",
                goals: "Первый беспилотный полет в рамках лунной программы Artemis с целью испытания корабля в дальнем космосе и на орбите Луны.",
                crew: "Экипаж отсутствовал (беспилотная миссия).",
                results: "Корабль успешно облетел Луну и вернулся на Землю, подтвердив работоспособность ключевых систем для будущих пилотируемых миссий.",
            },
            {
                id: 3,
                src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sciencedaily.com%2Fimages%2F1920%2Fartemis-ii-preflight.webp&f=1&nofb=1&ipt=b17d71570e1995392ef73aacd313fd000d1e76d58759c782f4f1d39b1533c70b",
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

    clickHome() {
        const mainPage = new MainPage(this.parent);
        mainPage.render();
    }

    render() {
        this.parent.innerHTML = "";
        const html = this.getHTML();
        this.parent.insertAdjacentHTML("beforeend", html);

        const data = this.getData();
        const orion = new OrionComponents(this.getRoot());
        orion.render(data);

        const model3d = new Orion3DModel(this.getRoot());
        model3d.render();

        const accordion = new OrionAccordion(this.getRoot());
        accordion.render(data);

        const homeButton = new ButtonHome(this.parent);
        homeButton.render(this.clickHome.bind(this));

        const backButton = new BackButtonComponent(this.getRoot());
        backButton.render(this.clickBack.bind(this));
    }
}