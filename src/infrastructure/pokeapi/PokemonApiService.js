import { PokemonService } from '@/domain/services/PokemonService';
import { fetchPokemonList } from './PokemonApi';

export class PokemonApiService extends PokemonService {
  async fetchPokemonList(limit = 20, offset = 0) {
    return await fetchPokemonList(limit, offset);
  }
}