export const COLORMODEKEY = 'countrySwitchColorMode';
export const COUNTRIESURL ='https://restcountries.com/v3.1/all';
export const COUNTRYURL = 'https://restcountries.com/v3/alpha';
export const MOCKDATA = [
    {
        "flags": {
            "png": "https://flagcdn.com/w320/fi.png",
            "svg": "https://flagcdn.com/fi.svg"
        },
        "name": {
            "common": "Finland",
            "official": "Republic of Finland",
            "nativeName": {
                "fin": {
                    "official": "Suomen tasavalta",
                    "common": "Suomi"
                },
                "swe": {
                    "official": "Republiken Finland",
                    "common": "Finland"
                }
            }
        },
        "cioc": "FIN",
        "capital": [
            "Helsinki"
        ],
        "region": "Europe",
        "population": 5530719
    },
    {
        "flags": {
            "png": "https://flagcdn.com/w320/gt.png",
            "svg": "https://flagcdn.com/gt.svg"
        },
        "name": {
            "common": "Guatemala",
            "official": "Republic of Guatemala",
            "nativeName": {
                "spa": {
                    "official": "República de Guatemala",
                    "common": "Guatemala"
                }
            }
        },
        "cioc": "GUA",
        "capital": [
            "Guatemala City"
        ],
        "region": "Americas",
        "population": 16858333
    },
    {
        "flags": {
            "png": "https://flagcdn.com/w320/cl.png",
            "svg": "https://flagcdn.com/cl.svg"
        },
        "name": {
            "common": "Chile",
            "official": "Republic of Chile",
            "nativeName": {
                "spa": {
                    "official": "República de Chile",
                    "common": "Chile"
                }
            }
        },
        "cioc": "CHI",
        "capital": [
            "Santiago"
        ],
        "region": "Americas",
        "population": 19116209
    },
]

export const REGIONFILTER = [
    {value: '',text: 'All'},
    {value:'africa',text:'Africa'},
    {value:'americas',text:'America'},
    {value:'asia',text: 'Asia'},
    {value:'europe',text: 'Europe'},
    {value:'oceania',text: 'Oceania'},
]