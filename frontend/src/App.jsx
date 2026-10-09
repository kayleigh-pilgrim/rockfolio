import { useState } from 'react';

export default function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function checkBackend() {
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/hello');

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      const data = await response.json();
      setMessage(data.message);
    } catch (err) {
      console.error(err);
      setMessage('Could not connect to the backend.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight">React + Express</h1>

        <p className="mt-4 text-slate-400">Your frontend is ready—with Tailwind.</p>

        <button
          type="button"
          onClick={checkBackend}
          disabled={loading}
          className="mt-6 cursor-pointer rounded-lg bg-indigo-600 px-4 py-3 font-semibold transition-colors hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 disabled:cursor-wait disabled:opacity-50"
        >
          {loading ? 'Connecting…' : 'Check backend connection'}
        </button>

        <p role="status" className="mt-4 text-sm text-slate-300">
          {message}
        </p>
      </div>
    </main>
  );
}
