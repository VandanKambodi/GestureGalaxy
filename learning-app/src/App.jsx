import './App.css'
import {  createBrowserRouter, 
  RouterProvider } from 
"react-router-dom";
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Signup from './components/signup.jsx';
import Login from './components/login.jsx';
import About from './components/about.jsx';
import NotFound from './components/NotFound.jsx';
import Footer from './components/Footer.jsx';
import Premium from './components/premium.jsx';
import Books from './components/books.jsx';
import Basic from './components/basic.jsx';
const router = createBrowserRouter(
  [
    {
      path:"*",
      element:
      <div>
          <NotFound/>
      </div>
    },

    {
      path:"/",
      element: 
      <div>
          <Navbar/>
          <Home/>
          <Footer/>
      </div>     
    },

    {
      path:"/home",
      element: 
      <div>
          <Navbar/>
          <Home/>
          <Footer/>
      </div>     
    },

    {
      path:"/signup",
      element:
      <div>
          <Signup/>
      </div>
    },

    {
      path:"/login",
      element:
      <div>
          <Login/>
      </div>
    },

    {
      path:"/about",
      element:
      <div>
          <Navbar/>
          <About/>
          <Footer/>
      </div>
    },

    {
      path:"/premium",
      element:
      <div>
          <Navbar/>
          <Premium/>
          <Footer/>
      </div>
    },

    {
      path:"/books",
      element:
      <div>
          <Navbar/>
          <Books/>
          <Footer/>
      </div>
    },

    {
       path:"/basic",
        element:
        <div>
            <Navbar/>
            <Basic/>
            <Footer/>
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
