import { useState } from 'react';
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Navbar from "./Navbar";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Footer from "./Footer"
import '../index.css'

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');
  
    // TODO: Add a comment describing the functionality of this method
    const renderPage = () => {
      if (currentPage === 'AboutMe') {
        return <AboutMe />;
      }
      if (currentPage === 'Projects') {
        return <Projects />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      return <Resume />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div className='flex flex-col min-h-screen mx-0 bg-gray-900'>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        <main className="flex-grow mx-3 bg-gray-900">{renderPage()}</main>
        <Footer />
      </div>
    );
  }