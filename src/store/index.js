import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices.js/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
