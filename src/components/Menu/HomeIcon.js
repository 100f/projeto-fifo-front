import React from 'react';
import HomeIcon  from '@material-ui/icons/Home';
import { useHistory } from 'react-router-dom';

import './style.css';

export default function Home (){
    const history = useHistory();

    function goHome(){
        history.push('/home')
    }

    return(
        <HomeIcon fontSize="large" style={{ fontSize: 40 }}  className="icon" onClick={goHome}/>
    )
}
