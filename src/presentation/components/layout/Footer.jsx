export default function Footer() {
    return (
      <footer className="bg-zinc-100 dark:bg-zinc-950 text-center text-sm text-zinc-500 dark:text-zinc-400 py-6 mt-10">
        <p>
          Made with ❤️ by <strong className="text-blue-600 dark:text-blue-400">Jostin</strong> – Pokefolio Project © {new Date().getFullYear()}
        </p>
        <p className="mt-1">
          <a
            href="https://github.com/jostinfabian/react-poke-portfolio"
            className="hover:underline text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </p>
      </footer>
    );
  }