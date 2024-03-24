import { createSlice } from "@reduxjs/toolkit";
import { logout } from "./userSlice"; // assuming you have defined logout action in userSlice
import axios from "axios";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

const BASE_URL = "/role";

const initRoleAccessPages = {
  roleAccessPages: [],
};
// const navigate = useNavigate();

export const roleAccessPageSlice = createSlice({
  name: "roleAccess",
  initialState: initRoleAccessPages,
  reducers: {
    roleAccess: (state, action) => {
      state.roleAccessPages = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, (state, action) => {
      state.roleAccessPages = [];
    });
  },
});

export const { roleAccess } = roleAccessPageSlice.actions;

export default roleAccessPageSlice.reducer;
