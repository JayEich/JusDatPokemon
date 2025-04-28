// src/interfaces/Pokemon.ts
export interface Pokemon {
    id: number;
    name: string;
    sprites: {
      front_default: string | null; // Imagen pixelada frontal
      other?: {                // Otras imágenes (suelen ser de mejor calidad)
        'official-artwork'?: {
          front_default: string | null;
        };
        // Podrías añadir más vistas como 'dream_world', etc.
      };
      // Podrías añadir más sprites como back_default, etc.
    };
    // Añade aquí otros campos si los necesitas más adelante (types, abilities, etc.)
  }