import {  useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";

function Details() {
    const { id } = useParams();
    const [mushroom, setMushroom] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchMushroom() {
            const res = await fetch(`http://localhost:3002/mushrooms/${id}`);
            const data = await res.json();
            setMushroom(data);
        }
        fetchMushroom();
    }, [id]);
    function deleteMushroom() {
        const res= fetch(`http://localhost:3002/mushrooms/${id}`, {
            method: "DELETE",
        })
        if(res.ok)
        navigate("/");
           
    }
    if(!mushroom) return null;
    return (
        <div>
            <Card mushroom={mushroom}>
            <button className="action-element" onClick={deleteMushroom}>Ta bort</button>
            <Link className="action-element" to={`/details/${id}`}>Läs Mer</Link>
            </Card>
        </div>
    )

}
export default Details;