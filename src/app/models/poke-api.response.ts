export interface PokeApiResponse {
  count: number;
  next: string;
  previous: any;
  results: [PokeApiResult];
}

interface PokeApiResult {
  name: string;
  url: string;
}
