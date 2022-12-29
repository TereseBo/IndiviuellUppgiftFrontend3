import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormSection from "../Components/FormSection";
import "./Edit.scss";
function Edit() {
    const { id } = useParams();
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
        console.log(e.currentTarget);
        let res = await fetch(`http://localhost:3002/mushrooms/${id}`, {

            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(mushroom)
        });
        if (res.ok) {
            console.log("Edit successful");
            setMushroom({});
            e.target.reset();
        }
    }
    function saveChange(e) {
        setMushroom({ ...mushroom, [e.target.id]: e.target.value });
    }
    if (!mushroom) return null;
    return (
        <form onSubmit={editData} className="update-form">
            <FormSection type="text" id="name1" label="Svenskt namn" value={mushroom.name1} onChange={saveChange} />
            <FormSection type="text" id="name2" label="Vetenskapligt namn" value={mushroom.name2} onChange={saveChange} />
            <FormSection type="radio" id="family" label="Familj" value={mushroom.family} onChange={saveChange} />
            <FormSection type="textarea" id="description" label="Beskrivning" value={mushroom.description} onChange={saveChange} />
            <FormSection type="text" id="image" label="Bild adress" value={mushroom.image} onChange={saveChange} />
            <FormSection type="submit" id="submit" label="Uppdatera" onClick={editData} />

        </form>
    )
}
export default Edit;