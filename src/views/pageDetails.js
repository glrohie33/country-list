import React, {useEffect, useMemo, useState} from 'react';
import {useParams} from "react-router-dom";
import {get} from "../utils/functions";
import {COUNTRYURL} from "../utils/texthelper";
import '../assets/css/pageDetails.scss';
import {KeyboardBackspace} from "@mui/icons-material";

function PageDetails(props) {
    const [country,setCountry] = useState([]);

    const {slug} = useParams();
    const selectedCountry = useMemo(()=>{
        let returnData = false;
        if(country.length>0){
            const data = {}
           const {flags,region,name:{common,nativeName},capital,subregion,currencies,languages,population,borders,tld} = country[0];
           data.languages = Object.entries(languages).map(([key,value])=>value);
           data.nativeName = Object.keys(nativeName).map(key=>nativeName[key].common);
           data.name=common;
           data.currencies = Object.keys(currencies).map(key=>currencies[key].name);
           data.flag = flags[0];
           returnData={...data,region,capital,subregion,population,borders,tld}
        }
        return returnData;
    },[country]);

    const loadCountry = ()=>{
        console.log('there is an issue');
        get(`${COUNTRYURL}/${slug}`).then(resp=>{
            const {status,data} = resp;
            if(status){
                setCountry(data);
            }
        })
    }

    useEffect(()=>{
            loadCountry();
    },[])
    return (
        <div className={'country-details'}>
            <div className="top">
                <a href="/">
                    <button className={'btn btn-md'}>
                        <KeyboardBackspace size={'small'}/>
                        back
                    </button>
                </a>

            </div>
            <div className="country-details-container">
                <div className="row flex">
                    {
                        selectedCountry &&
                        <>
                            <div className="col_md_6 image-container ">
                                <div className="image-cover">
                                    <img src={selectedCountry?.flag} alt={selectedCountry?.name}/>
                                </div>
                            </div>
                            <div className="col_md_6 details-container">
                                <div className="row flex flex-wrap">
                                        <div className="col_md_12">
                                            <h3 className={'name'}>{selectedCountry?.name}</h3>
                                        </div>
                                        <div className="details col_md_12">
                                            <div className="row flex">
                                                <div className="col_md_6 ">
                                                    <p><span>Native Name: </span> {selectedCountry?.nativeName.join(',')}</p>
                                                    <p><span>Population: </span>{selectedCountry?.population}</p>
                                                    <p><span>Region: </span>{selectedCountry?.region}</p>
                                                    <p><span>Sub Region: </span>{selectedCountry?.subregion}</p>
                                                    <p><span>Capital: </span>{selectedCountry?.capital.join(',')}</p>
                                                </div>
                                                <div className="col_md_6">
                                                    <p><span>Top level domain: </span>{selectedCountry.tld.join(',')}</p>
                                                    <p><span>currencies: </span>{selectedCountry.currencies.join(',')}</p>
                                                    <p>
                                                        <span>languages: </span>
                                                        {
                                                            selectedCountry.languages.join(',')
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="borders col_md_12">
                                            <p>
                                                <span >Borders Countries: </span>
                                                {
                                                    selectedCountry.borders.map(border=>(<span className='border btn-sm'>{border}</span>))
                                                }
                                            </p>
                                        </div>
                                </div>
                            </div>
                        </>

                    }

                </div>

            </div>
        </div>
    );
}

export default PageDetails;