import React from 'react';
import '../assets/css/contryBox.scss'
import {withComma} from "../utils/functions";
function CountryBox({data}) {
    const {flags,name,region,population,capital,cioc} = data;
    return (
        <div className={'country-box col_md_3'}>
            <a href={`/${cioc.toLowerCase()}`}>
                <div className="content">
                    <div className={'image-cover'}>
                        <img src={flags.svg} alt={`${name.common} flag`}/>
                    </div>
                    <div className="details">
                        <h3>{name.common}</h3>
                        <p><span>Population</span>: {withComma(population)} </p>
                        <p><span>Region</span>: {region} </p>
                        <p><span>Capital</span>: {capital} </p>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default CountryBox;