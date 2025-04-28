
import axios from 'axios'; 
import { Pokemon } from '../interfaces/Pokemon.ts';

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

// Función para obtener un número aleatorio entre min y max (incluidos)
const getRandomId = (min = 1, max = 151): number => { // [cite: 4] (Limitado a la primera generación)
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomPokemon = async (): Promise<Pokemon> => {
  const randomId = getRandomId();
  try {
    const response = await axios.get<Pokemon>(`${POKEAPI_BASE_URL}/${randomId}`);
    // Seleccionamos la imagen que prefiramos [cite: 5]
    const imageUrl = response.data.sprites.other?.['official-artwork']?.front_default ?? response.data.sprites.front_default;
    return {
        id: response.data.id,
        name: response.data.name,
        sprites: {
             front_default: response.data.sprites.front_default, // Guardamos varias por si acaso
             other: {
                 'official-artwork': {
                     front_default: imageUrl
                 }
             }
        }
       // Puedes añadir más campos si los necesitas (ej. types, abilities)
    };
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    throw new Error('Could not fetch Pokémon');
  }
};