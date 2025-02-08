
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './Body';
import Browse from './Browse';

function App() {
  const approuter  = createBrowserRouter([
  {
    path: '/',
    element: <Body/>
  },
  {
    path: '/browse',
    element: <Browse/>
  }

  ])
  return (
    <RouterProvider router={approuter}/>
  );
}

export default App;
