import Pages from './Pages';
import doverman from '../assets/images/doverman.jpg'
import bulldog from '../assets/images/bulldog.jpg'
import pitbull from '../assets/images/pitbull.jpg'

const Ruff = () => {
    return (
      <section className='py-4'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-row-2 gap-4 p-4 rounded-lg'>
        <Pages bg='bg-indigo-100'>
            <h2 className='text-2xl font-bold'>Dog Name: Leon: </h2>
             <p className='mt-2 mb-4'>
              Id:     2001<br/>
              Breed:  Doverman<br/>
              Size:   Large<br/>
              Cat age:    3 Years<br/>
              Adoption Status: Avalable <br/>
              Location: 777 Kenny Ln, Orlando FL 12345
              </p>        
              <img className='h-25 w-auto' src={doverman}
              alt='doverman'/>   
          </Pages>
          <Pages bg='bg-indigo-100'>
            <h2 className='text-2xl font-bold'>Dog Name: Bronx</h2>
             <p className='mt-2 mb-4'>
              Id:     2002<br/>
              Breed:  Bulldog<br/>
              Size:   Medium<br/>
              Cat age:    4 Years<br/>
              Adoption Status: Avalable <br/>
              Location: 999 David Blvd, Bronx, NY 10047
              </p>        
              <img className='h-50 w-auto' src={bulldog}
              alt='bulldog'/>   
          </Pages>
          <Pages bg='bg-indigo-100'>
            <h2 className='text-2xl font-bold'>Cat Name: Ghost</h2>
             <p className='mt-2 mb-4'>
              Id:     2003<br/>
              Breed: Pitbull <br/>
              Size:   Large<br/>
              Cat age:    5 Years<br/>
              Adoption Status: Pending <br/>
              Location: 2233 Main Ave , Las Vegas NV 12575
              </p>           
              <img className='h-25 w-auto' src={pitbull}
              alt='pitbull'/>
          </Pages>

        </div>
      </div>
    </section>
    )
  }
  
  export default Ruff