import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import AboutUs from './routes/AboutUs.jsx';
import Projects from './routes/Projects.jsx';
import Services from './routes/Services.jsx';
import Contact from './routes/Contact.jsx';

export const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/aboutus', element: <AboutUs />},
  {path: '/projects', element: <Projects />},
  {path: '/services', element: <Services />},
  {path: '/contact', element: <Contact />}
])