import './App.css';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
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
import Words from './components/words.jsx';
import TutoNav from './components/TutoNav.jsx';
import Core from './components/core.jsx';
import Maths from './components/Maths.jsx';
import Hands from './components/hands.jsx';
import News from './components/news.jsx';
import Science from './components/science.jsx';
import Body from './components/body.jsx';
import Education from './components/education.jsx';
import Quiz from './components/quiz.jsx';

// Function to check if user is authenticated
const isAuthenticated = () => !!localStorage.getItem("token");

// Protect routes that require login
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/signup" />;
};

// Create router with authentication checks
const router = createBrowserRouter([
  { path: "*", element: <NotFound /> },

  // Redirect to Signup if not logged in
  { path: "/", element: isAuthenticated() ? <Navigate to="/signup" /> : <Signup /> },

  // Public Routes
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/about", element: <><Navbar /><About /><Footer /></> },

  // Protected Routes (Only logged-in users can access)
  { path: "/", element: <ProtectedRoute element={<><Signup /></>} /> },
  { path: "/home", element: <ProtectedRoute element={<><Navbar /><Home /><Footer /></>} /> },
  { path: "/premium", element: <ProtectedRoute element={<><Navbar /><Premium /><Footer /></>} /> },
  { path: "/books", element: <ProtectedRoute element={<><Navbar /><Books /><Footer /></>} /> },
  { path: "/basic", element: <ProtectedRoute element={<><Navbar /><Basic /><Footer /></>} /> },
  { path: "/emotions", element: <ProtectedRoute element={<><Navbar /><Emotion /><Footer /></>} /> },
  { path: "/food", element: <ProtectedRoute element={<><Navbar /><Food /><Footer /></>} /> },
  { path: "/words", element: <ProtectedRoute element={<><Navbar /><Words /><Footer /></>} /> },
  { path: "/tutorials", element: <ProtectedRoute element={<><Navbar /><TutoNav /><Core /><Footer /></>} /> },
  { path: "/core", element: <ProtectedRoute element={<><Navbar /><TutoNav /><Core /><Footer /></>} /> },
  { path: "/maths", element: <ProtectedRoute element={<><Navbar /><TutoNav /><Maths /><Footer /></>} /> },
  { path: "/hand", element: <ProtectedRoute element={<><Navbar /><Hands /><Footer /></>} /> },
  { path: "/news", element: <ProtectedRoute element={<><Navbar /><TutoNav /><News /><Footer /></>} /> },
  { path: "/science", element: <ProtectedRoute element={<><Navbar /><TutoNav /><Science /><Footer /></>} /> },
  { path: "/body", element: <ProtectedRoute element={<><Navbar /><Body /><Footer /></>} /> },
  { path: "/education", element: <ProtectedRoute element={<><Navbar /><Education /><Footer /></>} /> },
  { path: "/certificate", element: <ProtectedRoute element={<><Navbar /><Quiz /><Footer /></>} /> }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
