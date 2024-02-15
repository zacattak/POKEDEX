export class Berry {
    constructor(data) {
        this.index = data.index
        this.name = data.name
        this.url = data.url
    }

    get ListButtonHTMLTemplate() {
        return `
        <div class="mb-2"> 
            <button onclick="app.PokemonController.getBerryDetails('${this.index}')" class="w-75">${this.name}</button>
        </div>
            `
    }
}