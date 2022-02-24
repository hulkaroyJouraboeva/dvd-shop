import axios from "axios";
import { useState, useEffect } from "react";
import Dvd from '../Components/Dvd';

export default function Home() {
    const [dvds, setDvds] = useState([]);
    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios
            .get(`${API}/dvds`)
            .then((response) => setDvds(response.data.payload))
            .catch((error) => console.warn(error));
    }, [API]);

    return (
        <div>
            <h1>Featured Products</h1>
            <br />
            <hr />
            <br />
            <div className="home">
                {dvds.map((dvd) =>  dvd.featured === true && <Dvd dvd={dvd} key={dvd.id} /> )}
            </div>
        </div>
    );
};