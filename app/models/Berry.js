export class Berry {
    constructor(data) {
        this.index = data.index
        this.name = data.name
        this.urlEnding = data.url
    }

    get ListButtonHTMLTemplate() {
        return `
        <div class="mb-2"> 
            <button class="w-75">${this.name}</button>
        </div>
            `
    }
}