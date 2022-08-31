import {COLORMODEKEY} from "../../utils/texthelper";
import {DarkMode, DarkModeOutlined} from "@mui/icons-material";
import {createSlice} from "@reduxjs/toolkit";

const mode = window.localStorage.getItem(COLORMODEKEY);


const colorMode = createSlice({
        name:"colorMode",
        initialState:{
            currentMode: mode??"light",
            colorSettings:{
                'light':{
                    text:"dark mode",
                    icon: <DarkModeOutlined/>
                },
                'dark':{
                    text:"light mode",
                    icon: <DarkMode fontSize={'small'}/>
                }
            }
        },
        reducers:{
            setMode(state,{payload}){
                state.currentMode = payload;
                window.localStorage.setItem(COLORMODEKEY,payload)
            }
        },
    }
    )

export const {setMode} = colorMode.actions;
export default colorMode.reducer;