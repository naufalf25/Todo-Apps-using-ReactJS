import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';

const NavBar = ({ theme, toggleTheme }) => {
  return(
    <nav className="flex justify-between items-center dark:text-white">
      <div>
        <h1 className="text-2xl font-bold"><a href="/">Todo List App</a></h1>
      </div>
      <div>
        {theme === 'dark' ? <BsSunFill className="text-xl cursor-pointer" onClick={() => toggleTheme()} /> : <BsFillMoonStarsFill className="text-xl cursor-pointer" onClick={() => toggleTheme()} />}
      </div>
    </nav>
  );
}

export default NavBar;
