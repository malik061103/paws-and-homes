import  { useState } from 'react';

// Example array of cats (in a real app, this could come from an API)
const cats = [
  { id: 1, name: 'Whiskers', age: 'Kitten', gender: 'Male', breed: 'Siamese' },
  { id: 2, name: 'Luna', age: 'Adult', gender: 'Female', breed: 'Maine Coon' },
  { id: 3, name: 'Milo', age: 'Kitten', gender: 'Male', breed: 'Persian' },
  { id: 4, name: 'Bella', age: 'Senior', gender: 'Female', breed: 'Sphynx' },
  // Add more cats as needed
];

function CatAdoption() {
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedAge, setSelectedAge] = useState('');
  const [selectedGender, setSelectedGender] = useState('');

  // Filter the cats based on selected filters
  const filteredCats = cats.filter((cat) => {
    return (
      (selectedBreed === '' || cat.breed === selectedBreed) &&
      (selectedAge === '' || cat.age === selectedAge) &&
      (selectedGender === '' || cat.gender === selectedGender)
    );
  });

  return (
    <div>
      <h1>Cat Adoption</h1>

      {/* Filter section */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Filter Cats</h3>
        <div>
          <label>
            Breed:
            <select value={selectedBreed} onChange={(e) => setSelectedBreed(e.target.value)}>
              <option value="">All Breeds</option>
              <option value="Siamese">Siamese</option>
              <option value="Maine Coon">Maine Coon</option>
              <option value="Persian">Persian</option>
              <option value="Sphynx">Sphynx</option>
              {/* Add more breeds as needed */}
            </select>
          </label>
        </div>
        <div>
          <label>
            Age:
            <select value={selectedAge} onChange={(e) => setSelectedAge(e.target.value)}>
              <option value="">All Ages</option>
              <option value="Kitten">Kitten</option>
              <option value="Adult">Adult</option>
              <option value="Senior">Senior</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Gender:
            <select value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
              <option value="">All Genders</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>
        </div>
      </div>

      {/* Display filtered cats */}
      <div>
        {filteredCats.length > 0 ? (
          filteredCats.map((cat) => (
            <div key={cat.id} style={{ marginBottom: '10px', border: '1px solid black', padding: '10px' }}>
              <h4>{cat.name}</h4>
              <p>Breed: {cat.breed}</p>
              <p>Age: {cat.age}</p>
              <p>Gender: {cat.gender}</p>
            </div>
          ))
        ) : (
          <p>No cats found matching your criteria.</p>
        )}
      </div>
    </div>
  );
}

export default CatAdoption;
