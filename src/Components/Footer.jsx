import Lottie from 'lottie-react';
import githubAnimation from '../../public/github.json';
import linkedinAnimation from '../../public/linkedin.json';

function Footer() {
    return (
      <footer className="bg-gray-800 text-white">
          <div className="container mx-auto p-5 flex justify-center items-center">
              <a 
                  href="https://github.com/AndySu7117" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mx-2"
              >
                  <Lottie animationData={githubAnimation} style={{ width: 50, height: 50 }} />
              </a>
              <a 
                  href="www.linkedin.com/in/andysu7117" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mx-2"
              >
                  <Lottie animationData={linkedinAnimation} style={{ width: 50, height: 50 }} />
              </a>
        </div>
      </footer>
    );
  }
export default Footer;