export default async function HealthPage() {
  try {
    const response = await fetch(
      process.env.HEALTH_CHECK_URL ||
        "https://jsonplaceholder.typicode.com/todos/1"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch health-check data");
    }

    const data = await response.json();

    return (
      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-green-700">
            System Health
          </p>

          <h1 className="text-4xl font-bold text-slate-900">
            Health Check
          </h1>

          <p className="mt-4 text-slate-600">
            This page verifies that the application can successfully fetch
            external data from the server.
          </p>
        </div>

        <div className="rounded-xl border border-green-200 bg-green-50 p-6">
          <p className="text-sm font-semibold text-green-800">
            ✓ Data fetch successful
          </p>

          <div className="mt-4 rounded-lg bg-white p-4">
            <p className="text-sm text-slate-500">Fetched data</p>

            <pre className="mt-2 overflow-x-auto text-sm text-slate-800">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        </div>
      </main>
    );
  } catch {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold text-slate-900">
          Health Check
        </h1>

        <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-6">
          <p className="font-semibold text-red-800">
            ✕ Data fetch failed
          </p>

          <p className="mt-2 text-sm text-red-700">
            The application could not fetch the external health-check data.
          </p>
        </div>
      </main>
    );
  }
}