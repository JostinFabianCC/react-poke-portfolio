import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-900 text-center px-4"
      role="alert"
      aria-label="404 Page Not Found"
    >
      <h1 className="text-6xl font-extrabold text-red-600 dark:text-red-400 mb-4">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-zinc-800 dark:text-zinc-100">
        Page Not Found
      </h2>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 transition"
      >
        ← Go back to homepage
      </Link>
    </section>
  );
}