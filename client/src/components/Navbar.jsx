import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

 return (
    <nav className="bg-blue-600 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
           <NavLink>
              <span className="hidden md:block text-white text-2xl font-bold ml-2"
                >PAWS AND HOMES</span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={linkClass}
                  >HOME</NavLink>
                <NavLink
                  to="/dogs"
                  className={linkClass}
                  >DOGS</NavLink>
                <NavLink
                  to="/cats"
                  className={linkClass}
                  >CATS</NavLink>
                <NavLink
                  to="/adoption"
                  className={linkClass}
                  >ADOPTION</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;