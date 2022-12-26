import Card from "../Components/Card";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FilterMenu from "../Components/FilterMenu";

function List() {
    const [data, setData] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const[filterOptions, setFilterOptions] = useState([]);

   
    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:3002/mushrooms")
            const data = await res.json();
            console.log(data);
           const familys = data.map((item) => item.family);
              const uniqueFamilys = [...new Set(familys)];
                setFilterOptions(uniqueFamilys);
            setData(data);
            setFiltered(data);


            
        }
        fetchData();
    }, []);


    return (
        <div>
            <FilterMenu filtered={filtered} setData={setData} setFilter={setFiltered} data={data} filterOptions={filterOptions}/>
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