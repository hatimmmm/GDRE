import { createSlice } from "@reduxjs/toolkit";

const versementsSlice = createSlice({
    name: 'versements',
    initialState: {
        versements: [],
        entitesVersantes: [],

    },

    reducers: {
        setVersements: (state, action) => {
            state.versements = action.payload
        },
        setEntites: (state, action) => {
            state.entitesVersantes = action.payload
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
    }

}
)

export default versementsSlice.reducer
export const { setVersements, setEntites, } = versementsSlice.actions