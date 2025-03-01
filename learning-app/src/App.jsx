import './App.css'
import {  createBrowserRouter, 
  RouterProvider } from 
"react-router-dom";
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: 
      <div>
        <Navbar/>, 
        <Home/>
      </div>
    }
  ]
);



function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
