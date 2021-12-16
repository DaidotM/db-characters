import React, { Component } from 'react';
import api from '../../services/api';
import Box from '../../components/box';

import './style.css';
import { Link } from 'react-router-dom';


export default class Home extends Component {
    state = {
        chars: []
    }
    componentDidMount() {
        this.loadCharacters();
    }

    loadCharacters = async () => {
        const response = await api.get('/chars.php');
        this.setState({ chars: response.data });
    }

    render() {
        const { chars } = this.state;
        return (
            <div>
                <h3 className='quantity'>Quantity of characters {chars.length}</h3>
                <div className='container'>
                    {
                        chars.map(character =>
                            <Box key={character.id}>
                                <Link to={`/details/${character.id}`} style={{ textDecoration: 'none' }}>
                                    <img src={character.img} alt={character.name} /> <br />
                                    <span>Name: {character.name}</span> <br />
                                    <span>Race: {character.race}</span> <br />
                                </Link>
                            </Box>
                        )
                    }
                </div>
            </div>
        );
    }

}