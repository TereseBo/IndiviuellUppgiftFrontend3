import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MushroomForm from "../Components/MushroomForm";
function Edit() {
    const { id } = useParams();
    const navigate=useNavigate();
    const [mushroom, setMushroom] = useState({
        
            "name1": "name1",
            "name2": "name2",
            "family": "family",
            "image": "image",
            "description": "Description.",
            "id": "id"
          
    });
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
        let res= await fetch(`http://localhost:3002/mushrooms/${id}`, {

            method: "PUT",
            headers: {
                'content-type': 'application/json'},
            body: JSON.stringify(mushroom)
        });
        if(res.ok) {
            console.log("Edit successful");
            navigate("/");
        }
    }
    function saveChange(e) {
        setMushroom({...mushroom, [e.target.id]: e.target.value});
    }
    if(!mushroom) return null;
    return(
        
        <MushroomForm mushroom={mushroom} onChange={saveChange} onSubmit={editData} submitLabel="Uppdatera" />
        
    )
}
export default Edit;