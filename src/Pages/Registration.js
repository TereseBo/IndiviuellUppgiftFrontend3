import { useState } from "react";
function Registration() {
    const [mushroom, setMushroom] = useState({});
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
            setMushroom({});
            e.target.reset();
        }
    }
    function saveChange(e) {
        setMushroom({...mushroom, [e.target.id]: e.target.value});
    }
    return(
        <form onSubmit={postData} onChange={saveChange}>
            <label htmlFor="name1">Svenskt namn</label>
            <input id="name1" type="text" placeholder="Tegelkremla" />
            <label htmlFor="name2">Vetenskapligt namn</label>
            <input id="name2" type="text" placeholder="Russula decolorans" />
            <label htmlFor="family">Familj</label>
            <select id="family" type="radio" placeholder="Kremlor">
                <option value="Kremlor">Kremlor</option>
                <option value="Riskor">Riskor</option>
                <option value="Kantareller">Kantareller</option>
                <option value="Soppar">Soppar</option>
                </select>
            <label htmlFor="description">Beskrivning</label>
            <textarea id="description"  rows="4" cols="10"  />
            <label htmlFor="image">Bild adress</label>
            <input id="image" type="text" placeholder="https://images.unsplash.com/photo-1665346444351-e85e1248a3e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" />
       <input type="submit" value="Submit" />
        </form>
    )
}
export default Registration;