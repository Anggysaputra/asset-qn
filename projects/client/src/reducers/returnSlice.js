import axios from "axios";
import { errorAlertWithMessage, successAlert } from "../helper/alerts";
import { createSlice } from "@reduxjs/toolkit";
import api from "../api/api";
import DetailReturn from "../components/formReturnAsset/DetailReturn";

const BASE_URL = "/return-asset";

const initReturnAsset = {
  totalPages: 0,
  totalItems: 0,
  returnAsset: [],
  DetailReturn: [],
  isLoading: false,
};

const returnSlice = createSlice({
  name: "return asset",
  initialState: initReturnAsset,
  reducers: {
    setReturn(state, action) {
      return { ...state, returnAsset: action.payload };
    },
    setDetailReturn(state, action) {
      return { ...state, detailReturn: action.payload };
    },
    setLoading(state, action) {
      return { ...state, isLoading: action.payload };
    },
  },
});

export const { setReturn, setDetailReturn, setLoading } = returnSlice.actions;

export function fetchReqReturnAsset(query = "") {
  // console.log("ini dta", query);

  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await api.get(`${BASE_URL}?${query}`);

      dispatch(
        setReturn({
          returnAsset: res.data.returnAsset,
          totalItem: res.data.transHCount,
          totalPages: Math.ceil(res.data.transHCount / 6),
        })
      );
      dispatch(setLoading(false));
    } catch (error) {
      console.log("error", error);
    }
  };
}

export function fetchDetailReturn(transHId) {
  // console.log("ini dta", query);
  // const BASE_URL = "http://localhost:2000/transfer-asset";

  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await api.get(`${BASE_URL}/details/${transHId}`);

      dispatch(setDetailReturn(res.data.transD));
      dispatch(setLoading(false));
    } catch (error) {
      console.log("error", error);
    }
  };
}

export function reqReturnAsset(data, id) {
  return async (dispatch) => {
    try {
      // dispatch(setLoading(true));
      const response = await api.post(`${BASE_URL}/rt`, data);

      // dispatch(setLoading(false))
      successAlert(response.data.message);
      return response;
    } catch (error) {
      console.log("error", error.response.data.message);
      errorAlertWithMessage(error.response.data.message);
    }
  };
}

export function cofirmasiReturnAsset(data, id) {
  return async (dispatch) => {
    try {
      // dispatch(setLoading(true));
      const response = await api.post(`${BASE_URL}/confirmasi`, data);

      console.log("response", response);
      successAlert(response.data.message);
      return response;
    } catch (error) {
      console.log("error", error.response.data.message);
      errorAlertWithMessage(error.response.data.message);
    }
  };
}

export default returnSlice.reducer;
