import { pokeAPI } from "./AxiosService.js"

class PokemonService {
    async getPokemonBerries() {

        const response = await pokeAPI.get('api/berry')

        console.log('check out the berry!', response.data)

    }
}

export const pokemonService = new PokemonService()