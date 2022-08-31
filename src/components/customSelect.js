import React, {useEffect, useState} from 'react';
import {ExpandMore} from "@mui/icons-material";

function CustomSelect({options, onChange,value}) {
   const [displayOptions,setDisplayOptions] = useState(false);
   const [selected,setValue] = useState("");
   useEffect(()=>{
       onChange({target:{value:selected}})
   },[selected,onChange])

    const blur = ()=>{
       setTimeout(()=>{
           setDisplayOptions(false);
       },200)
    }
    return (
        <>
            <input type={'type'} readOnly={true} onClick={()=>{setDisplayOptions(true)}} onBlur={blur} value={value} className={'search'} placeholder={'filter by region'} />
            <div className={'more-icon'}>
                <ExpandMore/>
            </div>
            <div className={`options`}>
                {
                    displayOptions&&
                    <ul>
                        {
                            options?.map(option=>(
                                (
                                    <>
                                        <li onClick={()=>{setValue(option.value)}}>{option.text}</li>
                                    </>
                                )
                            ))
                        }

                    </ul>
                }

            </div>
        </>
    );
}

export default CustomSelect;