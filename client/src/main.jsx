import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cat from './pages/CatPage.jsx';
import Dog from './pages/DogPage.jsx';
import Home from './pages/HomePage.jsx';
import Adoption from './pages/AdoptionPage.jsx';
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/dog",
        element: <Dog />
      },
      {
        path: "/cat",
        element: <Cat />
      },
      {
        path: "/adoption",
        element: <Adoption />
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)