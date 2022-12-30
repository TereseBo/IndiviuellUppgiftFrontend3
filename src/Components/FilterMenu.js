
import { useState } from "react";
import "./FilterMenu.scss";
function FilterMenu({ setFilter, data, filterOptions, filtered, setData }) {
    const [nameChoice, setNameChoice] = useState("name1");
    const [direction, setDirection] = useState("asc");

    function ascSorter(name) {//sorts both filtered and data in ascending order by name
        const filterCopy = filtered.map(item => item)
        const dataCopy = data.map(item => item)
        filterCopy.sort((a, b) => {
            return a[name].localeCompare(b[name]);
        })
        dataCopy.sort((a, b) => {
            return a[name].localeCompare(b[name]);
        })
        setData(dataCopy);
        setFilter(filterCopy);
    }
    function descSorter(name) {//sorts both filtered and data in descending order by name
        const dataCopy = data.map(item => item)
        const filterCopy = filtered.map(item => item)
        filterCopy.sort((a, b) => {
            return b[name].localeCompare(a[name]);
        })
        dataCopy.sort((a, b) => {
            return b[name].localeCompare(a[name]);
        })
        setData(dataCopy);
        setFilter(filterCopy);
    }

    function sorter(direction, name) {
        setDirection(direction)
        setNameChoice(name)
        if (direction === "desc") {
            descSorter(name);
        }
        else {
            ascSorter(name);
        }

    }
    function sortByRating(){
        console.log(direction)
        
        const dataCopy = data.map(item => item)
        const filterCopy = filtered.map(item => item)
        if(direction==="desc"){
        dataCopy.sort(compareFn);
        filterCopy.sort(compareFn);
        }
        else{
            dataCopy.sort(compareFn).reverse();
            filterCopy.sort(compareFn).reverse();
        }
        function compareFn(a, b) {
            if (a.rating<b.rating) {
              return -1;
            }
            if (a.rating>b.rating) {
              return 1;
            }
            if(a.rating===b.rating)
            return 0;
          }

        setData(dataCopy);
        setFilter(filterCopy);
    }
    return (
        <div className="menu-container">
            <ul className="filter-list">
                <h2>Filter:</h2>
                <li>
                    
                    <input onClick={() => setFilter(data)} type="radio" id="alla" name="family" value="alla" defaultChecked="true"  />
                        <label htmlFor="alla">Alla</label>
                </li>
                {filterOptions.map((item) => (
                    <li key={item}>
                       
                        <input onClick={() => setFilter(data.filter((mushroom) => mushroom.family === item))} type="radio" id={item} name="family" value={item}  />
                        <label htmlFor={item}>{item}</label>
                    </li>))}
            </ul>
            <ul className="sort-list">
                <h2>Sortering:</h2>
                <li>
                    
                        
                        <input onClick={(e) => sorter(direction, e.target.value)} type="radio" id="name1" name="name" value="name1" defaultChecked="true" />
                        <label htmlFor="name1">Svenskt namn</label>
                      
                        <input onClick={(e) => sorter(direction,e.target.value)} type="radio" id="name2" name="name" value="name2" />
                        <label htmlFor="name2">Latinskt namn</label>

                        
                        </li>
                        <li>
                        
                        <input onClick={(e) => sorter(e.target.value, nameChoice)} type="radio" id="asc" name="direction" value="asc" defaultChecked="true" />
                        <label htmlFor="asc">A-Ö</label>
                      
                        <input onClick={(e) => sorter(e.target.value, nameChoice)} type="radio" id="desc" name="direction" value="desc" />
                        <label htmlFor="desc">Ö-A</label>
                        
                    
                </li>
            </ul>
            <ul className="test">
                <li>
                    <button onClick={sortByRating}>Sortera efter betyg</button>
                </li>
            </ul>
        </div>
    )
}
export default FilterMenu;