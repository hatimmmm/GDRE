import { configureStore } from "@reduxjs/toolkit";
import empruntsSlice from "./slices/empruntsSlice";
import usersSlice from "./slices/usersSlice";
import versementsSlice from "./slices/versementsSlice";
import dossiersSlice from "./slices/dossiersSlice";

export default configureStore({
    reducer: { users: usersSlice, versements: versementsSlice, emprunts: empruntsSlice, dossiers: dossiersSlice }
});
