export class levelOneTwoCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    isEqualObj(obj1, obj2) {
        if (obj1 === obj2) {
            return true;
        }

        if (typeof obj1 !== "object" || typeof obj2 !== "object") {
            return false;
        }

        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) {
            return false;
        }

        for (const key of keys1) {
            if (!keys2.includes(key)) return false;
            if (!this.isEqualObj(obj1[key], obj2[key])) return false;
        }

        return true;
    }

    getHTML() {
        return (
            `
                <div class="card" style="width: 300px;">
                    <img class="card-img-top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fmomentum-media-group-pty-ltd%2Fimage%2Fupload%2Fc_fill%2Cq_auto%3Abest%2Cf_auto%2Ce_unsharp_mask%3A80%2Cw_830%2Ch_478%2FSpace%2520Connect%252Fspace-exploration-sc_fm1ysf&f=1&nofb=1&ipt=99b3bfd3e5d6d6c4e13d5a0ed8de74fbea8f49a39911f7442df46ce502275979" alt="картинка" style="height: 200px; object-fit: cover;">
                    <div class="card-body">
                        <h5 class="card-title">Level 1.2</h5>
                        <p class="card-text">Same objects?</p>
                        <button class="btn btn-primary" id="answer-btn-1-2">Answer</button>
                        <span id="result-1-2" style="margin-left: 12px; font-weight: bold;"></span>
                    </div>
                </div>
            `
        )
    }

    addListeners(data) {
        let obj1 = new Map();
        let obj2 = 1;

        document.getElementById("answer-btn-1-2").addEventListener("click", () => {
            const result = this.isEqualObj(obj1, obj2);
            document.getElementById("result-1-2").textContent = result;
        });
    }

    render(data) {
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListeners(data);
    }
}