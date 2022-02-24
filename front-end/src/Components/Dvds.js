import { useEffect, useState } from "react";
import axios from  'axios';
import Dvd from './Dvd';

export default function Dvds() {
    const [dvds, setDvds] = useState([]);
    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios
            .get(`${API}/dvds`)
            .then((response) => setDvds(response.data.payload))
            .catch((error) => console.warn(error));
    }, [API]);

    return <div className="Dvds"> {dvds.map((dvd) => <Dvd dvd={dvd} key={dvd.id} />)} </div>
};