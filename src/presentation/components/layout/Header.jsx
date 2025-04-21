export default function Header() {
    return (
      <header className="bg-gray-800 text-white p-4 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Pokefolio</h1>
          <nav className="space-x-4">
            <a href="/" className="hover:underline">Home</a>
          </nav>
        </div>
      </header>
    );
  }