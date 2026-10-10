import { Search } from 'lucide-react';
import Form from './Form';
import Input from './Input';

const FilterInput = ({ filter, setFilter }) => {
  return (
    <Form type="oneLine">
      <Search aria-hidden="true" className="size-5" />
      <Input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Filter by name" />
    </Form>
  );
};

export default FilterInput;
