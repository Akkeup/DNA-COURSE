export class levelTwoCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    findPrefix(str, arr) {
        let counter = 0;

        for (let i = 0; i < arr.length; i++) {
            if ((arr[i].length <= str.length) && (str.startsWith(arr[i]))) { 
                counter++;
            }
        }

        return counter;
    }

    getHTML() {
        return (
            `
                <div class="card" style="width: 300px;">
                <img class="card-img-top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.pocketlintimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F147416-gadgets-feature-a-visual-exploration-of-our-world-and-the-depths-of-space-with-nasa-and-google-image20-g2squkaxr1.jpg&f=1&nofb=1&ipt=417a455a955fd3185a04fdd0b44a953ae3333924658fa7033438688e69c60db3" alt="картинка" style="height: 200px; object-fit: cover; background-color: #e9ecef;">
                <div class="card-body">
                    <h5 class="card-title">Level 2</h5>
                    <p class="card-text">Check prefix's</p>
                    <button class="btn btn-primary" id="answer-btn-2">Answer</button>
                    <span id="result-2" style="margin-left: 12px; font=weight: bold;"></span>
                </div>
            </div>
            `
        )
    }

    addListeners() {
        const str = "Artemis";
        const arr = ["Art", "A", "temis", "Artemis"];

        document.getElementById("answer-btn-2").addEventListener("click", () => {
            const result = this.findPrefix(str, arr);
            document.getElementById("result-2").textContent = result;
        })
    }

    render() {
        const html = this.getHTML();
        this.parent.insertAdjacentHTML("beforeend", html);
        this.addListeners();
    }
}