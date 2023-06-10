import { createSlice } from "@reduxjs/toolkit";

const dossiersSlice = createSlice({
    name: 'dossiers',
    initialState: {
        dossiers: [],
        sousDossiers: [],
        exemplaires: [],
    },

    reducers: {
        setDossiers: (state, action) => {
            state.dossiers = action.payload
        },
        setSousDossiers: (state, action) => {
            state.sousDossiers = action.payload
        },
        setExemplaires: (state, action) => {
            state.exemplaires = action.payload
        },
        remDossier: (state, action) => {
            state.dossiers = state.dossiers.filter((dossier) => dossier.id_emprunt !== action.payload)
        },
        remSousDossier: (state, action) => {
            state.sousDossiers = state.sousDossiers.filter((sousDossier) => sousDossier.id_emprunteur !== action.payload)
        },
        remExemplaire: (state, action) => {
            state.exemplaires = state.exemplaires.filter((exemplaire) => exemplaire.id_emprunteur !== action.payload)
        }
    }

}
)

export default dossiersSlice.reducer
export const { setDossiers, setSousDossiers, setExemplaires, remDossier, remSousDossier, remExemplaire } = dossiersSlice.actions