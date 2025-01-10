
import { Link} from "react-router";
const Navbar = () => {
  return (
    <>
   
      <nav className="mt-0  rounded-md bg-white shadow-md p-4 cursor-pointer bg-gradient-to-r from-blue-400 via-purple-500">
        <div className=" flex justify-between">
          <div className=" flex flex-row hover:underline">
          <div className=" flex items-center">
            <div>Simple Page</div>
            </div>
          </div>
          <ul className="hidden gap-6 md:flex">
            <li className=" hover:text-red-500 cursor-pointer font-medium text-gray-500  hover:underline space-y-1">
              <Link to="/"> HOME </Link>
            </li>
            <li className=" hover:text-red-500 cursor-pointer font-medium text-gray-500  hover:underline space-y-1">
            <Link to="/about">ABOUT</Link>
            </li>

            <li className=" hover:text-red-500 cursor-pointer font-medium text-gray-500  hover:underline space-y-1">
              <Link to="/Contact">CONTACT</Link>
            </li>
            <li className=" hover:text-red-500 cursor-pointer font-medium text-gray-500  hover:underline space-y-1">
              <Link to="/Login"> LOGIN</Link>
            </li>
          </ul>
          <div className="md:hidden ">
            <button className="text-3xl -mt-2 text-gray-500   ">&equiv;</button>
          </div>
        </div>
      </nav>
      
    </>
  );
};
 
export default Navbar;
 