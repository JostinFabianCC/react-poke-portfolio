import { usePokemons } from '@/shared/hooks/usePokemons';

export default function Pokedex() {
  const { pokemons, loading, error } = usePokemons({ limit: 30 });

  if (loading) return <p className="text-center py-10">Loading Pokémons...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      {pokemons.map((pokemon) => (
        <div key={pokemon.name} className="bg-white dark:bg-zinc-800 shadow rounded p-4 text-center">
          <p className="capitalize font-semibold">{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
}