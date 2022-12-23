import './Card.scss'
import { Link } from "react-router-dom";
import { Children } from 'react';
function Card({ mushroom, children }) {
    return (
        <div className="card">
            <div className="image-container">
                <img src={mushroom.image} alt={mushroom.name1} />
            </div>
            <div className="text-container">
                <div className="text-container-header">
                    <h2>{mushroom.name1}</h2>
                    <h3>{mushroom.name2}</h3>
                </div>
                <div className="text-container-main">
                    <p>{mushroom.description}</p>
                </div>
            </div>
            <div className="action-container">
                           {children}
            </div>

        </div>
    )
}
export default Card;