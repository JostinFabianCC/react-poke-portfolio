import { Link, NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Pokémon", path: "/pokemon" },
];

export default function Header() {
  return (
    <header className="bg-white dark:bg-zinc-900 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Pokefolio
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex gap-6 text-sm font-medium text-zinc-700 dark:text-zinc-200">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "underline underline-offset-4 text-blue-600 dark:text-blue-400"
                      : "hover:text-blue-600 dark:hover:text-blue-400"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}