import {configureStore} from "@reduxjs/toolkit";
import colorMode from "./reducers/colorMode";

export const Store = configureStore({
    reducer:{
        mode: colorMode
    }
})