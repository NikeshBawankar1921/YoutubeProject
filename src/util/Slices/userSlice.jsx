import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice(
    {
        name: 'User',
        initialState: {
            userLogedIn:false,
            userEmail: String,
            userPassword: "123",
            userToken:""

        },
        reducers: {
            addlogin:(state,action)  => {state.userLogedIn = action.payload },
            addemail:(state,action)  => {state.userEmail = action.payload },
            addpass:(state,action)  => {state.userPassword = action.payload },
            addtoken:(state,action)  => {state.userToken = action.payload }
        },
    }
)

export const { addlogin ,addemail,addpass, addtoken } = userSlice.actions;

export default userSlice.reducer;