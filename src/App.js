import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './pages/homePage';
import AboutUsPage from './pages/aboutUsPage';
import ContactPage from './pages/contactPage';
import GalleryPage from './pages/galleryPage';
import OurService from './components/OurService/OurService';

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/our-services" element={<OurService />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
    <Footer class="mt-auto"/>
    </>
  );
}

export default App;