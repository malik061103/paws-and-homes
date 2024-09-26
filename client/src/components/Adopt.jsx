import { useState } from 'react';

const Adopt = ({ Adopt }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [type, setType] = useState('Dog');
  const [contactPhone, setContactPhone] = useState('');

  const [petId, setPetId] = useState('');

  const [contactEmail, setContactEmail] = useState('');
  
  const [description, setDescription] = useState('');


  const submitForm = (e) => {
    e.preventDefault();

    const newForm = {
      firstName,
      lastName,
      type,
      description,
      contactEmail,
      contactPhone,
    };
    console.log(newForm);
  };

    return (
   <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Adoption Application</h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">First Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="First Name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Last Name</label>
              <input
                type="text"
                id="last"
                name="last"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Last Name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="contact_phone" className="block text-gray-700 font-bold mb-2">Contact Phone</label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Phone Number"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="contact_email" className="block text-gray-700 font-bold mb-2">Contact Email</label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                />
            </div>
            <div className="mb-4">

              <label htmlFor="contact_email" className="block text-gray-700 font-bold mb-2">Pet Id</label>

              <label htmlFor="contact_email" className="block text-gray-700 font-bold mb-2">Contact Email</label>

              <input
                type="id"
                id="pet_id"
                name="pet_id"
                className="border rounded w-full py-2 px-3"
                placeholder="Desired Pet Id"
                required
                value={petId}
                onChange={(e) => setPetId(e.target.value)}
                />
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Animal Type</label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
                >
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Describe Why you want to Adopt</label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Write Your Comments"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    )
  }
 export default Adopt