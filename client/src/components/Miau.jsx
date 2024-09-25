import React, { useState } from 'react';

import Pages from "./Pages";

const Miau = () => {
  const [catName, setCatName] = useState('');

  const [catInfo, setCatInfo] = useState('');

  const [catImage, setCatImage] = useState(null);

  const [isAdoptable, setIsAdoptable] = useState(false);

  const [cats, setCats] = useState([]);

  const handleSubmit = (e) => {

    preventDefault();

    if (catName && catInfo) {

      const newCat = { name: catName, info: catInfo, image: catImage, isAdoptable };
      const updatedCats = editIndex !== null 
        ? cats.map((cat, index) => index === editIndex ? newCat : cat)
        : [...cats, newCat];

      setCats(updatedCats);

      resetForm();
    }
  };

  const handleEdit = (index) => {

    const catToEdit = cats[index];

    setCatName(catToEdit.name);

    setCatInfo(catToEdit.info);

    setCatImage(catToEdit.image);

    setIsAdoptable(catToEdit.isAdoptable);

    setEditIndex(index);
  };

  const resetForm = () => {

    setCatName('');

    setCatInfo('');

    setCatImage(null);

    setIsAdoptable(false);

    setEditIndex(null);
  };

  return (

    <section className='py-4'>

      <div className='container-xl lg:container m-auto'>

        <form onSubmit={handleSubmit} className='mb-4'>

          <input
            type="text"
            placeholder="Cat Name"
            value={catName}
            onChange={(e) => setCatName(e.target.value)}
            className='border rounded px-2 py-1 mr-2'
            required
          />
          
          <input
            type="text"
            placeholder="Cat Info"
            value={catInfo}
            onChange={(e) => setCatInfo(e.target.value)}
            className='border rounded px-2 py-1 mr-2'
            required
          />
          <input
            type="file"
            onChange={(e) => setCatImage(URL.createObjectURL(e.target.files[0]))}
            className='border rounded px-2 py-1 mr-2'
          />
          <label className='flex items-center mr-2'>
           <input
            type="checkbox"
            checked={isAdoptable}
            onChange={() => setIsAdoptable(!isAdoptable)}
             className='mr-3'
            />
          

          </label>
          <button type="submit" className='bg-blue-400 text-white rounded px-3 py-1'>
           {editIndex !== null ? 'Update-Cat' : 'Add-Cat'}

          </button>
        </form>

        <div className='grid grid-cols-1 md:grid-row-2 gap-4 p-4 rounded-lg'>
          
         {cats.map((cat, index) => (

         <Pages key={index} bg={index % 2 === 0 ? 'bg-indigo-100' : ''}>
             
         {cat.image && <img src={cat.image} alt={cat.name} className='w-full h-32 object-cover' />}
              
         <h2 className='text-2xl font-bold'>{cat.name}</h2>
             
          <p className='mt-2 mb-4'>{cat.info}</p>
              
          <p className='font-semibold'>{cat.isAdoptable ? 'Available for Adoption' : 'Not Available for Adoption'}</p>
             
           <button onClick={() => handleEdit(index)} className='text-blue-500'>Edit</button>
            
          </Pages>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Miau;
