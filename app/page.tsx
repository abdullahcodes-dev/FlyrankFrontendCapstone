const stats = [
  { value: "1,240+", label: "Community members" },
  { value: "86", label: "Issues resolved" },
  { value: "42", label: "Active volunteers" },
];

const quickActions = [
  {
    title: "Report an issue",
    description: "Tell your community about a problem that needs attention.",
    href: "/report",
  },
  {
    title: "Explore events",
    description: "Find activities, initiatives, and opportunities near you.",
    href: "/events",
  },
  {
    title: "Volunteer",
    description: "Give your time and skills to something that matters.",
    href: "/volunteers",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-green-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              CommuniNest
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Make your community
              <span className="block text-green-700">better, together.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Discover what is happening around you, report local issues,
              support community initiatives, and turn small actions into
              meaningful change.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/report"
                className="inline-flex items-center justify-center rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-800"
              >
                Report an issue
              </a>

              <a
                href="/events"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Explore community
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-8 text-center">
              <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick actions */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Get involved
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            There is always something you can do.
          </h2>

          <p className="mt-4 text-slate-600">
            Start with one small action and become part of a more connected
            community.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {quickActions.map((action) => (
            <a
              key={action.title}
              href={action.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:border-green-200 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-700">
                →
              </div>

              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                {action.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {action.description}
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-green-700 group-hover:underline">
                Get started →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* AI feature teaser */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 sm:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
              Coming to CommuniNest
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Not sure what to do about a community issue?
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Describe the problem and let CommuniNest help you understand
              what it is, how urgent it may be, and what your next step could
              be.
            </p>

            <div className="mt-7">
              <a
                href="/report"
                className="inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                Try reporting an issue
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}