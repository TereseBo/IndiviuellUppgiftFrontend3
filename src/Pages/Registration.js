import { useState } from "react";
function Registration() {
    const [mushroom, setMushroom] = useState({});
    function postData(e) {
        e.preventDefault();

    }
    function saveChange(e) {
    }
    return(
        <form onSubmit={postData} onChange={saveChange}>
            <label htmlfor="name1">Svenskt namn</label>
            <input id="name1" type="text" placeholder="Tegelkremla" />
            <label htmlfor="name2">Vetenskapligt namn</label>
            <input id="name2" type="text" placeholder="Russula decolorans" />
            <label htmlfor="family">Familj</label>
            <select id="family" type="radio" placeholder="Kremlor">
                <option value="Kremlor">Kremlor</option>
                <option value="Riskor">Riskor</option>
                <option value="Kantareller">Kantareller</option>
                <option value="Soppar">Soppar</option>
                </select>
            <label htmlfor="description">Beskrivning</label>
            <input id="description" type="textarea" rows="4" cols="10"  />
            <label htmlfor="image">Bild adress</label>
            <input id="image" type="text" placeholder="https://images.unsplash.com/photo-1665346444351-e85e1248a3e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" />
        </form>
    )
}
export default Registration;