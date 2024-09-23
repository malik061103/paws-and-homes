import Pages from "./Pages"

const Miau = () => {
    return (
      <section className='py-4'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-row-2 gap-4 p-4 rounded-lg'>
          <Pages>
            <h2 className='text-2xl font-bold'>Cat Name</h2>
            <p className='mt-2 mb-4'>
              Cat info
            </p>           
          </Pages>

          <Pages bg='bg-indigo-100'>
            <h2 className='text-2xl font-bold'>Cat 2 Name</h2>
            <p className='mt-2 mb-4'>
              Cat 2 info
            </p>
          </Pages>
          <Pages bg='bg-indigo-100'>
            <h2 className='text-2xl font-bold'>Cat 3 Name</h2>
            <p className='mt-2 mb-4'>
              Cat 2 info
            </p>
          </Pages>

        </div>
      </div>
    </section>
    )
  }
  
  export default Miau