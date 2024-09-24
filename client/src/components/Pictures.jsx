<<<<<<< HEAD
import puppy from '../assets/images/puppy.jpg'
import cat from '../assets/images/cat.jpg'
import { Link } from 'react-router-dom'

const Pictures = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <button>
            <Link to="/dogs">
            <img className='h-50 w-auto' src={puppy}
              alt='puppy'/>
             </Link>
            </button>
         
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <button>
          <Link to="/cats">
              <img className='h-50 w-auto' src={cat}
              alt='cat'/>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pictures
=======

import puppy from '../assets/images/puppy.jpg'
import cat from '../assets/images/cat.jpg'
import { Link } from 'react-router-dom'

const Pictures = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <button>
            <Link to="/dogs">
            <img className='h-50 w-auto' src={puppy}
              alt='puppy'/>
             </Link>
            </button>
         
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <button>
          <Link to="/cats">
              <img className='h-50 w-auto' src={cat}
              alt='cat'/>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pictures

>>>>>>> 24c9505ba7a343097edc26e3da8c12de1ae9d39a
