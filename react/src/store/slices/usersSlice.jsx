import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        currentUser: {},

    },

    reducers: {
        setUsers: (state, action) => {
            const users = action.payload
            state.users = users
        },
        remUser: (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload);
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
    }

}
)

export default userSlice.reducer
export const { setUsers, setCurrentUser, remUser, setRole } = userSlice.actions