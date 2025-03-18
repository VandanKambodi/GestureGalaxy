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
import Food from './components/food.jsx';
import Emotion from './components/emotions.jsx';
import Words from './components/words.jsx'
import TutoNav from './components/TutoNav.jsx';
import Core from './components/core.jsx';
import Maths from './components/Maths.jsx';
import Hands from './components/hands.jsx';
import News from './components/news.jsx';
import Science from './components/science.jsx';
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
    },

    {
      path:"/emotions",
      element:
      <div>
          <Navbar/>
          <Emotion/>
          <Footer/>
      </div>
    },

    {
      path:"/food",
      element:
      <div>
          <Navbar/>
          <Food/>
          <Footer/>
      </div>
    },

    {
      path:"/words",
      element:
      <div>
          <Navbar/>
          <Words/>
          <Footer/>
      </div>
    },

    {
      path:"/tutorials",
      element:
      <div>
          <Navbar/>
          <TutoNav/>
          <Core/>
          <Footer/>
      </div>
    },

    {
      path:"/core",
      element:
      <div>
          <Navbar/>
          <TutoNav/>
          <Core/>
          <Footer/>
      </div>
    },

    {
      path:"/maths",
      element:
      <div>
          <Navbar/>
          <TutoNav/>
          <Maths/>
          <Footer/>
      </div>
    },
   
    {
      path:"/hand",
      element:
      <div>
          <Navbar/>
          <Hands/>
          <Footer/>
      </div>
    },

    {
      path:"/news",
      element:
      <div>
          <Navbar/>
          <TutoNav/>
          <News/>
          <Footer/>
      </div>
    },
    
    {
      path:"/science",
      element:
      <div>
          <Navbar/>
          <TutoNav/>
          <Science/>
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
