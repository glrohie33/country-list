import React, {useEffect, useState} from 'react';
import './assets/css/home.scss';
import {get} from "./utils/functions";
import {COUNTRIESURL, MOCKDATA} from "./utils/texthelper";
import CountryBox from "./components/countryBox";
function Home(props) {
    const [countries,setCountries] = useState(MOCKDATA);

    // const loadCountries = ()=>{
    //     get(`${COUNTRIESURL}?fields=name,region,capital,population`);
    // }
    // useEffect(()=>{
    //
    // },[])

    return (
        <div className={'home'}>
            <div className="top">
                <input type={'type'} className={'search'} placeholder={'search for a country'} />
            </div>

            <div className="countries flex ">
                {
                    countries.map(data=><CountryBox data={data} />)
                }
            </div>
        </div>
    );
}

export default Home;