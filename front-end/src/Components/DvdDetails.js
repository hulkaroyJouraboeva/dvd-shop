import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function DvdDetails() {
    const API = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const [ dvd, setDvd ] = useState([]);
    const { id } = useParams();
    const { name, image, release_date, runtime, director, is_favorite, description, price, rating, featured } = dvd; 

    useEffect(() => {
        axios
            .get(`${API}/dvds/${id}`)
            .then((response) => setDvd(response.data.payload))
            .catch((error) => console.warn(error));
    }, [API, id]);

    const handleDelete = () => {
        axios
            .delete(`${API}/dvds/${id}`)
            .then(() => navigate('/dvds'))
            .catch((error) => console.warn(error));
    };

    return (
        <div className="card">
            <>
                <h2>{name} </h2>
                <img src={image} alt={`${name}`} />
                <p>${price}</p>
                <p>Description: {description}</p>
                <p>Release date: {release_date}</p>
                <p>Runtime: {runtime}</p>
                <p>Director/s: {director}</p>
                <p>{is_favorite}</p>
                <p>{rating}</p>
                <p>{featured}</p>
            </>

            <div className="buttons">
                <Link to={`/dvds/${id}/edit`}>
                    <button>Edit</button>
                </Link>
                <button onClick={handleDelete}>Delete</button>
                <Link to={'/dvds'}>
                    <button>DVDs</button>
                </Link>
            </div>
        </div>
    );
};