
import { useState } from "react";
import "./FilterMenu.scss";
function FilterMenu({ setFilter, data, filterOptions, filtered, setData  }) {
    const [nameChoice, setNameChoice] = useState("name1");

    const [direction, setDirection] = useState("asc");



    function ascSorter(name) {
        console.log("asc-sort started")

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
    function descSorter(name) {
        console.log("desc-sort started")
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
        let dir=direction
        setDirection(dir)

        console.log('sorterpic started, direction ' +direction)

        if (direction === "desc") {
            descSorter(name);
        }
        else {
            ascSorter(name);

        }

    }   
function nameOptionClickHandler(e){
    let lang=e
   
    
    console.log(('här ärlang '+ lang))
    if(lang === "name1"||lang === "name2"){
        setNameChoice(lang)
    sorter(direction, lang)
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
                    <form onClick={(e) => nameOptionClickHandler(e.target.value)}>
                        <input type="radio" id="name1" name="name" value="name1" defaultChecked="true"  />
                        <label htmlFor="name1">Svenskt namn</label>
                        <input type="radio" id="name2" name="name" value="name2" />
                        <label htmlFor="name2">Latinskt namn</label>
                    </form>
                    <form onClick={(e)=>sorter(e.target.value, nameChoice)}>
                    <input type="radio" id="asc" name="direction" value="asc" defaultChecked="true" />
                        <label htmlFor="asc">A-Ö</label>
                        <input type="radio" id="desc" name="direction" value="desc" />
                        <label htmlFor="desc">Ö-A</label>
                        </form>

                    
                </li>


            </ul>

        </div>

    )

}
export default FilterMenu;