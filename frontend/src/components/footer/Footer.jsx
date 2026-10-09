import { Gem } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="p-4">
      <div className="flex flex-col items-center justify-center -mb-6">
        <Gem aria-hidden="true" className="size-8 shrink-0 text-violet-700" />
        <p className="text-center font-handwriting text-2xl text-violet-700">Every stone has a story.</p>
      </div>
      <div className="flex items-end justify-between">
        <p>&copy; {new Date().getFullYear()} Kayleigh Pilgrim. All rights reserved.</p>

        <div>Legal stuff</div>
      </div>
    </footer>
  );
};

export default Footer;
