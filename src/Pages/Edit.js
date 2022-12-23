import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Edit() {
    const { id } = useParams();
    const [mushroom, setMushroom] = useState({});
    useEffect(() => {
        async function fetchMushroom() {
            const res = await fetch(`http://localhost:3002/mushrooms/${id}`);
            const data = await res.json();
            setMushroom(data);
        }
        fetchMushroom();
    }, [id]);
    async function editData(e) {
        e.preventDefault();
        console.log(e.currentTarget);
        let res= await fetch(`http://localhost:3002/mushrooms/${id}`, {

            method: "PUT",
            headers: {
                'content-type': 'application/json'},
            body: JSON.stringify(mushroom)
        });
        if(res.ok) {
            console.log("Edit successful");
            setMushroom({});
            e.target.reset();
        }
    }
    function saveChange(e) {
        setMushroom({...mushroom, [e.target.id]: e.target.value});
    }
    if(!mushroom) return null;
    return(
        <form onSubmit={editData} onChange={saveChange}>
            <label htmlFor="name1">Svenskt namn</label>
            <input id="name1" type="text" value={mushroom.name1} />
            <label htmlFor="name2">Vetenskapligt namn</label>
            <input id="name2" type="text" value={mushroom.name2}  />
            <label htmlFor="family">Familj</label>
            <select id="family" type="radio" value={mushroom.family}>
                <option value="Kremlor">Kremlor</option>
                <option value="Riskor">Riskor</option>
                <option value="Kantareller">Kantareller</option>
                <option value="Soppar">Soppar</option>
                </select>
            <label htmlFor="description">Beskrivning</label>
            <textarea id="description"  rows="4" cols="10" value={mushroom.description} />
            <label htmlFor="image">Bild adress</label>
            <input id="image" type="text" value={mushroom.image} />
       <input type="submit" value="Uppdatera" />
        </form>
    )
}
export default Edit;