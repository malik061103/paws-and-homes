import Pages from './Pages';

const Ruff = () => {
    return (
      <section className='py-4'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-row-2 gap-4 p-4 rounded-lg'>
          <Pages>
            <h2 className='text-2xl font-bold'>Dog Name</h2>
            <p className='mt-2 mb-4'>
              Dog info
            </p>           
          </Pages>

          <Pages bg='bg-indigo-100'>
            <h2 className='text-2xl font-bold'>Dog 2 Name</h2>
            <p className='mt-2 mb-4'>
              Dog 2 info
            </p>
          </Pages>
          <Pages bg='bg-indigo-100'>
            <h2 className='text-2xl font-bold'>Dog 3 Name</h2>
            <p className='mt-2 mb-4'>
              Dog 2 info
            </p>
          </Pages>

        </div>
      </div>
    </section>
    )
  }
  
  export default Ruff