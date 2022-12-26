
import { useState } from "react";
function FilterMenu({ setFilter, data, filterOptions, filtered }) {
    const [nameChoice, setNameChoice] = useState("name1");
    const [sortDirection, setSortDirection] = useState("asc");

    function ascSorter(arr, name){
        const copy = arr.map(item=>item)
        copy.sort((a,b)=>{
            return a[name].localeCompare(b[name]);})
        return copy;
    }
    function descSorter(arr, name){
        const copy = arr.map(item=>item)
        copy.sort((a,b)=>{
            return b[name].localeCompare(a[name]);})
        return copy;
    }
    function nameChoiceTracker(e){
        console.log(e.target.value)
        setNameChoice(e.target.value)

    }
    function sorter(arr, name){
        if(sortDirection === "desc"){
            return descSorter(arr, name);
            
        
        }
        else{
            return ascSorter(arr, name);
            
        }

    }


    return (
        <div>
            <ul>
                <li>
                    <button onClick={() => setFilter(data)}>Alla</button>
                </li>
                {filterOptions.map((item) => (
                    <li key={item}>
                        <button onClick={() => setFilter(data.filter((mushroom) => mushroom.family === item))}>{item}</button>
                    </li>))}


            </ul>
            <ul>
                <li>
                    <form onClick={(e)=>nameChoiceTracker(e)}>
                    <input type="radio" id="name1" name="name" value="name1" defaultChecked="true"/>
                    <label htmlFor="name1">Svenskt namn</label>
                    <input type="radio" id="name2" name="name" value="name2"/>
                    <label htmlFor="name2">Latinskt namn</label>
                    </form>

                    <button onClick={() => setFilter(ascSorter(filtered,nameChoice))}>A-Ö</button>
                    <button onClick={() => setFilter(descSorter(filtered, nameChoice))}>Ö-A</button>
                </li>
                   

            </ul>
            
        </div>

    )

}
export default FilterMenu;