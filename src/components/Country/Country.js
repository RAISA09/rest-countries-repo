import React from 'react';
import './Country.css'
const Country = (props) => {
    const{name,flag,capital,population,region} = props.country
    const countryStyle ={
        border:"2px solid red",
        margin:"10px",
        padding:"15px"
    }
    return (
        <div className="country" style={countryStyle}>
            <h1>Name:{name}</h1>
            <img style={{width:"200px"}} src={flag} alt="" />
            <p>Region:{region}</p>
            <h2>Capital:{capital}</h2>
            <h2>Population:{population}</h2>
        </div>
    );
};

export default Country;