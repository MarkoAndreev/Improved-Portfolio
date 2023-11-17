import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//pages
import App from './App';
import AboutMe from './pages/AboutMe'
import ContactMe from './pages/ContactMe';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';

// create variable for router
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
      index: true,
      element: <AboutMe />,
      },
      {
        path: '/AboutMe',
        element: <AboutMe />,
      },
      {
        path: '/ContactMe',
        element: <ContactMe />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);