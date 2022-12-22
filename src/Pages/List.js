import Card from "../Components/Card";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function List() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:3002/mushrooms")
            const data = await res.json();
            setData(data);
        }
        fetchData();
    }, []);
    console.log(data);


    return (
        <ul>
            {data.map((item) => (
                <li key={item.id}>
                    <Card mushroom={item} >
                    <Link className="action-element" to={`/details/${item.id}`}>Läs Mer</Link>
                    
                    </Card>

                </li>
            ))}
        </ul>)
}
export default List;