import React from 'react';
import {Link} from 'react-router';

export const Header=(props)=>{
    return(
        <div>
            <ul>
                <li><Link to ={"/home"} activeStyle={{color:"red"}}>Home</Link></li>
                <li><Link to ={"/user/10"}>User</Link></li>
            </ul>
        </div>
    );
}