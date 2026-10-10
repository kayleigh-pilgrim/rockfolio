const Input = ({ type = 'text', placeholder = '', value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full rounded-lg px-4 py-2 shadow-lg font-medium border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
    />
  );
};

export default Input;
