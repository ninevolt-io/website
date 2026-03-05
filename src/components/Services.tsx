const services = [
  {
    title: "Development",
    description:
      "Full-stack web applications with Next.js, TypeScript, and scalable architecture.",
  },
  {
    title: "Consulting",
    description:
      "Technical guidance, code reviews, and process improvements for your team.",
  },
  {
    title: "Support",
    description:
      "Ongoing maintenance, updates, and performance tuning for your products.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="border-t border-zinc-200 bg-zinc-50 px-6 py-24 dark:border-zinc-800 dark:bg-zinc-900/50"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          What we do
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
                {service.title}
              </h3>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
