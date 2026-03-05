export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 px-6 py-8 dark:border-zinc-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {year} Nine Volt. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
