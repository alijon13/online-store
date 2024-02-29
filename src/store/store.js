import { configureStore } from "@reduxjs/toolkit";
import api from "../reducers/api";

export const store = configureStore({
    reducer: {
        api,
    }
}) 