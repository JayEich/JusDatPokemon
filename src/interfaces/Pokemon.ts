export interface Pokemon {
    id: number;
    name: string;
    sprites: {
      front_default: string | null;
      other?: {
        'official-artwork'?: {
          front_default: string | null;
        };
      };
    };
  }