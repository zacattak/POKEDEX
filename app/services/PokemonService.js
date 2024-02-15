import { AppState } from "../AppState.js";
import { Berry } from "../models/Berry.js"
import { pokeAPI } from "./AxiosService.js"

class PokemonService {
    async getPokemonBerries() {

        const response = await pokeAPI.get('/api/v2/berry')

        console.log('check out the berry!', response.data)

        const newBerries = response.data.results.map(berryPOJO => new Berry(berryPOJO))

        AppState.berries = newBerries

    }

    async getBerryDetails(berryIndex) {
        const response = await pokeAPI.get(`/api/v2/berry${berryIndex}`)
    }
}

export const pokemonService = new PokemonService()