import { MainPage } from "../main/main-orion-index.js";
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
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Jsc2023e0016434_alt.jpg/500px-Jsc2023e0016434_alt.jpg",
                title: "Рид Вайзман",
                text: "Командир миссии Artemis II. NASA, США.",
                accordionItems: [
                    {
                        title: "Биография",
                        body: "<b>Год рождения:</b> 1975<br><b>Место рождения:</b> Балтимор, Мэриленд, США<br><b>Гражданство:</b> США<br><b>Агентство:</b> NASA<br><b>Должность в миссии:</b> Командир",
                    },
                    {
                        title: "Образование и карьера",
                        body: "<b>Образование:</b> Бакалавр — Военно-морская академия США (1997); MBA — Университет Джонса Хопкинса (2006)<br><b>Военная карьера:</b> Лётчик-испытатель ВМС США, налетал более 2500 часов на 25+ типах самолётов<br><b>Отобран в отряд астронавтов NASA:</b> 2009 год",
                    },
                    {
                        title: "Космические полёты",
                        body: "<b>Экспедиция 40/41 на МКС (2014):</b> 167 суток на борту МКС, 2 выхода в открытый космос<br><b>Artemis II (2026):</b> Первый пилотируемый облёт Луны в рамках программы Artemis — роль Командира",
                    },
                ],
            },
            {
                id: 2,
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Jsc2023e0016433_alt.jpg/1280px-Jsc2023e0016433_alt.jpg",
                title: "Виктор Гловер",
                text: "Пилот миссии Artemis II. NASA, США.",
                accordionItems: [
                    {
                        title: "Биография",
                        body: "<b>Год рождения:</b> 1976<br><b>Место рождения:</b> Помона, Калифорния, США<br><b>Гражданство:</b> США<br><b>Агентство:</b> NASA<br><b>Должность в миссии:</b> Пилот",
                    },
                    {
                        title: "Образование и карьера",
                        body: "<b>Образование:</b> Бакалавр — Политехнический университет Калифорнии (1999); магистр — Военно-морская аспирантура и Университет Джонса Хопкинса<br><b>Военная карьера:</b> Лётчик-истребитель ВМС США, лётчик-испытатель, налетал более 3000 часов<br><b>Отобран в отряд астронавтов NASA:</b> 2013 год",
                    },
                    {
                        title: "Космические полёты",
                        body: "<b>Экспедиция 64 на МКС (2020–2021):</b> 168 суток на борту МКС (прибыл на корабле Crew Dragon), 4 выхода в открытый космос<br><b>Artemis II (2026):</b> Первый пилотируемый облёт Луны в рамках программы Artemis — роль Пилота",
                    },
                ],
            },
            {
                id: 3,
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Jsc2023e0016435_alt.jpg/1280px-Jsc2023e0016435_alt.jpg",
                title: "Кристина Кох",
                text: "Специалист миссии Artemis II. NASA, США.",
                accordionItems: [
                    {
                        title: "Биография",
                        body: "<b>Год рождения:</b> 1979<br><b>Место рождения:</b> Гранд-Рапидс, Мичиган, США<br><b>Гражданство:</b> США<br><b>Агентство:</b> NASA<br><b>Должность в миссии:</b> Специалист миссии 1",
                    },
                    {
                        title: "Образование и карьера",
                        body: "<b>Образование:</b> Бакалавр и магистр по электротехнике и физике — Государственный университет Северной Каролины (2001, 2002)<br><b>Карьера до NASA:</b> Инженер-электрик в Лаборатории прикладной физики Джонса Хопкинса, полярные исследования в Антарктиде и Арктике<br><b>Отобрана в отряд астронавтов NASA:</b> 2013 год",
                    },
                    {
                        title: "Космические полёты",
                        body: "<b>Экспедиции 59–61 на МКС (2019–2020):</b> 328 суток на борту МКС — рекорд продолжительности непрерывного полёта среди женщин; 6 выходов в открытый космос, включая первый выход только женского экипажа<br><b>Artemis II (2026):</b> Первый пилотируемый облёт Луны — станет первой женщиной, совершившей полёт к Луне",
                    },
                ],
            },
            {
                id: 4,
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jsc2023e0016436_alt2.jpg/500px-Jsc2023e0016436_alt2.jpg",
                title: "Джереми Хансен",
                text: "Специалист миссии Artemis II. CSA, Канада.",
                accordionItems: [
                    {
                        title: "Биография",
                        body: "<b>Год рождения:</b> 1976<br><b>Место рождения:</b> Лондон, Онтарио, Канада<br><b>Гражданство:</b> Канада<br><b>Агентство:</b> CSA (Канадское космическое агентство)<br><b>Должность в миссии:</b> Специалист миссии 2",
                    },
                    {
                        title: "Образование и карьера",
                        body: "<b>Образование:</b> Бакалавр по физике — Королевский военный колледж Канады (1999); магистр — Университет Куинс (2008)<br><b>Военная карьера:</b> Лётчик-истребитель Королевских ВВС Канады, налетал более 2000 часов на CF-18 Hornet и других самолётах<br><b>Отобран в отряд астронавтов CSA:</b> 2009 год",
                    },
                    {
                        title: "Космические полёты",
                        body: "<b>Предыдущие полёты:</b> Орбитальных полётов до Artemis II не совершал<br><b>Artemis II (2026):</b> Дебютный космический полёт — станет первым канадцем, совершившим полёт за пределы низкой околоземной орбиты и первым канадцем у Луны",
                    },
                ],
            },
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
        accordion.render(data.accordionItems);

        const homeButton = new ButtonHome(this.parent);
        homeButton.render(this.clickHome.bind(this));
    }
}
