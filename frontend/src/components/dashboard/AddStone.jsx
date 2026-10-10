import { Plus } from 'lucide-react';
import Button from '../forms/Button';
import Input from '../forms/Input';
import { useState } from 'react';
import stonesService from '../../services/stones';
import Form from '../forms/Form';

const AddStone = ({ setStones, stones, setNotification }) => {
  const [newStone, setNewStone] = useState({ name: '' });

  const addStone = (e) => {
    e.preventDefault();
    if (!newStone.name.trim()) {
      setNotification({ message: 'Rock name cannot be empty', type: 'error' });
      return;
    }

    stonesService
      .create(newStone)
      .then((addedStone) => {
        setStones([...stones, addedStone]);
        setNewStone({ name: '' });
        setNotification({ message: 'Rock added successfully', type: 'success' });
      })
      .catch((error) => {
        setNotification({ message: `Failed to add rock: ${error.response?.data?.error || error.message}`, type: 'error' });
      });
    setTimeout(() => {
      setNotification({ message: '', type: '' });
    }, 5000);
  };

  return (
    <Form type="oneLine" onSubmit={addStone}>
      <Plus aria-hidden="true" className="size-6" />
      <Input
        type="text"
        placeholder="Rock name"
        value={newStone.name}
        onChange={(e) => setNewStone({ name: e.target.value })}
      />
      <Button type="submit">Add</Button>
    </Form>
  );
};

export default AddStone;
