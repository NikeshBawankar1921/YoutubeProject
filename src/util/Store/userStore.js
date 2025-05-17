import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from '../Slices/userSlice.jsx'

export const userStore=  configureStore({

reducer:{

User: userSliceReducer

}

 });

