import React from 'react';
import { AiFillTrophy } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

import './style.css';

export default function Ranking () {
    const history = useHistory();

    function goRanking () { 
        history.push('/') /* temp */
    }

    return (
        <AiFillTrophy fontSize="large" style={{ fontSize: 40 }}  className="icon" onClick={goRanking}/>
    )
}
