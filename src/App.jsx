import React, { createContext, useState } from 'react';
import Form from './Components/Form';
import Dashboard from './Components/Dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export const LoginContext = createContext();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Form />,
  },
  {
    path: '/dashboard/:userId',
    element: <Dashboard />,
  },
]);

const users = [
  {
    id: 1,
    name: "Sample User 1",
    email: 'sampleuser1@mail.com',
    password: 'sampleuser1',
    balance: 10000,
  },
  {
    id: 2,
    name: "Sample User2",
    email: 'sampleuser2@mail.com',
    password: 'sampleuser2',
    balance: 20000,
  }
];

const App = () => {
  const [isLogin, setIsLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ isLogin, setIsLoggedIn }}>
      <RouterProvider router={router} />
    </LoginContext.Provider>
  );
};

export default App;
