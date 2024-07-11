import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from "./views/Home/Home"
import AddBook from "./components/AddBook/AddBook"
import UpdateBook from './views/UpdateBook/UpdateBook';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/add",
    element: <AddBook/>
  },
  {
    path: "/update/:id",
    element: <UpdateBook/>
  },
  {
    path: "*",
    element: <h1>404 Not found</h1>
  }
])
root.render(<RouterProvider router={router}/>);


