const Button = ({ children, onClick, type = 'button' }) => {
  let className =
    'inline-flex items-center gap-2 rounded-lg px-4 py-2 shadow-lg font-medium cursor-pointer duration-300 transition-all ease-in-out';
  if (type === 'submit') {
    className += ' bg-green-600 hover:bg-green-700 text-white';
  } else if (type === 'button') {
    className += ' bg-violet-700 hover:bg-violet-800 text-white';
  } else if (type === 'danger') {
    className += ' bg-red-600 hover:bg-red-700 text-white';
  }
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
