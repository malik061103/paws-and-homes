<<<<<<< HEAD
import { Link } from 'react-router-dom'

=======
>>>>>>> c5867d95ea688cc8a668a4ab0dbc37eafe9c6474
const Navbar = () => {
  return (
    <nav className="bg-blue-600 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
<<<<<<< HEAD
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
           <Link>
              <span className="hidden md:block text-white text-2xl font-bold ml-2"
                >PAWS AND HOMES</span>
            </Link>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <Link
                  to="/"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >HOME</Link>
                <Link
                  to="/dogs"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >DOGS</Link>
                <Link
                  to="/cats"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >CATS</Link>
                <Link
                  to="/adoption"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >ADOPTION</Link>
=======
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
           <a>
              <span className="hidden md:block text-white text-2xl font-bold ml-2"
                >PAWS AND HOMES</span
              >
            </a>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <a
                  href="/dogs"
                  className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >DOGS</a
                >
                <a
                  href="/cats"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >CATS</a
                >
                <a
                  href="/adoption"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >ADOPTION</a
                >
>>>>>>> c5867d95ea688cc8a668a4ab0dbc37eafe9c6474
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;