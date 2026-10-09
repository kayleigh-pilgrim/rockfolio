import { Plus, Search } from 'lucide-react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Header />
        <main className="px-4">
          <header className="space-y-6">
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-1">
                <h2 className="text-3xl font-medium tracking-tight">Your crystal collection</h2>
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-lg bg-violet-700 px-4 py-2 font-medium text-white hover:bg-violet-800"
                >
                  <Plus aria-hidden="true" className="size-5" />
                  Add crystal
                </button>

                <button
                  type="button"
                  aria-label="Search collection"
                  className="rounded-lg border border-slate-300 p-2 text-slate-700 hover:bg-slate-100"
                >
                  <Search aria-hidden="true" className="size-5" />
                </button>
              </div>
            </div>
          </header>
        </main>
      </div>
      <Footer />
    </div>
  );
}
