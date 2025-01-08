import { useState } from "react";
import { Link } from "react-router";

const Login = () => {

  const [formData, setFormData]= useState({
    name:'',
    rollNo:",",
    email:"",
    address:'',
    phone:''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData, [name]:value
    });
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  }

  
  return (
    <div>
      <div className="max-w-md mx-auto p-4 bg-teal-300 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-purple-500 mb-4">Login form</h2>
        <form  onSubmit={handelSubmit} >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-pink-500"
              id="name"
              type="text"
              placeholder="Enter student name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Roll No
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500"
              type="number"
              placeholder="Enter student roll no"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-green-500"
              type="email"
              placeholder="mail@gmail.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-yellow-500"
              type="text"
              placeholder="Enter student phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Address
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-red-500"
              placeholder="Enter student address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="">
            {/* <Link to="/"> */}
              <button
                className="bg-indigo-500 hover:bg-indigo-900 mb-5 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Submit
              </button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
