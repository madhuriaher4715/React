import { useEffect, useState } from "react";//data2.
import axios from "axios";

const Data1 = () => {
    const [data, setData] = useState([]);
    const [errorr, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setData(response.data);
            } catch (error) {
                setError("Error fetching data: " + error.message);
            }
        };

        fetchData();
    }, []);

    if (errorr) {
        return (
            <h1>{errorr}</h1>
        );
    }

    return (
        <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 place-items-center">
                {
                    data.slice(0, 12).map((item) => (
                        <div
                            key={item.id}
                            className=" bg-slate-200 w-full max-h-[250px] min-h-[200px]  border border-gray-200 rounded-md "
                        >
                            <h2 className="text-lg font-semibold mb-2">Post #{item.id}</h2>
                            
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Data1;
