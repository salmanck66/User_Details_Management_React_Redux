// Redux/UserReducer.js
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    data: [
        
    ]
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.data.push(action.payload)
            console.log(action.payload)
        },
        deleteUser:(state,action)=>
            {
                const index = state.data.findIndex(user => user.id === action.payload);
                if (index !== -1) {
                    state.data.splice(index, 1);
                }
            },
            updateUser: (state, action) => {
                const { id, uname, umail } = action.payload;
                const user = state.data.find(user => user.id == id);

                if (user) {
                  user.name = uname;
                  user.mail = umail;
                }
              }
        
    }
});

export const { addUser,deleteUser,updateUser } = userSlice.actions;
export default userSlice.reducer;
