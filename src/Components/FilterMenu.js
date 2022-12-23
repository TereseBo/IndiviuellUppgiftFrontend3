function FilterMenu({ setFilter, data, filterOptions, filtered }) {

    function sorter(arr){
        console.log(arr);
        const copy = arr.map(item=>item)
        copy.sort((a,b)=>{
            if(a.name1<b.name1)
            return -1;
            if(a.name1>b.name1)
            return 1;
         } )
        console.log(copy);
        return copy;
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
                    <button onClick={() => setFilter(sorter(filtered))}>A-Ö</button>
                    <button onClick={() => setFilter(data)}>Ö-A</button>
                </li>
                   

            </ul>
            
        </div>

    )

}
export default FilterMenu;