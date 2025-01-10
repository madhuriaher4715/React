import { useState } from "react";



const Login = () => {
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        password: "",
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-200">
            
            {/* Main Code */}
            <div className="flex-grow flex items-center justify-center bg-gradient-to-r from-purple-300 via-pink-300 to-red-300">
                <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">
                    <form onSubmit={handleSubmit}>
                        <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">Login Form</h1>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Enter your first name"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Enter your last name"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Enter your email address"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="w-full h-11 bg-blue-500 text-white hover:underline">
                            Login
                        </button>
                    </form>
                </div>
            </div>

           
            
        </div>
    );
};

export default Login;
