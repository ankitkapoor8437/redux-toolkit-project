import { configureStore } from "@reduxjs/toolkit";
import gitUser  from "../feature/gitUserSlice";

export const store = configureStore(
    {
        reducer: {
            app: gitUser,
        },
    }
) 