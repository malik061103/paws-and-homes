import puppy from '../assets/images/puppy.jpg'
import cat from '../assets/images/cat.jpg'

const Pictures = () => {
 const names = [" Picture"];
 const names2 = [" Picture 2"];
    return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <div className="bg-gray-400 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">DOGS</h2>
            <p className="mt-2 mb-4">
              <img className='h-50 w-auto' src={puppy}
              alt='puppy'
              />

            </p>
         
          </div>
          <div className="bg-gray-400 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">CATS</h2>
            <p className="mt-2 mb-4">
            </p>
            <img className='h-50 w-auto' src={cat}
              alt='cat'
              />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pictures