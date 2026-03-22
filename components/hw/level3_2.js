export class levelThreeTwoCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    isPolydrome_solutionTwo(str) {
        const normalized = String(str).toLowerCase().replace(/\s/g, "");
        let reverseNormalized = normalized.split("").reverse().join("");

        if (normalized === reverseNormalized) {
            return true;
        } else {
            return false;
        }
    }

    getHTML() {
        return (
            `
                <div class="card" style="width: 300px;">
                    <img class="card-img-top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.pocketlintimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F147416-gadgets-feature-a-visual-exploration-of-our-world-and-the-depths-of-space-with-nasa-and-google-image7-bewvdzmnsw.jpg&f=1&nofb=1&ipt=c1186f2db83c9e9ebcea3a4d0c0e7356084f31ec2ec2d40b0e98d9138f489ccd" alt="картинка" style="height: 200px; object-fit: cover; background-color: #e9ecef;">
                    <div class="card-body">
                        <h5 class="card-title">Level 3</h5>
                        <p class="card-text">Polydrome</p>
                        <button class="btn btn-primary" id="answer-btn-3-2">Answer two</button>
                        <span id="result-3-2" style="margin-left: 12px; font-weight: bold;"></span>
                    </div>
                </div>
            `
        )
    }

    addListeners() {
        const str = "Artemis"; // ARTRA

        document.getElementById("answer-btn-3-2").addEventListener("click", () => {
            const result = this.isPolydrome_solutionTwo(str);
            document.getElementById("result-3-2").textContent = result;
        })
    }

    render() {
        const html = this.getHTML();
        this.parent.insertAdjacentHTML("beforeend", html);
        this.addListeners();
    }
}