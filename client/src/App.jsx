import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import DogPage from './pages/DogPage';
// import CatPage from './pages/CatPage';
// import AdoptionPage from './pages/AdoptionPage';

const router = createBrowserRouter (
  createRoutesFromElements (
  <Route path='/' element={<MainLayout />}>
    <Route index element={ <HomePage />} />
    <Route path='/dogs' element={ <DogPage />} />
    {/* <Route path='/Cat' element={ <CatPage />} />
    <Route path='/Adoption' element={ <AdoptionPage />} /> */}
  </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App