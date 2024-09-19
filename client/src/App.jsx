import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import DogPage from './pages/DogPage';
<<<<<<< HEAD
import CatPage from './pages/CatPage';
import AdoptionPage from './pages/AdoptionPage';
=======
// import CatPage from './pages/CatPage';
// import AdoptionPage from './pages/AdoptionPage';
>>>>>>> c5867d95ea688cc8a668a4ab0dbc37eafe9c6474

const router = createBrowserRouter (
  createRoutesFromElements (
  <Route path='/' element={<MainLayout />}>
    <Route index element={ <HomePage />} />
    <Route path='/dogs' element={ <DogPage />} />
<<<<<<< HEAD
    <Route path='/cats' element={ <CatPage />} />
    <Route path='/adoption' element={ <AdoptionPage />} />
=======
    {/* <Route path='/Cat' element={ <CatPage />} />
    <Route path='/Adoption' element={ <AdoptionPage />} /> */}
>>>>>>> c5867d95ea688cc8a668a4ab0dbc37eafe9c6474
  </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App