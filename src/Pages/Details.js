import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import "./Details.scss";
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
        const res = fetch(`http://localhost:3002/mushrooms/${id}`, {
            method: "DELETE",
        })
            console.log("Delete successful");
            setMushroom({});
            navigate("/");
    }
    
    if (!mushroom) return null;
    return (
        <div className="card-container">
            <Card mushroom={mushroom}>
                <button className="action-element" onClick={deleteMushroom}>Ta bort</button>
                <Link className="action-element" to={`/edit/${id}`}>Ändra</Link>
            </Card>
        </div>
    )

}
export default Details;