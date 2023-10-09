import { ArrowRightIcon } from "@heroicons/react/24/solid";

function Navbar({ currentPage, handlePageChange }) {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a 
                href="#about-me" 
                onClick={() => handlePageChange('AboutMe')} 
                className={`inline-flex items-center px-3 py-2 border-0 focus:outline-none rounded text-base mt-4 md:mt-0 
                            ${currentPage === 'AboutMe' ? 'text-white bg-gray-700' : 'text-gray-700 hover:text-white hover:bg-gray-700'}`}>
                About Me
            </a>
            <a href="#projects" onClick={() => handlePageChange('Projects')} 
                className={`inline-flex items-center px-3 py-2 border-0 focus:outline-none rounded text-base mt-4 md:mt-0 
                            ${currentPage === 'Projects' ? 'text-white bg-gray-700' : 'text-gray-700 hover:text-white hover:bg-gray-700'}`}>
              Projects
            </a>
            <a
              href="#contact" onClick={() => handlePageChange('Contact')}
              className={`inline-flex items-center px-3 py-2 border-0 focus:outline-none rounded text-base mt-4 md:mt-0 
                            ${currentPage === 'Contact' ? 'text-white bg-gray-700' : 'text-gray-700 hover:text-white hover:bg-gray-700'}`}>
              Contact Me
            </a>
            <a
              href="#resume" onClick={() => handlePageChange('Resume')}
              className={`inline-flex items-center px-3 py-2 border-0 focus:outline-none rounded text-base mt-4 md:mt-0 
                            ${currentPage === 'Resume' ? 'text-white bg-gray-700' : 'text-gray-700 hover:text-white hover:bg-gray-700'}`}>
              Resume
              <ArrowRightIcon className="w-6 h-6" />
            </a>
          </div>
        </header>
      );
}

export default Navbar
