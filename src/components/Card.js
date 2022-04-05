import React from 'react';
import "../styles/components/card.scss"


const Card = ({ country }) => {
    return (
    <li className="card">
     <img
      src={country.flags.svg} 
      alt={ "drapeau" + country.translations.fra } 
      />    
    <div className="infos">
        <h2>{country.translations.fra.common}</h2>
        <h4>{country.capital}</h4>
        <p>Pop. {country.population.toLocaleString()}</p>
    </div>
</li>
    );
};

export default Card;