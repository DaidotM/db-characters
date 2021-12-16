import React, { useState } from "react";
import api from '../../services/api';
import { useParams } from 'react-router-dom';
import './style.css';

export default function Details() {
    const { id } = useParams();

    const [char, setCharacter] = useState();

    React.useEffect(() => {
        api.get(`/details.php?id=${id}`)
            .then((response) => setCharacter(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    return (
        //maybe put different image in details
        //and a return to home
        <div className="boxDetails">

            <p className="nameRace">
                {char?.name} - {char?.race} <br />
            </p>
            <p className="description">
                {char?.description} <br />
            </p>
            <img src={char?.img} alt={char?.name} /> <br />

        </div>

    );
}