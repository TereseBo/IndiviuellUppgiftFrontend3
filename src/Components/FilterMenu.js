
import { useState } from "react";
function FilterMenu({ setFilter, data, filterOptions, filtered, setData }) {
    const [nameChoice, setNameChoice] = useState("name1");
    const [sortDirection, setSortDirection] = useState("asc");

    function ascSorter() {

        const filterCopy = filtered.map(item => item)
        const dataCopy = data.map(item => item)
        filterCopy.sort((a, b) => {
            return a[nameChoice].localeCompare(b[nameChoice]);
        })
        dataCopy.sort((a, b) => {
            return a[nameChoice].localeCompare(b[nameChoice]);
        })
        setData(dataCopy);
        setFilter(filterCopy);

    }
    function descSorter() {
        const dataCopy = data.map(item => item)
        const filterCopy = filtered.map(item => item)
        filterCopy.sort((a, b) => {
            return b[nameChoice].localeCompare(a[nameChoice]);
        })
        dataCopy.sort((a, b) => {
            return b[nameChoice].localeCompare(a[nameChoice]);
        })
        setData(dataCopy);
        setFilter(filterCopy);
    }

    function sorter(direction) {
        setSortDirection(direction);
        console.log(direction)

        if (direction === "desc") {
            descSorter();
        }
        else {
            ascSorter();

        }

    }
    return (
        <div className="menu-container">
            <ul className="filter-list">
                <li>
                    <button onClick={()=>setFilter(data)}>Alla</button>
                </li>
                {filterOptions.map((item) => (
                    <li key={item}>
                        <button onClick={() => setFilter(data.filter((mushroom) => mushroom.family === item))}>{item}</button>
                    </li>))}


            </ul>
            <ul className="sort-list">
                <li>
                    <form onClick={(e) => setNameChoice(e.target.value)}>
                        <input type="radio" id="name1" name="name" value="name1"  />
                        <label htmlFor="name1">Svenskt namn</label>
                        <input type="radio" id="name2" name="name" value="name2" />
                        <label htmlFor="name2">Latinskt namn</label>
                    </form>
                    <form onClick={(e)=>sorter(e.target.value)}>
                    <input type="radio" id="asc" name="direction" value="asc"  />
                        <label htmlFor="name1">A-ö</label>
                        <input type="radio" id="desc" name="direction" value="desc" />
                        <label htmlFor="name2">Ö-A</label>
                        </form>
                    <button onClick={() => sorter("asc")}>A-Ö</button>
                    <button onClick={() => sorter("desc")}>Ö-A</button>
                    
                </li>


            </ul>

        </div>

    )

}
export default FilterMenu;