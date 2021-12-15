import React, { useState } from "react";
import api from '../../services/api';
import { useParams } from 'react-router-dom';

export default function Details() {
    const { id } = useParams();

    const [character, setCharacter] = useState();

    api
        .get(`/details.php?id=${id}`)
        .then((response) => setCharacter(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });

    return (
        <div>
            <div>
                Name {character?.name} <br />
                Race {character?.race} <br />
                Description {character?.description} <br />
                <img src={character?.img} alt={character?.name} /> <br />
            </div>
        </div>
    );
}