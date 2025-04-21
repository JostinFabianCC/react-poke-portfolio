/**
 * Caso de uso: obtener lista de Pokémon usando el servicio inyectado.
 */
export async function fetchPokemons(service, { limit = 20, offset = 0 } = {}) {
    return await service.fetchPokemonList(limit, offset);
  }