import { useState } from "react";
import MushroomForm from "../Components/MushroomForm";
function Registration() {
    const [mushroom, setMushroom] = useState({
        name1: "",
        name2: "",
        family: "",
        description: "",
        image: ""

    });
    async function postData(e) {
        e.preventDefault();
        let res= await fetch("http://localhost:3002/mushrooms", {

            method: "POST",
            headers: {
                'content-type': 'application/json'},
            body: JSON.stringify(mushroom)
        });
        if(res.ok) {
            console.log("Post successful");
            setMushroom({
                name1: "",
                name2: "",
                family: "",
                description: "",
                image: ""
            });
            e.target.reset();
        }
    }
    function saveChange(e) {
        setMushroom({...mushroom, [e.target.id]: e.target.value});
    }
    return(
       
        <MushroomForm mushroom={mushroom} onChange={saveChange} onSubmit={postData} submitLabel="Registrera" />

    )
}
export default Registration;