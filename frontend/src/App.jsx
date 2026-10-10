import { useEffect, useState } from 'react';
import AddStone from './components/dashboard/AddStone';
import ListStones from './components/dashboard/ListStones';
import FilterInput from './components/forms/FilterInput';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Notification from './components/notifications/Notification';
import stonesService from './services/stones';
import Section from './components/dashboard/Section';

export default function App() {
  const [stones, setStones] = useState(null);
  const [stoneFilter, setStoneFilter] = useState('');
  const [notification, setNotification] = useState({
    message: '',
    type: '',
  });

  useEffect(() => {
    stonesService
      .getAll()
      .then((stones) => setStones(stones))
      .catch((error) => {
        setNotification({
          message: `Failed to fetch stones: ${error.response?.data?.error || error.message}`,
          type: 'error',
        });
      });
    setTimeout(() => {
      setNotification({
        message: '',
        type: '',
      });
    }, 5000);
  }, []);

  if (!stones) return <p>Loading...</p>;

  const filteredStones = stones
    .filter((stone) => stone.name.toLowerCase().includes(stoneFilter.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Header />
        <main className="px-4 grid grid-cols-3 gap-4">
          <Section title="Rocks">
            <AddStone setStones={setStones} stones={stones} setNotification={setNotification} />
            <FilterInput filter={stoneFilter} setFilter={setStoneFilter} />
            <ListStones stones={filteredStones} setStones={setStones} setNotification={setNotification} />
          </Section>
        </main>
      </div>
      <Footer />
      <Notification message={notification.message} type={notification.type} />
    </div>
  );
}
