import React from 'react';

const styles ={
    default:{
        backgroundColor:'pink',
        color:'red',
        padding:'10px'
    },
    disable:{
        backgroundColor:'#9c9c9c',
        color:'#c7c6c6',
    }
}
const ButtonOne =()=>{
    return(
        <button style={styles.default}>I am ButtonOne</button>
    )
}
export default ButtonOne;
