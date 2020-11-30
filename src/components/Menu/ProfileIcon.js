import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import { useHistory } from 'react-router-dom';

import './style.css';

export default function Profile () {
    const history = useHistory();

    function goProfile() { 
        history.push('/') /* temp */
    }

    return (
        <PersonIcon fontSize="large" style={{ fontSize: 40 }} className="icon" onClick={goProfile}/>
    )
}