import { useState, useEffect } from 'react';
import { PokemonApiService } from '@/infrastructure/pokeapi/PokemonApiService';
import { fetchPokemons } from '@/application/usecases/fetchPokemons';

export function usePokemons({ limit = 20, offset = 0 } = {}) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const service = new PokemonApiService();

    fetchPokemons(service, { limit, offset })
      .then((data) => setPokemons(data.results))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [limit, offset]);

  return { pokemons, loading, error };
}