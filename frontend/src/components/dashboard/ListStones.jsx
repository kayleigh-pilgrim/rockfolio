import stonesService from '../../services/stones';
import Button from '../forms/Button';

const ListStones = ({ stones, setStones, setNotification }) => {
  const deleteStone = (id) => {
    if (!window.confirm('Are you sure you want to delete this rock?')) return;

    stonesService
      .remove(id)
      .then(() => {
        setStones(stones.filter((stone) => stone._id !== id));
        setNotification({ message: 'Rock deleted successfully', type: 'success' });
        setTimeout(() => {
          setNotification({ message: '', type: '' });
        }, 5000);
      })
      .catch((error) => {
        setNotification({ message: `Failed to delete rock: ${error.response?.data?.error || error.message}`, type: 'error' });
        setTimeout(() => {
          setNotification({ message: '', type: '' });
        }, 5000);
      });
  };

  return (
    <ul className="w-fit flex flex-wrap gap-4">
      {stones.map((stone) => (
        <li key={stone._id} className="justify-between items-center text-lg gap-2 inline-flex">
          {stone.name}
          <Button type="danger" onClick={() => deleteStone(stone._id)} aria-label="Delete rock">
            ✘
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default ListStones;
