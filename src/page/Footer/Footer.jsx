const Footer = () => {
    return (
        <footer className= " mt-12 rounded-md bg-gradient-to-r from-blue-400 via-purple-500 text-black py-4">
        <div className="flex flex-col justify-center items-center">
          <p className="text-center ">
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
  