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
        remVersement: (state, action) => {
            state.versements = state.versements.filter((versement) => versement.num_versements !== action.payload)
        },
        remEntite: (state, action) => {
            state.entitesVersantes = state.entitesVersantes.filter((entite) => entite.id !== action.payload)
        }
    }

}
)

export default versementsSlice.reducer
export const { setVersements, setEntites, remVersement, remEntite } = versementsSlice.actions