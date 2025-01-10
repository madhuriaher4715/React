const Footer = () => {
    return (
        <footer className= " mb-0 rounded-md bg-blue-300 text-black py-4">
        <div className="flex flex-col items-center">
          <p className="text-center mb-1">
            © 2025 Your Company. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500">Terms of Service</a>
            <a href="#" className="hover:text-blue-500">Contact Us</a>
          </div>
        </div>
      </footer>
      
    );
  };
  
  export default Footer;
  