import { createSlice } from "@reduxjs/toolkit";

const empruntsSlice = createSlice({
    name: 'emprunts',
    initialState: {
        emprunts: [],
        emprunteurs: [],

    },

    reducers: {
        setEmprunts: (state, action) => {
            state.emprunts = action.payload
        },
        setEmprunteurs: (state, action) => {
            state.emprunteurs = action.payload
        },
        remEmprunt: (state, action) => {
            state.emprunts = state.emprunts.filter((emprunt) => emprunt.id_emprunt !== action.payload)
        },
        remEmprunteur: (state, action) => {
            state.emprunteurs = state.emprunteurs.filter((emprunteur) => emprunteur.id_emprunteur !== action.payload)
        }
    }

}
)

export default empruntsSlice.reducer
export const { setEmprunts, setEmprunteurs, remEmprunt, remEmprunteur } = empruntsSlice.actions