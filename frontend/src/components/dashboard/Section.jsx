const Section = ({ title, children }) => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-handwriting text-5xl text-center">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
