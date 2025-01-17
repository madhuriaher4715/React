import { useEffect,useState } from "react";  //list.
import axios from "axios";

const List = () => {
    const [data, setData] = useState([]);
    const [errore, setError] = useState(null);

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
    if (errore) {
        return (
            <h1>{errore}</h1>
        );
    }
  return (
    <div>
      <h2>List Format</h2>
      <ul className="">
        {data.slice(0,16).map((item)=>
        <li key={item.id}>
            <li>
              {item.title}  
            </li>
        </li>
       
        )};
      </ul>
    </div>
  );
}

export default List
