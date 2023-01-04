import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const FooterBar = () => {
  return(
    <div className="text-center">
      <h2 className="text-xl font-semibold">Build using</h2>
      <div className="mt-1 flex justify-center items-center gap-4">
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <div className="flex flex-col justify-center items-center font-semibold md:flex-row md:gap-2 lg:text-lg hover:text-react">
            <FaReact className="text-xl lg:text-xl" />
            <p>ReactJS</p>
          </div>
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <div className="flex flex-col justify-center items-center font-semibold md:flex-row md:gap-2 lg:text-lg hover:text-tailwind">
            <SiTailwindcss className="text-xl lg:text-xl" />
            <p>TailwindCSS</p>
          </div>
        </a>
      </div>
      <p className="mt-1 text-sm">Made with <span className="text-red-600">❤</span> Copyright &copy; 2023 <a href="https://www.linkedin.com/in/muhammad-naufal-farras/" target="_blank" rel="noreferrer" className="font-semibold hover:text-slate-300">Muhammad Naufal Farras</a></p>
    </div>
  );
};

export default FooterBar;
