import { AppState } from "../AppState.js";
import { pokemonService } from "../services/PokemonService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js"

function _drawBerriesList() {
    const berries = AppState.berries
    let htmlString = ''

    berries.forEach(berry => htmlString += berry.ListButtonHTMLTemplate)
    setHTML('berriesList', htmlString)
}

export class PokemonController {
    constructor() {
        this.getPokemonBerries()

        AppState.on('berries', _drawBerriesList)
    }
    async getPokemonBerries() {
        try {
            await pokemonService.getPokemonBerries()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }

    async getBerryDetails(berryIndex) {
        console.log('getting berry details', berryIndex);
        await pokemonService.getBerryDetails(berryIndex)
    } catch(error) {
        Pop.error(error)
        console.error(error);
    }
}