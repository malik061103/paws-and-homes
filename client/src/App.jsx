import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import DogPage from './pages/DogPage';
import CatPage from './pages/CatPage';
import AdoptionPage from './pages/AdoptionPage';
<<<<<<< HEAD
=======
// import CatPage from './pages/CatPage';
// import AdoptionPage from './pages/AdoptionPage';
>>>>>>> 24c9505ba7a343097edc26e3da8c12de1ae9d39a

const router = createBrowserRouter (
  createRoutesFromElements (
  <Route path='/' element={<MainLayout />}>
    <Route index element={ <HomePage />} />
    <Route path='/dogs' element={ <DogPage />} />
    <Route path='/cats' element={ <CatPage />} />
    <Route path='/adoption' element={ <AdoptionPage />} />
<<<<<<< HEAD
=======
    {/* <Route path='/Cat' element={ <CatPage />} />
    <Route path='/Adoption' element={ <AdoptionPage />} /> */}
>>>>>>> 24c9505ba7a343097edc26e3da8c12de1ae9d39a
  </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App