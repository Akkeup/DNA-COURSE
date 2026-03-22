export class levelThreeOneCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    isPolydrome_solutionOne(input) {
        const text = input.ignoreCase ? String(input.text).toLowerCase() : String(input.text);
        let chars = text.replace(/\s/g, "").split("");
        let len = chars.length;
        let i = 0;

        do {
            if (chars[i] !== chars[len - i - 1]) return false;
            i++;
        } while (chars[i] === chars[len - i - 1] && i < len / 2);

        return true;
    }

    getHTML() {
        return (
            `
                <div class="card" style="width: 300px;">
                    <img class="card-img-top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.pocketlintimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F147416-gadgets-feature-a-visual-exploration-of-our-world-and-the-depths-of-space-with-nasa-and-google-image7-bewvdzmnsw.jpg&f=1&nofb=1&ipt=c1186f2db83c9e9ebcea3a4d0c0e7356084f31ec2ec2d40b0e98d9138f489ccd" alt="картинка" style="height: 200px; object-fit: cover; background-color: #e9ecef;">
                    <div class="card-body">
                        <h5 class="card-title">Level 3</h5>
                        <p class="card-text">Polydrome</p>
                        <button class="btn btn-primary" id="answer-btn-3-1">Answer one</button>
                        <span id="result-3-1" style="margin-left: 12px; font-weight: bold;"></span>
                    </div>
                </div>
            `
        )
    }

    addListeners() {
        const input = { text: "Artemis", ignoreCase: true };

        document.getElementById("answer-btn-3-1").addEventListener("click", () => {
            const result = this.isPolydrome_solutionOne(input);
            document.getElementById("result-3-1").textContent = result;
        })
    }

    render() {
        const html = this.getHTML();
        this.parent.insertAdjacentHTML("beforeend", html);
        this.addListeners();
    }
}