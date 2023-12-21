import React from 'react'
import {useHistory} from "react-router-dom"

function Protected({Component, user}) {
    const history = useHistory();

    if(user){
        return (
            <Component/>
        )
    }else{
        history.push('/login');    
    }


}

export default Protected