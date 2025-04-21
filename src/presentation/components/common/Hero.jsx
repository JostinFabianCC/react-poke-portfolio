import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-blue-50 to-white dark:from-zinc-800 dark:to-zinc-900 py-20 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white leading-tight">
            Welcome to <span className="text-blue-600 dark:text-blue-400">Pokefolio</span>
          </h1>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300 text-lg">
            Your modern Pokémon showcase built with React, Vite, and Tailwind CSS.
          </p>

          <Link
            to="/pokemon"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 transition"
          >
            Browse Pokédex
          </Link>
        </div>

        <img
          src="/assets/hero-pokemon.svg"
          alt="Hero Pokémon illustration"
          className="mt-10 md:mt-0 w-72 md:w-96"
          loading="lazy"
        />
      </div>
    </section>
  );
}