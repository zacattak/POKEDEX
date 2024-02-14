import { pokemonService } from "../services/PokemonService.js"
import { Pop } from "../utils/Pop.js"

export class PokemonController {
    constructor() {
        this.getPokemonBerries()
    }
    async getPokemonBerries() {
        try {
            await pokemonService.getPokemonBerries()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }
}