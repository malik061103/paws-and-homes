import Pages from "./Pages"
import ragdoll from '../assets/images/ragdoll.jpg'
import Tabby1 from '../assets/images/Tabby1.jpg'
import british from '../assets/images/british.jpg'

const Miau = () => {
    return (
      <section className='py-4'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-row-2 gap-4 p-4 rounded-lg'>
          <Pages bg='bg-indigo-100'>
            <h2 className='text-2xl font-bold'>Cat Name: Ghost</h2>
             <p className='mt-2 mb-4'>
              Id:     1001<br/>
              Breed:  Tabby<br/>
              Size:   Medium<br/>
              Cat age:    2 Years<br/>
              Adoption Status: Avalable <br/>
              Location: 555 Malik Ln, Huston Tx 12345
              </p>        
              
            <img className='h-25 w-auto' src={Tabby1}
              alt='Tabby1'/>
            
          </Pages>
          <Pages bg='bg-indigo-100'>
            <h2 className='text-2xl font-bold'>Cat Name: Leo</h2>
             <p className='mt-2 mb-4'>
              Id:     1002<br/>
              Breed:  Ragdoll<br/>
              Size:   Medium<br/>
              Cat age:    4 Years<br/>
              Adoption Status: Avalable <br/>
              Location: 666 Cody Dr, Atlanta, GA 13347
              </p>     
              <img className='h-25 w-auto' src={ragdoll}
              alt='ragdoll'/>      
          </Pages>
          <Pages bg='bg-indigo-100'>
            <h2 className='text-2xl font-bold'>Cat Name: Venom</h2>
             <p className='mt-2 mb-4'>
              Id:     1003<br/>
              Breed:  British Shorthair<br/>
              Size:   Large<br/>
              Cat age:    2 Years<br/>
              Adoption Status: Pending <br/>
              Location: 222 Nino Ave , SeaSide NJ 12555
              </p>     
              <img className='h-25 w-auto' src={british}
              alt='british'/>       
          </Pages>
                
        </div>
      </div>
    </section>
    )
  }
  
  export default Miau