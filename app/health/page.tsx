export default async function HealthPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();

  return (
    <main className="px-6 py-16">
      <h1 className="text-4xl font-bold">Health Check</h1>

      <p className="mt-4 text-green-700">
        API request successful.
      </p>

      <pre className="mt-6 rounded-lg bg-slate-100 p-4 text-sm">
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}