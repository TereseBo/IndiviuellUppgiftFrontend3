import Card from "../Components/Card";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FilterMenu from "../Components/FilterMenu";

function List() {
    const [data, setData] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const[filterOptions, setFilterOptions] = useState([]);
    const [nameChoice, setNameChoice] = useState("name1");

    const [direction, setDirection] = useState("asc");



   
    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:3002/mushrooms")
            const data = await res.json();
           const familys = data.map((item) => item.family);
              const uniqueFamilys = [...new Set(familys)];
                setFilterOptions(uniqueFamilys);
            setData(data);
            setFiltered(data.sort((a, b) => a.name1.localeCompare(b.name1)));


            
        }
        fetchData();
    }, []);


    return (
        <div>
            <FilterMenu filtered={filtered} setData={setData} setFilter={setFiltered} data={data} filterOptions={filterOptions} direction={direction} setDirection={setDirection} nameChoice={nameChoice} setNameChoice={setNameChoice} />
        <ul>
            {filtered.map((item) => (
                <li key={item.id}>
                    <Card mushroom={item} >
                    <Link className="action-element" to={`/details/${item.id}`}>Läs Mer</Link>
                    
                    </Card>

                </li>
            ))}
        </ul>
        </div>
    )
}
export default List;