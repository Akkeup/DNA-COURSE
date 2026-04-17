class AstronautUrls {
    constructor() {
        this.baseUrl = 'http://localhost:3000';
    }

    getAustronauts() {
        return `${this.baseUrl}/astronauts`;
    }

    getAustronautById(id) {
        return `${this.baseUrl}/astronauts/${id}`;
    }

    createAustronaut() {
        return `${this.baseUrl}/astronauts`;
    }

    removeAustronautById(id) {
        return `${this.baseUrl}/astronauts/${id}`;
    }

    updateAustronautById(id) {
        return `${this.baseUrl}/astronauts/${id}`;
    }
}

export const astronautUrls = new AstronautUrls();