import axios from "axios";

let api = axios.create({
});


export const get= (url,data={},headers={})=>{
    return api.get(url,{
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
    });
}

export const withComma = ( value)=>{
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
