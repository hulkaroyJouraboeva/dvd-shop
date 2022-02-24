import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function DvdEditForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const API = process.env.REACT_APP_API_URL;
    const [ dvd, setDvd ] = useState({
        name: '',
        image: '',
        release_date: '',
        runtime: null,
        director: '',
        is_favorite: false,
        description: '',
        price: 0,
        rating: null,
        featured: false,
    });
    const { name, image, release_date, runtime, director, is_favorite, description, price, rating, featured } = dvd; 

    useEffect(() => {
        axios
            .get(`${API}/dvds/${id}`)
            .then((response) => {
                const { name, image, release_date, runtime, director, is_favorite, description, price, rating, featured } = response.data.payload;
                setDvd({
                    name, 
                    image, 
                    release_date, 
                    runtime,
                    director, 
                    is_favorite, 
                    description, 
                    price, 
                    rating, 
                    featured
                });
            })
            .catch((error) => console.warn(error));
    }, [API, id]);

    const handleTextChange = (event) => {
        setDvd({...dvd, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateDvd(dvd, id)
    }

    const updateDvd = (updatedDvd, id) => {
        axios
            .put(`${API}/dvds/${id}`, updatedDvd)
            .then(() => navigate('/dvds'), (error) => console.error(error))
            .catch((error) => console.warn(error));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="image">Image:</label>
                    <input
                        id="image"
                        type="text"
                        value={image}
                        placeholder="URL for dvds's image"
                        onChange={handleTextChange}
                    />
                <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        value={name}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="name of the dvd"
                        required
                    />
                <label htmlFor="release_date">Release date:</label>
                    <input
                        id="release_date"
                        type="text"
                        name="release_date"
                        value={release_date}
                        placeholder="dvd's release date.."
                        onChange={handleTextChange}
                    />
                <label htmlFor="runtime">Runtime:</label>
                    <input
                        id="runtime"
                        type="number"
                        name="runtime"
                        value={runtime}
                        placeholder="dvd's runtime"
                        onChange={handleTextChange}
                    />
                <label htmlFor="director">Director/s:</label>
                    <input
                        id="director"
                        type="text"
                        name="director"
                        value={director}
                        placeholder="dvd's director"
                        onChange={handleTextChange}
                    />
                <br />
                <button type="submit">Submit</button>
            </form>
            
            <Link to={`/dvds/${id}`}> <button>Never mind!</button> </Link>
        </div>
    );
};