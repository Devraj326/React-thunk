import { configureStore } from "@reduxjs/toolkit";
import { listReducer } from "./reducer";

export const myStore = configureStore(
    {
        reducer:{
            listReducer
        }
    }
)