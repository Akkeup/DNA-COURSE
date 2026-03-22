export class levelOneOneCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    sumOfSquares(arr) {
        let result = 0;

        for (let i = 0; i < arr.length; i++) {
            result += arr[i]*arr[i];
        }

        return result;
    }

    getHTML() {
        return (
            `
                <div class="card" style="width: 300px;">
                    <img class="card-img-top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fmomentum-media-group-pty-ltd%2Fimage%2Fupload%2Fc_fill%2Cq_auto%3Abest%2Cf_auto%2Ce_unsharp_mask%3A80%2Cw_830%2Ch_478%2FSpace%2520Connect%252Fspace-exploration-sc_fm1ysf&f=1&nofb=1&ipt=99b3bfd3e5d6d6c4e13d5a0ed8de74fbea8f49a39911f7442df46ce502275979" alt="картинка" style="height: 200px; object-fit: cover;">
                    <div class="card-body">
                        <h5 class="card-title">Level 1.1</h5>
                        <p class="card-text">Sum of squares</p>
                        <button class="btn btn-primary" id="answer-btn-1-1">Answer</button>
                        <span id="result-1-1" style="margin-left: 12px; font-weight: bold;"></span>
                    </div>
                </div>
            `
        )
    }

    addListeners(data) {
        const years = data.map(item => item.id !== undefined ? new Date(item.text.match(/\d{4}/)[0]).getFullYear() : 0);

        document.getElementById("answer-btn-1-1").addEventListener("click", () => {
            const result = this.sumOfSquares(years);
            document.getElementById("result-1-1").textContent = result;
        });
    }

    render(data) {
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListeners(data);
    }
}