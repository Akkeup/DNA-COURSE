import { MainPage } from "../main/main-orion-index.js";
import { ButtonHome } from "../../components/header/header.js";

export class CreateAstronautPage {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML() {
        return `
            <div id="create-page" style="max-width: 500px; margin: 2rem auto;">
                <h2>Добавить астронавта</h2>
                <div class="mb-3">
                    <label class="form-label">Имя</label>
                    <input type="text" class="form-control" id="input-title">
                </div>
                <div class="mb-3">
                    <label class="form-label">Описание</label>
                    <input type="text" class="form-control" id="input-text">
                </div>
                <div class="mb-3">
                    <label class="form-label">Страна</label>
                    <input type="text" class="form-control" id="input-country">
                </div>
                <div class="mb-3">
                    <label class="form-label">Статус</label>
                    <select class="form-control" id="input-status">
                        <option value="commander">Командир</option>
                        <option value="pilot">Пилот</option>
                        <option value="specialist">Специалист</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label class="form-label">Дата рождения</label>
                    <input type="date" class="form-control" id="input-birthDate">
                </div>
                <div class="mb-3">
                    <label class="form-label">Фото (URL)</label>
                    <input type="text" class="form-control" id="input-src">
                </div>
                <p class="text-muted" style="margin-top: 1rem;">Создание недоступно: POST-запрос с Content-Type: application/json вызывает CORS preflight, который не обходится расширением.</p>
            </div>
        `;
    }

    clickHome() {
        const mainPage = new MainPage(this.parent);
        mainPage.render();
    }

    render() {
        this.parent.innerHTML = "";
        const html = this.getHTML();
        this.parent.insertAdjacentHTML("beforeend", html);

        const homeButton = new ButtonHome(this.parent);
        homeButton.render(this.clickHome.bind(this));
    }
}