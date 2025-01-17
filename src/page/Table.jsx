import { useEffect, useState } from "react"; // table
import axios from "axios";

const Table = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setData(response.data);
            } catch (error) {
                setError("Error fetching data: " + error.message);
            }
        };
        fetchData();
    }, []);

    if (error) {
        return (
            <h1>{error}</h1>
        );
    }

    return (
        <div>
            <h2>Table Format</h2>
            <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {data.slice(0, 16).map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
