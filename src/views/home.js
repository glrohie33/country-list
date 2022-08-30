import React, {useEffect, useMemo, useState} from 'react';
import '../assets/css/home.scss';
import {get} from "../utils/functions";
import {COUNTRIESURL, MOCKDATA, REGIONFILTER} from "../utils/texthelper";
import CountryBox from "../components/countryBox";
import {Search} from "@mui/icons-material";
import CustomSelect from "../components/customSelect";
function Home(props) {
    const [countries,setCountries] = useState([]);
    const [region,setRegion] = useState("");
    const [search,setSearch] = useState('');
    const loadCountries = ()=>{
        get(`${COUNTRIESURL}?fields=name,region,capital,population,cioc,flags`)
            .then(resp=>{
                if(resp.status){
                    setCountries(resp.data);
                }
            });
    }
    const countryList = useMemo(()=>{
        return countries.filter(country=>{
            let regionValid = true;
            if(Boolean(region)){
                regionValid = (country.region.toLowerCase() === region.toLowerCase());
            }

            let searchValid =  country.name.common.toLowerCase().includes(search);

            return (regionValid && searchValid);
        });

    },[countries,search,region]);

    useEffect(()=>{
        loadCountries();
    },[])

   let timeOut = null;
    const changeSearch = (e)=>{
        if(timeOut){
            clearTimeout(timeOut);
        }

        timeOut = setTimeout(()=>{
            setSearch(e.target.value);
            }
        ,1000)

    }
    return (
        <div className={'home'}>
            <div className="top">
                <div className="search">
                    <input type={'type'} className={'search'} placeholder={'search for a country'} onChange={changeSearch} />
                    <div className={'search-icon'}>
                        <Search/>
                    </div>
                </div>
                <div className="region-filter">
<CustomSelect value={region} onChange={(e)=>setRegion(e.target.value)} options={REGIONFILTER}/>
                </div>
            </div>

            <div className="countries flex ">
                {
                    countryList.map(data=><CountryBox data={data} />)
                }
            </div>
        </div>
    );
}

export default Home;