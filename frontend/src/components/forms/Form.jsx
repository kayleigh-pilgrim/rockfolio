const Form = ({ children, onSubmit, type }) => {
  let className = 'flex ';
  if (type === 'oneLine') {
    className += 'flex-row gap-2 items-center';
  }
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
};

export default Form;
