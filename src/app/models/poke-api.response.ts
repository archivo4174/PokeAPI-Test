export interface PokeApiResponse {
  count: number;
  next: string;
  previous: any;
  results: [PokeApiResult];
}

export  interface PokeApiResult {
  name: string;
  url: string;
}




